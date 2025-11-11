'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBrain, FaRobot, FaChartLine, FaFileAlt, FaShieldAlt, FaUsers, FaPhone, FaCog, FaCalculator, FaPen, FaDatabase, FaLock, FaLightbulb, FaBars, FaTimes } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section" style={{
        background: 'linear-gradient(135deg, #003366 0%, #005599 100%)',
        color: 'white',
        padding: '120px 0 80px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="display-3 fw-bold mb-4" style={{ color: 'white' }}>
                Empowering Businesses through AI
              </h1>
              <p className="lead mb-4" style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)' }}>
                We design, build, and deliver intelligent automation, analytics, and creative AI services 
                that power the next generation of professional businesses under your own brand.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link href="/ai-agents" className="btn btn-light btn-lg px-4 py-3 rounded-pill fw-semibold">
                  Explore our Agents
                </Link>
                <Link href="/contact" className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill fw-semibold">
                  Partner with Us
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{ position: 'relative', height: '400px' }}>
                <Image 
                  src="/images/image1.png" 
                  alt="AI Solutions" 
                  fill 
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '300px',
          height: '300px',
          background: 'rgba(255, 204, 0, 0.1)',
          borderRadius: '50%',
          filter: 'blur(80px)'
        }}></div>
      </section>

      {/* What We Do Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>What We Do</h2>
            <p>MultipleAI Solutions empowers accounting firms, marketing agencies and consultants to offer AI-driven services without hiring internal developers.</p>
            <p>Our white-label model lets you deliver AI products instantly. We provide the technology, security, and support; you keep the client relationship.</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-6 col-md-6">
              <div className="card h-100">
                <div className="card-icon">
                  <FaRobot />
                </div>
                <h3 className="card-title">AI Agents & Automation</h3>
                <p className="card-text">
                  Intelligent voice and text agents that handle calls, scheduling, onboarding, and workflows.
                </p>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6">
              <div className="card h-100">
                <div className="card-icon" style={{ background: 'linear-gradient(135deg, #00bcd4 0%, #26c6da 100%)' }}>
                  <FaPen />
                </div>
                <h3 className="card-title">Creative AI & Communication</h3>
                <p className="card-text">
                  White papers, research, grant submissions, videos, and voice content produced by AI.
                </p>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6">
              <div className="card h-100">
                <div className="card-icon" style={{ background: 'linear-gradient(135deg, #FFCC00 0%, #FFD700 100%)' }}>
                  <FaChartLine />
                </div>
                <h3 className="card-title">Data & Predictive Intelligence</h3>
                <p className="card-text">
                  Dashboards and forecasting tools built on secure Australian-based infrastructure.
                </p>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6">
              <div className="card h-100">
                <div className="card-icon" style={{ background: 'linear-gradient(135deg, #673ab7 0%, #8e24aa 100%)' }}>
                  <FaLightbulb />
                </div>
                <h3 className="card-title">AI Consulting & Enablement</h3>
                <p className="card-text">
                  Strategy, integration, and training to embed AI within your business model.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <Link href="/services" className="btn-primary btn-lg">
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>How It Works</h2>
            <p>Education meets automation.</p>
          </div>
          
          <div className="row g-5 align-items-center">
            <div className="col-lg-4 col-md-6">
              <div className="text-center">
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'var(--gradient-primary)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  margin: '0 auto 20px'
                }}>1</div>
                <h4>Partner Onboarding</h4>
                <p className="text-muted">We assess your service needs and connect your systems to our AI framework.</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="text-center">
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'var(--gradient-secondary)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  margin: '0 auto 20px'
                }}>2</div>
                <h4>White-Label Deployment</h4>
                <p className="text-muted">You resell or integrate AI tools under your own brand.</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="text-center">
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #FFCC00 0%, #FFD700 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  margin: '0 auto 20px'
                }}>3</div>
                <h4>Ongoing Support</h4>
                <p className="text-muted">We maintain, monitor, and update every solution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why MultipleAI */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Why MultipleAI</h2>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="d-flex align-items-start">
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'var(--gradient-primary)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  marginRight: '15px',
                  flexShrink: 0
                }}>
                  <FaShieldAlt size={24} />
                </div>
                <div>
                  <h5>Proven & Tested</h5>
                  <p className="text-muted">Proven white-label framework tested in Australia.</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="d-flex align-items-start">
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'var(--gradient-secondary)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  marginRight: '15px',
                  flexShrink: 0
                }}>
                  <FaCog size={24} />
                </div>
                <div>
                  <h5>Quick to Market</h5>
                  <p className="text-muted">Fast time-to-market (weeks, not months).</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="d-flex align-items-start">
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #FFCC00 0%, #FFD700 100%)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  marginRight: '15px',
                  flexShrink: 0
                }}>
                  <FaLock size={24} />
                </div>
                <div>
                  <h5>Local Platform</h5>
                  <p className="text-muted">Local compliance & data sovereignty.</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="d-flex align-items-start">
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #673ab7 0%, #8e24aa 100%)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  marginRight: '15px',
                  flexShrink: 0
                }}>
                  <FaUsers size={24} />
                </div>
                <div>
                  <h5>Training Hub</h5>
                  <p className="text-muted">Graduate Talent Hub ensuring future capacity.</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="d-flex align-items-start">
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #e91e63 0%, #ec407a 100%)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  marginRight: '15px',
                  flexShrink: 0
                }}>
                  <FaChartLine size={24} />
                </div>
                <div>
                  <h5>Scalable</h5>
                  <p className="text-muted">Scalable pricing for partners of any size.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <Link href="/contact" className="btn-primary btn-lg">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>AI Solutions for Every Stage of Growth</h2>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-icon">
                  <FaPhone />
                </div>
                <h4 className="card-title">AI Voice & Chat Agents</h4>
                <p className="card-text">Custom-trained for client workflows</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-icon" style={{ background: 'var(--gradient-secondary)' }}>
                  <FaCog />
                </div>
                <h4 className="card-title">Business Automation</h4>
                <p className="card-text">Streamlining sales, service, and admin</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-icon" style={{ background: 'linear-gradient(135deg, #FFCC00 0%, #FFD700 100%)' }}>
                  <FaDatabase />
                </div>
                <h4 className="card-title">Data Analytics & Insights</h4>
                <p className="card-text">Turning information into action</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-icon" style={{ background: 'linear-gradient(135deg, #673ab7 0%, #8e24aa 100%)' }}>
                  <FaFileAlt />
                </div>
                <h4 className="card-title">AI White Papers</h4>
                <p className="card-text">Strategy documentation for investors & grants</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-icon" style={{ background: 'linear-gradient(135deg, #e91e63 0%, #ec407a 100%)' }}>
                  <FaLightbulb />
                </div>
                <h4 className="card-title">AI Grant Advisory</h4>
                <p className="card-text">Funding intelligence for innovation</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <Link href="/services" className="btn-outline btn-lg">
              View All Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'var(--gradient-primary)',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 className="display-5 fw-bold mb-4" style={{ color: 'white' }}>
            Ready to Transform Your Business with AI?
          </h2>
          <p className="lead mb-4" style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '700px', margin: '0 auto 30px' }}>
            Let's build intelligent solutions together. Partner with MultipleAI to expand your service offering.
          </p>
          <Link href="/contact" className="btn btn-light btn-lg px-5 py-3 rounded-pill fw-semibold">
            Partner with Us Today
          </Link>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
