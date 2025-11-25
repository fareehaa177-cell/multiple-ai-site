import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { ebooks } from '../ebooks-data';
import EBookPageClient from './EBookPageClient';

// Generate static params for all e-books
export function generateStaticParams() {
  return ebooks.map((ebook) => ({
    id: ebook.id,
  }));
}

export default function EBookPage({ params }: { params: { id: string } }) {
  const ebook = ebooks.find((e) => e.id === params.id);

  if (!ebook) {
    return (
      <>
        <Navbar />
        <div className="container" style={{ padding: '120px 20px', textAlign: 'center' }}>
          <h1>E-Book Not Found</h1>
          <p>The e-book you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/resources" className="btn-pill btn-pill-gradient">
            Back to Resources
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return <EBookPageClient ebook={ebook} />;
}

