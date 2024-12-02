interface FormData {
  [key: string]: string | boolean | number;
}

export async function submitFormToGoogleSheets(data: FormData): Promise<boolean> {
  try {
    // Add timestamp to the data
    const formBody = new URLSearchParams();
    
    // Sanitize and format data before submission
    Object.entries(data).forEach(([key, value]) => {
      // Convert boolean values to 'Yes'/'No' for better spreadsheet readability
      if (typeof value === 'boolean') {
        formBody.append(key, value ? 'Yes' : 'No');
      } 
      // Format numbers as strings
      else if (typeof value === 'number') {
        formBody.append(key, value.toString());
      }
      // Handle empty strings
      else {
        formBody.append(key, value?.toString().trim() || '');
      }
    });

    // Add submission timestamp
    formBody.append('timestamp', new Date().toISOString());

    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbw0N8LUbJPMQKTFbgqWs8QgTi29t-cFpOaudVjstcz3B6bsjz1-UhJvWMq9gwpwCrx7/exec',
      {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      }
    );

    // Since we're using no-cors, we need to handle the response differently
    if (response.type === 'opaque') {
      // Google Apps Script received the request
      return true;
    }

    return false;
  } catch (error) {
    console.error('Form submission error:', error);
    throw new Error(
      error instanceof Error 
        ? error.message 
        : 'Failed to submit form. Please try again later.'
    );
  }
}