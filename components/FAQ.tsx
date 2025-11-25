'use client';

import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Who is MultipleAI Solutions for?',
      answer: 'Professional intermediaries, accountants, marketers, consultants, and IT providers, who want to offer AI services without in-house developers.'
    },
    {
      question: 'How does the white-label model work?',
      answer: 'We deliver AI tools under your brand. You maintain the client relationship; we manage the build, hosting, and updates.'
    },
    {
      question: 'What support do partners receive?',
      answer: 'Dedicated Partner Manager, SLA-based support, training portal, and performance dashboards.'
    },
    {
      question: 'Is data secure?',
      answer: 'Yes. All data is hosted on Australian servers with end-to-end encryption through PolyVault.'
    },
    {
      question: 'Do you offer custom AI development?',
      answer: 'Yes. Enterprise and bespoke builds can be commissioned under a separate consulting agreement.'
    }
  ];

  return (
    <section id="faq" style={{ background: '#fff' }}>
      <Container>
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
        </div>
        
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="accordion" style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: '20px'
            }}>
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="card-custom"
                  style={{ 
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    marginBottom: 0
                  }}
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 style={{ 
                      marginBottom: 0,
                      color: activeIndex === index ? '#4A90E2' : '#2C3E50'
                    }}>
                      {faq.question}
                    </h5>
                    <i className={`bx ${activeIndex === index ? 'bx-minus' : 'bx-plus'}`} 
                       style={{ 
                         fontSize: '1.5rem',
                         color: '#4A90E2',
                         minWidth: '30px'
                       }}
                    ></i>
                  </div>
                  
                  {activeIndex === index && (
                    <div style={{ 
                      marginTop: '20px',
                      paddingTop: '20px',
                      borderTop: '2px solid #F8F9FA',
                      color: '#666',
                      fontSize: '1.05rem',
                      lineHeight: '1.7'
                    }}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center mt-5">
              <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
                Still Have Questions?
              </p>
              <Link href="#contact" className="btn btn-primary-custom">
                Contact Us
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
