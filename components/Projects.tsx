'use client';

import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'Voice Reception Agent - Xcelit',
      partner: 'IT & Support Services',
      scope: 'Inbound call handling and smart routing',
      outcome: 'Reduced missed-call rate by 70% and improved lead capture.',
      image: '/images/image2.jpeg'
    }
  ];

  const testimonials = [
    {
      text: "MultipleAI's team helped us launch an AI service line in under a month - seamlessly under our own brand.",
      author: "Daniel K.",
      position: "Director, Marketing Agency Perth"
    },
    {
      text: "Their automation agents transformed how our accounting team works - consistent, compliant, and fast.",
      author: "Sarah L.",
      position: "Principal CPA Firm Sydney"
    },
    {
      text: "A reliable AI back-office partner we trust with our clients.",
      author: "Michael T.",
      position: "Consulting Partner Singapore"
    }
  ];

  return (
    <>
      <section id="projects" style={{ background: '#F8F9FA' }}>
        <Container>
          <div className="section-title">
            <h2>Our Work in Action</h2>
            <p>
              We collaborate with agencies, advisory firms, and developers to implement AI solutions 
              that deliver measurable business value. Each engagement demonstrates the flexibility of 
              our white-label framework.
            </p>
          </div>
          
          <Row>
            {projects.map((project, index) => (
              <Col lg={12} key={index} className="mb-4">
                <div className="card-custom">
                  <Row className="align-items-center">
                    <Col md={4}>
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        className="img-fluid rounded"
                        width={400}
                        height={250}
                        style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                      />
                    </Col>
                    <Col md={8}>
                      <h3 style={{ marginBottom: '15px' }}>{project.title}</h3>
                      <p style={{ 
                        color: '#4A90E2', 
                        fontWeight: '600',
                        marginBottom: '15px'
                      }}>
                        {project.partner}
                      </p>
                      <div className="mb-3">
                        <strong style={{ color: '#2C3E50' }}>Scope:</strong>
                        <p style={{ color: '#666', marginBottom: '0' }}>{project.scope}</p>
                      </div>
                      <div style={{
                        background: 'linear-gradient(135deg, #4A90E2 0%, #00D4FF 100%)',
                        borderRadius: '10px',
                        padding: '15px',
                        color: '#fff'
                      }}>
                        <strong>Outcome:</strong> {project.outcome}
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section style={{ background: '#fff', paddingTop: '80px', paddingBottom: '80px' }}>
        <Container>
          <div className="section-title">
            <h2>What Our Partners Say</h2>
          </div>
          
          <Row>
            {testimonials.map((testimonial, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <div className="testimonial-card">
                  <div style={{ marginBottom: '25px' }}>
                    <i className='bx bxs-quote-left' style={{ 
                      fontSize: '3rem',
                      color: '#4A90E2',
                      opacity: 0.3
                    }}></i>
                  </div>
                  <p className="testimonial-text" dangerouslySetInnerHTML={{ __html: `&ldquo;${testimonial.text.replace(/'/g, '&apos;')}&rdquo;` }} />
                  <div className="testimonial-author">{testimonial.author}</div>
                  <div className="testimonial-position">{testimonial.position}</div>
                </div>
              </Col>
            ))}
          </Row>
          
          <div className="text-center mt-5">
            <Link href="#contact" className="btn btn-primary-custom">
              Partner with Us
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
