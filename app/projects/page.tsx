'use client';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Projects() {
  const projects = [
    {
      title: 'Voice Reception Agent – Xcelit',
      partner: 'IT & Support Services',
      scope: 'Inbound call handling and smart routing',
      outcome: 'Reduced missed-call rate by 70% and improved lead capture.',
      image: '/images/image5.jpeg'
    }
  ];

  const testimonials = [
    {
      quote: "MultipleAI's team helped us launch an AI service line in under a month, seamlessly under our own brand.",
      author: 'Daniel K.',
      position: 'Director, Marketing Agency Perth'
    },
    {
      quote: "Their automation agents transformed how our accounting team works, consistent, compliant, and fast.",
      author: 'Sarah L.',
      position: 'Principal CPA Firm Sydney'
    },
    {
      quote: "A reliable AI back-office partner we trust with our clients.",
      author: 'Michael T.',
      position: 'Consulting Partner Singapore'
    }
  ];

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
            background: 'rgba(102, 126, 234, 0.3)',
            filter: 'blur(120px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-160px',
            right: '-120px',
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
            Case Studies
          </span>
          <h1 style={{ color: 'white', fontSize: '3rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Our Work in Action
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)', maxWidth: '720px', margin: '18px auto 0' }}>
            We collaborate with agencies, advisory firms, and integrators to implement AI solutions that deliver measurable business value.
          </p>
        </div>
      </section>

      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, #f8fbff 0%, #eef4ff 45%, #ffffff 100%)',
        }}
      >
        <div className="container">
          <div className="text-center mb-4">
            <span
              style={{
                display: 'inline-block',
                padding: '6px 16px',
                borderRadius: '999px',
                background: 'rgba(0,63,125,0.12)',
                color: '#003f7d',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontSize: '0.75rem',
              }}
            >
              Featured Project
            </span>
          </div>
          {projects.map((project) => (
            <div
              key={project.title}
              style={{
                borderRadius: '32px',
                background: '#ffffff',
                border: '1px solid rgba(16, 42, 67, 0.08)',
                boxShadow: '0 32px 60px rgba(15, 31, 56, 0.12)',
                overflow: 'hidden',
                marginBottom: '40px',
              }}
            >
              <div className="row g-0 align-items-center">
                <div className="col-lg-5">
                  <div style={{ position: 'relative', height: '100%' }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={640}
                      height={480}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div style={{ padding: '40px' }}>
                    <h2 style={{ color: 'var(--text-dark)', fontSize: '2.1rem', marginBottom: '16px' }}>{project.title}</h2>
                    <div style={{ display: 'grid', gap: '16px', marginBottom: '24px' }}>
                      <p style={{ marginBottom: 0, color: 'var(--text-muted)' }}>
                        <strong style={{ color: 'var(--text-dark)' }}>Partner/Sector:</strong> {project.partner}
                      </p>
                      <p style={{ marginBottom: 0, color: 'var(--text-muted)' }}>
                        <strong style={{ color: 'var(--text-dark)' }}>Scope:</strong> {project.scope}
                      </p>
                      <p style={{ marginBottom: 0, color: 'var(--text-muted)' }}>
                        <strong style={{ color: 'var(--text-dark)' }}>Outcome:</strong> {project.outcome}
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="btn btn-light rounded-pill fw-semibold"
                      style={{
                        background: '#003f7d',
                        color: '#fff',
                        border: 'none',
                        padding: '12px 28px',
                        letterSpacing: '0.04em',
                      }}
                    >
                      Plan Your Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, #001326 0%, #01294c 55%, #004f94 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            left: '-100px',
            width: '320px',
            height: '320px',
            background: 'rgba(102, 126, 234, 0.28)',
            filter: 'blur(120px)',
          }}
        />
        <div className="container position-relative">
          <div className="text-center mb-5">
            <span
              style={{
                display: 'inline-block',
                padding: '6px 16px',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.16)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.85)',
                marginBottom: '16px',
              }}
            >
              Partner Testimonials
            </span>
            <h2 style={{ fontSize: '2.35rem', fontWeight: 700, marginBottom: '12px', color: '#ffffff' }}>What Our Partners Say</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '720px', margin: '0 auto' }}>
              Real outcomes from teams who trust MultipleAI to power their AI service line.
            </p>
          </div>

          <div className="row g-4">
            {testimonials.map((test) => (
              <div key={test.author} className="col-lg-4">
                <div
                  style={{
                    borderRadius: '24px',
                    background: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.16)',
                    padding: '28px',
                    height: '100%',
                    boxShadow: '0 24px 48px rgba(0,0,0,0.18)',
                  }}
                >
                  <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '20px', color: 'rgba(255,255,255,0.85)' }}>
                    “{test.quote}”
                  </p>
                  <h5 style={{ color: 'white', marginBottom: '6px' }}>{test.author}</h5>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 0 }}>{test.position}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link
              href="/contact"
              className="btn btn-light btn-lg px-5 py-3 rounded-pill fw-semibold"
              style={{ color: '#003f7d' }}
            >
              Partner with Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
