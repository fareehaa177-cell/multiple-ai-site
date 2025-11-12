'use client';
import { FaBrain, FaRobot, FaChartLine, FaFileAlt, FaLock } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const serviceItems = [
  {
    id: '01',
    title: 'AI Consulting & Strategy',
    copy: 'Guiding leadership teams from AI discovery to deployment with structured blueprints and governance.',
    highlights: [
      'AI readiness assessments and ROI models',
      'Process mapping and opportunity analysis',
      'Integration roadmaps and governance frameworks',
    ],
    outcome: 'A clear, low-risk path to adopt AI profitably.',
    icon: FaBrain,
    accent: 'linear-gradient(135deg, rgba(0,63,125,0.18), rgba(0,188,212,0.32))',
  },
  {
    id: '02',
    title: 'Bespoke AI Agents & Automation',
    copy: 'Tailor-made voice and text agents built around regulated workflows and client needs.',
    highlights: [
      'Reception, admin, sales, and analytics agents',
      'Process and document automation',
      'CRM and practice management integration',
    ],
    outcome: 'Faster operations, lower overhead, happier clients.',
    icon: FaRobot,
    accent: 'linear-gradient(135deg, rgba(0,188,212,0.2), rgba(102,126,234,0.32))',
  },
  {
    id: '03',
    title: 'Data Analytics & Predictive Intelligence',
    copy: 'Transforming data pipelines into foresight with secure dashboards and models.',
    highlights: [
      'Custom dashboards and performance tracking',
      'Predictive trend and cash-flow modelling',
      'Real-time KPI reporting for decision support',
    ],
    outcome: 'Evidence-based strategy that clients can act on.',
    icon: FaChartLine,
    accent: 'linear-gradient(135deg, rgba(255,204,0,0.26), rgba(255,152,0,0.3))',
  },
  {
    id: '04',
    title: 'Creative AI & Communications',
    copy: 'AI-enhanced marketing and documentation produced with enterprise quality controls.',
    highlights: [
      'AI-generated white papers, research reports, and grant applications',
      'Voice, video, and presentation assets aligned to brand',
      'Automated content workflows with human QA steps',
    ],
    outcome: 'Professional communication delivered in a fraction of the time.',
    icon: FaFileAlt,
    accent: 'linear-gradient(135deg, rgba(0,63,125,0.24), rgba(0,188,212,0.3))',
  },
  {
    id: '05',
    title: 'AI Cybersecurity & Compliance',
    copy: 'Security and governance embedded into every deployment from day one.',
    highlights: [
      'PolyVault encrypted data residency',
      'Continuous monitoring and threat detection',
      'Alignment with Australian Privacy Principles & ISO 27001',
    ],
    outcome: 'Trustworthy AI foundations for regulated industries.',
    icon: FaLock,
    accent: 'linear-gradient(135deg, rgba(0,188,212,0.28), rgba(0,63,125,0.32))',
  },
];

export default function Services() {
  return (
    <>
      <Navbar />
      
      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #001326 0%, #003f7d 55%, #00bcd4 100%)',
          color: 'white',
          padding: '120px 0 100px',
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
            transform: 'rotate(12deg)',
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
              marginBottom: '18px',
            }}
          >
            Service Catalogue
          </span>
          <h1 style={{ fontSize: '3.3rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'white' }}>
            Comprehensive AI Solutions Designed for Partners
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '720px', margin: '16px auto 0', fontSize: '1.12rem' }}>
            From strategic design to day-to-day automation, we build AI service lines that scale with your clients and keep your brand in front.
          </p>
        </div>
      </section>

      {/* Services */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, #f8fbff 0%, #eef4ff 45%, #ffffff 100%)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-100px',
            width: '320px',
            height: '320px',
            background: 'rgba(0, 63, 125, 0.1)',
            filter: 'blur(120px)',
          }}
        />
        <div className="container position-relative">
            <div className="row g-4">
            {serviceItems.map(({ id, title, copy, highlights, outcome, icon: Icon, accent }) => (
              <div key={id} className="col-lg-12">
                <div
                  className="glass-card"
                  style={{
                    position: 'relative',
                    padding: '36px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '-100px',
                      right: '-80px',
                      width: '260px',
                      height: '260px',
                      background: accent,
                      filter: 'blur(90px)',
                    }}
                  />
                  <div className="row g-4 align-items-center">
                    <div className="col-md-2">
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '16px',
                        }}
                      >
                        <div
                          className="glow-icon"
                          style={{
                            width: '72px',
                            height: '72px',
                            borderRadius: '22px',
                            background: accent,
                            color: 'var(--text-dark)',
                            backgroundSize: '200% 200%',
                          }}
                        >
                          <Icon size={28} />
                        </div>
                        <span
                          style={{
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            color: 'var(--text-dark)',
                          }}
                        >
                          {id}
                        </span>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <h3 style={{ fontSize: '1.9rem', color: 'var(--text-dark)', marginBottom: '12px' }}>{title}</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '18px' }}>{copy}</p>
                      <div className="row g-3">
                        <div className="col-lg-8">
                          <ul style={{ color: 'var(--text-muted)', marginBottom: '18px' }}>
                            {highlights.map((item) => (
                              <li key={item} style={{ marginBottom: '6px' }}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="col-lg-4">
                          <div
                            style={{
                              borderRadius: '18px',
                              background: 'rgba(0, 63, 125, 0.06)',
                              padding: '16px',
                              color: 'var(--text-dark)',
                              fontWeight: 600,
                            }}
                          >
                            <span style={{ display: 'block', fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#486581', marginBottom: '6px' }}>
                              Outcome
                            </span>
                            {outcome}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link
              href="/contact"
              className="btn btn-light btn-lg px-5 py-3 rounded-pill fw-semibold"
              style={{ background: '#003f7d', color: '#fff', border: 'none' }}
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
