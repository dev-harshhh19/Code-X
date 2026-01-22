import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Cookie } from 'lucide-react';

export const metadata = {
  title: 'Cookie Policy | Code X',
  description: 'Cookie Policy for Code X - Learn about our use of cookies.',
};

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="legal-page">
        <div className="legal-header">
          <Cookie size={48} className="legal-icon" />
          <h1>Cookie Policy</h1>
          <p className="legal-subtitle">Last updated: January 2026</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when you visit a website.
              They help websites function properly and provide information to website owners.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. How We Use Cookies</h2>
            <p>Code X uses minimal cookies for the following purposes:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
              <li><strong>Preference Cookies:</strong> Remember your settings (like dark mode)</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Types of Cookies We Use</h2>
            <table className="cookie-table">
              <thead>
                <tr>
                  <th>Cookie Type</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Essential</td>
                  <td>Website functionality</td>
                  <td>Session</td>
                </tr>
                <tr>
                  <td>Preferences</td>
                  <td>User settings</td>
                  <td>1 year</td>
                </tr>
                <tr>
                  <td>Analytics</td>
                  <td>Usage statistics</td>
                  <td>1 year</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="legal-section">
            <h2>4. Managing Cookies</h2>
            <p>
              You can control and manage cookies in various ways. Most browsers allow you to:
            </p>
            <ul>
              <li>View what cookies are stored and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from specific sites</li>
              <li>Block all cookies</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
            <p>
              Please note that blocking all cookies may affect your experience on our website.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Third-Party Cookies</h2>
            <p>
              We may use third-party services that set their own cookies. These third parties
              have their own privacy and cookie policies, which we encourage you to review.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Changes will be posted on
              this page with an updated revision date.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please contact us through our
              Contact page.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
