'use client';

import { useEffect } from 'react';
import axios from 'axios';

const IMPRESSION_STORAGE_KEY = 'impression_id';
const IMPRESSION_TIMESTAMP_KEY = 'impression_timestamp';
const IMPRESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
const API_URL = 'https://server-ol-v2-fcaa9dab215e.herokuapp.com/api/impression';

// Performance: Safe localStorage access wrapper to prevent blocking
const safeLocalStorageGet = (key: string): string | null => {
  try {
    return typeof window !== 'undefined' ? localStorage.getItem(key) : null;
  } catch {
    return null;
  }
};

const safeLocalStorageSet = (key: string, value: string): void => {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
    }
  } catch {
    // Silently fail if localStorage is unavailable
  }
};

export const ImpressionTracker = () => {
  useEffect(() => {
    // Performance: Defer execution until after first paint to prevent layout blocking
    const trackImpression = async () => {
      try {
        // Performance: Use safe localStorage access to prevent blocking
        const storedId = safeLocalStorageGet(IMPRESSION_STORAGE_KEY);
        const storedTimestamp = safeLocalStorageGet(IMPRESSION_TIMESTAMP_KEY);

        if (storedId && storedTimestamp) {
          const timestamp = parseInt(storedTimestamp, 10);
          const now = Date.now();
          const timeElapsed = now - timestamp;

          // If less than 24 hours have passed, use existing ID
          if (timeElapsed < IMPRESSION_DURATION) {
            return;
          }
        }
        
        // Get current URL with all query parameters as referrer
        const currentUrl =
          typeof window !== 'undefined'
            ? `${document.referrer || window.location.origin}${window.location.pathname}${window.location.search}`
            : '';
        
        // Create new impression
        const response = await axios.post(
          API_URL,
          {},
          {
            headers: {
              'Content-Type': 'application/json',
              'X-Referrer': currentUrl,
            },
          }
        );

        if (response.data?.id) {
          // Save ID and timestamp to localStorage using safe wrapper
          safeLocalStorageSet(IMPRESSION_STORAGE_KEY, response.data.id);
          safeLocalStorageSet(IMPRESSION_TIMESTAMP_KEY, Date.now().toString());
        }
      } catch (error) {
        console.error('Failed to track impression:', error);
      }
    };

    // Performance: Use requestIdleCallback to defer execution until browser is idle
    // Falls back to setTimeout if requestIdleCallback is not available
    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(trackImpression, { timeout: 2000 });
      } else {
        // Fallback: defer by one frame using requestAnimationFrame
        requestAnimationFrame(() => {
          setTimeout(trackImpression, 0);
        });
      }
    }
  }, []);

  return null;
};
