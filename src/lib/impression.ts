import axios from 'axios';

const IMPRESSION_STORAGE_KEY = 'impression_id';
const API_URL = 'https://server-ol-v2-fcaa9dab215e.herokuapp.com/api/impression';

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
    const patchData: Record<string, unknown> = {
      date,
      ...(formName && { formName }),
      [`step${stepNumber}Question`]: question,
      [`step${stepNumber}Answer`]: answer,
    };

    await axios.patch(`${API_URL}/${impressionId}/form`, patchData, {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Failed to patch impression form:', error);
    // Don't throw - we don't want to break the form flow if impression tracking fails
  }
};

export const trackHeroCardClick = (cardName: string): void => {
  // Fire and forget - don't wait for response
  const impressionId = localStorage.getItem(IMPRESSION_STORAGE_KEY);

  if (!impressionId) {
    return;
  }

  // Build the patch data with card name as key and true as value
  const patchData: Record<string, boolean> = {
    [cardName]: true,
  };

  // Send request without awaiting - navigation happens immediately
  axios
    .patch(`${API_URL}/${impressionId}/lp-clicks`, patchData, {
      headers: { 'Content-Type': 'application/json' },
    })
    .catch(() => {
      // Silently fail - don't block navigation
    });
};
