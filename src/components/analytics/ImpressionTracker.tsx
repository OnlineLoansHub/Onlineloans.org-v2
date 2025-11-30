'use client';

import { useEffect } from 'react';
import axios from 'axios';

const IMPRESSION_STORAGE_KEY = 'impression_id';
const IMPRESSION_TIMESTAMP_KEY = 'impression_timestamp';
const IMPRESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
const API_URL = 'https://server-ol-v2-fcaa9dab215e.herokuapp.com/api/impression';

export const ImpressionTracker = () => {
  useEffect(() => {
    const trackImpression = async () => {
      try {
        // Check if we have a valid impression ID in localStorage
        const storedId = localStorage.getItem(IMPRESSION_STORAGE_KEY);
        const storedTimestamp = localStorage.getItem(IMPRESSION_TIMESTAMP_KEY);

        if (storedId && storedTimestamp) {
          const timestamp = parseInt(storedTimestamp, 10);
          const now = Date.now();
          const timeElapsed = now - timestamp;

          // If less than 24 hours have passed, use existing ID
          if (timeElapsed < IMPRESSION_DURATION) {
            return;
          }
        }

        // Create new impression
        const response = await axios.post(
          API_URL,
          {},
          {
            headers: { 'Content-Type': 'application/json' },
          }
        );

        if (response.data?.id) {
          // Save ID and timestamp to localStorage
          localStorage.setItem(IMPRESSION_STORAGE_KEY, response.data.id);
          localStorage.setItem(IMPRESSION_TIMESTAMP_KEY, Date.now().toString());
        }
      } catch (error) {
        console.error('Failed to track impression:', error);
      }
    };

    trackImpression();
  }, []);

  return null;
};
