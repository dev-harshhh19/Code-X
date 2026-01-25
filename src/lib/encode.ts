import { ALL_LETTERS, NUMBER_MAP, ALLOWED_SYMBOLS } from './maps';

export interface EncodingResult {
  success: boolean;
  output: string;
  errors: string[];
}

export function validateForEncoding(input: string): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  const invalidChars: string[] = [];

  for (const char of input) {
    // Allow: space, A-Z, 0-9, and allowed symbols
    if (char === ' ' || /[A-Z]/.test(char) || /[0-9]/.test(char) || ALLOWED_SYMBOLS.has(char)) continue;
    if (!invalidChars.includes(char)) invalidChars.push(char);
  }

  if (invalidChars.length > 0) {
    const lowercase = invalidChars.filter(c => /[a-z]/.test(c));
    if (lowercase.length > 0) {
      errors.push(`Lowercase not allowed: ${lowercase.join(', ')}. Use UPPERCASE.`);
    }
    const reserved = invalidChars.filter(c => c === ':' || c === '.');
    if (reserved.length > 0) {
      errors.push(`Reserved characters not allowed: ${reserved.join(', ')} (used by encoding)`);
    }
    const other = invalidChars.filter(c => !/[a-z]/.test(c) && c !== ':' && c !== '.');
    if (other.length > 0) {
      errors.push(`Invalid characters: ${other.join(', ')}`);
    }
  }

  return { isValid: invalidChars.length === 0, errors };
}

export function encode(input: string): EncodingResult {
  const validation = validateForEncoding(input);
  if (!validation.isValid) {
    return { success: false, output: '', errors: validation.errors };
  }

  let output = '';
  for (const char of input) {
    if (char === ' ') {
      output += ' ';
    } else if (ALL_LETTERS[char]) {
      output += ALL_LETTERS[char];
    } else if (NUMBER_MAP[char]) {
      output += NUMBER_MAP[char];
    } else if (ALLOWED_SYMBOLS.has(char)) {
      // Symbols pass through unchanged
      output += char;
    }
  }

  return { success: true, output, errors: [] };
}
