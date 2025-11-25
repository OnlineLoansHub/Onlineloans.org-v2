export interface ValidateUSPhoneResult {
  valid: boolean;
  error?: string;
  clean?: string;
  e164?: string;
}

export function validateUSPhone(phone: string): ValidateUSPhoneResult {
  if (!phone || typeof phone !== 'string') {
    return { valid: false, error: 'Phone number is required.' };
  }

  const digits = phone.replace(/\D/g, '');

  if (digits.length < 10) {
    return { valid: false, error: 'Phone number is too short (must be 10 digits).' };
  }

  if (digits.length > 11) {
    return { valid: false, error: 'Phone number is too long (max 11 digits with country code).' };
  }

  let clean = digits;

  // Country code validation
  if (digits.length === 11) {
    if (!digits.startsWith('1')) {
      return { valid: false, error: 'Invalid country code. Only +1 is allowed for U.S. numbers.' };
    }

    clean = digits.slice(1);
  }

  // Must now be 10 digits
  if (clean.length !== 10) {
    return { valid: false, error: 'Invalid phone number format.' };
  }

  const area = clean.slice(0, 3);
  const prefix = clean.slice(3, 6);

  if (!/^[2-9]/.test(area)) {
    return { valid: false, error: 'Area code must start with digits 2–9.' };
  }

  if (!/^[2-9]/.test(prefix)) {
    return { valid: false, error: 'Prefix must start with digits 2–9.' };
  }

  if (/^(\d)\1+$/.test(clean)) {
    return { valid: false, error: 'Phone number appears invalid or fake.' };
  }

  return {
    valid: true,
    clean,
    e164: `+1${clean}`,
  };
}
