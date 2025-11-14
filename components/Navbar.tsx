'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes, FaBrain } from 'react-icons/fa';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/ai-agents', label: 'AI Agents' },
  { href: '/projects', label: 'Projects' },
  { href: '/resources', label: 'Resources' },
  { href: '/faq', label: 'FAQ' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      style={{
        backdropFilter: 'blur(16px)',
        background: 'rgba(255,255,255,0.86)',
        boxShadow: '0 12px 40px rgba(15, 31, 56, 0.08)',
        borderBottom: '1px solid rgba(16, 42, 67, 0.06)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        padding: '16px 0',
      }}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                width: '65px',
                height: '65px',
                position: 'relative',
                flexShrink: 0,
              }}
              className="navbar-logo"
            >
              <Image
                src="/images/image.png"
                alt="MultipleAI Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <span
              style={{
                fontSize: '1.65rem',
                fontWeight: 700,
                color: 'var(--primary-color)',
                letterSpacing: '-0.01em',
              }}
              className="navbar-brand-text"
            >
              MultipleAI
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="d-none d-lg-flex align-items-center" style={{ gap: '28px' }}>
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  textDecoration: 'none',
                  color: 'var(--text-muted)',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn btn-light rounded-pill fw-semibold"
              style={{
                background: 'var(--gradient-primary)',
                border: 'none',
                color: 'white',
                padding: '12px 28px',
                letterSpacing: '0.05em',
                boxShadow: '0 18px 32px rgba(0, 63, 125, 0.25)',
              }}
            >
              Contact
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="d-lg-none btn btn-link"
            onClick={() => setIsOpen(!isOpen)}
            style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="d-lg-none mt-3"
            style={{
              background: 'rgba(255,255,255,0.94)',
              borderRadius: '16px',
              padding: '22px',
              boxShadow: '0 20px 40px rgba(15, 31, 56, 0.12)',
              border: '1px solid rgba(16, 42, 67, 0.08)',
            }}
          >
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="d-block py-2"
                style={{
                  textDecoration: 'none',
                  color: 'var(--text-muted)',
                  fontWeight: 500,
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn btn-light d-block text-center mt-3 fw-semibold"
              style={{
                background: 'var(--gradient-primary)',
                border: 'none',
                color: 'white',
                borderRadius: '999px',
                padding: '12px 0',
              }}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
