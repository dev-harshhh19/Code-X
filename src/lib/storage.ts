const STORAGE_KEY = 'codex_data';
const OBFUSCATION_KEY = 'CX2026';

function obfuscate(text: string): string {
  try {
    const encoded = btoa(encodeURIComponent(text));
    return encoded.split('').reverse().join('') + OBFUSCATION_KEY;
  } catch {
    return '';
  }
}

function deobfuscate(data: string): string {
  try {
    if (!data.endsWith(OBFUSCATION_KEY)) return '';
    const cleaned = data.slice(0, -OBFUSCATION_KEY.length);
    const reversed = cleaned.split('').reverse().join('');
    return decodeURIComponent(atob(reversed));
  } catch {
    return '';
  }
}

export interface StoredData {
  input: string;
  mode: 'encode' | 'decode';
  timestamp: number;
}

export function saveToStorage(input: string, mode: 'encode' | 'decode'): void {
  if (typeof window === 'undefined') return;

  const data: StoredData = {
    input,
    mode,
    timestamp: Date.now(),
  };

  const obfuscated = obfuscate(JSON.stringify(data));
  localStorage.setItem(STORAGE_KEY, obfuscated);
}

export function loadFromStorage(): StoredData | null {
  if (typeof window === 'undefined') return null;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    const deobfuscated = deobfuscate(stored);
    if (!deobfuscated) return null;

    return JSON.parse(deobfuscated) as StoredData;
  } catch {
    return null;
  }
}

export function clearStorage(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}
