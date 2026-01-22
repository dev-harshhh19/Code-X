'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Lock, Menu, X, Shield } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          <Shield className="logo-icon" />
          <span className="logo-text">Code X</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/encoder" className="nav-link">Encoder</Link>
          <Link href="/about" className="nav-link">About</Link>
        </div>

        <Link href="/encoder" className="cta-btn">
          <Lock size={16} />
          Try Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <Link href="/" className="mobile-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/encoder" className="mobile-link" onClick={() => setIsOpen(false)}>Encoder</Link>
          <Link href="/about" className="mobile-link" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/encoder" className="mobile-cta" onClick={() => setIsOpen(false)}>
            <Lock size={16} />
            Try Now
          </Link>
        </div>
      )}
    </nav>
  );
}
