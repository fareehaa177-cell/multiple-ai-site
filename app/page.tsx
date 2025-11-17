'use client';
import { useState, useEffect, useRef, type CSSProperties } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBrain, FaRobot, FaChartLine, FaFileAlt, FaShieldAlt, FaUsers, FaPhone, FaCog, FaCalculator, FaPen, FaDatabase, FaLock, FaLightbulb, FaBars, FaTimes, FaQuoteLeft } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Animated Counter Component
function AnimatedCounter({ end, suffix = '', duration = 2000, label }: { end: number; suffix?: string; duration?: number; label: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const startTime = Date.now();
            const startValue = 0;

            const animate = () => {
              const now = Date.now();
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);

              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);

              setCount(currentValue);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(end);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [end, duration, hasAnimated]);

  return (
    <div ref={counterRef} className="text-center">
      <p className="mb-1" style={{ fontSize: '2rem', fontWeight: 700, color: 'white' }}>
        {count.toLocaleString()}{suffix}
      </p>
      <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem' }}>{label}</span>
    </div>
  );
}

export default function Home() {
  const formInputStyle: CSSProperties = {
    padding: '14px 16px',
    borderRadius: '14px',
    border: '1px solid rgba(0, 26, 51, 0.18)',
    background: 'rgba(255, 255, 255, 0.95)',
    color: '#0A2A6A',
    fontWeight: 500,
    boxShadow: '0 8px 20px rgba(10, 42, 106, 0.12)',
  };

  const formLabelStyle: CSSProperties = {
    color: '#0A2A6A',
    fontWeight: 700,
    letterSpacing: '0.05em',
    marginBottom: '6px',
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage:
            "linear-gradient(130deg, rgba(0, 19, 38, 0.9) 0%, rgba(0, 63, 125, 0.8) 55%, rgba(0, 188, 212, 0.75) 100%), url('/images/hero%20image.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          padding: '140px 0 110px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container position-relative">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <div style={{ marginBottom: '2rem' }}>
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
                  Empowering Businesses <br />through AI
                </h1>
                <p className="lead mb-0" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.82)', maxWidth: '540px' }}>
                  We design, build, and deliver intelligent automation, analytics, and creative AI services that power the next generation of
                  professional businesses under your own brand.
                </p>
              </div>
              <div className="d-flex flex-wrap gap-3">
                <Link
                  href="/ai-agents"
                  className="btn btn-light btn-lg px-4 py-3 rounded-pill fw-semibold"
                  style={{ background: '#667eea', color: '#fff', border: 'none' }}
                >
                  Explore Our Agents
                </Link>
                <Link
                  href="/contact"
                  className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill fw-semibold"
                >
                  Partner with Us
                </Link>
              </div>

              {/* Animated Statistics */}
              <div className="row g-4 mt-5">
                <div className="col-md-4">
                  <AnimatedCounter end={100} suffix="%" label="24/7 Smart Automation" duration={1800} />
                </div>
                <div className="col-md-4">
                  <AnimatedCounter end={10000} suffix="+" label="Automated Customer Interactions" duration={2000} />
                </div>
                <div className="col-md-4">
                  <AnimatedCounter end={99.9} suffix="%" label="Accuracy & Response Understanding" duration={1800} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Video */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #e9f3ff 100%)',
          padding: '90px 0',
        }}
      >
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <span
                style={{
                  display: 'inline-block',
                  padding: '8px 16px',
                  borderRadius: '999px',
                  background: 'rgba(0, 63, 125, 0.08)',
                  color: '#003f7d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontSize: '0.78rem',
                  marginBottom: '16px',
                }}
              >
                See the Platform Live
              </span>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#132f4c', marginBottom: '12px' }}>
                What We Do
              </h2>
              <p style={{ color: '#486581', fontSize: '1.05rem', lineHeight: 1.6 }}>
                MultipleAI Solutions empowers accounting firms, marketing agencies, and consultants to offer AI-driven services without hiring internal developers.
                <br />
                Our white-label model lets you deliver AI products instantly. We provide the technology, security, and support; you keep the client relationship.
              </p>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="btn btn-primary btn-lg px-4 py-3 rounded-pill fw-semibold"
                  style={{ background: '#003f7d', border: 'none' }}
                >
                  Book a Live Demo
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div
                style={{
                  position: 'relative',
                  borderRadius: '28px',
                  overflow: 'hidden',
                  boxShadow: '0 28px 56px rgba(15, 31, 56, 0.16)',
                  border: '1px solid rgba(16, 42, 67, 0.08)',
                  background: '#000814',
                }}
              >
                <video
                  controls
                  playsInline
                  preload="metadata"
                  style={{ width: '100%', display: 'block' }}
                  src="/video/multipleai.mp4"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}

      {/* How It Works */}
      <section
        className="section"
        style={{
          background: 'radial-gradient(circle at top left, rgba(0, 63, 125, 0.18), transparent 55%), #ffffff',
        }}
      >
        <div className="container">
          <div className="text-center mb-5">
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
              }}
            >
              Partner Launch Blueprint
            </span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#0f1f38', marginTop: '16px' }}>How It Works</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '680px', margin: '12px auto 0' }}>
              Strategy meets execution. We guide your team from discovery to scale with ready-made playbooks, technical expertise, and ongoing optimization.
            </p>
          </div>
          
          <div className="row g-5">
            {[
              {
                step: '01',
                title: 'Partner Onboarding',
                copy: 'We run discovery, compliance, and data mapping workshops, then mirror your brand voice and workflows.',
              },
              {
                step: '02',
                title: 'White Label Deployment',
                copy: 'Launch your new AI services with co-branded playbooks, training assets, and ready to ship automations.',
              },
              {
                step: '03',
                title: 'Ongoing Support',
                copy: 'We monitor, improve, and report performance while your consultants focus on client relationships.',
              },
            ].map(({ step, title, copy }, index) => (
              <div className="col-lg-4 col-md-6" key={title}>
                <div
                  className="glass-card"
                  style={{
                    position: 'relative',
                    padding: '36px 30px',
                    height: '100%',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '-60px',
                      right: '-40px',
                      width: '180px',
                      height: '180px',
                      background: index === 0
                        ? 'rgba(0, 63, 125, 0.18)'
                        : index === 1
                        ? 'rgba(0, 188, 212, 0.24)'
                        : 'rgba(102, 126, 234, 0.3)',
                      filter: 'blur(60px)',
                    }}
                  />
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '64px',
                      height: '64px',
                      borderRadius: '18px',
                      background: 'linear-gradient(135deg, #003f7d, #00bcd4)',
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '1.3rem',
                      marginBottom: '26px',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {step}
                  </div>
                  <h4 style={{ fontSize: '1.4rem', color: '#0f1f38', marginBottom: '14px' }}>{title}</h4>
                  <p style={{ color: 'var(--text-muted)', marginBottom: 0 }}>{copy}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link
              href="/contact"
              className="btn btn-dark btn-lg px-5 py-3 rounded-pill fw-semibold"
              style={{ background: '#003f7d', border: 'none' }}
            >
              Start Your Partner Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Why MultipleAI */}
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
            left: '-40px',
            width: '260px',
            height: '260px',
            background: 'rgba(0, 188, 212, 0.25)',
            borderRadius: '50%',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-160px',
            right: '-120px',
            width: '420px',
            height: '420px',
            background: 'rgba(102, 126, 234, 0.22)',
            borderRadius: '50%',
            filter: 'blur(120px)',
          }}
        />
        <div className="container position-relative">
          <div className="text-center mb-5">
            <h2
              style={{
                fontSize: '2.4rem',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                color: '#ffffff',
                textShadow: '0 10px 24px rgba(0, 0, 0, 0.35)',
              }}
            >
              Why MultipleAI
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '720px', margin: '14px auto 0' }}>
              A secure, proven platform with a human partner success team, purpose-built for agencies, consulting firms, and professional services.
            </p>
          </div>
          
          <div className="row g-4">
            {[
              {
                title: 'Proven & Tested',
                copy: 'Battle tested white label framework across Australian professional services with measurable ROI.',
                Icon: FaShieldAlt,
                accent: 'linear-gradient(135deg, rgba(255,255,255,0.22), rgba(0,188,212,0.35))',
              },
              {
                title: 'Quick to Market',
                copy: 'Service design sprints and ready-to-go automations get you launching in weeks, not quarters.',
                Icon: FaCog,
                accent: 'linear-gradient(135deg, rgba(102,126,234,0.32), rgba(0,188,212,0.22))',
              },
              {
                title: 'Powered by Local Talent',
                copy: 'Australian professionals delivering consistent quality, fast response times, and work aligned with local expectations.',
                Icon: FaLock,
                accent: 'linear-gradient(135deg, rgba(0,188,212,0.35), rgba(0,63,125,0.35))',
              },
              {
                title: 'Training Hub',
                copy: 'Graduate Talent Hub and partner enablement resources that keep your team resourced and certified.',
                Icon: FaUsers,
                accent: 'linear-gradient(135deg, rgba(255,255,255,0.25), rgba(102,126,234,0.35))',
              },
              {
                title: 'Scalable Economics',
                copy: 'Volume-friendly pricing and shared success metrics that align with how you scale client services.',
                Icon: FaChartLine,
                accent: 'linear-gradient(135deg, rgba(0, 188, 212, 0.32), rgba(102, 126, 234, 0.28))',
              },
              {
                title: 'Dedicated Support',
                copy: 'Expert partner success team providing ongoing guidance, optimization, and strategic advice to ensure your success.',
                Icon: FaUsers,
                accent: 'linear-gradient(135deg, rgba(0,188,212,0.3), rgba(102,126,234,0.25))',
              },
            ].map(({ title, copy, Icon, accent }) => (
              <div className="col-lg-4 col-md-6" key={title}>
                <div className="glass-card glass-card--dark" style={{ padding: '28px', height: '100%' }}>
                  <div
                    className="glow-icon glow-icon--inverted"
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '18px',
                      background: accent,
                      color: 'white',
                      marginBottom: '20px',
                      backgroundSize: '200% 200%',
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <h5 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '10px' }}>{title}</h5>
                  <p style={{ color: 'rgba(255,255,255,0.72)', marginBottom: 0 }}>{copy}</p>
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
              Request a Demo
            </Link>
          </div>
        </div>
      </section>


      {/* AI Agents Portfolio Section */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 50%, #ffffff 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            background: 'rgba(0, 63, 125, 0.1)',
            filter: 'blur(120px)',
            zIndex: 0,
          }}
        />
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="text-center mb-5">
            <span
              style={{
                display: 'inline-block',
                padding: '7px 18px',
                borderRadius: '999px',
                background: 'rgba(0, 63, 125, 0.1)',
                color: '#003f7d',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontSize: '0.75rem',
                marginBottom: '16px',
              }}
            >
              AI Agents Portfolio
            </span>
            <h2 style={{ fontSize: '2.45rem', fontWeight: 700, color: '#132f4c', marginBottom: '12px' }}>
              Powerful AI Agents for Every Business Need
            </h2>
            <p style={{ color: '#486581', maxWidth: '720px', margin: '0 auto 40px', fontSize: '1.05rem' }}>
              Discover our comprehensive suite of intelligent AI agents designed to automate, enhance, and transform every aspect of your business operations, from reception to security.
            </p>
          </div>
          
          <div className="row g-4 mb-5">
            {[
              {
                title: 'AI Receptionist Agent',
                tagline: 'Your 24/7 Super Friendly Front Desk',
                description: 'Never miss a call again. Our AI Receptionist Agent answers every inquiry with a warm, human like Australian voice.',
                icon: FaPhone,
                accent: 'linear-gradient(135deg, rgba(0,63,125,0.18), rgba(0,188,212,0.35))',
              },
              {
                title: 'Admin AI Agent',
                tagline: 'Your Smart, Tireless Back Office Assistant',
                description: 'Automate scheduling, reminders, follow ups, workflows, ticketing, and data entry with precision.',
                icon: FaCog,
                accent: 'linear-gradient(135deg, rgba(0,188,212,0.24), rgba(102,126,234,0.32))',
              },
              {
                title: 'Invoice, GST & Tax AI Agent',
                tagline: 'Fast. Accurate. Stress Free Business Accounting',
                description: 'Australian built financial assistant handling invoices, GST summaries, tax breakdowns, and compliance.',
                icon: FaCalculator,
                accent: 'linear-gradient(135deg, rgba(102,126,234,0.26), rgba(162,155,254,0.3))',
              },
              {
                title: 'AI Sales Agent',
                tagline: 'Your High Performance Closer Working 24/7',
                description: 'Prospecting, follow ups, handling objections, warming leads, and booking calls without salary or commissions.',
                icon: FaUsers,
                accent: 'linear-gradient(135deg, rgba(0,63,125,0.22), rgba(0,188,212,0.32))',
              },
              {
                title: 'SEO AI Agent',
                tagline: 'Rank Higher. Faster. Smarter.',
                description: 'Keyword research, competitor analysis, content strategy, backlink audits, and on page optimisation automated.',
                icon: FaChartLine,
                accent: 'linear-gradient(135deg, rgba(0,188,212,0.28), rgba(0,63,125,0.24))',
              },
              {
                title: 'Social Media AI Agent',
                tagline: 'Daily Content. Trend Insights. Perfect Consistency.',
                description: 'Generates posts, captions, creatives, hashtags, trend analysis, and weekly content calendars.',
                icon: FaPen,
                accent: 'linear-gradient(135deg, rgba(162,155,254,0.28), rgba(0,188,212,0.24))',
              },
            ].map(({ title, tagline, description, icon: Icon, accent }) => (
              <div className="col-lg-4 col-md-6" key={title}>
                <div className="glass-card" style={{ padding: '28px', height: '100%', transition: 'transform 0.3s ease' }}>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '64px 1fr',
                      columnGap: '18px',
                      rowGap: '6px',
                      alignItems: 'flex-start',
                    }}
                  >
                    <div
                      className="glow-icon"
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '18px',
                        background: accent,
                        color: '#0f1f38',
                        backgroundSize: '200% 200%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gridRow: 'span 2',
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    <h4 style={{ fontSize: '1.3rem', color: 'var(--text-dark)', marginBottom: '2px' }}>{title}</h4>
                    <p style={{ color: '#0b7285', fontSize: '0.9rem', fontWeight: 600, marginBottom: 0 }}>{tagline}</p>
                    <div style={{ gridColumn: '2 / -1', gridRow: 'span 1' }}>
                      <p style={{ color: 'var(--text-muted)', marginBottom: 0, fontSize: '0.95rem' }}>{description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/ai-agents"
              className="btn btn-light btn-lg px-5 py-3 rounded-pill fw-semibold"
              style={{ background: '#003f7d', color: '#fff', border: 'none' }}
            >
              Explore All AI Agents
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 51, 102, 0.08) 0%, rgba(102, 126, 234, 0.12) 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            left: '-80px',
            width: '220px',
            height: '220px',
            background: 'rgba(0, 85, 153, 0.15)',
            borderRadius: '40px',
            transform: 'rotate(25deg)',
            filter: 'blur(12px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-160px',
            right: '-40px',
            width: '300px',
            height: '300px',
            background: 'rgba(102, 126, 234, 0.18)',
            borderRadius: '999px',
            filter: 'blur(18px)',
          }}
        />
        <div className="container position-relative">
          <div
            className="section-title text-center"
            style={{ color: '#ffffff' }}
          >
            <h2 style={{ color: '#ffffff', textShadow: '0 12px 28px rgba(0, 0, 0, 0.45)' }}>
              What Our Partners Say
            </h2>
            <p className="text-muted">
              Real results from teams who trust MultipleAI to power their services.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-4">
              <div className="glass-card glass-card--flush glass-card--tight h-100 p-4">
                  <div
                    className="glow-icon"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, #005599 0%, #00bcd4 100%)',
                      color: 'white',
                      marginBottom: '20px',
                      backgroundSize: '200% 200%',
                    }}
                  >
                    <FaQuoteLeft size={20} />
                  </div>
                <p className="mb-4" style={{ fontStyle: 'italic', color: '#1f2d3d', fontSize: '1.05rem' }}>
                  "MultipleAI's team helped us launch an AI service line in under a month, seamlessly under our own brand."
                </p>
                <p className="mb-0 fw-semibold text-uppercase" style={{ fontSize: '0.85rem', letterSpacing: '0.08em', color: '#003366' }}>
                  Daniel K.
                </p>
                <span className="text-muted">Director, Marketing Agency Perth</span>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="glass-card glass-card--flush glass-card--tight h-100 p-4">
                <div
                  className="glow-icon"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #1d4ed8 0%, #22d3ee 100%)',
                    color: 'white',
                    marginBottom: '20px',
                    backgroundSize: '200% 200%',
                  }}
                >
                  <FaQuoteLeft size={20} />
                </div>
                <p className="mb-4" style={{ fontStyle: 'italic', color: '#1f2d3d', fontSize: '1.05rem' }}>
                  "Their automation agents transformed how our accounting team works, consistent, compliant, and fast."
                </p>
                <p className="mb-0 fw-semibold text-uppercase" style={{ fontSize: '0.85rem', letterSpacing: '0.08em', color: '#003366' }}>
                  Sarah L.
                </p>
                <span className="text-muted">Principal, CPA Firm Sydney</span>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="glass-card glass-card--flush glass-card--tight h-100 p-4">
                <div
                  className="glow-icon"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    marginBottom: '20px',
                    backgroundSize: '200% 200%',
                  }}
                >
                  <FaQuoteLeft size={20} />
                </div>
                <p className="mb-4" style={{ fontStyle: 'italic', color: '#1f2d3d', fontSize: '1.05rem' }}>
                  “A reliable AI back-office partner we trust with our clients.”
                </p>
                <p className="mb-0 fw-semibold text-uppercase" style={{ fontSize: '0.85rem', letterSpacing: '0.08em', color: '#003366' }}>
                  Michael T.
                </p>
                <span className="text-muted">Consulting Partner Singapore</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <Link href="/contact" className="btn btn-light btn-lg px-5 py-3 rounded-pill fw-semibold" style={{ background: '#003366', color: '#fff', border: 'none' }}>
              Partner with Us
            </Link>
          </div>
        </div>
      </section>

      {/* Contact / Partner Form */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, #003366 0%, #005599 60%, #00bcd4 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-160px',
            right: '-80px',
            width: '320px',
            height: '320px',
            background: 'rgba(255, 255, 255, 0.18)',
            borderRadius: '50%',
            filter: 'blur(40px)',
          }}
        />
        <div className="container position-relative">
          <div className="row g-5 align-items-center justify-content-between">
            <div className="col-lg-5">
              <div className="section-title text-center" style={{ color: '#ffffff' }}>
                <h2 style={{ color: '#ffffff', textShadow: '0 12px 28px rgba(0, 0, 0, 0.45)' }}>
                  Let’s Build AI Intelligent Solutions Together
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem' }}>
                  Whether you’re an accounting firm, marketing agency, or technology integrator, MultipleAI provides the AI capability,
                  infrastructure, and ongoing support. You keep the client and the brand.
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                    marginTop: '28px',
                    justifyContent: 'center',
                  }}
                >
                  {['WHITE LABEL AI', 'COMPLIANCE READY', 'DEDICATED PARTNER SUCCESS'].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '12px 20px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.12)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.18)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <form
                className="glass-card glass-card--flush glass-card--static p-4 p-lg-5 shadow-sm contact-form"
                style={{
                  borderRadius: '28px',
                  background: '#ffffff',
                  border: '1px solid rgba(0, 26, 51, 0.08)',
                  boxShadow: '0 25px 70px rgba(0, 26, 51, 0.18)',
                }}
              >
                <div className="row gy-4 gx-4">
                  <div className="col-md-6">
                    <label htmlFor="contact-name" className="form-label fw-semibold" style={formLabelStyle}>Name</label>
                    <input type="text" id="contact-name" name="name" className="form-control" placeholder="Jane Smith" style={formInputStyle} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="contact-organisation" className="form-label fw-semibold" style={formLabelStyle}>Organisation</label>
                    <input type="text" id="contact-organisation" name="organisation" className="form-control" placeholder="Your Company" style={formInputStyle} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="contact-email" className="form-label fw-semibold" style={formLabelStyle}>Email</label>
                    <input type="email" id="contact-email" name="email" className="form-control" placeholder="you@company.com" style={formInputStyle} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="contact-phone" className="form-label fw-semibold" style={formLabelStyle}>Phone</label>
                    <input type="tel" id="contact-phone" name="phone" className="form-control" placeholder="+61 400 000 000" style={formInputStyle} />
                  </div>
                  <div className="col-12">
                    <label htmlFor="contact-interest" className="form-label fw-semibold" style={formLabelStyle}>Area of Interest</label>
                    <select id="contact-interest" name="interest" className="form-select" style={{ ...formInputStyle, background: 'rgba(255, 255, 255, 0.98)' }}>
                      <option value="">Select an option</option>
                      <option value="consulting">Consulting</option>
                      <option value="bespoke-agent">Bespoke Agent</option>
                      <option value="automation">Automation</option>
                      <option value="data-analytics">Data Analytics</option>
                      <option value="white-papers">White Papers</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="contact-message" className="form-label fw-semibold" style={formLabelStyle}>Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className="form-control"
                      rows={4}
                      placeholder="Tell us about your goals..."
                      style={{ ...formInputStyle, minHeight: '140px' }}
                    ></textarea>
                  </div>
                  <div className="col-12 d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-dark btn-lg px-5 py-3 rounded-pill fw-semibold"
                      style={{ background: '#003366', border: 'none' }}
                    >
                      Book a Strategy Call
                    </button>
                  </div>
                </div>
              </form>
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
        <div
          style={{
            position: 'absolute',
            bottom: '-160px',
            left: '-120px',
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
              background: 'rgba(255,255,255,0.14)',
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '20px',
            }}
          >
            Let’s Collaborate
          </span>
          <h2 className="display-5 fw-bold mb-3" style={{ color: 'white', letterSpacing: '-0.01em' }}>
            Ready to Transform Your Business with AI?
          </h2>
          <p
            className="lead mb-4"
            style={{ color: 'rgba(255,255,255,0.82)', maxWidth: '680px', margin: '0 auto 28px' }}
          >
            We’ll scope, launch, and maintain your AI service line while you focus on client growth. Your brand stays front and centre.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link
              href="/contact"
              className="btn btn-light btn-lg px-5 py-3 rounded-pill fw-semibold"
              style={{ color: '#001326' }}
            >
              Partner with Us Today
            </Link>
            <Link
              href="/services"
              className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-semibold"
            >
              Explore Capabilities
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />

      <style jsx>{`
        .contact-form ::placeholder {
          color: #0A2A6A;
          opacity: 0.85;
        }
      `}</style>
    </>
  );
}
