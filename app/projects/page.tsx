'use client';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Projects() {
  const projects = [
    {
      title: 'Voice Reception Agent – Xcelit',
      partner: 'IT & Support Services',
      scope: 'Inbound call handling and smart routing',
      outcome: 'Reduced missed-call rate by 70% and improved lead capture.',
      image: '/images/image5.jpeg'
    }
  ];

  const testimonials = [
    {
      quote: "MultipleAI's team helped us launch an AI service line in under a month — seamlessly under our own brand.",
      author: 'Daniel K.',
      position: 'Director, Marketing Agency Perth'
    },
    {
      quote: "Their automation agents transformed how our accounting team works — consistent, compliant, and fast.",
      author: 'Sarah L.',
      position: 'Principal CPA Firm Sydney'
    },
    {
      quote: "A reliable AI back-office partner we trust with our clients.",
      author: 'Michael T.',
      position: 'Consulting Partner Singapore'
    }
  ];

  return (
    <>
      <Navbar />
      
      <section style={{ background: 'var(--gradient-primary)', color: 'white', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white' }}>Our Work in Action</h1>
          <p style={{ fontSize: '1.25rem' }}>
            We collaborate with agencies, advisory firms, and developers to implement AI solutions that deliver measurable business value.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="mb-4">Featured Projects</h2>
          {projects.map((project, idx) => (
            <div key={idx} className="card mb-4">
              <div className="row g-0">
                <div className="col-md-4">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={400} 
                    height={300} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <h3>{project.title}</h3>
                    <p><strong>Partner/Sector:</strong> {project.partner}</p>
                    <p><strong>Scope:</strong> {project.scope}</p>
                    <p><strong>Outcome:</strong> {project.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>What Our Partners Say</h2>
          </div>
          
          <div className="row g-4">
            {testimonials.map((test, idx) => (
              <div key={idx} className="col-lg-4">
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '20px' }}>
                      "{test.quote}"
                    </p>
                    <h5 style={{ color: 'var(--primary-color)', marginBottom: '5px' }}>{test.author}</h5>
                    <p className="text-muted">{test.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link href="/contact" className="btn-primary btn-lg">Partner with Us</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
