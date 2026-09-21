/**
 * Sends lead forms to your inbox without a backend.
 * Uses FormSubmit (https://formsubmit.co) — confirm the inbox email once
 * when the first submission arrives.
 *
 * Override with .env:
 *   VITE_LEAD_INBOX=you@company.com
 */

const DEFAULT_INBOX = 'melikamirzaseyedi@gmail.com';

export function getLeadInbox(): string {
  return (
    (import.meta.env.VITE_LEAD_INBOX as string | undefined)?.trim() || DEFAULT_INBOX
  );
}

export type LeadPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  /** Extra fields shown in the email table */
  meta?: Record<string, string>;
};

export async function submitLead(payload: LeadPayload): Promise<void> {
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

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || `Lead submit failed (${res.status})`);
  }

  // FormSubmit returns JSON on success; ignore body
  await res.json().catch(() => undefined);
}
