'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
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
  { href: '#', icon: FaTwitter, label: 'Twitter' },
  { href: 'https://www.linkedin.com/company/multiple-ai-solutions/', icon: FaLinkedin, label: 'LinkedIn' },
  { href: '#', icon: FaInstagram, label: 'Instagram' },
];

export default function Footer() {
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
                    style={{ objectFit: 'contain' }}
                  />
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
                Empowering professional service firms with white-label AI solutions. We build the automation, analytics, and creative services—you keep the client relationship.
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

          {/* Contact Column */}
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
                Contact
              </h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {legalLinks.map(({ href, label }) => (
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
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(0, 188, 212, 0.5), transparent)',
            margin: '50px 0 30px',
          }}
        />

        {/* Copyright */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#00315a',
            fontSize: '0.9rem',
          }}
        >
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
