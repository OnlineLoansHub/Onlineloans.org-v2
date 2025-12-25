const IMPRESSION_STORAGE_KEY = 'impression_id';
const API_URL = 'https://server-ol-v2-fcaa9dab215e.herokuapp.com/api/impression';

/**
 * Get page name from route pathname
 */
export const getPageNameFromRoute = (pathname: string): string => {
  if (!pathname) return 'unknown';

  const path = pathname.toLowerCase();

  if (path.includes('/business-loan')) return 'businessLoans';
  if (path.includes('/personal-loan')) return 'personalLoans';
  if (path.includes('/auto-loan')) return 'autoLoans';
  if (path.includes('/student-loan')) return 'studentLoans';
  if (path.includes('/mortgage-loan')) return 'mortgageLoans';
  if (path.includes('/crypto-loans')) return 'cryptoLoans';
  if (path.includes('/gold-and-silver')) return 'goldAndSilver';
  if (path.includes('/pet-insurance')) return 'petInsurance';
  if (path.includes('/credit-score')) return 'creditScore';

  return 'unknown';
};

// Event queue for tracking events that occur before impression ID is ready
interface QueuedEvent {
  type: 'lp-click' | 'brand-click';
  data: { cardName?: string; brandName?: string; pageName?: string };
  timestamp: number;
}

const eventQueue: QueuedEvent[] = [];

/**
 * Queue a tracking event to be sent when impression ID becomes available
 */
export const queueEvent = (event: QueuedEvent): void => {
  eventQueue.push(event);
};

/**
 * Flush queued events using sendBeacon when impression ID becomes available
 */
export const flushEventQueue = (impressionId: string): void => {
  eventQueue.forEach((event) => {
    if (event.type === 'lp-click' && event.data.cardName) {
      sendTrackingData('homepage-clicks', {
        impressionId,
        [event.data.cardName]: true,
        timestamp: new Date(event.timestamp).toISOString(),
      });
    } else if (event.type === 'brand-click' && event.data.brandName && event.data.pageName) {
      sendTrackingData('brand-clicks', {
        impressionId,
        pageName: event.data.pageName,
        brandName: event.data.brandName,
        timestamp: new Date(event.timestamp).toISOString(),
      });
    }
  });
  eventQueue.length = 0; // Clear queue
};

/**
 * Send tracking data using sendBeacon (best for navigation) with fallback
 */
const sendTrackingData = (endpoint: string, data: Record<string, any>): boolean => {
  const url = `${API_URL}/${endpoint}`;
  const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });

  // Use sendBeacon if available (best for navigation scenarios)
  if (navigator.sendBeacon) {
    return navigator.sendBeacon(url, blob);
  }

  // Fallback: Use fetch with keepalive (works but less reliable during navigation)
  if ('fetch' in window) {
    fetch(url, {
      method: 'POST',
      body: blob,
      headers: { 'Content-Type': 'application/json' },
      keepalive: true, // Important: keeps request alive during navigation
    }).catch(() => {
      // Silently fail
    });

    return true;
  }

  // Last resort: XMLHttpRequest (synchronous, but works)
  try {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, false); // Synchronous for reliability
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));

    return true;
  } catch {
    return false;
  }
};

export const patchImpressionForm = async ({
  stepNumber,
  question,
  answer,
  formName,
}: {
  stepNumber: number;
  question: string;
  answer: string;
  formName?: string;
}): Promise<void> => {
  try {
    const impressionId = localStorage.getItem(IMPRESSION_STORAGE_KEY);

    if (!impressionId) {
      console.warn('No impression ID found in localStorage');

      return;
    }

    // Get current date in YYYY-MM-DD format
    const date = new Date().toISOString().split('T')[0];

    // Build the form data object
    const formData: Record<string, unknown> = {
      impressionId,
      date,
      ...(formName && { formName }),
      [`step${stepNumber}Question`]: question,
      [`step${stepNumber}Answer`]: answer,
    };

    // Note: This endpoint doesn't exist yet in backend, but keeping function for future use
    await fetch(`${API_URL}/form`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
      keepalive: true,
    });
  } catch (error) {
    console.error('Failed to patch impression form:', error);
    // Don't throw - we don't want to break the form flow if impression tracking fails
  }
};

/**
 * Track hero card click with memory-first approach
 * Checks context impressionId first, then localStorage, then queues if neither exists
 */
export const trackHeroCardClick = (
  cardName: string,
  contextImpressionId: string | null = null
): void => {
  // Memory-first: Check context impressionId, then localStorage fallback
  const impressionId =
    contextImpressionId ||
    (typeof window !== 'undefined' ? localStorage.getItem(IMPRESSION_STORAGE_KEY) : null);

  if (!impressionId) {
    // Queue event to be sent when impression ID becomes available
    queueEvent({
      type: 'lp-click',
      data: { cardName },
      timestamp: Date.now(),
    });

    return;
  }

  // Send immediately using sendBeacon (non-blocking)
  sendTrackingData('homepage-clicks', {
    impressionId,
    [cardName]: true,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track brand click with memory-first approach
 * Checks context impressionId first, then localStorage, then queues if neither exists
 */
export const trackBrandClick = (
  brandName: string,
  pageName: string,
  contextImpressionId: string | null = null
): void => {
  // Memory-first: Check context impressionId, then localStorage fallback
  const impressionId =
    contextImpressionId ||
    (typeof window !== 'undefined' ? localStorage.getItem(IMPRESSION_STORAGE_KEY) : null);

  if (!impressionId) {
    // Queue event to be sent when impression ID becomes available
    queueEvent({
      type: 'brand-click',
      data: { brandName, pageName },
      timestamp: Date.now(),
    });

    return;
  }

  // Send immediately using sendBeacon (non-blocking)
  sendTrackingData('brand-clicks', {
    impressionId,
    pageName,
    brandName,
    timestamp: new Date().toISOString(),
  });
};
