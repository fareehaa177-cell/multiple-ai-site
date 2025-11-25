'use client';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { EBook } from '../ebooks-data';
import { FaDownload, FaArrowLeft } from 'react-icons/fa';

export default function EBookPageClient({ ebook }: { ebook: EBook }) {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, rgba(0, 19, 38, 0.92) 0%, rgba(0, 63, 125, 0.85) 55%, rgba(0, 188, 212, 0.75) 100%)',
          color: 'white',
          padding: '80px 0 60px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container position-relative">
          <Link
            href="/resources#ebooks"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'rgba(255,255,255,0.9)',
              textDecoration: 'none',
              marginBottom: '24px',
              fontSize: '0.95rem',
              fontWeight: 500,
            }}
          >
            <FaArrowLeft /> Back to E-Books
          </Link>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 700, marginBottom: '20px', lineHeight: '1.2' }}>
            {ebook.title}
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', maxWidth: '800px', lineHeight: '1.6' }}>
            {ebook.longDescription}
          </p>
        </div>
      </section>

      {/* PDF Preview Section */}
      <section className="section" style={{ background: '#f8f9fa', padding: '60px 0' }}>
        <div className="container">
          <div>
            <h2
              style={{
                fontSize: '2rem',
                color: 'var(--text-dark)',
                marginBottom: '40px',
                textAlign: 'center',
              }}
            >
              PDF Preview
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {/* Full PDF Preview */}
              <div style={{ marginBottom: '30px' }}>
                <div
                  style={{
                    background: '#ffffff',
                    borderRadius: '12px',
                    padding: '20px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    marginBottom: '16px',
                    overflow: 'hidden',
                  }}
                >
                  <iframe
                    src={`${ebook.pdfPath}#toolbar=0`}
                    style={{
                      width: '100%',
                      height: '800px',
                      border: 'none',
                    }}
                    title={`${ebook.title} preview`}
                  />
                </div>
                <div style={{ textAlign: 'center', marginTop: '12px' }}>
                  <a
                    href={ebook.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#00bcd4',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      fontWeight: 500,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textDecoration = 'underline';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textDecoration = 'none';
                    }}
                  >
                    Click here to open the full PDF
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div style={{ textAlign: 'center', marginTop: '60px', padding: '40px 0' }}>
            <a
              href={ebook.pdfPath}
              download
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '18px 40px',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #003f7d 0%, #00bcd4 100%)',
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
                boxShadow: '0 8px 24px rgba(0, 63, 125, 0.3)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 63, 125, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 63, 125, 0.3)';
              }}
            >
              <FaDownload size={20} />
              Download PDF
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

