import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={{ 
      background: '#1a1a1a', 
      color: 'white',
      padding: '60px 0 20px'
    }}>
      <div className="container">
        <div className="row g-4 mb-5">
          <div className="col-lg-4 col-md-6">
            <h3 style={{ color: 'var(--secondary-color)', marginBottom: '20px' }}>
              MultipleAI Solutions
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>
              Empowering businesses through AI. We deliver intelligent automation, 
              analytics, and creative AI services under your own brand.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" style={{ color: 'white', fontSize: '1.5rem' }}><FaFacebook /></a>
              <a href="#" style={{ color: 'white', fontSize: '1.5rem' }}><FaTwitter /></a>
              <a href="#" style={{ color: 'white', fontSize: '1.5rem' }}><FaLinkedin /></a>
              <a href="#" style={{ color: 'white', fontSize: '1.5rem' }}><FaInstagram /></a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6">
            <h5 style={{ marginBottom: '20px' }}>Company</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}>
                <Link href="/about" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                  About Us
                </Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link href="/services" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                  Services
                </Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link href="/projects" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                  Projects
                </Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link href="/contact" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <h5 style={{ marginBottom: '20px' }}>Solutions</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}>
                <Link href="/ai-agents" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                  AI Agents
                </Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link href="/resources" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                  Resources
                </Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link href="/faq" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <h5 style={{ marginBottom: '20px' }}>Legal</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}>
                <Link href="/terms" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                  Terms & Conditions
                </Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link href="/privacy-policy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                  Privacy Policy
                </Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link href="/partner-portal" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                  Partner Portal Login
                </Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link href="/careers" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          paddingTop: '20px',
          textAlign: 'center'
        }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', margin: 0 }}>
            &copy; {new Date().getFullYear()} MultipleAI Solutions. All rights reserved. | Powered by MultipleAI
          </p>
        </div>
      </div>
    </footer>
  );
}
