'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo" style={{ fontWeight: 900, letterSpacing: 'var(--track-head)' }}>
          Code X
        </Link>

        <div className="navbar-links">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/encoder" className="nav-link">Encoder</Link>
          <Link href="/about" className="nav-link">About</Link>
        </div>

        <Link href="/encoder" className="btn btn-primary" style={{ fontSize: '0.8125rem', padding: '0.45rem 0.875rem' }}>
          Try it
        </Link>

        <button className="mobile-menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          <Link href="/" className="mobile-link" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/encoder" className="mobile-link" onClick={() => setOpen(false)}>Encoder</Link>
          <Link href="/about" className="mobile-link" onClick={() => setOpen(false)}>About</Link>
          <Link href="/encoder" className="mobile-cta" onClick={() => setOpen(false)}>Try Encoder</Link>
        </div>
      )}
    </nav>
  );
}
