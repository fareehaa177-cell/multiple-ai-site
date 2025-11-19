'use client';
import type { CSSProperties } from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const teamMembers = [
  {
    name: 'Ariful Islam',
    role: 'Chief Technology Officer',
    photo: '/images/about us page/ariful.png',
  },
  {
    name: 'Meaghan',
    role: 'Chief Marketing Officer',
    photo: '/images/about us page/Meaghan.png',
  },
  {
    name: 'Purna Dhakshika Kodituwakku',
    role: 'Business Analyst',
    photo: '/images/about us page/Purna Dhakshika Kodituwakku.png',
  },
  {
    name: 'Jan Jemi Gerwayne Tiu',
    role: 'CTO (AI)',
    photo: '/images/about us page/Jan Jemi Gerwayne Tiu.png',
  },
];

type LeadershipBio = {
  name: string;
  role: string;
  photo: string;
  bio: string;
  note?: string;
  accent: string;
};

const leadershipTeam = [
  { name: 'Ali Shahroz', role: 'Founder / CEO', photo: '/images/about us page/Ali Shahroz.png' },
  { name: 'Jarrod Freer', role: 'Co-Founder', photo: '/images/about us page/Jarrod Freer.png' },
  { name: 'Ron Forlee', role: 'Chairman', photo: '/images/about us page/ron.png' },
  { name: 'Terry Smith', role: 'CFO', photo: '/images/about us page/Terry Smith (CFO).png' },
  { name: 'Sundas Shuja', role: 'Chief AI Manager', photo: '/images/about us page/Sundas Shuja.png' },
];

const leadershipBios: LeadershipBio[] = [
  {
    name: 'Ron Forlee',
    role: 'Chairman & Co-Founder',
    photo: '/images/about us page/ron.png',
    bio: `Ron Forlee is a seasoned entrepreneur, architect, and property developer with over 45 years of experience delivering major projects and guiding innovative ventures across Australia and internationally. As Chairman and Co-Founder of MultipleAI Solutions, Ron provides strategic leadership, commercial insight, and a strong vision for ethical, practical AI adoption. His background in development management, education, and business innovation helps steer MultipleAI’s national growth while nurturing the next generation of AI and automation talent.`,
    accent: '#00bcd4',
  },
  {
    name: 'Terry Smith',
    role: 'Chief Financial Officer',
    photo: '/images/about us page/Terry Smith (CFO).png',
    bio: `Terry Smith is a Chartered Accountant with over 25 years of experience, including roles at Deloitte and running his own accounting practice. He has managed the financial administration of more than 20 property developments across Western Australia. As CFO of MultipleAI Solutions, Terry oversees financial strategy, forecasting, and partner economics, ensuring strong governance and supporting the company’s national growth.`,
    accent: '#5e5ce6',
  },
  {
    name: 'Ali Shahroz',
    role: 'Founder & CEO',
    photo: '/images/about us page/Ali Shahroz.png',
    bio: `Ali Shahroz founded MultipleAI Solutions after leading automation, analytics, and innovation programs for professional service firms across Australia. He blends product vision with hands-on delivery, partnering with accounting, marketing, and consulting leaders to stand up white-label AI services that scale. Ali guides the company’s solution roadmap, culture, and national expansion while remaining actively involved in key client transformations.`,
    accent: '#f97316',
  },
  {
    name: 'Jarrod Freer',
    role: 'Co-Founder & COO',
    photo: '/images/about us page/Jarrod Freer.png',
    bio: `Jarrod Freer brings two decades of operational leadership across technology, finance, and growth-stage ventures. At MultipleAI Solutions he owns delivery operations, compliance, and partner onboarding, ensuring every engagement launches with clear processes, measurable outcomes, and premium service. Jarrod collaborates closely with partners to translate strategy into executable AI programs.`,
    accent: '#9333ea',
  },
  {
    name: 'Sundas Shuja',
    role: 'Chief AI Manager',
    photo: '/images/about us page/Sundas Shuja.png',
    bio: `Sundas Shuja leads MultipleAI’s AI delivery teams, combining a background in enterprise automation with deep experience in conversational design and agent training. She oversees solution quality, ethics, and optimisation frameworks, helping partners deploy AI agents that feel human yet remain secure and compliant. Sundas also mentors the company’s Graduate Talent Hub to grow emerging AI specialists.`,
    accent: '#00c49a',
  },
];

