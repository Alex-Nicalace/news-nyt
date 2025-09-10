export function formatToShortDateTime(isoString: string) {
  const date = new Date(isoString);
  const formatted = date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return formatted.replace(':', '.');
}
