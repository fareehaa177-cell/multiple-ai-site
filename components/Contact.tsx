'use client';

import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! A Partner Success Manager will contact you within 24 hours.');
  };

  return (
    <section id="contact" style={{ 
      background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.05) 0%, rgba(0, 212, 255, 0.05) 100%)' 
    }}>
      <Container>
        <div className="section-title">
          <h2>Partner with MultipleAI Solutions</h2>
          <p>Expand your service offering with a trusted AI back-office partner.</p>
        </div>
        
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="contact-form">
              <h3 style={{ 
                textAlign: 'center', 
                marginBottom: '15px',
                color: '#2C3E50'
              }}>
                Let's Build Intelligent Solutions Together
              </h3>
              <p style={{ 
                textAlign: 'center', 
                marginBottom: '40px',
                color: '#666',
                fontSize: '1.05rem'
              }}>
                Whether you're an accounting firm, marketing agency, or technology integrator, 
                MultipleAI provides the AI capability, infrastructure, and ongoing support - 
                you keep the client and the brand.
              </p>
              
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-4">
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: '#2C3E50'
                    }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="form-control-custom"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                  </Col>
                  
                  <Col md={6} className="mb-4">
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: '#2C3E50'
                    }}>
                      Organisation *
                    </label>
                    <input
                      type="text"
                      name="organization"
                      required
                      className="form-control-custom"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Your organization"
                    />
                  </Col>
                  
                  <Col md={6} className="mb-4">
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: '#2C3E50'
                    }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="form-control-custom"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </Col>
                  
                  <Col md={6} className="mb-4">
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: '#2C3E50'
                    }}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control-custom"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+61 xxx xxx xxx"
                    />
                  </Col>
                  
                  <Col md={12} className="mb-4">
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: '#2C3E50'
                    }}>
                      Area of Interest
                    </label>
                    <select
                      name="interest"
                      className="form-control-custom"
                      value={formData.interest}
                      onChange={handleChange}
                    >
                      <option value="">Select an option</option>
                      <option value="consulting">Consulting</option>
                      <option value="bespoke">Bespoke Agent</option>
                      <option value="automation">Automation</option>
                      <option value="analytics">Data Analytics</option>
                      <option value="whitepapers">White Papers</option>
                      <option value="other">Other</option>
                    </select>
                  </Col>
                  
                  <Col md={12} className="mb-4">
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: '#2C3E50'
                    }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      className="form-control-custom"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your needs and how we can help..."
                      style={{ resize: 'vertical' }}
                    />
                  </Col>
                  
                  <Col md={12} className="text-center">
                    <button type="submit" className="btn btn-primary-custom">
                      Book a Strategy Call
                    </button>
                    <p style={{ 
                      marginTop: '20px',
                      color: '#666',
                      fontSize: '0.95rem'
                    }}>
                      A Partner Success Manager will contact you within 24 hours to discuss your needs.
                    </p>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
