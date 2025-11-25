'use client';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

type LeadershipBio = {
  name: string;
  role: string;
  photo: string;
  bio: string;
  accent: string;
};

// Executive Team ordered by seniority: Chairman, CEO, COO, CFO, etc.
const executiveTeam: (LeadershipBio & { order: number })[] = [
  {
    name: 'Ron Forlee',
    role: 'Chairman & Co-Founder',
    photo: '/images/about us page/ron.png',
    bio: `Ron Forlee is a seasoned entrepreneur, architect, and property developer with over 45 years of experience delivering major projects and guiding innovative ventures across Australia and internationally. As Chairman and Co-Founder of MultipleAI Solutions, Ron provides strategic leadership, commercial insight, and a strong vision for ethical, practical AI adoption. His background in development management, education, and business innovation helps steer MultipleAI's national growth while nurturing the next generation of AI and automation talent.`,
    accent: '#00bcd4',
    order: 1, // Chairman
  },
  {
    name: 'Ali Shahroz',
    role: 'Founder & CEO',
    photo: '/images/about us page/Ali Shahroz.png',
    bio: `Ali Shahroz founded MultipleAI Solutions after leading automation, analytics, and innovation programs for professional service firms across Australia. He blends product vision with hands-on delivery, partnering with accounting, marketing, and consulting leaders to stand up white-label AI services that scale. Ali guides the company's solution roadmap, culture, and national expansion while remaining actively involved in key client transformations.`,
    accent: '#f97316',
    order: 2, // CEO
  },
  {
    name: 'Jarrod Freer',
    role: 'Co-Founder & COO',
    photo: '/images/about us page/Jarrod Freer.png',
    bio: `Jarrod Freer brings two decades of operational leadership across technology, finance, and growth-stage ventures. At MultipleAI Solutions he owns delivery operations, compliance, and partner onboarding, ensuring every engagement launches with clear processes, measurable outcomes, and premium service. Jarrod collaborates closely with partners to translate strategy into executable AI programs.`,
    accent: '#9333ea',
    order: 3, // COO
  },
  {
    name: 'Terry Smith',
    role: 'Chief Financial Officer',
    photo: '/images/about us page/terry.png',
    bio: `Terry Smith is a Chartered Accountant with over 25 years of experience, including roles at Deloitte and running his own accounting practice. He has managed the financial administration of more than 20 property developments across Western Australia. As CFO of MultipleAI Solutions, Terry oversees financial strategy, forecasting, and partner economics, ensuring strong governance and supporting the company's national growth.`,
    accent: '#5e5ce6',
    order: 4, // CFO
  },
  {
    name: 'Sundas Shuja',
    role: 'Chief AI Manager',
    photo: '/images/about us page/Sundas Shuja.png',
    bio: `Sundas Shuja leads MultipleAI's AI delivery teams, combining a background in enterprise automation with deep experience in conversational design and agent training. She oversees solution quality, ethics, and optimisation frameworks, helping partners deploy AI agents that feel human yet remain secure and compliant. Sundas also mentors the company's Graduate Talent Hub to grow emerging AI specialists.`,
    accent: '#00c49a',
    order: 5, // Chief AI Manager
  },
];

export default function LeadershipBios() {
  return (
    <>
      <Navbar />

      <section
        style={{
          background: 'linear-gradient(135deg, #f8fbff 0%, #eef4ff 45%, #ffffff 100%)',
          padding: '120px 0 100px',
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
                padding: '8px 20px',
                borderRadius: '999px',
                background: 'rgba(0, 63, 125, 0.12)',
                color: '#003f7d',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontSize: '0.75rem',
                fontWeight: 600,
                marginBottom: '24px',
              }}
            >
              Leadership Bios
            </span>
            <h1
              style={{
                fontSize: '3rem',
                fontWeight: 700,
                color: '#0f1f38',
                marginTop: '16px',
                marginBottom: '24px',
                letterSpacing: '-0.02em',
              }}
            >
              Experience That Powers Our Vision
            </h1>
            <p style={{ color: 'var(--text-muted)', maxWidth: '720px', margin: '0 auto', fontSize: '1.1rem' }}>
              Meet the leadership team driving MultipleAI&apos;s strategic direction, innovation, and partner-first culture.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {executiveTeam.sort((a, b) => a.order - b.order).map(({ name, role, photo, bio, accent }) => {
              // Determine gradient colors based on accent
              const gradientColors: Record<string, string> = {
                '#00bcd4': 'linear-gradient(135deg, rgba(0, 188, 212, 0.15), rgba(0, 188, 212, 0.05))',
                '#f97316': 'linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(249, 115, 22, 0.05))',
                '#9333ea': 'linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(147, 51, 234, 0.05))',
                '#5e5ce6': 'linear-gradient(135deg, rgba(94, 92, 230, 0.15), rgba(94, 92, 230, 0.05))',
                '#00c49a': 'linear-gradient(135deg, rgba(0, 196, 154, 0.15), rgba(0, 196, 154, 0.05))',
              };

              const borderGradient = gradientColors[accent] || gradientColors['#00bcd4'];

              return (
                <div className="col-lg-6" key={name}>
                  <div
                    style={{
                      position: 'relative',
                      padding: '36px',
                      borderRadius: '30px',
                      height: '100%',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248, 250, 252, 0.95))',
                      border: `1px solid ${accent}2f`,
                      boxShadow: '0 25px 50px rgba(15, 31, 56, 0.12)',
                      borderTop: `3px solid ${accent}`,
                      borderLeft: `3px solid ${accent}`,
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        inset: '0',
                        borderRadius: '30px',
                        background: borderGradient,
                        opacity: 0.3,
                        pointerEvents: 'none',
                      }}
                    />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                        <div
                          style={{
                            width: '160px',
                            height: '160px',
                            borderRadius: '50%',
                            padding: '6px',
                            background: `linear-gradient(135deg, ${accent}, rgba(255,255,255,0.85))`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 18px 30px rgba(15, 31, 56, 0.18)',
                            margin: '0 auto 20px',
                          }}
                        >
                          <div
                            style={{
                              width: '100%',
                              height: '100%',
                              borderRadius: '50%',
                              overflow: 'hidden',
                              background: '#ffffff',
                            }}
                          >
                            {photo ? (
                              <Image
                                src={photo}
                                alt={name}
                                width={160}
                                height={160}
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: name === 'Terry Smith' ? 'contain' : 'cover',
                                  objectPosition: 'center',
                                }}
                              />
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
                                Image coming soon
                              </div>
                            )}
                          </div>
                        </div>
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
                            marginBottom: '12px',
                            fontWeight: 600,
                          }}
                        >
                          Leadership
                        </span>
                        <h3 style={{ marginBottom: '6px', color: '#0f1f38', fontSize: '1.5rem', fontWeight: 700 }}>
                          {name}
                        </h3>
                        <p
                          style={{
                            marginBottom: '20px',
                            color: '#0b7285',
                            fontWeight: 600,
                            fontSize: '1rem',
                          }}
                        >
                          {role}
                        </p>
                      </div>
                      <p
                        style={{
                          color: 'var(--text-muted)',
                          lineHeight: 1.7,
                          fontSize: '1rem',
                          marginBottom: 0,
                          textAlign: 'left',
                        }}
                      >
                        {bio}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-5">
            <Link
              href="/about"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #003f7d, #00bcd4)',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.95rem',
                letterSpacing: '0.02em',
                boxShadow: '0 18px 32px rgba(0, 63, 125, 0.25)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 22px 40px rgba(0, 63, 125, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 18px 32px rgba(0, 63, 125, 0.25)';
              }}
            >
              ← Back to About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

