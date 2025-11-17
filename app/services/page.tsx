'use client';
import { FaBrain, FaCogs, FaCode, FaChartLine, FaGlobe, FaDatabase } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const serviceItems = [
  {
    id: '01',
    title: 'AI Consulting',
    slug: 'ai-consulting',
    copy: 'We help identify the best AI opportunities for your business and build strategies that align with your goals so every investment delivers measurable outcomes.',
    features: [
      'Opportunity discovery workshops',
      'Goal-aligned AI roadmaps and governance',
      'ROI modeling and executive enablement',
    ],
    icon: FaBrain,
    accent: 'linear-gradient(135deg, rgba(0,63,125,0.15), rgba(0,188,212,0.25))',
  },
  {
    id: '02',
    title: 'Automation Solutions',
    slug: 'automation-solutions',
    copy: 'Streamline repetitive tasks and enhance efficiency with intelligent automation tailored to your operations, freeing teams to focus on high-value work.',
    features: [
      'Process mapping & automation design',
      'AI-powered digital workers & RPA hand-offs',
      'Performance dashboards and tuning',
    ],
    icon: FaCogs,
    accent: 'linear-gradient(135deg, rgba(0,63,125,0.15), rgba(0,188,212,0.25))',
  },
  {
    id: '03',
    title: 'Custom AI Software Development',
    slug: 'custom-ai-software',
    copy: 'From concept to deployment, we build AI-powered software that integrates seamlessly with your existing systems and scales with your business.',
    features: [
      'Product discovery & technical architecture',
      'API, data, and legacy platform integration',
      'MLOps, QA, and release management',
    ],
    icon: FaCode,
    accent: 'linear-gradient(135deg, rgba(0,63,125,0.15), rgba(0,188,212,0.25))',
  },
  {
    id: '04',
    title: 'Machine Learning Models',
    slug: 'machine-learning',
    copy: 'Utilise data-driven insights with models that predict trends, optimise processes, and support smarter decision-making.',
    features: [
      'Predictive analytics & forecasting',
      'Optimization and recommendation engines',
      'Model monitoring, tuning, and validation',
    ],
    icon: FaChartLine,
    accent: 'linear-gradient(135deg, rgba(0,63,125,0.15), rgba(0,188,212,0.25))',
  },
  {
    id: '05',
    title: 'Web App Development',
    slug: 'web-app-development',
    copy: 'We build custom web apps that simplify workflows, boost speed, and elevate customer experiences—ready to scale with your operations.',
    features: [
      'UX research & design system implementation',
      'Secure, high-performance engineering',
      'DevOps, monitoring, and optimisation',
    ],
    icon: FaGlobe,
    accent: 'linear-gradient(135deg, rgba(0,63,125,0.15), rgba(0,188,212,0.25))',
  },
  {
    id: '06',
    title: 'Data Mining',
    slug: 'data-mining',
    copy: 'Extract gold from messy databases and forgotten files. We uncover profitable patterns and hidden revenue streams from data you already own.',
    features: [
      'Data audits & enrichment strategies',
      'Unstructured data processing & tagging',
      'Opportunity scoring and insight packs',
    ],
    icon: FaDatabase,
    accent: 'linear-gradient(135deg, rgba(0,63,125,0.15), rgba(0,188,212,0.25))',
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
            background: 'rgba(102, 126, 234, 0.3)',
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
          <div className="text-center mb-5">
            <span
              style={{
                display: 'inline-block',
                padding: '6px 16px',
                borderRadius: '999px',
                background: 'rgba(0, 63, 125, 0.08)',
                color: '#003f7d',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontSize: '0.75rem',
              }}
            >
              AI Service Lines
            </span>
            <h2 style={{ fontSize: '2.3rem', color: 'var(--text-dark)', marginTop: '16px' }}>Specialised Services for Every Stage</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '720px', margin: '12px auto 0' }}>
              Six focused offerings that mirror the typography, spacing, and polish used throughout the site.
            </p>
          </div>

          <div className="row g-4">
            {serviceItems.map(({ id, title, copy, features, icon: Icon, accent, slug }) => (
              <div key={id} className="col-lg-6">
                <div
                  style={{
                    borderRadius: '26px',
                    background: '#ffffff',
                    border: '1px solid rgba(16, 42, 67, 0.08)',
                    boxShadow: '0 25px 45px rgba(15, 31, 56, 0.08)',
                    padding: '32px',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  className="glass-card"
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '-90px',
                      right: '-70px',
                      width: '220px',
                      height: '220px',
                      background: accent,
                      filter: 'blur(90px)',
                      opacity: 0.7,
                    }}
                  />
                  <div style={{ position: 'relative' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div
                          style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '20px',
                            background: accent,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#0f1f38',
                            boxShadow: '0 18px 32px rgba(15, 31, 56, 0.12)',
                          }}
                        >
                          <Icon size={26} />
                        </div>
                        <div>
                          <span
                            style={{
                              display: 'inline-block',
                              padding: '4px 12px',
                              borderRadius: '999px',
                              background: 'rgba(0, 63, 125, 0.08)',
                              color: '#003f7d',
                              fontSize: '0.75rem',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                            }}
                          >
                            {id}
                          </span>
                          <h3 style={{ fontSize: '1.6rem', color: 'var(--text-dark)', marginTop: '8px', marginBottom: 0 }}>{title}</h3>
                        </div>
                      </div>
                    </div>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '18px' }}>{copy}</p>
                    <ul style={{ paddingLeft: '20px', color: 'var(--text-dark)', marginBottom: '20px' }}>
                      {features.map((feature) => (
                        <li key={feature} style={{ marginBottom: '8px' }}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${slug}`}
                      className="btn btn-outline-primary rounded-pill"
                      style={{
                        fontWeight: 600,
                        padding: '8px 20px',
                        fontSize: '0.9rem',
                      }}
                    >
                      Learn More →
                    </Link>
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
