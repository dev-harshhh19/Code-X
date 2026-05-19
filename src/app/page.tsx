'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/MotionComponents';

const features = [
  { num: '01', name: 'Secure Encoding', desc: 'Custom cipher transforms text into unreadable codes. Case-sensitive, unique per character.' },
  { num: '02', name: 'Real-time Output', desc: 'Instant processing as you type. No server, no latency. Pure client-side.' },
  { num: '03', name: 'Two-way Conversion', desc: 'Switch between encode and decode in the same interface with a single click.' },
  { num: '04', name: 'Fully Private', desc: 'Nothing leaves your browser. No logging, no storage, no tracking. Ever.' },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="page-shell page-enter">

        {/* — HERO ——————————————————————————— */}
        <section className="hero">
          <FadeInUp delay={0.04}>
            <p className="hero-eyebrow">Custom Cipher System</p>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h1 className="hero-title">
              Transform text<br />into secret codes.
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.18}>
            <p className="hero-sub">
              A browser-only encoder and decoder built on a custom cipher.
              No server. No storage. Just the algorithm.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.24}>
            <div className="hero-cta">
              <Link href="/encoder" className="btn btn-primary">
                Open Encoder
                <ArrowRight size={15} />
              </Link>
              <Link href="/about" className="btn btn-ghost">
                How it works
              </Link>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.3}>
            <div className="hero-meta">
              <span>No account required</span>
              <span>Free forever</span>
              <span>Open source</span>
            </div>
          </FadeInUp>
        </section>



        {/* — FEATURES ——————————————————————— */}
        <div className="features-block">
          <hr className="features-rule" />
          <FadeInUp>
            <div className="features-header">
              <h2 className="features-title">What it does</h2>
              <span className="features-count">4 core features</span>
            </div>
          </FadeInUp>
          <StaggerContainer className="features-grid" staggerDelay={0.06}>
            {features.map((f) => (
              <StaggerItem key={f.num}>
                <div className="feature-card">
                  <p className="feature-num">{f.num}</p>
                  <p className="feature-name">{f.name}</p>
                  <p className="feature-desc">{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

      </main>
      <Footer />
    </>
  );
}
