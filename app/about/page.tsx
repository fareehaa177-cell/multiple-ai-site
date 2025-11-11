'use client';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      
      <section style={{
        background: 'var(--gradient-primary)',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ color: 'white', fontSize: '3rem', fontWeight: 'bold' }}>About Us</h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)' }}>
            Building an AI Backbone for the Professional Economy
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2>Our Mission</h2>
              <p className="lead">
                MultipleAI Solutions was founded in 2025 to make applied AI accessible to every business.
              </p>
              <p>
                Our mission is to empower accountants, marketers, consultants, and integrators with ready-made 
                AI tools they can deliver under their own brand. Our lean core team, contractor specialists, 
                and graduate developers ensure expertise, scalability, and cost efficiency.
              </p>
              <div className="mt-4">
                <h4 style={{ color: 'var(--primary-color)' }}>Our Vision</h4>
                <p>Empowering businesses through AI.</p>
                <h4 style={{ color: 'var(--primary-color)' }} className="mt-3">Our Approach</h4>
                <p>Secure, modular, and ethical.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <Image 
                src="/images/image2.jpeg" 
                alt="About MultipleAI" 
                width={600} 
                height={400} 
                style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Team</h2>
            <p>Expert professionals dedicated to delivering AI excellence</p>
          </div>
          
          <div className="row g-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="card text-center">
                  <div style={{
                    width: '150px',
                    height: '150px',
                    background: 'var(--gradient-primary)',
                    borderRadius: '50%',
                    margin: '0 auto 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '3rem',
                    fontWeight: 'bold'
                  }}>
                    {String.fromCharCode(64 + i)}
                  </div>
                  <h4>Team Member {i}</h4>
                  <p className="text-muted">Position</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
