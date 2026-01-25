import Link from 'next/link';
import { Shield, Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <Shield className="logo-icon" />
              <span className="logo-text">Code X</span>
            </Link>
            <p className="footer-desc">
              Transform your text into secret coded messages with our custom cipher system.
            </p>
            <div className="social-links">
              <a href="https://github.com/dev-harshhh19/" className="social-link" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://twitter.com/not_harshad_19/" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="mailto:nikamharshadshivaji@gmail.com" className="social-link" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links - Hidden on minimal footer */}
          <div className="footer-section hide-on-mobile">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/encoder">Encoder</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </div>

          {/* Legal - Hidden on minimal footer */}
          <div className="footer-section hide-on-mobile">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/cookies">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Support - Hidden on minimal footer */}
          <div className="footer-section hide-on-mobile">
            <h4 className="footer-title">Support</h4>
            <ul className="footer-links">
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Code X. All rights reserved.</p>
          <div className="footer-watermark">
            Designed & Built by <span className="highlight">Harshad Nikam</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
