import { useState, useEffect } from 'react';

interface LocationData {
  state: string | null;
  loading: boolean;
}

const LOCATION_STORAGE_KEY = 'user_location_state';
const LOCATION_CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export const useUserLocation = (): LocationData => {
  const [state, setState] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        // Check cache first
        const cached = localStorage.getItem(LOCATION_STORAGE_KEY);
        const cachedTimestamp = localStorage.getItem(`${LOCATION_STORAGE_KEY}_timestamp`);
        
        if (cached && cachedTimestamp) {
          const timestamp = parseInt(cachedTimestamp, 10);
          const now = Date.now();
          
          // Use cached location if less than 24 hours old
          if (now - timestamp < LOCATION_CACHE_DURATION) {
            setState(cached);
            setLoading(false);
            
            return;
          }
        }

        // Fetch location from IP
        const response = await fetch('https://ipapi.co/json/');
        
        if (!response.ok) {
          throw new Error('Failed to fetch location');
        }

        const data = await response.json();
        
        if (data.region_code) {
          // Store in cache
          localStorage.setItem(LOCATION_STORAGE_KEY, data.region_code);
          localStorage.setItem(`${LOCATION_STORAGE_KEY}_timestamp`, Date.now().toString());
          setState(data.region_code);
        } else {
          setState(null);
        }
      } catch (error) {
        console.error('Failed to fetch user location:', error);
        setState(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUserLocation();
  }, []);

  return { state, loading };
};