const leadParagraphStyle: CSSProperties = {
  fontSize: '1.15rem',
  color: '#0f1f38',
  lineHeight: 1.7,
};

const bodyParagraphStyle: CSSProperties = {
  fontSize: '1.05rem',
  color: 'var(--text-muted)',
  lineHeight: 1.7,
};

export default function About() {
  return (
    <>
      <Navbar />
      
      {/* Hero */}
      <section
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(0, 19, 38, 0.92) 0%, rgba(0, 63, 125, 0.85) 55%, rgba(0, 188, 212, 0.75) 100%), url('/images/hero image.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '100px 0 80px',
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
              <div className="glass-card" style={{ padding: '32px', borderRadius: '28px' }}>
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
                <p style={{ ...leadParagraphStyle, marginBottom: '18px' }}>
                  Making applied AI accessible to every business leader, not just tech giants.
                </p>
                <p style={{ ...bodyParagraphStyle, marginBottom: '18px' }}>
                  We empower accountants, marketers, and consultants with ready-to-deploy AI tools under their own brand. Our blended team model scales without sacrificing expertise or compliance.
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
                  src="/images/about us page/our mission.jpg"
                  alt="Our Mission"
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
                  padding: '6px 16px',
                  borderRadius: '999px',
                  background: 'rgba(0, 63, 125, 0.12)',
                  color: '#003f7d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: '0.72rem',
                  marginBottom: '18px',
                }}
              >
                Vision
              </span>
              <h2 style={{ fontSize: '2.4rem', color: '#0f1f38' }}>Our Vision</h2>
              <p style={{ ...leadParagraphStyle, marginBottom: '18px' }}>
                Every professional services firm deserves enterprise-grade automation, insight, and creativity without sacrificing human trust.
              </p>
              <p style={{ ...bodyParagraphStyle, marginBottom: '16px' }}>
                From CFO dashboards to marketing copilots, we design solutions that elevate decision-making and free teams to focus on strategic work.
              </p>
              <p style={{ ...bodyParagraphStyle, marginBottom: 0 }}>
                Result: faster innovation, stronger customer outcomes, and new value streams for partners and clients.
              </p>
            </div>
            <div className="col-lg-6">
              <div
                style={{
                  borderRadius: '30px',
                  overflow: 'hidden',
                  boxShadow: '0 32px 60px rgba(0, 26, 60, 0.18)',
                }}
              >
                <Image
                  src="/images/about us page/our vission.jpeg"
                  alt="Our Vision"
                  width={660}
                  height={420}
                  style={{ width: '100%', height: 'auto' }}
                />
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
                  src="/images/about us page/Our Approach.jpg"
                  alt="Our Approach"
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
              <p style={{ ...leadParagraphStyle, marginBottom: '16px' }}>
                Enterprise-grade AI without the complexity. Secure, scalable solutions that integrate seamlessly into your workflows.
              </p>
              <p style={{ ...bodyParagraphStyle, marginBottom: '24px' }}>
                Our methodology combines security standards, flexible architecture, and ethical AI practices. From deployment to optimisation, we ensure your AI services grow while maintaining trust and compliance.
              </p>
              <div className="row g-3">
                {[
                  {
                    icon: '🚀',
                    title: 'Comprehensive AI Service Portfolio',
                    copy: 'AI receptionist agents, automation solutions, and white-label deployments. Ready-made and bespoke solutions.',
                  },
                  {
                    icon: '🧩',
                    title: 'Modular Stack',
                    copy: 'Flexible, API-first architecture that integrates with your existing tools. Build custom solutions.',
                  },
                  {
                    icon: '⚖️',
                    title: 'Ethical Frameworks',
                    copy: 'Bias detection, transparent governance, and continuous monitoring for fair AI operations.',
                  },
                  {
                    icon: '🤝',
                    title: 'Partner Enablement',
                    copy: 'Dedicated success teams, white-label resources, and workshops to launch and scale your AI services.',
                  },
                ].map(({ icon, title, copy }) => (
                  <div className="col-md-6" key={title}>
                    <div
                      style={{
                        borderRadius: '26px',
                        background: '#ffffff',
                        boxShadow: '0 25px 60px rgba(0, 63, 125, 0.12)',
                        padding: '26px 22px',
                        height: '100%',
                      }}
                    >
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '16px',
                          background: 'rgba(0, 63, 125, 0.06)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.2rem',
                          marginBottom: '14px',
                        }}
                      >
                        {icon}
                      </div>
                      <h5 style={{ color: '#0f1f38', fontSize: '1.05rem', marginBottom: '8px', fontWeight: 700 }}>{title}</h5>
                      <p style={{ ...bodyParagraphStyle, marginBottom: 0, fontSize: '0.95rem' }}>{copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Bios */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f3fbff 45%, #ffffff 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-140px',
            right: '-120px',
            width: '320px',
            height: '320px',
            background: 'rgba(0, 188, 212, 0.18)',
            filter: 'blur(120px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-160px',
            left: '-100px',
            width: '280px',
            height: '280px',
            background: 'rgba(102, 126, 234, 0.16)',
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
                background: 'rgba(0, 63, 125, 0.08)',
                color: '#003f7d',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontSize: '0.75rem',
              }}
            >
              Leadership Bios
            </span>
            <h2 style={{ fontSize: '2.3rem', color: 'var(--text-dark)', marginTop: '16px' }}>Experience That Powers Our Vision</h2>
          </div>
          <div className="row g-4 justify-content-center">
            {leadershipBios.map(({ name, role, photo, bio, note, accent }) => (
              <div className="col-lg-6" key={name}>
                <div
                  className="glass-card"
                  style={{
                    position: 'relative',
                    padding: '32px',
                    borderRadius: '30px',
                    height: '100%',
                    display: 'grid',
                    gridTemplateColumns: 'minmax(140px, 160px) 1fr',
                    gap: '24px',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(232, 247, 255, 0.95))',
                    border: `1px solid ${accent}1f`,
                    boxShadow: '0 25px 50px rgba(15, 31, 56, 0.12)',
                  }}
                >
                  <div style={{ position: 'absolute', inset: '12px', borderRadius: '26px', background: `${accent}12`, filter: 'blur(60px)' }} />
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div
                      style={{
                        width: '140px',
                        height: '140px',
                        borderRadius: '30px',
                        padding: '6px',
                        background: `linear-gradient(135deg, ${accent}, rgba(255,255,255,0.85))`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 18px 30px rgba(15, 31, 56, 0.18)',
                      }}
                    >
                      <div
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '24px',
                          overflow: 'hidden',
                          background: '#ffffff',
                        }}
                      >
                        {photo ? (
                          <Image src={photo} alt={name} width={180} height={180} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                          <div
                            style={{
                              width: '100%',
                              height: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#0f1f38',
                              fontWeight: 700,
                              padding: '10px',
                              textAlign: 'center',
                            }}
                          >
                            {note ?? 'Image coming soon'}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '6px 14px',
                        borderRadius: '999px',
                        background: `${accent}1f`,
                        color: '#0b7285',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        fontSize: '0.7rem',
                        marginBottom: '10px',
                      }}
                    >
                      Leadership
                    </span>
                    <h3 style={{ marginBottom: '4px', color: '#0f1f38', fontSize: '1.4rem' }}>{name}</h3>
                    <p style={{ marginBottom: '14px', color: '#0b7285', fontWeight: 600 }}>{role}</p>
                    <p style={{ ...bodyParagraphStyle, marginBottom: '8px' }}>{bio}</p>
                    {note && (
                      <small style={{ color: 'var(--text-muted)' }}>
                        {note}
                      </small>
                    )}
                  </div>
                </div>
              </div>
            ))}
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
            {leadershipTeam.map(({ name, role, photo }) => (
              <div key={name} className="col-md-4">
                <div
                  style={{
                    borderRadius: '28px',
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
                      width: '140px',
                      height: '140px',
                      margin: '0 auto 20px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      position: 'relative',
                      border: '2px solid rgba(0, 63, 125, 0.1)',
                      boxShadow: '0 12px 24px rgba(15, 31, 56, 0.12)',
                    }}
                  >
                    <Image
                      src={photo}
                      alt={name}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 160px, 140px"
                    />
                  </div>
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
                <div
                  className="glass-card glass-card--dark"
                  style={{ textAlign: 'center', padding: '28px 20px', height: '100%', borderRadius: '28px' }}
                >
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
