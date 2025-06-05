
/**
 * Sanitizes user input to prevent potential security issues
 */
export function sanitizeInput(input: string): string {
  if (!input || typeof input !== 'string') {
    return '';
  }

  // Remove potentially dangerous HTML tags and scripts
  const sanitized = input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '')
    .replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/vbscript:/gi, '')
    .replace(/on\w+\s*=/gi, '');

  // Trim and limit length
  return sanitized.trim().substring(0, 1000);
}

/**
 * Validates input length and content
 */
export function validateInput(input: string): { isValid: boolean; error?: string } {
  if (!input || typeof input !== 'string') {
    return { isValid: false, error: 'קלט לא תקין' };
  }

  if (input.length > 1000) {
    return { isValid: false, error: 'הודעה ארוכה מדי (מקסימום 1000 תווים)' };
  }

  if (input.trim().length === 0) {
    return { isValid: false, error: 'אנא הזן הודעה' };
  }

  return { isValid: true };
}
