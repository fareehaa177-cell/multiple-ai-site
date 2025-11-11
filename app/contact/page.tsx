'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    interest: 'AI Agents',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Navbar />
      
      <section style={{ background: 'var(--gradient-primary)', color: 'white', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white' }}>Partner with MultipleAI Solutions</h1>
          <p style={{ fontSize: '1.25rem' }}>
            Expand your service offering with a trusted AI back-office partner
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <h2 className="mb-4">Let's Build Intelligent Solutions Together</h2>
              <p className="lead">
                Whether you're an accounting firm, marketing agency, or technology integrator, 
                MultipleAI provides the AI capability, infrastructure, and ongoing support — 
                you keep the client and the brand.
              </p>

              <form onSubmit={handleSubmit} className="mt-4">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Name *</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Organisation *</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email *</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone *</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Area of Interest</label>
                    <select 
                      className="form-select" 
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                    >
                      <option>AI Agents</option>
                      <option>Automation</option>
                      <option>Creative AI</option>
                      <option>Analytics</option>
                      <option>Consulting</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Message</label>
                    <textarea 
                      className="form-control" 
                      rows={5} 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn-primary btn-lg">
                      Book a Strategy Call
                    </button>
                  </div>
                </div>
              </form>

              <p className="mt-3 text-muted">
                A Partner Success Manager will contact you within 24 hours to discuss your needs.
              </p>
            </div>

            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="mb-4">Contact Information</h4>
                  
                  <div className="d-flex align-items-start mb-3">
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'var(--gradient-primary)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      marginRight: '15px',
                      flexShrink: 0
                    }}>
                      <FaEnvelope />
                    </div>
                    <div>
                      <h6>Email</h6>
                      <p className="text-muted">info@multipleai.com</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-3">
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'var(--gradient-secondary)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      marginRight: '15px',
                      flexShrink: 0
                    }}>
                      <FaPhone />
                    </div>
                    <div>
                      <h6>Phone</h6>
                      <p className="text-muted">+61 (0) XXX XXX XXX</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start">
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #FFCC00 0%, #FFD700 100%)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      marginRight: '15px',
                      flexShrink: 0
                    }}>
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h6>Location</h6>
                      <p className="text-muted">Australia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
