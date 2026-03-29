/**
 * Appends ad click IDs to partner CTA URLs (gclid, fclid, wbraid, fbclid).
 */
export function processCtaUrl(baseUrl: string): string {
  if (!baseUrl || baseUrl === '#') return baseUrl;

  try {
    const urlParams = new URLSearchParams(
      typeof window !== 'undefined' ? window.location.search : ''
    );
    const gclid = urlParams.get('gclid');
    const fclid = urlParams.get('fclid');
    const wbraid = urlParams.get('wbraid');
    const fbclid = urlParams.get('fbclid');
    const trackingId = gclid || fclid || wbraid || fbclid;

    const url = new URL(baseUrl);

    if (url.hostname.includes('lendzi.com') && url.searchParams.has('click_id')) {
      const clickIdValue = url.searchParams.get('click_id');
      if (trackingId && (clickIdValue === '' || clickIdValue === null)) {
        url.searchParams.set('click_id', trackingId);
      }
    }

    if (trackingId) {
      url.searchParams.set('sub_id_1', trackingId);
      url.searchParams.set('sub1', trackingId);
    }

    return url.toString();
  } catch (error) {
    console.error('Error processing CTA URL:', error);

    return baseUrl;
  }
}
