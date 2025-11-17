'use client';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { FaGlobe, FaLaptop, FaMobile, FaCheckCircle, FaArrowRight, FaPaintBrush, FaServer, FaRocket } from 'react-icons/fa';

export default function WebAppDevelopment() {
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
                  Web App Development
                </h1>
                <p className="lead mb-0" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.82)', maxWidth: '540px' }}>
                  Transform business processes with powerful, custom web applications. We design platforms that simplify workflows, boost operational speed, and help you stand out in your market.
                </p>
              </div>
              <div className="d-flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn btn-light btn-lg px-4 py-3 rounded-pill fw-semibold"
                  style={{ background: '#667eea', color: '#fff', border: 'none' }}
                >
                  Start Building
                </Link>
                <Link
                  href="/services"
                  className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill fw-semibold"
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
                    background: 'linear-gradient(135deg, rgba(162,155,254,0.3), rgba(0,188,212,0.4))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <FaGlobe size={120} style={{ color: 'rgba(255,255,255,0.9)' }} />
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
              What We Build
            </span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#132f4c', marginBottom: '12px' }}>
              Custom Web Applications That Drive Growth
            </h2>
            <p style={{ color: '#486581', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto' }}>
              From internal management tools to customer-facing portals, we craft scalable web apps that integrate with your existing systems and evolve with your business.
            </p>
          </div>
          
          <div className="row g-4">
            {[
              {
                title: 'Business Management Platforms',
                description: 'Custom apps that orchestrate projects, resources, billing, and operations from one intuitive hub.',
                icon: FaPaintBrush,
                accent: 'linear-gradient(135deg, rgba(0,63,125,0.18), rgba(0,188,212,0.35))',
              },
              {
                title: 'Customer Portals & Service Platforms',
                description: 'Secure portals for clients, tenants, and patients with scheduling, self-service, and communications baked in.',
                icon: FaServer,
                accent: 'linear-gradient(135deg, rgba(0,188,212,0.24), rgba(102,126,234,0.32))',
              },
              {
                title: 'E-commerce & Data Dashboards',
                description: 'Commerce experiences, booking engines, and rich analytics dashboards tailored to your workflows.',
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
                Expected Outcomes
              </span>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#0f1f38', marginBottom: '16px' }}>
                Streamlined workflows, happier users
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '24px' }}>
                Every build focuses on speed, usability, and seamless integration so your team and customers get more done in fewer clicks.
              </p>
              <div className="d-flex flex-column gap-3">
                {[
                  'Streamlined processes and reduced manual admin',
                  'Delightful, intuitive interfaces for staff and clients',
                  'Scalable architecture that grows with your business',
                  'Competitive advantage through custom functionality',
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
                  Industry Applications
                </h3>
                <div className="d-flex flex-column gap-3">
                  {[
                    'Healthcare & Medical – patient portals, telehealth, scheduling systems',
                    'Real Estate & Property – management platforms, tenant portals, virtual showcase tools',
                    'Financial Services – customer portals, loan origination, investment tracking',
                    'Professional Services – client management, billing portals, performance dashboards',
                    'Construction & Engineering – project management, contractor portals, compliance tracking',
                    'Retail & E-commerce – commerce experiences, inventory tools, customer service portals',
                    'Manufacturing & Industrial – production tracking, supplier portals, maintenance schedulers',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <FaMobile style={{ color: '#003f7d', fontSize: '1rem', flexShrink: 0 }} />
                      <span style={{ color: 'var(--text-dark)', fontSize: '1rem' }}>{item}</span>
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
            Ready to Build Your Web Application?
          </h2>
          <p
            className="lead mb-4"
            style={{ color: 'rgba(255,255,255,0.82)', maxWidth: '680px', margin: '0 auto 28px' }}
          >
            Let's discuss your vision and create a web app that transforms your business operations.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link
              href="/contact"
              className="btn btn-light btn-lg px-5 py-3 rounded-pill fw-semibold"
              style={{ color: '#001326' }}
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-semibold"
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

