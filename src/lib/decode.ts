import { REVERSE_NO_PREFIX, REVERSE_COLON_KT, REVERSE_SUFFIX_UZ, REVERSE_NUMBER, VALID_DECODE_SYMBOLS } from './maps';

export interface DecodingResult {
  success: boolean;
  output: string;
  errors: string[];
}

export function validateForDecoding(input: string): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  const invalidChars: string[] = [];

  for (const char of input) {
    if (char === ' ' || char === ':' || /[0-9]/.test(char) || VALID_DECODE_SYMBOLS.has(char)) continue;
    if (!invalidChars.includes(char)) invalidChars.push(char);
  }

  if (invalidChars.length > 0) {
    errors.push(`Invalid characters: ${invalidChars.join(', ')}`);
  }

  return { isValid: invalidChars.length === 0, errors };
}

export function decode(input: string): DecodingResult {
  const validation = validateForDecoding(input);
  if (!validation.isValid) {
    return { success: false, output: '', errors: validation.errors };
  }

  let output = '';
  let i = 0;

  while (i < input.length) {
    const char = input[i];

    if (char === ' ') {
      output += ' ';
      i++;
    } else if (char === ':') {
      if (i + 1 < input.length && /[0-9]/.test(input[i + 1])) {
        const key = ':' + input[i + 1];
        output += REVERSE_COLON_KT[key] || '';
        i += 2;
      } else {
        i++;
      }
    } else if (/[0-9]/.test(char)) {
      if (i + 1 < input.length && input[i + 1] === '.') {
        const key = char + '.';
        output += REVERSE_SUFFIX_UZ[key] || '';
        i += 2;
      } else {
        output += REVERSE_NO_PREFIX[char] || '';
        i++;
      }
    } else if (REVERSE_NUMBER[char]) {
      output += REVERSE_NUMBER[char];
      i++;
    } else {
      i++;
    }
  }

  return { success: true, output, errors: [] };
}
