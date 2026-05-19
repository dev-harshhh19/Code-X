import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Have questions or feedback? Contact the Code X team.',
  openGraph: {
    title: 'Contact | Code X',
    description: 'Have questions or feedback? Contact the Code X team.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
