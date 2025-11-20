'use client';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { FaBrain, FaChartLine, FaUsers, FaCheckCircle, FaArrowRight, FaLightbulb, FaRocket, FaShieldAlt } from 'react-icons/fa';

export default function AIConsulting() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #001326 0%, #003f7d 55%, #00bcd4 100%)',
          color: 'white',
          padding: '140px 0 110px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            left: '-160px',
            width: '360px',
            height: '360px',
            background: 'rgba(102, 126, 234, 0.35)',
            filter: 'blur(120px)',
            transform: 'rotate(18deg)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-180px',
            right: '-120px',
            width: '480px',
            height: '480px',
            background: 'rgba(0, 188, 212, 0.28)',
            filter: 'blur(120px)',
            transform: 'rotate(-12deg)',
          }}
        />
        <div className="container position-relative">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <div style={{ marginBottom: '2rem' }}>
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
                  Service
                </span>
                <h1
                  style={{
                    fontSize: '3.5rem',
                    fontWeight: 700,
                    color: 'white',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    marginBottom: '16px',
                  }}
                >
                  AI Consulting & Strategy
                </h1>
                <p className="lead mb-0" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.82)', maxWidth: '540px' }}>
                  Navigate the AI landscape with confidence. We surface the most profitable automation opportunities for Perth organisations and back every recommendation with a clear ROI story.
                </p>
              </div>
              <div className="d-flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn-pill btn-pill-gradient"
                >
                  Book a Consultation
                </Link>
                <Link
                  href="/services"
                  className="btn-pill btn-pill-white"
                >
                  View All Services
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                style={{
                  position: 'relative',
                  maxWidth: '520px',
                  margin: '0 auto',
                  borderRadius: '36px',
                  padding: '24px',
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.32)',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '360px',
                    borderRadius: '24px',
                    background: 'linear-gradient(135deg, rgba(102,126,234,0.3), rgba(0,188,212,0.4))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <FaBrain size={120} style={{ color: 'rgba(255,255,255,0.9)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #e9f3ff 100%)',
          padding: '90px 0',
        }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <span
              style={{
                display: 'inline-block',
                padding: '6px 14px',
                borderRadius: '999px',
                background: 'rgba(0, 63, 125, 0.08)',
                color: '#003f7d',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontSize: '0.72rem',
                marginBottom: '16px',
              }}
            >
              Consulting Process
            </span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#132f4c', marginBottom: '12px' }}>
              Strategic AI Implementation That Delivers
            </h2>
            <p style={{ color: '#486581', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto' }}>
              Every engagement begins with understanding your current systems, blockers, and growth targets. From there we rank the highest-value AI plays and build a rollout plan that fits your budget and timeline.
            </p>
          </div>
          
          <div className="row g-4">
            {[
              {
                title: 'Readiness Assessment',
                description: 'Audit people, process, and data maturity to uncover friction and quantify AI uplift.',
                icon: FaLightbulb,
                accent: 'linear-gradient(135deg, rgba(0,63,125,0.18), rgba(0,188,212,0.35))',
              },
              {
                title: 'Opportunity Prioritisation',
                description: 'Score initiatives by effort, value, and risk to create a focused 12-month backlog.',
                icon: FaChartLine,
                accent: 'linear-gradient(135deg, rgba(0,188,212,0.24), rgba(102,126,234,0.32))',
              },
              {
                title: 'Roadmap & ROI Model',
                description: 'Define phased delivery, talent needs, and measurable success metrics to earn stakeholder approval.',
                icon: FaRocket,
                accent: 'linear-gradient(135deg, rgba(102,126,234,0.26), rgba(162,155,254,0.3))',
              },
            ].map(({ title, description, icon: Icon, accent }) => (
              <div className="col-lg-4 col-md-6" key={title}>
                <div className="glass-card" style={{ padding: '32px', height: '100%' }}>
                  <div
                    className="glow-icon"
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '18px',
                      background: accent,
                      color: '#0f1f38',
                      marginBottom: '20px',
                      backgroundSize: '200% 200%',
                    }}
                  >
                    <Icon size={28} />
                  </div>
                  <h4 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '12px' }}>{title}</h4>
                  <p style={{ color: 'var(--text-muted)', marginBottom: 0 }}>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        className="section"
        style={{
          background: 'radial-gradient(circle at top left, rgba(0, 63, 125, 0.18), transparent 55%), #ffffff',
        }}
      >
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span
                style={{
                  display: 'inline-block',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  background: 'rgba(102, 126, 234, 0.25)',
                  color: '#003f7d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: '0.72rem',
                  marginBottom: '16px',
                }}
              >
                Industry Focus
              </span>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#0f1f38', marginBottom: '16px' }}>
                Perth market insight with national-grade delivery
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '24px' }}>
                We’ve mapped AI value for regulated, asset-heavy, and service-driven organisations across WA.
              </p>
              <div className="d-flex flex-column gap-3">
                {[
                  'Healthcare & Medical – outcome prediction, diagnostic support, compliance monitoring',
                  'Financial Services & Banking – risk analysis, fraud detection, automated lending',
                  'Construction & Engineering – project controls, cost forecasting, safety intelligence',
                  'Retail & E-commerce – customer behaviour prediction, inventory optimisation, personalised marketing',
                ].map((benefit) => (
                  <div key={benefit} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <FaCheckCircle style={{ color: '#00bcd4', fontSize: '1.2rem', flexShrink: 0 }} />
                    <span style={{ color: 'var(--text-dark)', fontSize: '1rem' }}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div
                style={{
                  borderRadius: '28px',
                  background: 'linear-gradient(135deg, rgba(0,63,125,0.08), rgba(0,188,212,0.12))',
                  padding: '40px',
                  border: '1px solid rgba(16, 42, 67, 0.08)',
                }}
              >
                <h3 style={{ fontSize: '1.8rem', color: 'var(--text-dark)', marginBottom: '20px' }}>
                  Expected Outcomes
                </h3>
                <div className="d-flex flex-column gap-3">
                  {[
                    'Clear, prioritised AI roadmap with investment ranges',
                    'ROI projections and timeline aligned to leadership expectations',
                    'Risk mitigation plan covering data, compliance, and change management',
                    'Executive-ready narrative to accelerate stakeholder buy-in',
                    'Foundation for long-term AI transformation and delivery support',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          background: '#003f7d',
                          marginTop: '8px',
                        }}
                      />
                      <p style={{ margin: 0, color: '#0f1f38', fontSize: '0.98rem' }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #001326 0%, #003f7d 55%, #00bcd4 100%)',
          color: 'white',
          padding: '110px 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-140px',
            right: '-180px',
            width: '520px',
            height: '520px',
            background: 'rgba(102, 126, 234, 0.28)',
            filter: 'blur(160px)',
          }}
        />
        <div className="container position-relative text-center">
          <h2 className="display-5 fw-bold mb-3" style={{ color: 'white', letterSpacing: '-0.01em' }}>
            Ready to Build Your AI Strategy?
          </h2>
          <p
            className="lead mb-4"
            style={{ color: 'rgba(255,255,255,0.82)', maxWidth: '680px', margin: '0 auto 28px' }}
          >
            Let&apos;s discuss how AI can transform your business operations and drive measurable growth.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link
              href="/contact"
              className="btn-pill btn-pill-white"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/services"
              className="btn-pill btn-pill-white"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}

