'use client';

import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

export default function WhyChooseUs() {
  const features = [
    {
      icon: 'bx-check-shield',
      title: 'Proven & Tested',
      description: 'Proven white-label framework tested in Australia.'
    },
    {
      icon: 'bx-rocket',
      title: 'Quick to Market',
      description: 'Fast time-to-market (weeks, not months).'
    },
    {
      icon: 'bx-map',
      title: 'Local Platform',
      description: 'Local compliance & data sovereignty.'
    },
    {
      icon: 'bx-graduation',
      title: 'Training Hub',
      description: 'Graduate Talent Hub ensuring future capacity.'
    },
    {
      icon: 'bx-line-chart',
      title: 'Scalable',
      description: 'Scalable pricing for partners of any size.'
    },
    {
      icon: 'bx-shield-alt-2',
      title: 'Secure',
      description: 'PolyVault encrypted data storage with continuous monitoring.'
    }
  ];

  return (
    <section id="why-us" style={{ background: '#fff' }}>
      <Container>
        <div className="section-title">
          <h2>Why MultipleAI</h2>
          <p>Your trusted AI partner for business transformation</p>
        </div>
        
        <Row>
          {features.map((feature, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <div className="card-custom">
                <div className="card-icon">
                  <i className={`bx ${feature.icon}`}></i>
                </div>
                <h4>{feature.title}</h4>
                <p style={{ color: '#666', marginBottom: 0 }}>{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-5">
          <Link href="#contact" className="btn btn-primary-custom">
            Request a Demo
          </Link>
        </div>
      </Container>
    </section>
  );
}
