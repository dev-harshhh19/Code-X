'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Lock, Unlock, Copy, Check, ArrowDown, AlertTriangle, Trash2 } from 'lucide-react';
import { encode } from '@/lib/encode';
import { decode } from '@/lib/decode';
import { saveToStorage, loadFromStorage, clearStorage } from '@/lib/storage';
import ScrambleText from './ScrambleText';
import SkeletonLoader from './SkeletonLoader';

type Mode = 'encode' | 'decode';

// Characters for scramble effect
const SCRAMBLE_CHARS = '0123456789abcdefghijklmnopqrstuvwxyz:.-!@#$%^&*';

export default function SecretEncoder() {
  const [mode, setMode] = useState<Mode>('encode');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [displayOutput, setDisplayOutput] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isScrambling, setIsScrambling] = useState(false);

  const scrambleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationRef = useRef<number | null>(null);
  const previousInputRef = useRef('');

  // Load from storage on mount
  useEffect(() => {
    // Simulate initialization time for the "premium app" feel
    const timer = setTimeout(() => {
      const stored = loadFromStorage();
      if (stored) {
        setInput(stored.input);
        setMode(stored.mode);
      }
      setLoaded(true);
      setIsInitializing(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Scramble animation function
  const scrambleAnimate = useCallback((targetText: string, duration: number = 1200) => {
    if (!targetText) {
      setDisplayOutput('');
      setIsScrambling(false);
      return;
    }

    setIsScrambling(true);
    const startTime = performance.now();
    const textLength = targetText.length;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out - characters settle faster at start, slower at end
      const easedProgress = 1 - Math.pow(1 - progress, 2);
      const settledCount = Math.floor(easedProgress * textLength);

      let result = '';
      for (let i = 0; i < textLength; i++) {
        if (i < settledCount) {
          result += targetText[i];
        } else {
          if (targetText[i] === ' ') {
            result += ' ';
          } else {
            result += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          }
        }
      }

      setDisplayOutput(result);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayOutput(targetText);
        setIsScrambling(false);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  // Process input with debounce and scramble effect
  const processInput = useCallback(() => {
    if (!input.trim()) {
      setOutput('');
      setDisplayOutput('');
      setErrors([]);
      return;
    }

    let result;
    if (mode === 'encode') {
      result = encode(input);
    } else {
      result = decode(input);
    }

    setOutput(result.output);
    setErrors(result.errors);

    // Only animate if input actually changed
    if (input !== previousInputRef.current && result.output) {
      // Cancel any existing animation
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      scrambleAnimate(result.output, 1200);
    } else if (!result.output) {
      setDisplayOutput('');
    }

    previousInputRef.current = input;
  }, [input, mode, scrambleAnimate]);

  // Debounce the processing to avoid too many animations
  useEffect(() => {
    if (scrambleTimeoutRef.current) {
      clearTimeout(scrambleTimeoutRef.current);
    }

    scrambleTimeoutRef.current = setTimeout(() => {
      processInput();
    }, 150); // Small debounce for smoother experience

    return () => {
      if (scrambleTimeoutRef.current) {
        clearTimeout(scrambleTimeoutRef.current);
      }
    };
  }, [input, mode, processInput]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

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
    setDisplayOutput('');
    setErrors([]);
    previousInputRef.current = '';
  };

  const copyToClipboard = async () => {
    if (!output) return;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(output);
      } else {
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
    setDisplayOutput('');
    setErrors([]);
    clearStorage();
    previousInputRef.current = '';
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const getPlaceholder = () => {
    return mode === 'encode'
      ? 'Enter UPPERCASE letters, numbers, and spaces...'
      : 'Enter encoded text to decode...';
  };

  if (isInitializing) {
    return <SkeletonLoader />;
  }

  return (
    <div className="encoder-container liquid-glass">
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
        <ArrowDown className={`arrow ${isScrambling ? 'arrow-animating' : ''}`} size={24} />
      </div>

      <div className="output-section">
        <div className="section-header">
          <label htmlFor="output-text" className="section-label">
            {mode === 'encode' ? 'Encoded Output' : 'Decoded Output'}
            {isScrambling && <span className="encoding-indicator"> Processing...</span>}
          </label>
          <div className="output-actions">
            <span className="char-count">{output.length} chars</span>
            <button
              onClick={copyToClipboard}
              className={`copy-btn ${copied ? 'copied' : ''}`}
              disabled={!output || isScrambling}
            >
              {copied ? <><Check size={14} /> Copied!</> : <><Copy size={14} /> Copy</>}
            </button>
          </div>
        </div>
        <textarea
          id="output-text"
          className={`text-area output-area ${isScrambling ? 'scrambling' : ''}`}
          value={displayOutput}
          readOnly
          rows={5}
          placeholder="Output will appear here..."
        />
      </div>
    </div>
  );
}
