// Re-export everything from separate modules
export { encode, validateForEncoding, type EncodingResult } from './encode';
export { decode, validateForDecoding, type DecodingResult } from './decode';
export { saveToStorage, loadFromStorage, clearStorage, type StoredData } from './storage';
export * from './maps';
