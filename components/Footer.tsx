'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import ScrollAnimation from './ScrollAnimation';

const aboutLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/ai-agents', label: 'AI Agents' },
  { href: '/resources', label: 'Resources' },
];

const supportLinks = [
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
  { href: '/partner-portal', label: 'Partner Portal' },
  { href: '/careers', label: 'Careers' },
];

const legalLinks = [
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
];

const socialLinks = [
  { href: 'https://www.facebook.com/profile.php?id=61573805013855', icon: FaFacebook, label: 'Facebook' },
  { href: 'https://www.linkedin.com/company/multiple-ai-solutions/', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://www.instagram.com/multipleaisolutions/', icon: FaInstagram, label: 'Instagram' },
];

export default function Footer() {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <footer
      style={{
        background:
          'linear-gradient(145deg, #f4fbff 0%, #dff1ff 45%, #c7e8ff 70%, #b4e2ff 100%)',
        color: '#0f1f38',
        padding: '100px 0 50px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Effects */}
      <div
        style={{
          position: 'absolute',
          top: '-150px',
          right: '-150px',
          width: '400px',
          height: '400px',
          background: 'rgba(0, 138, 194, 0.18)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '350px',
          height: '350px',
          background: 'rgba(0, 173, 223, 0.25)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          zIndex: 0,
        }}
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* Main Footer Content */}
        <div className="row g-5 mb-5">
          {/* About Column */}
          <div className="col-lg-4 col-md-6">
            <ScrollAnimation delay={0}>
              <Link
                href="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '14px',
                  textDecoration: 'none',
                  marginBottom: '28px',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <div
                  style={{
                    width: '70px',
                    height: '70px',
                    position: 'relative',
                    flexShrink: 0,
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '8px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <Image
                    src="/images/image.png"
                    alt="MultipleAI Logo"
                    fill
                    style={{ objectFit: 'contain', opacity: 0.9 }}
                  />
                  {/* TODO: Replace with lighter logo version when available */}
                </div>
                <div>
                  <h3 style={{ color: '#008ac2', margin: 0, fontWeight: 700, fontSize: '1.85rem', letterSpacing: '-0.01em' }}>
                    MultipleAI
                  </h3>
                  <small style={{ color: 'rgba(15,31,56,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                    AI Solutions Partner
                  </small>
                </div>
              </Link>
              <p style={{ color: 'rgba(15,31,56,0.8)', lineHeight: 1.8, marginBottom: '28px', fontSize: '0.98rem' }}>
                Empowering professional service firms with white-label AI solutions. We build the automation, analytics, and creative services you keep the client relationship.
              </p>
              
              {/* Social Icons */}
              <div className="d-flex gap-3">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    style={{
                      width: '44px',
                      height: '44px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '12px',
                      background: 'rgba(0, 138, 194, 0.08)',
                      border: '1px solid rgba(0, 138, 194, 0.2)',
                      color: '#008ac2',
                      fontSize: '1.2rem',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 138, 194, 0.16)';
                      e.currentTarget.style.borderColor = '#008ac2';
                      e.currentTarget.style.transform = 'translateY(-4px) scale(1.1)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 188, 212, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 138, 194, 0.08)';
                      e.currentTarget.style.borderColor = 'rgba(0, 138, 194, 0.2)';
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </ScrollAnimation>
          </div>

          {/* About Column */}
          <div className="col-lg-2 col-md-6">
            <ScrollAnimation delay={100}>
              <h5
                style={{
                  marginBottom: '24px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontSize: '0.85rem',
                  color: '#008ac2',
                  fontWeight: 700,
                }}
              >
                About
              </h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {aboutLinks.map(({ href, label }) => (
                  <li key={href} style={{ marginBottom: '14px' }}>
                    <Link
                      href={href}
                      style={{
                        color: 'rgba(15,31,56,0.85)',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        transition: 'all 0.3s ease',
                        display: 'inline-block',
                        position: 'relative',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#008ac2';
                        e.currentTarget.style.transform = 'translateX(6px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(15,31,56,0.85)';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollAnimation>
          </div>

          {/* Support Column */}
          <div className="col-lg-3 col-md-6">
            <ScrollAnimation delay={200}>
              <h5
                style={{
                  marginBottom: '24px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontSize: '0.85rem',
                  color: '#00bcd4',
                  fontWeight: 700,
                }}
              >
                Support
              </h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '32px' }}>
                {supportLinks.map(({ href, label }) => (
                  <li key={href} style={{ marginBottom: '14px' }}>
                    <Link
                      href={href}
                      style={{
                        color: 'rgba(15,31,56,0.85)',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        transition: 'all 0.3s ease',
                        display: 'inline-block',
                        position: 'relative',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#008ac2';
                        e.currentTarget.style.transform = 'translateX(6px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(15,31,56,0.85)';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollAnimation>
          </div>

          {/* Contact Form Column */}
          <div className="col-lg-3 col-md-6">
            <ScrollAnimation delay={300}>
              <h5
                style={{
                  marginBottom: '24px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontSize: '0.85rem',
                  color: '#00bcd4',
                  fontWeight: 700,
                }}
              >
                Get in Touch
              </h5>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '16px' }}>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid rgba(0, 138, 194, 0.2)',
                      background: 'rgba(255, 255, 255, 0.9)',
                      color: '#0f1f38',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#008ac2';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 138, 194, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(0, 138, 194, 0.2)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={3}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid rgba(0, 138, 194, 0.2)',
                      background: 'rgba(255, 255, 255, 0.9)',
                      color: '#0f1f38',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      transition: 'all 0.3s ease',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#008ac2';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 138, 194, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(0, 138, 194, 0.2)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '12px 24px',
                    borderRadius: '12px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #008ac2 0%, #00bcd4 50%, #008ac2 100%)',
                    backgroundSize: '200% 200%',
                    color: 'white',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(0, 138, 194, 0.3)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 138, 194, 0.4)';
                    e.currentTarget.style.backgroundPosition = '100% 0';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 138, 194, 0.3)';
                    e.currentTarget.style.backgroundPosition = '0% 0';
                  }}
                >
                  Send Message
                </button>
              </form>
            </ScrollAnimation>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(0, 188, 212, 0.5), transparent)',
            margin: '50px 0 30px',
          }}
        />

        {/* Legal Links & Copyright */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#00315a',
            fontSize: '0.9rem',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
            {legalLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  color: 'rgba(15, 31, 56, 0.7)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#008ac2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(15, 31, 56, 0.7)';
                }}
              >
                {label}
              </Link>
            ))}
          </div>
          <p style={{ margin: 0, color: '#00315a' }}>
            &copy; {new Date().getFullYear()} MultipleAI Solutions. All rights reserved.
          </p>
          <p style={{ margin: 0, color: '#00315a' }}>
            Powered by{' '}
            <span style={{ color: '#008ac2', fontWeight: 600 }}>MultipleAI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
