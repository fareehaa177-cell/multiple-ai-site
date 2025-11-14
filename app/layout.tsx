import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MultipleAI Solutions - Empowering Businesses through AI',
  description: 'We design, build, and deliver intelligent automation, analytics, and creative AI services that power the next generation of professional businesses.',
  icons: {
    icon: '/images/image.png',
    apple: '/images/image.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
