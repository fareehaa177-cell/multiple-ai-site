'use client';
import { FaPhone, FaFileAlt, FaCalculator, FaPen, FaDatabase, FaLock, FaLightbulb, FaCog } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const agents = [
  {
    category: 'Voice & Reception',
    icon: FaPhone,
    examples: 'Reception Agent, Call Routing Agent',
    description: 'Answers and routes client calls, captures leads, and notifies teams in real-time.',
    accent: 'linear-gradient(135deg, rgba(0,63,125,0.2), rgba(0,188,212,0.3))',
  },
  {
    category: 'Administration & Workflow',
    icon: FaCog,
    examples: 'Admin Agent, Scheduler Agent',
    description: 'Manages documents, contracts, invoices, and task automation across internal systems.',
    accent: 'linear-gradient(135deg, rgba(0,188,212,0.24), rgba(102,126,234,0.32))',
  },
  {
    category: 'Accounts & Finance',
    icon: FaCalculator,
    examples: 'Accounts Agent, Cashflow Agent',
    description: 'Tracks payments, sends reminders, manages reconciliations, and generates financial reports.',
    accent: 'linear-gradient(135deg, rgba(255,204,0,0.26), rgba(255,152,0,0.3))',
  },
  {
    category: 'Creative & Content',
    icon: FaPen,
    examples: 'Writer Agent, Video Agent, Voice Agent',
    description: 'Produces white papers, proposals, and multimedia content tailored to each client brand.',
    accent: 'linear-gradient(135deg, rgba(0,63,125,0.22), rgba(0,188,212,0.32))',
  },
  {
    category: 'Data & Analytics',
    icon: FaDatabase,
    examples: 'Insights Agent, Predictive Agent',
    description: 'Transforms raw data into dashboards, anomaly alerts, and predictive insights.',
    accent: 'linear-gradient(135deg, rgba(0,188,212,0.28), rgba(0,63,125,0.24))',
  },
  {
    category: 'Cyber & Compliance',
    icon: FaLock,
    examples: 'Security Agent',
    description: 'Monitors data integrity, supports incident response, and enforces governance policies.',
    accent: 'linear-gradient(135deg, rgba(0,63,125,0.26), rgba(102,126,234,0.34))',
  },
  {
    category: 'Consulting & Advisory',
    icon: FaLightbulb,
    examples: 'AI Strategy Agent',
    description: 'Delivers AI readiness assessments, ROI modelling, and integration playbooks.',
    accent: 'linear-gradient(135deg, rgba(255,152,0,0.28), rgba(0,188,212,0.24))',
  },
];

export default function AIAgents() {
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
            right: '-120px',
            width: '420px',
            height: '420px',
            background: 'rgba(0, 188, 212, 0.3)',
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
            AI Agents
          </span>
          <h1 style={{ color: 'white', fontSize: '3.1rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Intelligent Agents for Real-World Businesses
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)', maxWidth: '720px', margin: '18px auto 0' }}>
            Every business task can be automated or enhanced by the right AI agent. Explore our suite of pre-configured agents — each
            customisable and deployable under your brand.
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
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-120px',
            width: '320px',
            height: '320px',
            background: 'rgba(0, 63, 125, 0.12)',
            filter: 'blur(120px)',
          }}
        />
        <div className="container position-relative">
          <div className="row g-4">
            {agents.map(({ category, icon: Icon, examples, description, accent }) => (
              <div key={category} className="col-xl-4 col-lg-6">
                <div
                  className="glass-card"
                  style={{
                    padding: '30px',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
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
                    className="glow-icon"
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '20px',
                      background: accent,
                      color: '#0f1f38',
                      marginBottom: '20px',
                      backgroundSize: '200% 200%',
                      position: 'relative',
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.45rem', color: 'var(--text-dark)', marginBottom: '8px', position: 'relative' }}>{category}</h3>
                  <p style={{ fontWeight: 600, color: '#0b7285', marginBottom: '12px', position: 'relative' }}>{examples}</p>
                  <p style={{ color: 'var(--text-muted)', position: 'relative', marginBottom: 0 }}>{description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5 d-flex flex-wrap gap-3 justify-content-center">
            <Link
              href="/contact"
              className="btn btn-light btn-lg px-5 py-3 rounded-pill fw-semibold"
              style={{ background: '#003f7d', color: '#fff', border: 'none' }}
            >
              Request the Full Agent Catalogue
            </Link>
            <Link
              href="/contact"
              className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-semibold"
              style={{ borderColor: 'rgba(16, 42, 67, 0.2)', color: '#003f7d' }}
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
