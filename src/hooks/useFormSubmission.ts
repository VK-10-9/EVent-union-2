import { useState } from 'react';
import { submitFormToGoogleSheets } from '../services/api/formSubmission';
import type { FormData } from '../services/api/types';

interface UseFormSubmission {
  isSubmitting: boolean;
  error: string | null;
  submitForm: (data: FormData) => Promise<boolean>;
}

export function useFormSubmission(): UseFormSubmission {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (data: FormData): Promise<boolean> => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await submitFormToGoogleSheets(data);
      
      if (!response.success) {
        setError(response.error || 'Failed to submit form');
        return false;
      }

      return true;
    } catch (err) {
      setError('An unexpected error occurred');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    error,
    submitForm
  };
}