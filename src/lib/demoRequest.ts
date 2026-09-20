/** Open the shared Request Demo modal from anywhere */
export const DEMO_REQUEST_EVENT = 'technohealth:open-request-demo';

export function openRequestDemo() {
  window.dispatchEvent(new CustomEvent(DEMO_REQUEST_EVENT));
}

/**
 * Cal.com booking path, e.g. "username" or "username/30min"
 * Override with .env: VITE_CAL_LINK=username/30min
 */
export function getCalLink(): string {
  return (
    (import.meta.env.VITE_CAL_LINK as string | undefined)?.trim() ||
    'melika-mirzaseyedi-k4glhg'
  );
}

export function buildCalEmbedUrl(prefill?: {
  name?: string;
  email?: string;
  notes?: string;
}): string {
  const link = getCalLink();
  if (!link) return '';

  const params = new URLSearchParams({ embed: 'true' });
  if (prefill?.name) params.set('name', prefill.name);
  if (prefill?.email) params.set('email', prefill.email);
  if (prefill?.notes) params.set('notes', prefill.notes);

  return `https://cal.com/${link}?${params.toString()}`;
}
