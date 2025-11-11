'use client';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const roles = [
  {
    title: 'AI Solutions Consultant',
    type: 'Full-time · Perth / Hybrid',
    description:
      'Lead discovery workshops, design intelligent automation roadmaps, and translate business objectives into deployable AI solutions.',
    tags: ['Client Delivery', 'Automation', 'Consulting'],
  },
  {
    title: 'Machine Learning Engineer',
    type: 'Full-time · Remote (AU)',
    description:
      'Build and optimise production-grade ML pipelines, refine prompt architectures, and ensure responsible deployment at scale.',
    tags: ['ML Ops', 'Prompt Engineering', 'Python'],
  },
  {
    title: 'Partner Success Manager',
    type: 'Full-time · Perth',
    description:
      'Empower agency partners with enablement programs, coordinate feature releases, and drive adoption of our white-label AI toolkit.',
    tags: ['Partnerships', 'Enablement', 'Growth'],
  },
];

export default function Careers() {
  return (
    <>
      <Navbar />

      <section
        style={{
          background: 'var(--gradient-primary)',
          color: 'white',
          padding: '90px 0',
        }}
      >
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <span
                style={{
                  display: 'inline-block',
                  background: 'rgba(255,255,255,0.2)',
                  padding: '8px 16px',
                  borderRadius: '999px',
                  letterSpacing: '0.08em',
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                }}
              >
                Careers at Multiple AI
              </span>
              <h1 style={{ fontSize: '3rem', fontWeight: 700, marginTop: '20px' }}>
                Build the AI Backbone for the Professional Economy
              </h1>
              <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', maxWidth: '600px' }}>
                We blend product thinkers, engineers, designers, and partner specialists to deliver
                white-label AI experiences that scale. Join a team shaping ethical, practical AI for
                business ecosystems across Australia and beyond.
              </p>
            </div>
            <div className="col-lg-5">
              <div
                className="card border-0 shadow-lg"
                style={{
                  borderRadius: '18px',
                  background: 'rgba(255,255,255,0.08)',
                  color: 'white',
                }}
              >
                <div className="card-body p-4 p-lg-5">
                  <h3 style={{ marginBottom: '15px' }}>Work With Purpose</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      'Remote-friendly teams with Perth innovation hub',
                      'Learning budget and fortnightly AI research sprints',
                      'Equity pool for key contributors',
                      'Inclusive culture grounded in transparency and curiosity',
                    ].map((perk) => (
                      <li key={perk} style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                        <span style={{ fontWeight: 'bold', color: 'var(--secondary-color)' }}>•</span>
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f5f7fb' }}>
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-7">
              <h2>Open Roles</h2>
              <p className="lead">High-impact opportunities for builders and partner-first leaders.</p>
            </div>
            <div className="col-lg-5 text-lg-end">
              <a href="mailto:contact@multipleai.com.au" className="btn-primary">
                Share Your Profile
              </a>
            </div>
          </div>

          <div className="row g-4">
            {roles.map((role) => (
              <div key={role.title} className="col-lg-4">
                <div
                  className="card h-100 border-0 shadow-sm"
                  style={{ borderRadius: '16px', background: 'white' }}
                >
                  <div className="card-body d-flex flex-column">
                    <div>
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '6px 14px',
                          borderRadius: '999px',
                          background: 'rgba(62, 125, 255, 0.1)',
                          color: 'var(--primary-color)',
                          fontSize: '0.85rem',
                          marginBottom: '12px',
                        }}
                      >
                        {role.type}
                      </span>
                      <h4 style={{ color: 'var(--primary-color)' }}>{role.title}</h4>
                      <p style={{ color: 'var(--text-muted)' }}>{role.description}</p>
                    </div>
                    <div className="mt-auto">
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        {role.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              padding: '6px 12px',
                              background: '#eef2ff',
                              borderRadius: '999px',
                              fontSize: '0.8rem',
                              color: 'var(--primary-color)',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href="mailto:contact@multipleai.com.au?subject=Career%20Application"
                        className="btn-primary"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <h2>Life at Multiple AI</h2>
              <p className="lead">
                We work in cross-functional squads blending product, engineering, and partner success. Every
                release must be deployable, valuable, and responsible.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                {[
                  {
                    title: 'Build Fast, Build Right',
                    copy: 'Ship real features in client production environments while keeping security and compliance at the core.',
                  },
                  {
                    title: 'Always Learning',
                    copy: 'Bi-weekly labs, guest lecturers, and internal demos keep us ahead of the curve.',
                  },
                  {
                    title: 'Inclusive by Design',
                    copy: 'We embrace diversity in backgrounds, disciplines, and lived experiences to build better AI products.',
                  },
                  {
                    title: 'Human Impact',
                    copy: 'We automate the busy work so professionals can focus on meaningful advisory roles.',
                  },
                ].map((value) => (
                  <div key={value.title} className="col-sm-6">
                    <div
                      className="card h-100 shadow-sm border-0"
                      style={{ borderRadius: '16px' }}
                    >
                      <div className="card-body">
                        <h5 style={{ color: 'var(--primary-color)' }}>{value.title}</h5>
                        <p style={{ marginBottom: 0 }}>{value.copy}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gradient-primary)', color: 'white' }}>
        <div className="container text-center">
          <h2 style={{ color: 'white' }}>Ready to co-build the future of AI services?</h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.85)',
              maxWidth: '600px',
              margin: '0 auto 30px',
            }}
          >
            If you don&rsquo;t see the role you&rsquo;re looking for, we still want to hear from you.
            We&rsquo;re growing fast and welcome open applications.
          </p>
          <a href="mailto:contact@multipleai.com.au" className="btn-primary btn-lg">
            Introduce Yourself
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

