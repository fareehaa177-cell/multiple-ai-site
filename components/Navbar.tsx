'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaBars,
  FaTimes,
  FaBrain,
  FaChevronDown,
  FaCode,
  FaChartLine,
  FaRobot,
  FaCogs,
  FaSitemap,
  FaDatabase,
  FaChartBar,
  FaRedoAlt,
} from 'react-icons/fa';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/ai-agents', label: 'AI Agents' },
  { href: '/resources', label: 'Resources' },
  { href: '/faq', label: 'FAQ' },
];

const serviceCategories = [
  {
    title: 'AI Solutions',
    dotColor: '#26c6da',
    items: [
      { label: 'AI Consulting Services', href: '/services/ai-consulting', icon: FaBrain },
      { label: 'Custom AI Development', href: '/services/custom-ai-software', icon: FaCode },
    ],
  },
  {
    title: 'Automation & Integration',
    dotColor: '#00d084',
    items: [
      { label: 'Automation Solutions', href: '/services/automation-solutions', icon: FaRobot },
      { label: 'Web App Development', href: '/services/web-app-development', icon: FaCogs },
    ],
  },
  {
    title: 'Data Services',
    dotColor: '#26c6da',
    items: [
      { label: 'Machine Learning Models', href: '/services/machine-learning', icon: FaChartLine },
      { label: 'Data Mining', href: '/services/data-mining', icon: FaDatabase },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesHoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const openServicesMenu = () => {
    if (servicesHoverTimeout.current) {
      clearTimeout(servicesHoverTimeout.current);
      servicesHoverTimeout.current = null;
    }
    setIsServicesOpen(true);
  };

  const closeServicesMenu = () => {
    if (servicesHoverTimeout.current) {
      clearTimeout(servicesHoverTimeout.current);
    }
    servicesHoverTimeout.current = setTimeout(() => setIsServicesOpen(false), 140);
  };

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
            {links.map(({ href, label }) => {
              if (label === 'Services') {
                return (
                  <div key={href} className="position-relative">
                    <button
                      type="button"
                      onMouseEnter={openServicesMenu}
                      onMouseLeave={closeServicesMenu}
                      onFocus={openServicesMenu}
                      onBlur={closeServicesMenu}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-muted)',
                        fontWeight: 500,
                        letterSpacing: '0.02em',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        cursor: 'pointer',
                      }}
                    >
                      Services
                      <FaChevronDown size={12} />
                    </button>

                    {isServicesOpen && (
                      <div
                        style={{
                          position: 'absolute',
                          top: 'calc(100% + 20px)',
                          left: '-320px',
                          width: '920px',
                          background: 'white',
                          borderRadius: '28px',
                          boxShadow: '0 28px 60px rgba(15, 31, 56, 0.15)',
                          border: '1px solid rgba(16, 42, 67, 0.08)',
                          padding: '28px 32px 32px',
                          zIndex: 1200,
                        }}
                        onMouseEnter={openServicesMenu}
                        onMouseLeave={closeServicesMenu}
                      >
                        <div
                          style={{
                            background: 'linear-gradient(135deg, #f3f7ff 0%, #edf5ff 100%)',
                            borderRadius: '20px',
                            padding: '20px 24px',
                            marginBottom: '24px',
                          }}
                        >
                          <h5 style={{ marginBottom: '6px', color: '#0f1f38', fontWeight: 700 }}>Our Services</h5>
                          <p style={{ margin: 0, color: '#5b6b84', fontSize: '0.95rem' }}>
                            Comprehensive AI and data solutions for your business
                          </p>
                          <Link
                            href="/services"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              marginTop: '12px',
                              color: '#003f7d',
                              fontWeight: 600,
                              textDecoration: 'none',
                            }}
                          >
                            View All Services →
                          </Link>
                        </div>

                        <div style={{ display: 'flex', gap: '24px' }}>
                          {serviceCategories.map((category) => (
                            <div key={category.title} style={{ flex: 1 }}>
                              <div
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '10px',
                                  fontWeight: 700,
                                  color: '#0f1f38',
                                  textTransform: 'uppercase',
                                  fontSize: '0.9rem',
                                  letterSpacing: '0.08em',
                                  paddingBottom: '12px',
                                  borderBottom: '1px solid rgba(15,31,56,0.08)',
                                  marginBottom: '16px',
                                }}
                              >
                                <span
                                  style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    background: category.dotColor,
                                  }}
                                />
                                {category.title}
                              </div>

                              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {category.items.map(({ label: itemLabel, href: itemHref, icon: Icon }) => (
                                  <Link
                                    key={itemLabel}
                                    href={itemHref}
                                    style={{
                                      textDecoration: 'none',
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '12px',
                                      color: '#0f1f38',
                                      fontWeight: 600,
                                      fontSize: '0.95rem',
                                    }}
                                  >
                                    <div
                                      style={{
                                        width: '46px',
                                        height: '46px',
                                        borderRadius: '16px',
                                        background: 'rgba(0, 63, 125, 0.08)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#003f7d',
                                      }}
                                    >
                                      <Icon size={18} />
                                    </div>
                                    {itemLabel}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
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
              );
            })}
            <Link
              href="/contact"
              className="btn-pill btn-pill-gradient"
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
            {links.map(({ href, label }) => {
              if (label === 'Services') {
                return (
                  <div key={label}>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((prev) => !prev)}
                      className="d-flex align-items-center justify-content-between w-100 py-2"
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-muted)',
                        fontWeight: 500,
                        letterSpacing: '0.02em',
                      }}
                    >
                      <span>{label}</span>
                      <FaChevronDown
                        size={14}
                        style={{
                          transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                        }}
                      />
                    </button>
                    {mobileServicesOpen && (
                      <div style={{ paddingLeft: '12px', paddingBottom: '10px' }}>
                        {serviceCategories.map((category) => (
                          <div key={category.title} style={{ marginBottom: '12px' }}>
                            <p
                              style={{
                                textTransform: 'uppercase',
                                fontSize: '0.78rem',
                                letterSpacing: '0.08em',
                                color: '#0f1f38',
                                fontWeight: 700,
                                marginBottom: '6px',
                              }}
                            >
                              {category.title}
                            </p>
                            {category.items.map(({ label: itemLabel, href: itemHref }) => (
                              <Link
                                key={itemLabel}
                                href={itemHref}
                                className="d-block py-1"
                                style={{
                                  textDecoration: 'none',
                                  color: '#5b6b84',
                                  fontSize: '0.95rem',
                                }}
                                onClick={() => setIsOpen(false)}
                              >
                                {itemLabel}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
              <Link
                key={href}
                href={href}
                className="d-block py-2"
                style={{
                  textDecoration: 'none',
                  color: 'var(--text-muted)',
                  fontWeight: 500,
                }}
                  onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
              );
            })}
            <Link
              href="/contact"
              className="btn-pill btn-pill-gradient w-100 justify-content-center mt-3"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
