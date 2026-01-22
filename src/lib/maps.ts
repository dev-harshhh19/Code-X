// Encoding Maps
export const LETTER_NO_PREFIX: Record<string, string> = {
  A: '9', B: '8', C: '7', D: '6', E: '5',
  F: '4', G: '3', H: '2', I: '1', J: '0',
};

export const LETTER_COLON_KT: Record<string, string> = {
  K: ':9', L: ':8', M: ':7', N: ':6', O: ':5',
  P: ':4', Q: ':3', R: ':2', S: ':1', T: ':0',
};

export const LETTER_SUFFIX_UZ: Record<string, string> = {
  U: '9.', V: '8.', W: '7.', X: '6.', Y: '5.', Z: '4.',
};

export const NUMBER_MAP: Record<string, string> = {
  '0': 'o', '1': 'i', '2': 'z', '3': 'ɘ', '4': 'a',
  '5': 's', '6': 'g', '7': 't', '8': 'b', '9': 'q',
};

// Reverse Maps (for decoding)
export const REVERSE_NO_PREFIX: Record<string, string> = {
  '9': 'A', '8': 'B', '7': 'C', '6': 'D', '5': 'E',
  '4': 'F', '3': 'G', '2': 'H', '1': 'I', '0': 'J',
};

export const REVERSE_COLON_KT: Record<string, string> = {
  ':9': 'K', ':8': 'L', ':7': 'M', ':6': 'N', ':5': 'O',
  ':4': 'P', ':3': 'Q', ':2': 'R', ':1': 'S', ':0': 'T',
};

export const REVERSE_SUFFIX_UZ: Record<string, string> = {
  '9.': 'U', '8.': 'V', '7.': 'W', '6.': 'X', '5.': 'Y', '4.': 'Z',
};

export const REVERSE_NUMBER: Record<string, string> = {
  o: '0', i: '1', z: '2', ɘ: '3', a: '4',
  s: '5', g: '6', t: '7', b: '8', q: '9',
};

// Combined Maps
export const ALL_LETTERS: Record<string, string> = {
  ...LETTER_NO_PREFIX,
  ...LETTER_COLON_KT,
  ...LETTER_SUFFIX_UZ,
};

export const VALID_DECODE_SYMBOLS = new Set(['o', 'i', 'z', 'ɘ', 'a', 's', 'g', 't', 'b', 'q', '.']);
