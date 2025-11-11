'use client';

import { Container, Row, Col } from 'react-bootstrap';

export default function Services() {
  const services = [
    {
      icon: 'bx-brain',
      title: 'AI Consulting & Strategy',
      points: [
        'AI readiness assessments',
        'Process mapping and opportunity analysis',
        'Integration roadmaps and governance frameworks'
      ],
      outcome: 'A clear, low-risk path to adopt AI profitably.'
    },
    {
      icon: 'bx-bot',
      title: 'Bespoke AI Agents & Automation',
      points: [
        'Reception, admin, sales, and analytics agents',
        'Process and document automation',
        'CRM and accounting-system integration'
      ],
      outcome: 'Faster operations, lower overhead, happier clients.'
    },
    {
      icon: 'bx-bar-chart-alt',
      title: 'Data Analytics & Predictive Intelligence',
      points: [
        'Custom dashboards and performance tracking',
        'Predictive trend and cash-flow modelling',
        'Real-time KPI reporting for decision support'
      ],
      outcome: 'Evidence-based strategy for your clients.'
    },
    {
      icon: 'bx-edit',
      title: 'Creative AI & Communications',
      points: [
        'AI-generated white papers, research reports, and grant applications',
        'AI-assisted voice, video, and presentation assets',
        'Automated content workflows'
      ],
      outcome: 'Professional communication delivered in a fraction of the time.'
    },
    {
      icon: 'bx-shield-alt',
      title: 'AI Cybersecurity & Compliance',
      points: [
        'PolyVault encrypted data storage',
        'Continuous monitoring and threat detection',
        'Compliance with Australian Privacy Principles and ISO 27001 standards'
      ],
      outcome: 'Security and governance built into every deployment.'
    }
  ];

  return (
    <section id="services" style={{ background: '#F8F9FA' }}>
      <Container>
        <div className="section-title">
          <h2>Services</h2>
          <p>Comprehensive AI solutions for modern businesses</p>
        </div>
        
        <Row>
          {services.map((service, index) => (
            <Col lg={12} key={index} className="mb-4">
              <div className="card-custom">
                <Row className="align-items-start">
                  <Col md={1}>
                    <div className="feature-icon" style={{ margin: 0 }}>
                      <i className={`bx ${service.icon}`}></i>
                    </div>
                  </Col>
                  <Col md={11}>
                    <h3 style={{ marginBottom: '20px' }}>{service.title}</h3>
                    <Row>
                      <Col lg={8}>
                        <ul style={{ 
                          listStyle: 'none', 
                          padding: 0,
                          marginBottom: '20px'
                        }}>
                          {service.points.map((point, idx) => (
                            <li key={idx} style={{ 
                              marginBottom: '12px',
                              fontSize: '1.05rem',
                              color: '#666'
                            }}>
                              <i className='bx bx-check' style={{ 
                                color: '#4A90E2', 
                                marginRight: '10px',
                                fontSize: '1.3rem'
                              }}></i>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </Col>
                      <Col lg={4}>
                        <div style={{
                          background: 'linear-gradient(135deg, #4A90E2 0%, #00D4FF 100%)',
                          borderRadius: '15px',
                          padding: '20px',
                          color: '#fff'
                        }}>
                          <h6 style={{ 
                            color: '#fff', 
                            marginBottom: '10px',
                            fontWeight: '600'
                          }}>
                            Outcome:
                          </h6>
                          <p style={{ 
                            margin: 0,
                            color: '#fff',
                            fontSize: '0.95rem'
                          }}>
                            {service.outcome}
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
