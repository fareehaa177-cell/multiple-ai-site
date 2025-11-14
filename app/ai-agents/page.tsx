'use client';
import { FaPhone, FaFileAlt, FaCalculator, FaPen, FaDatabase, FaLock, FaCog, FaUsers, FaChartLine, FaSearch, FaHeadset, FaUserCheck, FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const agents = [
  {
    title: 'AI Receptionist Agent',
    tagline: 'Your 24/7 Super Friendly Front Desk',
    description: 'Never miss a call again. Our AI Receptionist Agent answers every inquiry with a warm, human like Australian voice greeting callers, capturing details, qualifying leads, and routing calls instantly.',
    fullDescription: 'From taking messages to booking appointments, she handles everything professionally while maintaining a friendly vibe customers love.',
    perfectFor: 'Businesses tired of missed calls, long wait times, and rising staffing costs.',
    features: [
      '24/7 call answering',
      'Lead capture + qualification',
      'Appointment booking',
      'Call routing (sales/support/admin)',
      'Human like conversational tone',
      'Works with your CRM',
    ],
    icon: FaPhone,
    accent: 'linear-gradient(135deg, rgba(0,63,125,0.18), rgba(0,188,212,0.35))',
  },
  {
    title: 'Admin AI Agent',
    tagline: 'Your Smart, Tireless Back Office Assistant',
    description: 'Let your business breathe. Our Admin Agent automates day to day admin tasks like scheduling, reminders, customer follow ups, data entry, ticket creation, and workflow updates.',
    fullDescription: 'She works with precision and keeps your operations running smoothly without breaks, mistakes, or delays.',
    perfectFor: 'Teams drowning in admin work, compliance tasks, or repetitive workflows.',
    features: [
      'Scheduling & reminders',
      'Document organisation',
      'Ticket creation',
      'CRM updates',
      'Data entry & workflow automation',
      'Follow ups & task management',
    ],
    icon: FaCog,
    accent: 'linear-gradient(135deg, rgba(0,188,212,0.24), rgba(102,126,234,0.32))',
  },
  {
    title: 'Invoice, GST & Tax AI Agent',
    tagline: 'Fast. Accurate. Stress Free Business Accounting',
    description: 'This AI Agent automates invoice creation, GST calculations, tax summaries, expense tracking, and compliance checks.',
    fullDescription: 'Built for Australian businesses, it ensures accuracy, avoids human errors, and prepares your financial data in clean, accountant ready formats.',
    perfectFor: 'SMEs, tradies, solo operators, and agencies dealing with messy invoicing or growing paperwork.',
    features: [
      'Invoice generation',
      'GST calculation',
      'Tax breakdowns',
      'Expense tracking',
      'Payment reminders',
      'Compliance ready reports',
    ],
    icon: FaCalculator,
    accent: 'linear-gradient(135deg, rgba(102,126,234,0.26), rgba(162,155,254,0.3))',
  },
  {
    title: 'AI Sales Agent',
    tagline: 'Your High Performance Closer Working 24/7',
    description: 'This agent qualifies leads, handles objections, warms up cold prospects, books meetings, and keeps your pipeline full, all with natural conversational intelligence.',
    fullDescription: 'She remembers your scripts, understands your offers, and positions your services like an expert salesperson.',
    perfectFor: 'Businesses wanting higher conversions without expanding the sales team.',
    features: [
      'Cold & warm call follow ups',
      'Objection handling',
      'Pipeline nurturing',
      'Appointment booking',
      'Lead qualification',
      'CRM integration',
    ],
    icon: FaUsers,
    accent: 'linear-gradient(135deg, rgba(0,63,125,0.22), rgba(0,188,212,0.32))',
  },
  {
    title: 'SEO AI Agent',
    tagline: 'Rank Higher. Faster. Smarter.',
    description: 'Our SEO Agent analyses your website, competitors, keywords, backlinks, and content structure, then builds a complete SEO plan tailored for you.',
    fullDescription: 'She generates optimised content, metadata, blog ideas, and site improvements to boost your ranking on Google and drive quality organic traffic.',
    perfectFor: 'Business owners wanting measurable growth without paying expensive SEO retainers.',
    features: [
      'Keyword research',
      'Competitor analysis',
      'On page optimisation',
      'Blog creation',
      'Backlink insights',
      'Complete SEO strategy',
    ],
    icon: FaSearch,
    accent: 'linear-gradient(135deg, rgba(0,188,212,0.28), rgba(0,63,125,0.24))',
  },
  {
    title: 'Social Media AI Agent',
    tagline: 'Daily Content. Trend Insights. Perfect Consistency.',
    description: 'This agent creates stunning posts, captions, hashtags, video ideas, ads scripts, and social calendars, all matched to your brand voice.',
    fullDescription: 'She tracks competitors, analyses trends, and ensures your profiles stay active, engaging, and professional.',
    perfectFor: 'Companies that want consistent content without hiring a full time social media manager.',
    features: [
      'Daily posts & captions',
      'Brand matched creatives',
      'Hashtag optimisation',
      'Trend monitoring',
      'Content calendar',
      'Cross platform posting',
    ],
    icon: FaPen,
    accent: 'linear-gradient(135deg, rgba(162,155,254,0.28), rgba(0,188,212,0.24))',
  },
  {
    title: 'Customer Support AI Agent',
    tagline: 'Instant Answers. Zero Wait Time. 100% Satisfaction.',
    description: 'Your customers receive round the clock support with a polite, human like agent that handles FAQs, troubleshooting, product queries, billing requests, and more.',
    fullDescription: 'She integrates with your CRM and support systems to provide accurate, personalised responses, every time.',
    perfectFor: 'Businesses looking to improve customer experience while reducing support costs.',
    features: [
      '24/7 instant replies',
      'Full FAQ automation',
      'Billing & product queries',
      'Ticket creation',
      'CRM synced',
      'Zero wait time for customers',
    ],
    icon: FaHeadset,
    accent: 'linear-gradient(135deg, rgba(0,63,125,0.2), rgba(0,188,212,0.3))',
  },
  {
    title: 'Data Reactivation AI Agent',
    tagline: 'Turn Old Leads Into New Revenue',
    description: 'This agent automatically contacts old leads, inactive customers, and abandoned inquiries, re engaging them with personalised conversations.',
    fullDescription: 'Perfect for reviving your pipeline and converting lost opportunities into buyers.',
    perfectFor: 'Real estate agents, coaches, agencies, home services, and anyone with a dormant database.',
    features: [
      'Reactivation sequences',
      'Personalised outreach',
      'Lead warming',
      'Upsell & repeat business',
      'Old database cleanup',
    ],
    icon: FaDatabase,
    accent: 'linear-gradient(135deg, rgba(0,188,212,0.24), rgba(102,126,234,0.32))',
  },
  {
    title: 'Client Intake AI Agent',
    tagline: 'Collects Details. Qualifies Leads. Books Next Steps.',
    description: 'No more manual onboarding. This agent gathers all essential information, pre qualifies customers, stores data, and even schedules meetings or sends forms.',
    fullDescription: 'She makes onboarding smooth, fast, and effortless, giving your team more time to focus on delivery.',
    perfectFor: 'Lawyers, tradies, consultants, clinics, agencies, and service providers.',
    features: [
      'Form data collection',
      'Lead qualification',
      'Document gathering',
      'Appointment scheduling',
      'CRM updates',
    ],
    icon: FaUserCheck,
    accent: 'linear-gradient(135deg, rgba(102,126,234,0.26), rgba(162,155,254,0.3))',
  },
  {
    title: 'Cyber Security AI Agent',
    tagline: 'Smart Protection Against Modern Digital Threats',
    description: 'This agent scans your systems, identifies security vulnerabilities, detects suspicious behaviour, and advises best practice actions.',
    fullDescription: 'She provides ongoing monitoring and alerts, helping businesses stay protected from cyber attacks, data leaks, and compliance risks.',
    perfectFor: 'Businesses wanting enterprise grade security without enterprise level costs.',
    features: [
      'Threat monitoring',
      'Vulnerability scanning',
      'Suspicious activity detection',
      'Security recommendations',
      'Compliance alerts',
    ],
    icon: FaLock,
    accent: 'linear-gradient(135deg, rgba(0,63,125,0.22), rgba(0,188,212,0.32))',
  },
];

export default function AIAgents() {
  return (
    <>
      <Navbar />
      
      <section
        style={{
          background: 'linear-gradient(135deg, #001326 0%, #003f7d 55%, #00bcd4 100%)',
          color: 'white',
          padding: '110px 0 90px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-140px',
            left: '-120px',
            width: '320px',
            height: '320px',
            background: 'rgba(102, 126, 234, 0.3)',
            filter: 'blur(120px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-160px',
            right: '-120px',
            width: '420px',
            height: '420px',
            background: 'rgba(0, 188, 212, 0.3)',
            filter: 'blur(140px)',
          }}
        />
        <div className="container position-relative text-center">
          <span
            style={{
              display: 'inline-block',
              padding: '8px 18px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.12)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontSize: '0.78rem',
              color: 'rgba(255,255,255,0.86)',
              marginBottom: '22px',
            }}
          >
            AI Agents Portfolio
          </span>
          <h1 style={{ color: 'white', fontSize: '3.1rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Powerful AI Agents for Every Business Need
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)', maxWidth: '720px', margin: '18px auto 0' }}>
            Discover our comprehensive suite of intelligent AI agents designed to automate, enhance, and transform every aspect of your business operations, from reception to security.
          </p>
        </div>
      </section>

      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, #f8fbff 0%, #eef4ff 45%, #ffffff 100%)',
          position: 'relative',
          padding: '80px 0',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-120px',
            width: '320px',
            height: '320px',
            background: 'rgba(0, 63, 125, 0.12)',
            filter: 'blur(120px)',
          }}
        />
        <div className="container position-relative">
          <div className="row g-5">
            {agents.map((agent, index) => {
              const Icon = agent.icon;
              return (
                <div key={agent.title} className="col-lg-6">
                  <div
                    className="glass-card"
                    style={{
                      padding: '40px',
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '24px',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: '-100px',
                        right: '-100px',
                        width: '280px',
                        height: '280px',
                        background: agent.accent,
                        filter: 'blur(100px)',
                        zIndex: 0,
                      }}
                    />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div
                        className="glow-icon"
                        style={{
                          width: '72px',
                          height: '72px',
                          borderRadius: '20px',
                          background: agent.accent,
                          color: '#0f1f38',
                          marginBottom: '24px',
                          backgroundSize: '200% 200%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon size={28} />
                      </div>
                      <h2 style={{ fontSize: '1.8rem', color: 'var(--text-dark)', marginBottom: '12px', fontWeight: 700 }}>
                        {agent.title}
                      </h2>
                      <p
                        style={{
                          color: '#0b7285',
                          fontSize: '1.05rem',
                          fontWeight: 600,
                          marginBottom: '16px',
                          fontStyle: 'italic',
                        }}
                      >
                        {agent.tagline}
                      </p>
                      <p style={{ color: 'var(--text-muted)', marginBottom: '16px', fontSize: '1rem', lineHeight: 1.7 }}>
                        {agent.description}
                      </p>
                      <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '0.95rem', lineHeight: 1.6 }}>
                        {agent.fullDescription}
                      </p>
                      <div
                        style={{
                          padding: '20px',
                          background: 'rgba(0, 63, 125, 0.04)',
                          borderRadius: '16px',
                          marginBottom: '20px',
                        }}
                      >
                        <p style={{ fontWeight: 600, color: '#003f7d', marginBottom: '12px', fontSize: '0.95rem' }}>
                          Perfect For:
                        </p>
                        <p style={{ color: 'var(--text-muted)', marginBottom: 0, fontSize: '0.9rem' }}>{agent.perfectFor}</p>
                      </div>
                      <div>
                        <p style={{ fontWeight: 600, color: '#003f7d', marginBottom: '16px', fontSize: '0.95rem' }}>
                          Key Features:
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                          {agent.features.map((feature, idx) => (
                            <div
                              key={idx}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '10px 14px',
                                background: 'rgba(0, 188, 212, 0.08)',
                                borderRadius: '12px',
                                border: '1px solid rgba(0, 188, 212, 0.15)',
                                transition: 'all 0.2s ease',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(0, 188, 212, 0.12)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 188, 212, 0.15)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(0, 188, 212, 0.08)';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                              }}
                            >
                              <FaCheckCircle 
                                style={{ 
                                  color: '#00bcd4', 
                                  fontSize: '16px',
                                  flexShrink: 0,
                                }} 
                              />
                              <span style={{ 
                                color: 'var(--text-dark)', 
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                lineHeight: 1.4,
                              }}>
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-5 d-flex flex-wrap gap-3 justify-content-center">
            <Link
              href="/contact"
              className="btn btn-light btn-lg px-5 py-3 rounded-pill fw-semibold"
              style={{ background: '#003f7d', color: '#fff', border: 'none' }}
            >
              Request the Full Agent Catalogue
            </Link>
            <Link
              href="/contact"
              className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-semibold"
              style={{ borderColor: 'rgba(16, 42, 67, 0.2)', color: '#003f7d' }}
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
