'use client';
import { FaBookOpen, FaVideo, FaFileDownload, FaLightbulb, FaChartLine, FaCog } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Resources() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(0, 19, 38, 0.92) 0%, rgba(0, 63, 125, 0.85) 55%, rgba(0, 188, 212, 0.75) 100%), url('/images/hero image.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
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

      {/* Main Resource Categories */}
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
                description: 'In-depth analysis, playbooks, and interviews on AI-led transformation.',
                cta: 'Read Articles',
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
                accent: 'linear-gradient(135deg, rgba(102,126,234,0.26), rgba(162,155,254,0.3))',
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
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 35px 60px rgba(0, 26, 60, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 28px 48px rgba(0, 26, 60, 0.08)';
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
                    href={title === 'Articles' ? '#articles' : '#ebooks'}
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

      {/* eBooks */}
      <section id="ebooks" className="section" style={{ background: 'linear-gradient(135deg, #f8fbff 0%, #ffffff 100%)' }}>
        <div className="container">
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
              eBooks
            </span>
            <h2 style={{ fontSize: '2.35rem', color: 'var(--text-dark)', marginTop: '16px' }}>Downloadable Guides</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '720px', margin: '12px auto 0' }}>
              Tactical playbooks to help you plan, package, and launch AI services.
            </p>
          </div>
          <div className="row g-4">
            {[
              {
                title: 'AI Spark Challenge',
                summary:
                  'Join the ultimate AI innovation challenge. Compete for over $18,500 in prizes and bring your AI ideas to life with expert mentorship and resources.',
                features: ['Over $18,500 in prizes', 'Expert mentorship program', 'AI tools & resources', 'Network with innovators'],
              },
              {
                title: 'Fund Your AI Project',
                summary:
                  'Discover funding opportunities, grant programs, and investment strategies to bring your AI project from concept to reality.',
                features: ['Funding strategies', 'Grant opportunities', 'Investor connections', 'Pitch deck templates'],
              },
              {
                title: 'Got A Startup Idea?',
                summary:
                  'Turn your startup vision into reality. Get step-by-step guidance on validating, building, and launching your AI-powered business.',
                features: ['Idea validation framework', 'Business plan templates', 'Market research tools', 'Launch roadmap'],
              },
              {
                title: 'AI Lead Generation',
                summary:
                  'Stop chasing leads, let AI bring them to you. Learn how to build automated lead generation systems that work 24/7 for your business.',
                features: ['24/7 automated systems', 'AI agent implementation', 'Conversion optimisation', 'Complete framework'],
              },
            ].map(({ title, summary, features }, idx) => (
              <div key={title} className="col-lg-4 col-md-6">
                <div
                  className="glass-card"
                  style={{
                    padding: '26px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '16px',
                        background: 'rgba(0, 63, 125, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '16px',
                        color: '#003f7d',
                        fontSize: '1.2rem',
                        fontWeight: 700,
                      }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h4 style={{ fontSize: '1.2rem', color: 'var(--text-dark)', marginBottom: '10px' }}>{title}</h4>
                    <p style={{ color: 'var(--text-muted)' }}>{summary}</p>
                    {features && (
                      <ul style={{ paddingLeft: '18px', margin: '12px 0', color: 'var(--text-dark)' }}>
                        {features.map((feature) => (
                          <li key={feature} style={{ fontSize: '0.95rem', marginBottom: '6px' }}>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '6px 14px',
                      borderRadius: '999px',
                      background: 'rgba(0, 188, 212, 0.12)',
                      color: '#0b7285',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    Explore it
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section id="articles" className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span
              style={{
                display: 'inline-block',
                padding: '6px 16px',
                borderRadius: '999px',
                background: 'rgba(0, 63, 125, 0.1)',
                color: '#003f7d',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontSize: '0.75rem',
              }}
            >
              Featured Articles
            </span>
            <h2 style={{ fontSize: '2.35rem', color: 'var(--text-dark)', marginTop: '16px' }}>
              Latest Insights on AI Automation
            </h2>
          </div>

          <div className="row g-4">
            {[
              {
                title: 'AI-Powered Customer Support: Reducing Response Times by 70%',
                category: 'Case Study',
                excerpt: 'Discover how businesses are using AI voice agents to handle customer inquiries 24/7, dramatically improving satisfaction scores.',
                icon: <FaLightbulb />,
                gradient: 'linear-gradient(135deg, #003366 0%, #005599 100%)',
              },
              {
                title: 'Automating Administrative Tasks: A Complete Guide',
                category: 'Guide',
                excerpt: 'Learn how AI agents can manage scheduling, document processing, and routine communications, freeing your team for strategic work.',
                icon: <FaCog />,
                gradient: 'linear-gradient(135deg, #00bcd4 0%, #26c6da 100%)',
              },
              {
                title: 'Predictive Analytics for Small Business Growth',
                category: 'Tutorial',
                excerpt: 'Harness the power of AI-driven data analytics to forecast trends, optimise inventory, and make informed business decisions.',
                icon: <FaChartLine />,
                gradient: 'linear-gradient(135deg, #00bcd4 0%, #26c6da 100%)',
              },
            ].map((article, idx) => (
              <div key={idx} className="col-lg-4">
                <div
                  style={{
                    borderRadius: '20px',
                    background: '#ffffff',
                    border: '1px solid rgba(16, 42, 67, 0.08)',
                    boxShadow: '0 15px 30px rgba(0, 26, 60, 0.06)',
                    overflow: 'hidden',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 26, 60, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 26, 60, 0.06)';
                  }}
                >
                  <div
                    style={{
                      height: '200px',
                      background: article.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '3rem',
                    }}
                  >
                    {article.icon}
                  </div>
                  <div style={{ padding: '24px' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '4px 12px',
                        borderRadius: '999px',
                        background: 'rgba(0, 63, 125, 0.08)',
                        color: '#003f7d',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        marginBottom: '12px',
                      }}
                    >
                      {article.category}
                    </span>
                    <h4 style={{ fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: '12px' }}>
                      {article.title}
                    </h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                      {article.excerpt}
                    </p>
                    <Link
                      href="#"
                      style={{
                        color: '#003f7d',
                        fontWeight: '600',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        marginTop: '12px',
                      }}
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}