'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{
      background: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      padding: '15px 0'
    }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Link href="/" style={{ 
            fontSize: '1.75rem', 
            fontWeight: 'bold', 
            color: 'var(--primary-color)',
            textDecoration: 'none'
          }}>
            MultipleAI Solutions
          </Link>
          
          {/* Desktop Menu */}
          <div className="d-none d-lg-flex align-items-center gap-4">
            <Link href="/" style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: 500 }}>Home</Link>
            <Link href="/about" style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: 500 }}>About Us</Link>
            <Link href="/services" style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: 500 }}>Services</Link>
            <Link href="/ai-agents" style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: 500 }}>AI Agents</Link>
            <Link href="/projects" style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: 500 }}>Projects</Link>
            <Link href="/resources" style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: 500 }}>Resources</Link>
            <Link href="/faq" style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: 500 }}>FAQ</Link>
            <Link href="/contact" className="btn-primary" style={{ 
              padding: '10px 25px',
              fontSize: '0.95rem'
            }}>
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
          <div className="d-lg-none mt-3" style={{
            background: 'white',
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <Link href="/" className="d-block py-2" style={{ textDecoration: 'none', color: 'var(--text-dark)' }}>Home</Link>
            <Link href="/about" className="d-block py-2" style={{ textDecoration: 'none', color: 'var(--text-dark)' }}>About Us</Link>
            <Link href="/services" className="d-block py-2" style={{ textDecoration: 'none', color: 'var(--text-dark)' }}>Services</Link>
            <Link href="/ai-agents" className="d-block py-2" style={{ textDecoration: 'none', color: 'var(--text-dark)' }}>AI Agents</Link>
            <Link href="/projects" className="d-block py-2" style={{ textDecoration: 'none', color: 'var(--text-dark)' }}>Projects</Link>
            <Link href="/resources" className="d-block py-2" style={{ textDecoration: 'none', color: 'var(--text-dark)' }}>Resources</Link>
            <Link href="/faq" className="d-block py-2" style={{ textDecoration: 'none', color: 'var(--text-dark)' }}>FAQ</Link>
            <Link href="/contact" className="btn-primary d-block text-center mt-3">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
