'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa';

const quickStats = [
  { label: 'Happy Clients', value: '500+' },
  { label: 'Support Availability', value: '24/7' },
  { label: 'Average Setup Time', value: '48 hrs' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    interest: 'AI Agents',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you within 24 hours.');
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            background: 'rgba(0, 188, 212, 0.3)',
            filter: 'blur(140px)',
          }}
        />
        <div className="container">
          <div className="text-center">
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
              Partner With Us
            </span>
            <h1 style={{ color: 'white', fontSize: '3.3rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Partner with MultipleAI Solutions
            </h1>
            <p style={{ fontSize: '1.18rem', color: 'rgba(255,255,255,0.8)', maxWidth: '700px', margin: '16px auto 0' }}>
              Expand your service offering with a trusted AI back-office partner that scales with your clients.
            </p>
          </div>
          <div className="row justify-content-center mt-4 g-3">
            {quickStats.map((stat) => (
              <div key={stat.label} className="col-md-3 col-6">
                <div
                  style={{
                    background: 'rgba(255,255,255,0.14)',
                    borderRadius: '18px',
                    padding: '20px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  <h3 style={{ color: 'white', marginBottom: 0 }}>{stat.value}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 0 }}>
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, #f8fbff 0%, #eef4ff 45%, #ffffff 100%)',
        }}
      >
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <span
                style={{
                  display: 'inline-block',
                  padding: '6px 16px',
                  borderRadius: '999px',
                  background: 'rgba(0, 63, 125, 0.12)',
                  color: '#003f7d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: '0.75rem',
                  marginBottom: '16px',
                }}
              >
                Get In Touch
              </span>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '16px' }}>
                Let&apos;s Build Intelligent Solutions Together
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
                Whether you&apos;re an accounting firm, marketing agency, or technology integrator,
                Multiple AI provides the capability, infrastructure, and ongoing support, while you
                retain the client relationship and the brand.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-4"
                style={{
                  borderRadius: '28px',
                  background: '#ffffff',
                  border: '1px solid rgba(16, 42, 67, 0.08)',
                  boxShadow: '0 28px 48px rgba(0, 26, 60, 0.08)',
                  padding: '32px',
                }}
              >
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold text-uppercase" style={{ fontSize: '0.82rem', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold text-uppercase" style={{ fontSize: '0.82rem', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>
                      Organisation *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold text-uppercase" style={{ fontSize: '0.82rem', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold text-uppercase" style={{ fontSize: '0.82rem', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>
                      Phone *
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold text-uppercase" style={{ fontSize: '0.82rem', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>
                      Area of Interest
                    </label>
                    <select
                      className="form-select"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                    >
                      <option>AI Agents</option>
                      <option>Automation</option>
                      <option>Creative AI</option>
                      <option>Analytics</option>
                      <option>Consulting</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold text-uppercase" style={{ fontSize: '0.82rem', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="col-12 d-flex justify-content-end">
                    <button
                      type="submit"
                      className="btn btn-dark btn-lg px-5 py-3 rounded-pill fw-semibold"
                      style={{ background: '#003f7d', border: 'none' }}
                    >
                      Book a Strategy Call
                    </button>
                  </div>
                </div>
              </form>

              <p className="mt-3 text-muted">
                A Partner Success Manager will contact you within 24 hours to discuss your needs.
              </p>
            </div>

            <div className="col-lg-4">
              <div
                className="card border-0 shadow-sm"
                style={{
                  borderRadius: '24px',
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.92), rgba(240,246,255,0.96))',
                  boxShadow: '0 28px 48px rgba(0, 26, 60, 0.12)',
                  border: '1px solid rgba(16, 42, 67, 0.08)',
                }}
              >
                <div className="card-body p-4 p-lg-5">
                  <h4 className="mb-4" style={{ color: 'var(--text-dark)', fontSize: '1.5rem' }}>
                    Contact Information
                  </h4>

                  <div className="d-flex align-items-start mb-4">
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        background: 'linear-gradient(135deg, #003f7d, #00bcd4)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        marginRight: '15px',
                        flexShrink: 0,
                      }}
                    >
                      <FaPhone />
                    </div>
                    <div>
                      <h6 className="mb-1">Phone</h6>
                      <p className="mb-0">
                        <a href="tel:0861898577" style={{ color: 'inherit', textDecoration: 'none' }}>
                          08 6189 8577
                        </a>
                      </p>
                      <small className="text-muted">Call us for immediate support</small>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-4">
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        background: 'var(--gradient-secondary)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        marginRight: '15px',
                        flexShrink: 0,
                      }}
                    >
                      <FaEnvelope />
                    </div>
                    <div>
                      <h6 className="mb-1">Email</h6>
                      <p className="mb-0">
                        <a
                          href="mailto:contact@multipleai.com.au"
                          style={{ color: 'inherit', textDecoration: 'none' }}
                        >
                          contact@multipleai.com.au
                        </a>
                      </p>
                      <small className="text-muted">We respond within 2 hours on business days</small>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-4">
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        marginRight: '15px',
                        flexShrink: 0,
                      }}
                    >
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h6 className="mb-1">Perth Office</h6>
                      <p className="mb-0 text-muted">
                        <a
                          href="https://www.google.com/maps?q=Level+28,+140+St+Georges+Tce,+Perth,+WA+6000"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: 'inherit', textDecoration: 'none' }}
                        >
                          Level 28, 140 St Georges Tce<br />
                          Perth, WA 6000
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start">
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        background: 'linear-gradient(135deg, #79F1A4 0%, #0E5CAD 100%)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        marginRight: '15px',
                        flexShrink: 0,
                      }}
                    >
                      <FaClock />
                    </div>
                    <div>
                      <h6 className="mb-1">Business Hours</h6>
                      <p className="mb-0 text-muted">
                        Mon–Fri: 9:00 AM – 4:00 PM<br />
                        Weekends: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="card mt-5 border-0"
            style={{
              borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(0,63,125,0.08), rgba(0,188,212,0.12))',
              border: '1px solid rgba(16, 42, 67, 0.1)',
              boxShadow: '0 28px 48px rgba(0, 26, 60, 0.08)',
              padding: '28px',
            }}
          >
            <div className="row g-4 align-items-center">
              <div className="col-lg-8">
                <h4 style={{ marginBottom: '10px', color: 'var(--text-dark)' }}>Prefer to email directly?</h4>
                <p style={{ marginBottom: 0, color: 'var(--text-muted)' }}>
                  Send your brief to{' '}
                  <a href="mailto:contact@multipleai.com.au" style={{ color: '#003f7d', fontWeight: 600 }}>
                    contact@multipleai.com.au
                  </a>{' '}
                  and we&apos;ll schedule a strategy call within 24 hours.
                </p>
              </div>
              <div className="col-lg-4 text-lg-end">
                <a
                  href="mailto:contact@multipleai.com.au"
                  className="btn btn-light btn-lg px-5 py-3 rounded-pill fw-semibold"
                  style={{ background: '#003f7d', color: '#fff', border: 'none' }}
                >
                  Email Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
