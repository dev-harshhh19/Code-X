import Link from 'next/link';
import { Shield, Lock, Zap, RefreshCw, Smartphone, ArrowRight, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const features = [
    {
      icon: Lock,
      title: 'Secure Encoding',
      description: 'Transform your text into unreadable cipher codes using our custom algorithm.'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Instant encoding and decoding as you type with zero latency.'
    },
    {
      icon: RefreshCw,
      title: 'Two-way Conversion',
      description: 'Seamlessly switch between encoding and decoding modes.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Works perfectly on all devices - desktop, tablet, and mobile.'
    }
  ];

  const benefits = [
    'Case-sensitive encoding for maximum security',
    'Unique symbol system for numbers',
    'Special prefix system for extended alphabet',
    'Copy to clipboard with one click',
    'No data stored - complete privacy',
    'Free to use, forever'
  ];

  return (
    <>
      <Navbar />
      <main className="landing-page">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Transform Text Into
              <span className="gradient-text"> Secret Codes</span>
            </h1>
            <p className="hero-subtitle">
              Encode your messages with our custom cipher system. Perfect for fun,
              learning cryptography, or adding a layer of mystery to your communications.
            </p>
            <div className="hero-cta">
              <Link href="/encoder" className="btn-primary">
                <Lock size={18} />
                Start Encoding
                <ArrowRight size={18} />
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-preview">
              <div className="preview-header">
                <div className="preview-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="preview-title">Code X</span>
              </div>
              <div className="preview-content">
                <div className="preview-line">
                  <span className="line-label">Input:</span>
                  <span className="line-value">HELLO 196</span>
                </div>
                <div className="preview-arrow">↓</div>
                <div className="preview-line encoded">
                  <span className="line-label">Output:</span>
                  <span className="line-value">25885 iqg</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="section-header">
            <h2 className="section-title">Powerful Features</h2>
            <p className="section-subtitle">
              Everything you need to encode and decode your messages
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <feature.icon size={24} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits">
          <div className="benefits-content">
            <h2 className="section-title">Why Choose Code X?</h2>
            <ul className="benefits-list">
              {benefits.map((benefit, index) => (
                <li key={index} className="benefit-item">
                  <Check size={20} className="benefit-check" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <Link href="/encoder" className="btn-primary">
              Get Started Free
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to Encode Your First Message?</h2>
            <p>Start transforming your text into secret codes in seconds.</p>
            <Link href="/encoder" className="btn-cta">
              <Lock size={20} />
              Try Code X Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
