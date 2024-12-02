export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

export function validateRequiredFields(data: Record<string, any>, fields: string[]): string | null {
  for (const field of fields) {
    if (!data[field] || data[field] === '') {
      return `Please fill in all required fields`;
    }
  }
  return null;
}