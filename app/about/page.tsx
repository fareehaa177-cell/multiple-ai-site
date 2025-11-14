'use client';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const teamMembers = [
  {
    name: 'Amelia Hart',
    role: 'Partner Enablement Lead',
    photo: '/images/image14.jpeg',
  },
  {
    name: 'Liam Chen',
    role: 'Head of Applied AI',
    photo: '/images/image15.jpeg',
  },
  {
    name: 'Priya Nair',
    role: 'Director of Compliance',
    photo: '/images/image16.png',
  },
  {
    name: 'Marcus Rivera',
    role: 'Solutions Architect',
    photo: '/images/image17.jpeg',
  },
];

const leadershipTeam = [
  { name: 'Ali Shahroz', role: 'Founder / CEO' },
  { name: 'Jarrod Freer', role: 'Co-Founder' },
  { name: 'Ron Forlee', role: 'Chairman' },
];

export default function About() {
  return (
    <>
      <Navbar />
      
      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #001326 0%, #003f7d 55%, #00bcd4 100%)',
          color: 'white',
          padding: '120px 0 100px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            left: '-140px',
            width: '320px',
            height: '320px',
            background: 'rgba(102, 126, 234, 0.28)',
            filter: 'blur(120px)',
            transform: 'rotate(18deg)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-180px',
            right: '-120px',
            width: '440px',
            height: '440px',
            background: 'rgba(0, 188, 212, 0.3)',
            filter: 'blur(140px)',
            transform: 'rotate(-12deg)',
          }}
        />
        <div className="container position-relative">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-xl-8">
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '8px 18px',
                  borderRadius: '999px',
                  background: 'rgba(255, 255, 255, 0.14)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontSize: '0.78rem',
                  color: 'rgba(255,255,255,0.85)',
                  marginBottom: '18px',
                }}
              >
                Who We Are
              </span>
              <h1 style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'white' }}>
                Building an AI Backbone for the Professional Economy
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.82)', maxWidth: '640px', margin: '18px auto 0', fontSize: '1.15rem' }}>
                We empower trusted firms across accounting, marketing, and consulting to launch AI services with pace,
                confidence, and control, all while keeping their brands in front.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, #f8fbff 0%, #eef4ff 45%, #ffffff 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-140px',
            right: '-120px',
            width: '360px',
            height: '360px',
            background: 'rgba(0, 63, 125, 0.12)',
            borderRadius: '50%',
            filter: 'blur(120px)',
          }}
        />
        <div className="container position-relative">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="glass-card" style={{ padding: '40px' }}>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    background: 'rgba(0, 63, 125, 0.12)',
                    color: '#003f7d',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontSize: '0.72rem',
                    marginBottom: '18px',
                  }}
                >
                  Mission
                </span>
                <h2 style={{ fontSize: '2.4rem', color: 'var(--text-dark)', marginBottom: '16px' }}>Our Mission</h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '18px' }}>
                  MultipleAI was founded to make applied AI accessible to every business leader, not just the tech giants.
                </p>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '18px' }}>
                  We empower accountants, marketers, consultants, and integrators with ready-to-deploy AI tools they can deliver under
                  their own brand. Our lean core team, specialist contractors, and graduate developers create a blended model that
                  scales without sacrificing expertise or compliance.
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    marginTop: '20px',
                  }}
                >
                  {['White Label Architecture', 'Partner First Delivery', 'Local Compliance'].map((pill) => (
                    <span
                      key={pill}
                      style={{
                        padding: '8px 14px',
                        borderRadius: '999px',
                        background: 'rgba(0, 188, 212, 0.16)',
                        color: '#0b7285',
                        fontSize: '0.82rem',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                style={{
                  position: 'relative',
                  borderRadius: '30px',
                  overflow: 'hidden',
                  boxShadow: '0 30px 60px rgba(0, 0, 0, 0.12)',
                }}
              >
                <Image
                  src="/images/image8.png"
                  alt="Partners discussing AI mission"
                  width={660}
                  height={440}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section
        className="section"
        style={{
          background: 'radial-gradient(circle at top left, rgba(0, 63, 125, 0.16), transparent 55%)',
        }}
      >
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span
                style={{
                  display: 'inline-block',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  background: 'rgba(102, 126, 234, 0.35)',
                  color: '#a26d00',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontSize: '0.72rem',
                  marginBottom: '18px',
                }}
              >
                Vision
              </span>
              <h2 style={{ fontSize: '2.4rem', color: '#0f1f38' }}>Our Vision</h2>
              <p style={{ fontSize: '1.08rem', color: '#364152', marginBottom: '18px' }}>
                We believe every professional services firm deserves enterprise-grade automation, insight, and creativity, without sacrificing
                human trust.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>
                From CFO dashboards to always-on marketing copilots, we design solutions that elevate decision-making and free teams to focus on the strategic work that clients value most.
              </p>
                  <p style={{ color: 'var(--text-muted)' }}>
                The result: faster innovation cycles, stronger customer outcomes, and new value streams for our partners and their clients.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-12">
                  <div
                    style={{
                      borderRadius: '24px',
                      overflow: 'hidden',
                      boxShadow: '0 28px 48px rgba(0, 26, 60, 0.18)',
                    }}
                  >
                    <Image
                      src="/images/image9.png"
                      alt="Strategic vision mapping session"
                      width={660}
                      height={420}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div
                    style={{
                      borderRadius: '20px',
                      overflow: 'hidden',
                      boxShadow: '0 24px 40px rgba(15, 31, 56, 0.12)',
                    }}
                  >
                    <Image
                      src="/images/image10.svg"
                      alt="AI insight dashboards"
                      width={320}
                      height={220}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div
                    style={{
                      borderRadius: '20px',
                      overflow: 'hidden',
                      boxShadow: '0 24px 40px rgba(15, 31, 56, 0.12)',
                    }}
                  >
                    <Image
                      src="/images/image11.svg"
                      alt="Innovation roadmap planning"
                      width={320}
                      height={220}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #eef4ff 50%, #ffffff 100%)',
        }}
      >
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-lg-2">
              <div
                style={{
                  borderRadius: '30px',
                  overflow: 'hidden',
                  boxShadow: '0 32px 60px rgba(0, 26, 60, 0.18)',
                }}
              >
                <Image
                  src="/images/image13.png"
                  alt="Secure modular AI solutions portfolio"
                  width={660}
                  height={440}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <span
                style={{
                  display: 'inline-block',
                  padding: '6px 16px',
                  borderRadius: '999px',
                  background: 'rgba(0, 188, 212, 0.22)',
                  color: '#0b7285',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontSize: '0.72rem',
                  marginBottom: '18px',
                }}
              >
                Approach
              </span>
              <h2 style={{ fontSize: '2.35rem', color: 'var(--text-dark)', marginBottom: '16px' }}>Our Approach</h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                Secure, modular, and ethical by design. Every deployment follows a structured blueprint balancing compliance, scalability, and speed.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
                We combine battle-tested AI frameworks with custom integrations so partners can launch quickly, then evolve confidently as their service lines grow.
              </p>
              <div className="row g-3">
                {[
                  {
                    title: 'Secure by Design',
                    copy: 'ISO-aligned practices, PolyVault encryption, and Australian data residency for regulated industries.',
                  },
                  {
                    title: 'Modular Stack',
                    copy: 'Composable components that slot into existing platforms via APIs without disrupting critical systems.',
                  },
                  {
                    title: 'Ethical Frameworks',
                    copy: 'Bias testing, governance playbooks, and human oversight ensure trustworthy outcomes.',
                  },
                  {
                    title: 'Partner Enablement',
                    copy: 'Dedicated squads, branded resources, and quarterly innovation sprints keep momentum high.',
                  },
                ].map(({ title, copy }) => (
                  <div className="col-md-6" key={title}>
                    <div
                      style={{
                        borderRadius: '20px',
                        background: '#ffffff',
                        border: '1px solid rgba(16, 42, 67, 0.08)',
                        boxShadow: '0 16px 32px rgba(15, 31, 56, 0.08)',
                        padding: '20px',
                        height: '100%',
                      }}
                    >
                      <h5 style={{ color: '#0f1f38', fontSize: '1.05rem', marginBottom: '10px' }}>{title}</h5>
                        <p style={{ color: 'var(--text-muted)', marginBottom: 0 }}>{copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, #f8fbff 0%, #eef4ff 45%, #ffffff 100%)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            left: '-100px',
            width: '300px',
            height: '300px',
            background: 'rgba(0, 63, 125, 0.08)',
            filter: 'blur(110px)',
          }}
        />
        <div className="container position-relative">
          <div className="text-center mb-5">
            <span
              style={{
                display: 'inline-block',
                padding: '6px 16px',
                borderRadius: '999px',
                background: 'rgba(0, 63, 125, 0.1)',
                color: '#003f7d',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontSize: '0.75rem',
              }}
            >
              Leadership
            </span>
            <h2 style={{ fontSize: '2.35rem', color: 'var(--text-dark)', marginTop: '16px' }}>Founders & Board</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '720px', margin: '12px auto 0' }}>
              Experienced operators guiding MultipleAI’s vision, delivery quality, and partner-first culture.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            {leadershipTeam.map(({ name, role }) => (
              <div key={name} className="col-md-4">
                <div
                  style={{
                    borderRadius: '24px',
                    background: '#ffffff',
                    border: '1px solid rgba(16, 42, 67, 0.08)',
                    boxShadow: '0 24px 48px rgba(15, 31, 56, 0.08)',
                    padding: '32px',
                    textAlign: 'center',
                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '16px',
                      margin: '0 auto 16px',
                      background: 'linear-gradient(135deg, rgba(0,63,125,0.15), rgba(0,188,212,0.25))',
                    }}
                  />
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '8px' }}>{name}</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: 0 }}>{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, #001326 0%, #01294c 55%, #004f94 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-100px',
            width: '320px',
            height: '320px',
            background: 'rgba(102, 126, 234, 0.28)',
            filter: 'blur(120px)',
          }}
        />
        <div className="container position-relative">
          <div className="text-center mb-4">
            <span
              style={{
                display: 'inline-block',
                padding: '6px 16px',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.16)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.85)',
                marginBottom: '16px',
              }}
            >
              Partner Success Team
            </span>
            <h2 style={{ fontSize: '2.35rem', fontWeight: 700, marginBottom: '10px', color: '#ffe8a3' }}>Meet Our Team</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '680px', margin: '0 auto' }}>
              A hybrid collective of strategists, engineers, creatives, and compliance experts focused on partner outcomes.
            </p>
          </div>

          <div className="row g-4">
            {teamMembers.map(({ name, role, photo }) => (
              <div key={name} className="col-lg-3 col-md-6">
                <div className="glass-card glass-card--dark" style={{ textAlign: 'center', padding: '28px 20px', height: '100%' }}>
                  <div
                    style={{
                      width: '140px',
                      height: '140px',
                      margin: '0 auto 20px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      position: 'relative',
                      border: '2px solid rgba(255,255,255,0.22)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
                    }}
                  >
                    <Image
                      src={photo}
                      alt={name}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 992px) 160px, 140px"
                    />
                  </div>
                  <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '6px' }}>{name}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.78)', marginBottom: 0 }}>{role}</p>
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
