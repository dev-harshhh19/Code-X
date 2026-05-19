import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText } from 'lucide-react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Code X - Read our terms and conditions.',
  openGraph: {
    title: 'Terms of Service | Code X',
    description: 'Terms of Service for Code X - Read our terms and conditions.',
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="legal-page">
        <div className="legal-header">
          <FileText size={48} className="legal-icon" />
          <h1>Terms of Service</h1>
          <p className="legal-subtitle">Last updated: January 2026</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Code X, you accept and agree to be bound by the terms
              and provisions of this agreement. If you do not agree to these terms, please do
              not use our service.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Description of Service</h2>
            <p>
              Code X provides a free text encoding and decoding service using a custom
              cipher system. The service is provided &quot;as is&quot; without any warranties or guarantees.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Acceptable Use</h2>
            <p>You agree to use Code X only for lawful purposes. You shall not:</p>
            <ul>
              <li>Use the service for any illegal activities</li>
              <li>Attempt to circumvent, disable, or interfere with security features</li>
              <li>Use automated systems to access the service in a manner that exceeds reasonable use</li>
              <li>Reproduce, duplicate, copy, or resell any part of the service without permission</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Intellectual Property</h2>
            <p>
              The Code X name, logo, and the custom encoding algorithm are protected by
              intellectual property laws. You may not use our branding without prior written consent.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Disclaimer of Warranties</h2>
            <p>
              Code X is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We make no
              warranties, expressed or implied, regarding:
            </p>
            <ul>
              <li>The reliability or availability of the service</li>
              <li>The accuracy of encoded/decoded output</li>
              <li>The security of the encoding system for sensitive information</li>
              <li>The fitness of the service for any particular purpose</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Limitation of Liability</h2>
            <p>
              Code X shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages resulting from your use or inability to use the service.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Security Notice</h2>
            <p>
              Code X is designed for fun and educational purposes. The encoding system is
              NOT intended for securing sensitive or confidential information. Do not use this
              service for transmitting passwords, financial data, or other critical information.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Modifications to Service</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue the service at any time
              without prior notice. We shall not be liable to you or any third party for any
              modification, suspension, or discontinuation of the service.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Changes to Terms</h2>
            <p>
              We may revise these terms at any time. By continuing to use Code X after
              changes are posted, you agree to be bound by the revised terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Contact</h2>
            <p>
              For any questions regarding these Terms of Service, please contact us through
              our Contact page.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
