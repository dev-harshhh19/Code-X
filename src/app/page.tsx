'use client';

import Link from 'next/link';
import { Shield, Lock, Zap, RefreshCw, Smartphone, ArrowRight, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  FadeInUp,
  SlideIn,
  StaggerContainer,
  StaggerItem,
  HoverScale,
  FloatingElement
} from '@/components/MotionComponents';

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
            <FadeInUp delay={0.1}>
              <h1 className="hero-title">
                Transform Text Into
                <span className="gradient-text"> Secret Codes</span>
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="hero-subtitle">
                Encode your messages with our custom cipher system. Perfect for fun,
                learning cryptography, or adding a layer of mystery to your communications.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.3}>
              <div className="hero-cta">
                <Link href="/encoder" className="btn-primary liquid-btn">
                  <Lock size={18} />
                  Start Encoding
                  <ArrowRight size={18} />
                </Link>
                <Link href="/about" className="btn-secondary">
                  Learn More
                </Link>
              </div>
            </FadeInUp>
          </div>
          <SlideIn direction="right" delay={0.4}>
            <div className="hero-visual">
              <div className="code-preview liquid-glass">
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
          </SlideIn>
        </section>

        {/* Features Section */}
        <section className="features">
          <FadeInUp>
            <div className="section-header">
              <h2 className="section-title">Powerful Features</h2>
              <p className="section-subtitle">
                Everything you need to encode and decode your messages
              </p>
            </div>
          </FadeInUp>
          <StaggerContainer className="features-grid" staggerDelay={0.1}>
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <HoverScale scale={1.03}>
                  <div className="feature-card liquid-glass">
                    <div className="feature-icon">
                      <feature.icon size={24} />
                    </div>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-desc">{feature.description}</p>
                  </div>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Benefits Section */}
        <section className="benefits">
          <FadeInUp>
            <div className="benefits-content liquid-glass-tint">
              <h2 className="section-title">Why Choose Code X?</h2>
              <StaggerContainer className="benefits-list" staggerDelay={0.08}>
                <ul className="benefits-ul" style={{ listStyle: 'none', padding: 0 }}>
                  {benefits.map((benefit, index) => (
                    <StaggerItem key={index} tag="li">
                      <div className="benefit-item">
                        <Check size={20} className="benefit-check" />
                        <span>{benefit}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </ul>
              </StaggerContainer>
              <Link href="/encoder" className="btn-primary liquid-btn">
                Get Started Free
                <ArrowRight size={18} />
              </Link>
            </div>
          </FadeInUp>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <FadeInUp>
            <div className="cta-content liquid-glass">
              <h2>Ready to Encode Your First Message?</h2>
              <p>Start transforming your text into secret codes in seconds.</p>
              <Link href="/encoder" className="btn-cta liquid-btn">
                <Lock size={20} />
                Try Code X Now
              </Link>
            </div>
          </FadeInUp>
        </section>
      </main>
      <Footer />
    </>
  );
}
