import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield } from 'lucide-react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Code X - Learn how we protect your data.',
  openGraph: {
    title: 'Privacy Policy | Code X',
    description: 'Privacy Policy for Code X - Learn how we protect your data.',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="legal-page">
        <div className="legal-header">
          <Shield size={48} className="legal-icon" />
          <h1>Privacy Policy</h1>
          <p className="legal-subtitle">Last updated: January 2026</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Introduction</h2>
            <p>
              Welcome to Code X (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting
              your privacy and ensuring the security of any information you provide while using our
              encoding and decoding service.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Information We Don&apos;t Collect</h2>
            <p>
              Code X is designed with privacy as a core principle. We want you to know that:
            </p>
            <ul>
              <li>We do NOT store any text you encode or decode</li>
              <li>We do NOT transmit your messages to any server</li>
              <li>We do NOT require any personal information to use our service</li>
              <li>We do NOT track individual encoding/decoding activities</li>
            </ul>
            <p>
              All encoding and decoding operations are performed entirely within your browser.
              Your text never leaves your device.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Technical Information</h2>
            <p>
              Like most websites, we may collect anonymous technical information such as:
            </p>
            <ul>
              <li>Browser type and version</li>
              <li>Device type (desktop, mobile, tablet)</li>
              <li>General geographic region (country level)</li>
              <li>Page views and interaction patterns</li>
            </ul>
            <p>
              This information is collected in aggregate form and cannot be used to identify
              individual users.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Cookies</h2>
            <p>
              We use minimal cookies to ensure the website functions properly. For more details,
              please see our Cookie Policy.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Third-Party Services</h2>
            <p>
              Code X may use third-party services for analytics and hosting. These services
              have their own privacy policies and we encourage you to review them.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Data Security</h2>
            <p>
              Since we don&apos;t collect personal data or store your messages, there is minimal
              risk of data breaches affecting your encoded content. The security of your
              messages depends on how you choose to share and store them after encoding.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Children&apos;s Privacy</h2>
            <p>
              Code X is suitable for users of all ages. We do not knowingly collect any
              personal information from children under 13.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify users of
              any material changes by updating the &quot;Last updated&quot; date at the top of this page.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us through
              our Contact page.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
