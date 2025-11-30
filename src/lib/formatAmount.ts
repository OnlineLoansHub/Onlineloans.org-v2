export const formatAmount = (amount: number | string): string => {
  if (typeof amount === 'string') {
    // Remove any existing formatting and parse as number
    const numericValue = parseFloat(amount.replace(/[^\d.]/g, ''));

    if (isNaN(numericValue)) return amount;

    return numericValue.toLocaleString('en-US');
  }

  return amount.toLocaleString('en-US');
};

