'use client';
import { FaBookOpen, FaVideo, FaFileDownload } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Resources() {
  return (
    <>
      <Navbar />
      
      <section
        style={{
          background: 'linear-gradient(135deg, #001326 0%, #003f7d 55%, #00bcd4 100%)',
          color: 'white',
          padding: '110px 0 90px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-140px',
            left: '-120px',
            width: '320px',
            height: '320px',
            background: 'rgba(255, 224, 102, 0.3)',
            filter: 'blur(120px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-160px',
            right: '-140px',
            width: '420px',
            height: '420px',
            background: 'rgba(0, 188, 212, 0.28)',
            filter: 'blur(140px)',
          }}
        />
        <div className="container position-relative text-center">
          <span
            style={{
              display: 'inline-block',
              padding: '8px 18px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.12)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontSize: '0.78rem',
              color: 'rgba(255,255,255,0.86)',
              marginBottom: '22px',
            }}
          >
            Resource Hub
          </span>
          <h1 style={{ color: 'white', fontSize: '3.1rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Learn How AI Transforms Business
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)', maxWidth: '720px', margin: '18px auto 0' }}>
            Insights, tutorials, and success stories tailored for professional service leaders building AI-driven practices.
          </p>
        </div>
      </section>

      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, #f8fbff 0%, #eef4ff 45%, #ffffff 100%)',
          position: 'relative',
        }}
      >
        <div className="container position-relative">
          <div className="row g-4">
            {[
              {
                title: 'Articles',
                icon: <FaBookOpen />,
                description: 'Practical automation ideas for accounting and marketing teams.',
                cta: 'Browse Articles',
                accent: 'linear-gradient(135deg, rgba(0,63,125,0.18), rgba(0,188,212,0.3))',
              },
              {
                title: 'Videos',
                icon: <FaVideo />,
                description: 'Short explainers on voice AI, predictive analytics, and partner success stories.',
                cta: 'Watch Videos',
                accent: 'linear-gradient(135deg, rgba(0,188,212,0.24), rgba(102,126,234,0.32))',
              },
              {
                title: 'eBooks',
                icon: <FaFileDownload />,
                description: 'Comprehensive guides on AI implementation and best practices.',
                cta: 'Download eBooks',
                accent: 'linear-gradient(135deg, rgba(255,204,0,0.26), rgba(255,152,0,0.3))',
              },
            ].map(({ title, icon, description, cta, accent }) => (
              <div key={title} className="col-lg-4">
                <div
                  style={{
                    borderRadius: '26px',
                    background: '#ffffff',
                    border: '1px solid rgba(16, 42, 67, 0.08)',
                    boxShadow: '0 28px 48px rgba(0, 26, 60, 0.08)',
                    padding: '36px 30px',
                    textAlign: 'center',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '-120px',
                      right: '-120px',
                      width: '260px',
                      height: '260px',
                      background: accent,
                      filter: 'blur(90px)',
                    }}
                  />
                  <div
                    style={{
                      width: '66px',
                      height: '66px',
                      borderRadius: '20px',
                      background: accent,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0f1f38',
                      fontSize: '24px',
                      margin: '0 auto 20px',
                      boxShadow: '0 18px 32px rgba(15, 31, 56, 0.12)',
                      position: 'relative',
                    }}
                  >
                    {icon}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '12px', position: 'relative' }}>{title}</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '22px', position: 'relative' }}>{description}</p>
                  <Link
                    href="#"
                    className="btn btn-light rounded-pill fw-semibold"
                    style={{
                      background: '#003f7d',
                      color: '#fff',
                      border: 'none',
                      padding: '12px 28px',
                      letterSpacing: '0.04em',
                      position: 'relative',
                    }}
                  >
                    {cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{
          background: 'radial-gradient(circle at top left, rgba(0, 63, 125, 0.15), transparent 55%)',
        }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <span
              style={{
                display: 'inline-block',
                padding: '6px 16px',
                borderRadius: '999px',
                background: 'rgba(255, 224, 102, 0.3)',
                color: '#a26d00',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontSize: '0.75rem',
              }}
            >
              Featured eBooks
            </span>
            <h2 style={{ fontSize: '2.35rem', color: 'var(--text-dark)', marginTop: '16px' }}>Download Partner Playbooks</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '12px auto 0' }}>
              Deep dives into building profitable, low-risk AI practices for professional service firms.
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                title: 'Harnessing AI in Professional Services',
                copy: 'A comprehensive roadmap for advisory firms launching AI solutions.',
              },
              {
                title: 'AI for Marketing Agencies',
                copy: 'How agencies expand retainers with automation, analytics, and content.',
              },
              {
                title: 'Building a Low-Risk AI Practice',
                copy: 'Frameworks for compliance, delivery, and partner enablement.',
              },
            ].map(({ title, copy }) => (
              <div key={title} className="col-lg-4">
                <div
                  style={{
                    borderRadius: '24px',
                    background: '#ffffff',
                    border: '1px solid rgba(16, 42, 67, 0.08)',
                    boxShadow: '0 24px 48px rgba(15, 31, 56, 0.08)',
                    padding: '28px',
                    height: '100%',
                  }}
                >
                  <h4 style={{ color: 'var(--text-dark)', fontSize: '1.35rem', marginBottom: '12px' }}>{title}</h4>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '22px' }}>{copy}</p>
                  <Link
                    href="#"
                    className="btn btn-light rounded-pill fw-semibold"
                    style={{
                      background: '#003f7d',
                      color: '#fff',
                      border: 'none',
                      padding: '12px 28px',
                      letterSpacing: '0.04em',
                    }}
                  >
                    Download Free
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-5"
            style={{
              borderRadius: '26px',
              background: 'linear-gradient(135deg, rgba(0,63,125,0.08), rgba(0,188,212,0.12))',
              border: '1px solid rgba(16, 42, 67, 0.08)',
              boxShadow: '0 28px 48px rgba(0, 26, 60, 0.08)',
              padding: '32px',
              textAlign: 'center',
            }}
          >
            <h3 style={{ color: 'var(--text-dark)', marginBottom: '10px' }}>Subscribe for Updates</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>Get the latest insights delivered to your inbox.</p>
            <form className="d-flex justify-content-center gap-2 flex-wrap mt-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                style={{
                  maxWidth: '360px',
                  borderRadius: '999px',
                  padding: '12px 20px',
                  border: '1px solid rgba(16, 42, 67, 0.1)',
                }}
              />
              <button
                type="submit"
                className="btn btn-light rounded-pill fw-semibold"
                style={{
                  background: '#003f7d',
                  color: '#fff',
                  border: 'none',
                  padding: '12px 28px',
                  letterSpacing: '0.04em',
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
