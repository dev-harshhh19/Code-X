import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const metadata = {
  title: 'FAQ | Code X',
  description: 'Frequently Asked Questions about Code X - Get answers to common questions.',
};

const faqs = [
  {
    question: 'What is Code X?',
    answer: 'Code X is a free online tool that lets you encode and decode text using a custom cipher system. It transforms uppercase letters and numbers into coded symbols.'
  },
  {
    question: 'How does the encoding work?',
    answer: 'Our cipher system maps uppercase letters to numbers (A-J become 9-0, K-T become :9-:0 with a colon prefix, U-Z become :9-:4). Numbers 0-9 are converted to lowercase symbols (o, i, z, ɘ, a, s, g, t, b, q).'
  },
  {
    question: 'Why do I need to use uppercase letters?',
    answer: 'The encoding system is case-sensitive and designed specifically for uppercase letters. Lowercase letters are not recognized and will trigger a validation error.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes! All encoding and decoding happens entirely in your browser. We never transmit, store, or log any of your text. Your messages never leave your device.'
  },
  {
    question: 'Can I use this for sensitive information?',
    answer: 'While Code X is fun for casual use, it is NOT a cryptographically secure encryption system. Do not use it for passwords, financial data, or truly sensitive information.'
  },
  {
    question: 'What does the colon (:) prefix mean?',
    answer: 'Letters K-Z use a colon prefix to distinguish them from A-J. For example, "K" encodes to ":9" while "A" encodes to just "9".'
  },
  {
    question: 'Why do some letters decode incorrectly?',
    answer: 'Letters K-T and U-Z share the same encoding scheme (both use :9 through :4). When decoding, the system defaults to K-T. This is a known limitation of version 1.0.'
  },
  {
    question: 'Can I use spaces in my messages?',
    answer: 'Yes! Spaces are preserved as-is in both encoding and decoding operations.'
  },
  {
    question: 'Is Code X free to use?',
    answer: 'Yes, Code X is completely free to use with no limits, no registration required, and no ads.'
  },
  {
    question: 'Will there be updates to the encoding system?',
    answer: 'Yes! We plan to release version 1.1 with improvements and possibly new encoding modes. Stay tuned for updates.'
  }
];

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="legal-page faq-page">
        <div className="legal-header">
          <HelpCircle size={48} className="legal-icon" />
          <h1>Frequently Asked Questions</h1>
          <p className="legal-subtitle">Find answers to common questions about Code X</p>
        </div>

        <div className="legal-content">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={index} className="faq-item">
                <summary className="faq-question">
                  <span>{faq.question}</span>
                  <ChevronDown size={20} className="faq-chevron" />
                </summary>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
