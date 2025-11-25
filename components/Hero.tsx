'use client';

import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="hero-content">
            <h1 className="hero-title">
              Empowering Businesses through AI
            </h1>
            <p className="hero-subtitle">
              We design, build, and deliver intelligent automation, analytics, and creative AI 
              services that power the next generation of professional businesses under your own brand.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <Link href="#ai-agents" className="btn btn-primary-custom">
                Explore our Agents
              </Link>
              <Link href="#contact" className="btn btn-outline-custom">
                Partner with Us
              </Link>
            </div>
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0">
            <div className="hero-image text-center">
              <Image 
                src="/images/heroimage/heroimage7.jpg" 
                alt="AI Solutions" 
                className="img-fluid rounded"
                width={800}
                height={600}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
