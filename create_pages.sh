#!/bin/bash

# Services Page
cat > app/services/page.tsx << 'SERVICES'
'use client';
import { FaBrain, FaRobot, FaChartLine, FaFileAlt, FaLock } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Services() {
  return (
    <>
      <Navbar />
      
      <section style={{ background: 'var(--gradient-primary)', color: 'white', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white' }}>Our Services</h1>
          <p style={{ fontSize: '1.25rem' }}>Comprehensive AI solutions for your business</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card mb-5">
            <div className="row align-items-center">
              <div className="col-md-2">
                <div className="card-icon" style={{ width: '80px', height: '80px' }}>
                  <FaBrain size={40} />
                </div>
              </div>
              <div className="col-md-10">
                <h3>1. AI Consulting & Strategy</h3>
                <p>We guide businesses through digital transformation from discovery to deployment.</p>
                <ul>
                  <li>AI readiness assessments</li>
                  <li>Process mapping and opportunity analysis</li>
                  <li>Integration roadmaps and governance frameworks</li>
                </ul>
                <p><strong>Outcome:</strong> A clear, low-risk path to adopt AI profitably.</p>
              </div>
            </div>
          </div>

          <div className="card mb-5">
            <div className="row align-items-center">
              <div className="col-md-2">
                <div className="card-icon" style={{ width: '80px', height: '80px', background: 'var(--gradient-secondary)' }}>
                  <FaRobot size={40} />
                </div>
              </div>
              <div className="col-md-10">
                <h3>2. Bespoke AI Agents & Automation</h3>
                <p>Tailor-made voice or text agents built around your workflow and client needs.</p>
                <ul>
                  <li>Reception, admin, sales, and analytics agents</li>
                  <li>Process and document automation</li>
                  <li>CRM and accounting-system integration</li>
                </ul>
                <p><strong>Outcome:</strong> Faster operations, lower overhead, happier clients.</p>
              </div>
            </div>
          </div>

          <div className="card mb-5">
            <div className="row align-items-center">
              <div className="col-md-2">
                <div className="card-icon" style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #00bcd4 0%, #26c6da 100%)' }}>
                  <FaChartLine size={40} />
                </div>
              </div>
              <div className="col-md-10">
                <h3>3. Data Analytics & Predictive Intelligence</h3>
                <p>We turn data into foresight.</p>
                <ul>
                  <li>Custom dashboards and performance tracking</li>
                  <li>Predictive trend and cash-flow modelling</li>
                  <li>Real-time KPI reporting for decision support</li>
                </ul>
                <p><strong>Outcome:</strong> Evidence-based strategy for your clients.</p>
              </div>
            </div>
          </div>

          <div className="card mb-5">
            <div className="row align-items-center">
              <div className="col-md-2">
                <div className="card-icon" style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #673ab7 0%, #8e24aa 100%)' }}>
                  <FaFileAlt size={40} />
                </div>
              </div>
              <div className="col-md-10">
                <h3>4. Creative AI & Communications</h3>
                <p>Our creative division produces AI-enhanced marketing and documentation.</p>
                <ul>
                  <li>AI-generated white papers, research reports, and grant applications</li>
                  <li>AI-assisted voice, video, and presentation assets</li>
                  <li>Automated content workflows</li>
                </ul>
                <p><strong>Outcome:</strong> Professional communication delivered in a fraction of the time.</p>
              </div>
            </div>
          </div>

          <div className="card mb-5">
            <div className="row align-items-center">
              <div className="col-md-2">
                <div className="card-icon" style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #e91e63 0%, #ec407a 100%)' }}>
                  <FaLock size={40} />
                </div>
              </div>
              <div className="col-md-10">
                <h3>5. AI Cybersecurity & Compliance</h3>
                <p>Security and governance built into every deployment.</p>
                <ul>
                  <li>PolyVault encrypted data storage</li>
                  <li>Continuous monitoring and threat detection</li>
                  <li>Compliance with Australian Privacy Principles and ISO 27001 standards</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <Link href="/contact" className="btn-primary btn-lg">Book a Consultation</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
SERVICES

# AI Agents Page
cat > app/ai-agents/page.tsx << 'AIAGENTS'
'use client';
import { FaPhone, FaFileAlt, FaCalculator, FaPen, FaDatabase, FaLock, FaLightbulb, FaCog } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function AIAgents() {
  const agents = [
    {
      category: 'Voice & Reception',
      icon: <FaPhone />,
      examples: 'Reception Agent, Call Routing Agent',
      description: 'Answers and routes client calls, captures leads, and notifies teams.',
      gradient: 'linear-gradient(135deg, #003366 0%, #005599 100%)'
    },
    {
      category: 'Administration & Workflow',
      icon: <FaCog />,
      examples: 'Admin Agent, Scheduler Agent',
      description: 'Manages documents, contracts, invoices, and task automation.',
      gradient: 'linear-gradient(135deg, #00bcd4 0%, #26c6da 100%)'
    },
    {
      category: 'Accounts & Finance',
      icon: <FaCalculator />,
      examples: 'Accounts Agent, Cashflow Agent',
      description: 'Tracks payments, sends reminders, and generates financial reports.',
      gradient: 'linear-gradient(135deg, #00bcd4 0%, #26c6da 100%)'
    },
    {
      category: 'Creative & Content',
      icon: <FaPen />,
      examples: 'Writer Agent, Video Agent, Voice Agent',
      description: 'Produces articles, proposals, and multimedia content.',
      gradient: 'linear-gradient(135deg, #673ab7 0%, #8e24aa 100%)'
    },
    {
      category: 'Data & Analytics',
      icon: <FaDatabase />,
      examples: 'Insights Agent, Predictive Agent',
      description: 'Turns data into actionable dashboards and forecasts.',
      gradient: 'linear-gradient(135deg, #e91e63 0%, #ec407a 100%)'
    },
    {
      category: 'Cyber & Compliance',
      icon: <FaLock />,
      examples: 'Security Agent',
      description: 'Monitors data integrity and regulatory compliance.',
      gradient: 'linear-gradient(135deg, #f44336 0%, #e57373 100%)'
    },
    {
      category: 'Consulting & Advisory',
      icon: <FaLightbulb />,
      examples: 'AI Strategy Agent',
      description: 'Provides AI readiness assessments and integration planning.',
      gradient: 'linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)'
    }
  ];

  return (
    <>
      <Navbar />
      
      <section style={{ background: 'var(--gradient-primary)', color: 'white', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white' }}>Intelligent Agents for Real-World Businesses</h1>
          <p style={{ fontSize: '1.25rem' }}>
            Every business task can be automated or enhanced by the right AI Agent. 
            Below is our suite of pre-configured agents — all customisable and deployable under your brand.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row g-4">
            {agents.map((agent, idx) => (
              <div key={idx} className="col-lg-6">
                <div className="card h-100">
                  <div className="card-icon" style={{ background: agent.gradient }}>
                    {agent.icon}
                  </div>
                  <h3 className="card-title">{agent.category}</h3>
                  <p style={{ fontWeight: '600', color: 'var(--secondary-color)' }}>
                    {agent.examples}
                  </p>
                  <p className="card-text">{agent.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link href="/contact" className="btn-primary btn-lg me-3">Request the Full Agent Catalogue</Link>
            <Link href="/contact" className="btn-secondary btn-lg">Book a Consultation</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
AIAGENTS

# Projects Page
cat > app/projects/page.tsx << 'PROJECTS'
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
PROJECTS

# Resources Page
cat > app/resources/page.tsx << 'RESOURCES'
'use client';
import { FaBookOpen, FaVideo, FaFileDownload } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Resources() {
  return (
    <>
      <Navbar />
      
      <section style={{ background: 'var(--gradient-primary)', color: 'white', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white' }}>Learn How AI Transforms Business</h1>
          <p style={{ fontSize: '1.25rem' }}>
            Our Resource Hub shares insights, tutorials, and success stories to help partners and clients understand the business impact of AI.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card h-100 text-center">
                <div className="card-icon mx-auto">
                  <FaBookOpen />
                </div>
                <h3 className="card-title">Articles</h3>
                <p className="card-text">Practical automation ideas for accounting and marketing teams.</p>
                <Link href="#" className="btn-outline">Browse Articles</Link>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card h-100 text-center">
                <div className="card-icon mx-auto" style={{ background: 'var(--gradient-secondary)' }}>
                  <FaVideo />
                </div>
                <h3 className="card-title">Videos</h3>
                <p className="card-text">Short explainers on voice AI, predictive analytics, and partner success stories.</p>
                <Link href="#" className="btn-outline">Watch Videos</Link>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card h-100 text-center">
                <div className="card-icon mx-auto" style={{ background: 'linear-gradient(135deg, #00bcd4 0%, #26c6da 100%)' }}>
                  <FaFileDownload />
                </div>
                <h3 className="card-title">eBooks</h3>
                <p className="card-text">Comprehensive guides on AI implementation and best practices.</p>
                <Link href="#" className="btn-outline">Download eBooks</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 className="mb-4">Featured eBooks</h2>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h4>Harnessing AI in Professional Services</h4>
                  <p>A comprehensive guide for professional service firms.</p>
                  <Link href="#" className="btn-primary">Download Free</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h4>AI for Marketing Agencies</h4>
                  <p>Transform your agency with AI-powered tools.</p>
                  <Link href="#" className="btn-primary">Download Free</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h4>Building a Low-Risk AI Practice</h4>
                  <p>Step-by-step guide to AI implementation.</p>
                  <Link href="#" className="btn-primary">Download Free</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <h3>Subscribe for Updates</h3>
            <p>Get the latest insights delivered to your inbox</p>
            <form className="d-flex justify-content-center gap-2 mt-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Enter your email" 
                style={{ maxWidth: '400px' }}
              />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
RESOURCES

chmod +x create_pages.sh
