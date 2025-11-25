import { z } from 'zod';
import { validateUSPhone } from './validateUSPhone';

export const phoneSchema = z
  .string()
  .min(1, 'Phone number is required.')
  .refine(
    (val) => {
      const result = validateUSPhone(val);

      return result.valid;
    },
    {
      message: 'Invalid phone number format.',
    }
  );
