'use client';

import { useState, useEffect, useCallback } from 'react';
import { Lock, Unlock, Copy, Check, ArrowDown, AlertTriangle, Trash2 } from 'lucide-react';
import { encode } from '@/lib/encode';
import { decode } from '@/lib/decode';
import { saveToStorage, loadFromStorage, clearStorage } from '@/lib/storage';

type Mode = 'encode' | 'decode';

export default function SecretEncoder() {
  const [mode, setMode] = useState<Mode>('encode');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Load from storage on mount
  useEffect(() => {
    const stored = loadFromStorage();
    if (stored) {
      setInput(stored.input);
      setMode(stored.mode);
    }
    setLoaded(true);
  }, []);

  // Process input
  const processInput = useCallback(() => {
    if (!input.trim()) {
      setOutput('');
      setErrors([]);
      return;
    }

    if (mode === 'encode') {
      const result = encode(input);
      setOutput(result.output);
      setErrors(result.errors);
    } else {
      const result = decode(input);
      setOutput(result.output);
      setErrors(result.errors);
    }
  }, [input, mode]);

  useEffect(() => {
    processInput();
  }, [processInput]);

  // Save to storage when input/mode changes
  useEffect(() => {
    if (loaded) {
      saveToStorage(input, mode);
    }
  }, [input, mode, loaded]);

  const toggleMode = () => {
    setMode(prev => prev === 'encode' ? 'decode' : 'encode');
    setInput('');
    setOutput('');
    setErrors([]);
  };

  const copyToClipboard = async () => {
    if (!output) return;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(output);
      } else {
        // Fallback for non-HTTPS
        const textArea = document.createElement('textarea');
        textArea.value = output;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Silent fail
    }
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setErrors([]);
    clearStorage();
  };

  const getPlaceholder = () => {
    return mode === 'encode'
      ? 'Enter UPPERCASE letters, numbers, and spaces...'
      : 'Enter encoded text to decode...';
  };

  return (
    <div className="encoder-container">
      <div className="toggle-container">
        <button
          onClick={toggleMode}
          className={`toggle-btn ${mode === 'encode' ? 'active' : ''}`}
        >
          <Lock size={18} />
          Encode
        </button>
        <button
          onClick={toggleMode}
          className={`toggle-btn ${mode === 'decode' ? 'active' : ''}`}
        >
          <Unlock size={18} />
          Decode
        </button>
      </div>

      <div className="input-section">
        <div className="section-header">
          <label htmlFor="input-text" className="section-label">
            {mode === 'encode' ? 'Original Text' : 'Encoded Text'}
          </label>
          <div className="input-actions">
            <span className={`char-count ${input.length >= 500 ? 'limit-reached' : ''}`}>
              {input.length}/500
            </span>
            {input && (
              <button onClick={handleClear} className="clear-btn" title="Clear">
                <Trash2 size={14} />
              </button>
            )}
          </div>
        </div>
        <textarea
          id="input-text"
          className="text-area input-area"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={getPlaceholder()}
          rows={5}
          maxLength={500}
          autoFocus
        />
      </div>

      {errors.length > 0 && (
        <div className="error-container">
          {errors.map((error, idx) => (
            <div key={idx} className="error-message">
              <AlertTriangle size={16} />
              {error}
            </div>
          ))}
        </div>
      )}

      <div className="arrow-indicator">
        <ArrowDown className="arrow" size={24} />
      </div>

      <div className="output-section">
        <div className="section-header">
          <label htmlFor="output-text" className="section-label">
            {mode === 'encode' ? 'Encoded Output' : 'Decoded Output'}
          </label>
          <div className="output-actions">
            <span className="char-count">{output.length} chars</span>
            <button
              onClick={copyToClipboard}
              className={`copy-btn ${copied ? 'copied' : ''}`}
              disabled={!output}
            >
              {copied ? <><Check size={14} /> Copied!</> : <><Copy size={14} /> Copy</>}
            </button>
          </div>
        </div>
        <textarea
          id="output-text"
          className="text-area output-area"
          value={output}
          readOnly
          rows={5}
          placeholder="Output will appear here..."
        />
      </div>
    </div>
  );
}
