import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SecretEncoder from '@/components/SecretEncoder';
import { Shield } from 'lucide-react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Encoder',
  description: 'Encode and decode your messages with our custom cipher system.',
  openGraph: {
    title: 'Encoder | Code X',
    description: 'Encode and decode your messages with our custom cipher system.',
  },
};

export default function EncoderPage() {
  return (
    <>
      <Navbar />
      <main className="encoder-page">
        <div className="encoder-header">
          <div className="header-icon">
            <Shield size={32} />
          </div>
          <h1 className="page-title">Secret Code Encoder</h1>
          <p className="page-subtitle">
            Transform your text into secret coded messages instantly
          </p>
        </div>
        <SecretEncoder />
      </main>
      <Footer />
    </>
  );
}
