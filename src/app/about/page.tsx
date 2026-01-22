import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Code, Users, Heart } from 'lucide-react';

export const metadata = {
  title: 'About | Code X',
  description: 'Learn about Code X and our mission to make cryptography fun and accessible.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="legal-page about-page">
        <div className="legal-header">
          <Shield size={48} className="legal-icon" />
          <h1>About Code X</h1>
          <p className="legal-subtitle">Making cryptography fun and accessible</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2><Code size={20} /> Our Mission</h2>
            <p>
              Code X was created with a simple goal: to make encoding and decoding messages
              fun, easy, and accessible to everyone. Whether you&apos;re learning about cryptography,
              creating secret messages with friends, or just having fun with text transformation,
              Code X is here to help.
            </p>
          </section>

          <section className="legal-section">
            <h2><Shield size={20} /> The Cipher System</h2>
            <p>
              Our custom cipher system uses a unique encoding scheme that transforms uppercase
              letters and numbers into coded symbols. The system is designed to be:
            </p>
            <ul>
              <li><strong>Case-sensitive:</strong> Only uppercase letters are encoded</li>
              <li><strong>Prefix-based:</strong> Extended alphabet uses special prefixes</li>
              <li><strong>Reversible:</strong> Easy to decode back to original text</li>
              <li><strong>Fun to use:</strong> Creates mysterious-looking encoded messages</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2><Users size={20} /> Who Is This For?</h2>
            <p>Code X is perfect for:</p>
            <ul>
              <li>Students learning about cryptography and encoding</li>
              <li>Friends who want to exchange secret messages</li>
              <li>Developers exploring text transformation algorithms</li>
              <li>Anyone who loves puzzles and codes</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2><Heart size={20} /> Privacy First</h2>
            <p>
              We believe in privacy. Code X processes all text locally in your browser.
              We don&apos;t store, transmit, or log any of your messages. Your secrets stay yours.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
