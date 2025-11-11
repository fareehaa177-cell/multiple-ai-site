'use client';

import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
  return (
    <section id="about" style={{ background: '#F8F9FA' }}>
      <Container>
        <div className="section-title">
          <h2>What We Do</h2>
        </div>
        
        <Row className="align-items-center">
          <Col lg={6}>
            <h3 className="mb-4">Building an AI Backbone for the Professional Economy</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              MultipleAI Solutions empowers accounting firms, marketing agencies and consultants 
              to offer AI-driven services without hiring internal developers.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Our white-label model lets you deliver AI products instantly. We provide the 
              technology, security, and support; you keep the client relationship.
            </p>
            
            <div className="mt-4">
              <h5 style={{ color: '#4A90E2', fontWeight: '600', marginBottom: '15px' }}>
                <i className='bx bx-check-circle' style={{ marginRight: '10px' }}></i>
                Our Vision: Empowering businesses through AI
              </h5>
              <h5 style={{ color: '#4A90E2', fontWeight: '600' }}>
                <i className='bx bx-check-circle' style={{ marginRight: '10px' }}></i>
                Our Approach: Secure, modular, and ethical
              </h5>
            </div>
          </Col>
          
          <Col lg={6} className="mt-5 mt-lg-0">
            <Row>
              <Col md={6} className="mb-4">
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className='bx bx-bot'></i>
                  </div>
                  <h4 className="feature-title">AI Agents & Automation</h4>
                  <p className="feature-description">
                    Intelligent voice and text agents that handle calls, scheduling, 
                    onboarding, and workflows.
                  </p>
                </div>
              </Col>
              
              <Col md={6} className="mb-4">
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className='bx bx-palette'></i>
                  </div>
                  <h4 className="feature-title">Creative AI & Communication</h4>
                  <p className="feature-description">
                    White papers, research, grant submissions, videos, and voice content 
                    produced by AI.
                  </p>
                </div>
              </Col>
              
              <Col md={6} className="mb-4">
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className='bx bx-bar-chart-alt-2'></i>
                  </div>
                  <h4 className="feature-title">Data & Predictive Intelligence</h4>
                  <p className="feature-description">
                    Dashboards and forecasting tools built on secure Australian-based 
                    infrastructure.
                  </p>
                </div>
              </Col>
              
              <Col md={6} className="mb-4">
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className='bx bx-bulb'></i>
                  </div>
                  <h4 className="feature-title">AI Consulting & Enablement</h4>
                  <p className="feature-description">
                    Strategy, integration, and training to embed AI within your business model.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
