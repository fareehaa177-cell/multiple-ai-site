'use client';
import { FormEvent, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function PartnerPortal() {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitted');
  };

  return (
    <>
      <Navbar />

      <section
        style={{
          background: 'var(--gradient-primary)',
          color: 'white',
          padding: '80px 0',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.15)',
              padding: '8px 18px',
              borderRadius: '999px',
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Partner Portal
          </span>
          <h1
            style={{
              color: 'white',
              fontSize: '3rem',
              fontWeight: 'bold',
              marginTop: '20px',
            }}
          >
            Access Your White-Label AI Toolkit
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              color: 'rgba(255,255,255,0.85)',
              maxWidth: '700px',
              margin: '20px auto 0',
            }}
          >
            Log in to manage deployments, monitor usage, and access launch assets for your
            clients. Stay aligned with product updates, training, and performance insights.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#f5f7fb' }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <div
                className="card shadow border-0"
                style={{
                  borderRadius: '18px',
                  overflow: 'hidden',
                }}
              >
                <div
                  className="card-body p-4 p-lg-5"
                  style={{ background: 'white' }}
                >
                  <h3 style={{ marginBottom: '25px', color: 'var(--primary-color)' }}>
                    Partner Login
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="form-label" htmlFor="email">
                        Email address
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="you@agency.com"
                        required
                        autoComplete="email"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                        required
                        autoComplete="current-password"
                      />
                      <div className="d-flex justify-content-end mt-2">
                        <a
                          href="#"
                          style={{
                            fontSize: '0.9rem',
                            color: 'var(--primary-color)',
                            textDecoration: 'none',
                          }}
                        >
                          Forgot password?
                        </a>
                      </div>
                    </div>

                    <button type="submit" className="btn-primary w-100 py-3">
                      Sign In
                    </button>
                  </form>

                  {status === 'submitted' && (
                    <div
                      className="alert alert-info mt-4 mb-0"
                      role="alert"
                      style={{ borderRadius: '12px' }}
                    >
                      Portal authentication is managed by your Partner Manager. Please check
                      your inbox for the latest access link.
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="row g-4">
                {[
                  {
                    title: 'Launch Kits & Branding Assets',
                    description:
                      'Download ready-to-use proposals, client decks, brand assets, and onboarding templates to accelerate go-to-market.',
                  },
                  {
                    title: 'Deployment Control',
                    description:
                      'Manage AI automations, view pipeline status, and request feature updates directly from the delivery squad.',
                  },
                  {
                    title: 'Performance Insights',
                    description:
                      'Track engagement, adoption, and ROI through dashboards built for agencies and technology partners.',
                  },
                ].map((item) => (
                  <div key={item.title} className="col-md-6">
                    <div
                      className="card h-100 shadow-sm border-0"
                      style={{ borderRadius: '16px' }}
                    >
                      <div className="card-body">
                        <h5 style={{ color: 'var(--primary-color)' }}>{item.title}</h5>
                        <p style={{ color: 'var(--text-muted)' }}>{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="card shadow-sm border-0 mt-4"
                style={{ borderRadius: '16px', background: 'white' }}
              >
                <div className="card-body p-4">
                  <h4 style={{ color: 'var(--primary-color)' }}>Need Access?</h4>
                  <p className="mb-3">
                    Not a partner yet? Join the program to unlock white-label services, commissioning
                    revenue, and premium support.
                  </p>
                  <a href="mailto:contact@multipleai.com.au" className="btn-primary">
                    Request a Partner Invite
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-5">
              <h2>Why Partners Choose Multiple AI</h2>
              <p className="lead">
                We provide the infrastructure, compliance, and technical capabilities so your team can
                focus on client growth.
              </p>
            </div>
            <div className="col-lg-7">
              <div className="row g-3">
                {[
                  'Dedicated Partner Success teams across ANZ',
                  'End-to-end security with PolyVault and ISO-aligned controls',
                  'Shared roadmap planning and quarterly innovation briefings',
                  'Access to beta features, co-marketing, and deal registration',
                ].map((benefit) => (
                  <div key={benefit} className="col-sm-6">
                    <div
                      className="card border-0 shadow-sm h-100"
                      style={{ borderRadius: '14px' }}
                    >
                      <div className="card-body">
                        <p style={{ marginBottom: 0 }}>{benefit}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

