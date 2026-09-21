/**
 * Lead form delivery.
 *
 * 1) Web3Forms if VITE_WEB3FORMS_KEY is set (recommended — automatic email)
 * 2) FormSubmit to VITE_LEAD_INBOX / melikamirzaseyedi@gmail.com
 * 3) mailto fallback to the same inbox (never show setup errors to visitors)
 */

const DEFAULT_INBOX = 'melikamirzaseyedi@gmail.com';

const CUSTOMER_ERROR =
  'We could not send your request automatically. Please try again, or email us and we will follow up.';

export function getLeadInbox(): string {
  return (
    (import.meta.env.VITE_LEAD_INBOX as string | undefined)?.trim() || DEFAULT_INBOX
  );
}

export function getWeb3FormsKey(): string {
  return (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined)?.trim() || '';
}

export type LeadPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  meta?: Record<string, string>;
};

export type LeadSubmitResult = {
  /** api = emailed automatically; mailto = visitor must hit Send in their mail app */
  via: 'api' | 'mailto';
};

export class LeadSubmitError extends Error {
  constructor(
    message: string,
    public readonly code: 'activation' | 'config' | 'network' | 'unknown' = 'unknown'
  ) {
    super(message);
    this.name = 'LeadSubmitError';
  }
}

export function buildMailtoUrl(payload: LeadPayload): string {
  const metaLines = payload.meta
    ? Object.entries(payload.meta)
        .filter(([, v]) => v)
        .map(([k, v]) => `${k}: ${v}`)
        .join('\n')
    : '';

  const body = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    '',
    payload.message,
    metaLines ? `\n${metaLines}` : '',
  ]
    .filter((line) => line !== undefined)
    .join('\n');

  const params = new URLSearchParams({
    subject: payload.subject,
    body,
  });

  return `mailto:${getLeadInbox()}?${params.toString()}`;
}

export async function submitLead(payload: LeadPayload): Promise<LeadSubmitResult> {
  const web3Key = getWeb3FormsKey();

  if (web3Key) {
    try {
      await submitViaWeb3Forms(web3Key, payload);
      return { via: 'api' };
    } catch {
      // fall through to FormSubmit / mailto
    }
  }

  try {
    await submitViaFormSubmit(payload);
    return { via: 'api' };
  } catch (err) {
    // FormSubmit often needs a one-time Activate click by the inbox owner.
    // Never surface that to customers — fall back to mailto → real Gmail inbox.
    if (typeof window !== 'undefined') {
      window.location.href = buildMailtoUrl(payload);
      return { via: 'mailto' };
    }
    throw new LeadSubmitError(CUSTOMER_ERROR, 'unknown');
  }
}

async function submitViaWeb3Forms(accessKey: string, payload: LeadPayload): Promise<void> {
  const body: Record<string, string> = {
    access_key: accessKey,
    name: payload.name,
    email: payload.email,
    subject: payload.subject,
    message: payload.message,
    from_name: 'TechnoHealth',
    replyto: payload.email,
  };

  if (payload.meta) {
    for (const [key, value] of Object.entries(payload.meta)) {
      if (value) body[key] = value;
    }
  }

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = (await res.json().catch(() => null)) as {
    success?: boolean;
    message?: string;
  } | null;

  if (!res.ok || !data?.success) {
    throw new LeadSubmitError(data?.message || `Web3Forms failed (${res.status})`, 'network');
  }
}

async function submitViaFormSubmit(payload: LeadPayload): Promise<void> {
  const inbox = getLeadInbox();
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(inbox)}`;

  const body: Record<string, string> = {
    name: payload.name,
    email: payload.email,
    message: payload.message,
    _subject: payload.subject,
    _template: 'table',
    _captcha: 'false',
    _replyto: payload.email,
  };

  if (payload.meta) {
    for (const [key, value] of Object.entries(payload.meta)) {
      if (value) body[key] = value;
    }
  }

  let res: Response;
  try {
    res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    });
  } catch {
    throw new LeadSubmitError(CUSTOMER_ERROR, 'network');
  }

  const data = (await res.json().catch(() => null)) as {
    success?: string | boolean;
    message?: string;
  } | null;

  const ok =
    data?.success === true ||
    data?.success === 'true' ||
    String(data?.success).toLowerCase() === 'true';

  if (!res.ok || !ok) {
    const msg = data?.message || '';
    const needsActivation = /activat/i.test(msg);
    throw new LeadSubmitError(
      CUSTOMER_ERROR,
      needsActivation ? 'activation' : 'unknown'
    );
  }
}
