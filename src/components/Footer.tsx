import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand" style={{ fontWeight: 500 }}>
          Code X <span style={{ opacity: 0.5, marginLeft: '0.5rem' }}>© {year}</span>
        </div>

        <div className="footer-links-row">
          <Link href="/about" className="footer-link">About</Link>
          <Link href="/faq" className="footer-link">FAQ</Link>
          <Link href="/contact" className="footer-link">Contact</Link>
          <Link href="/privacy" className="footer-link">Privacy</Link>
          <Link href="/terms" className="footer-link">Terms</Link>
        </div>

        <div className="footer-links-row">
          <a href="mailto:nikamharshadshivaji@gmail.com" className="footer-link">Email</a>
          <a href="https://linkedin.com/in/harshad-nikam-5047b7274" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/dev-harshhh19/" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
