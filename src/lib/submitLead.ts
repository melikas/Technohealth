/**
 * Sends lead forms to your inbox (no backend).
 *
 * Primary: Web3Forms (set VITE_WEB3FORMS_KEY in .env / Vercel)
 * Fallback: FormSubmit → melikamirzaseyedi@gmail.com
 *
 * FormSubmit requires a one-time "Activate Form" click in Gmail
 * (check Spam). Until then submissions look OK in the browser but
 * no email is delivered — we now surface that error clearly.
 */

const DEFAULT_INBOX = 'melikamirzaseyedi@gmail.com';

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

export class LeadSubmitError extends Error {
  constructor(
    message: string,
    public readonly code: 'activation' | 'config' | 'network' | 'unknown' = 'unknown'
  ) {
    super(message);
    this.name = 'LeadSubmitError';
  }
}

export async function submitLead(payload: LeadPayload): Promise<void> {
  const web3Key = getWeb3FormsKey();
  if (web3Key) {
    await submitViaWeb3Forms(web3Key, payload);
    return;
  }
  await submitViaFormSubmit(payload);
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
    throw new LeadSubmitError(
      data?.message || `Web3Forms failed (${res.status})`,
      'network'
    );
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
    throw new LeadSubmitError('Network error while sending your request.', 'network');
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
    const msg = data?.message || `Lead submit failed (${res.status})`;
    const needsActivation = /activat/i.test(msg);
    throw new LeadSubmitError(
      needsActivation
        ? 'Form delivery is not activated yet. Open Gmail for melikamirzaseyedi@gmail.com, find the FormSubmit “Activate Form” email (check Spam), click Activate, then try again.'
        : msg,
      needsActivation ? 'activation' : 'unknown'
    );
  }
}
