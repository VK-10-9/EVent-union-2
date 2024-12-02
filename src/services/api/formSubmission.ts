import { API_CONFIG } from './config';
import type { FormData, ApiResponse } from './types';

export async function submitFormToGoogleSheets(data: FormData): Promise<ApiResponse> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);

  try {
    const formBody = new URLSearchParams();
    
    // Add timestamp to the data
    formBody.append('timestamp', new Date().toISOString());
    
    // Process form data
    Object.entries(data).forEach(([key, value]) => {
      if (typeof value === 'boolean') {
        formBody.append(key, value ? 'Yes' : 'No');
      } else if (value != null) {
        formBody.append(key, value.toString().trim());
      }
    });

    const response = await fetch(API_CONFIG.FORM_SUBMISSION_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody.toString(),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    // Since we're using no-cors, we need to handle the response differently
    if (response.type === 'opaque') {
      return { success: true };
    }

    return { 
      success: false, 
      error: 'Failed to submit form. Please try again.' 
    };
  } catch (error) {
    clearTimeout(timeoutId);
    
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        return {
          success: false,
          error: 'Request timed out. Please try again.'
        };
      }
      return {
        success: false,
        error: error.message
      };
    }
    
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.'
    };
  }
}