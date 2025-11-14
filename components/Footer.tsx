import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaBrain } from 'react-icons/fa';

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

const solutionLinks = [
  { href: '/ai-agents', label: 'AI Agents' },
  { href: '/resources', label: 'Resources' },
  { href: '/faq', label: 'FAQ' },
];

const legalLinks = [
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/partner-portal', label: 'Partner Portal Login' },
  { href: '/careers', label: 'Careers' },
];

const socialLinks = [
  { href: 'https://www.facebook.com/profile.php?id=61573805013855', icon: <FaFacebook /> },
  { href: '#', icon: <FaTwitter /> },
  { href: 'https://www.linkedin.com/company/multiple-ai-solutions/', icon: <FaLinkedin /> },
  { href: '#', icon: <FaInstagram /> },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(135deg, #001326 0%, #002c57 55%, #004f94 100%)',
        color: 'white',
        padding: '80px 0 30px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-120px',
          right: '-120px',
          width: '320px',
          height: '320px',
          background: 'rgba(0, 188, 212, 0.28)',
          filter: 'blur(140px)',
        }}
      />
      <div className="container position-relative">
        <div className="row g-5 mb-5 align-items-start">
          <div className="col-lg-4 col-md-6">
            <Link
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                textDecoration: 'none',
                marginBottom: '18px',
              }}
            >
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  position: 'relative',
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/images/image.png"
                  alt="MultipleAI Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 style={{ color: '#a29bfe', margin: 0, fontWeight: 700, fontSize: '1.95rem' }}>MultipleAI</h3>
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
              Empowering professional service firms with white-label AI solutions. We build the automation, analytics, and creative
              services — you keep the client relationship.
            </p>
            <div className="d-flex gap-3 mt-4">
              {socialLinks.map(({ href, icon }) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    color: 'white',
                    fontSize: '1.35rem',
                    opacity: 0.85,
                    transition: 'opacity 0.2s ease',
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h6 style={{ marginBottom: '18px', letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)' }}>
              Company
            </h6>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {companyLinks.map(({ href, label }) => (
                <li key={href} style={{ marginBottom: '12px' }}>
                  <Link href={href} style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.98rem' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 style={{ marginBottom: '18px', letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)' }}>
              Solutions
            </h6>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {solutionLinks.map(({ href, label }) => (
                <li key={href} style={{ marginBottom: '12px' }}>
                  <Link href={href} style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.98rem' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 style={{ marginBottom: '18px', letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)' }}>
              Legal
            </h6>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {legalLinks.map(({ href, label }) => (
                <li key={href} style={{ marginBottom: '12px' }}>
                  <Link href={href} style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.98rem' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.12)',
            paddingTop: '22px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'rgba(255,255,255,0.65)',
            fontSize: '0.9rem',
          }}
        >
          <p style={{ margin: 0 }}>
            &copy; {new Date().getFullYear()} MultipleAI Solutions. All rights reserved.
          </p>
          <p style={{ margin: 0 }}>Powered by MultipleAI</p>
        </div>
      </div>
    </footer>
  );
}
