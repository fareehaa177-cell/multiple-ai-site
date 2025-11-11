'use client';

import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

export default function HowItWorks() {
  return (
    <section style={{ background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.05) 0%, rgba(0, 212, 255, 0.05) 100%)' }}>
      <Container>
        <div className="section-title">
          <h2>How It Works</h2>
          <p>Education meets automation.</p>
        </div>
        
        <Row className="justify-content-center">
          <Col lg={4} md={6} className="mb-4">
            <div className="process-step">
              <div className="process-number">1</div>
              <h4>Partner Onboarding</h4>
              <p style={{ color: '#666', fontSize: '1.05rem' }}>
                We assess your service needs and connect your systems to our AI framework.
              </p>
            </div>
          </Col>
          
          <Col lg={4} md={6} className="mb-4">
            <div className="process-step">
              <div className="process-number">2</div>
              <h4>White-Label Deployment</h4>
              <p style={{ color: '#666', fontSize: '1.05rem' }}>
                You resell or integrate AI tools under your own brand.
              </p>
            </div>
          </Col>
          
          <Col lg={4} md={6} className="mb-4">
            <div className="process-step">
              <div className="process-number">3</div>
              <h4>Ongoing Support</h4>
              <p style={{ color: '#666', fontSize: '1.05rem' }}>
                We maintain, monitor, and update every solution.
              </p>
            </div>
          </Col>
        </Row>
        
        <div className="text-center mt-5">
          <Link href="#contact" className="btn btn-primary-custom">
            Book a Strategy Call
          </Link>
        </div>
      </Container>
    </section>
  );
}
