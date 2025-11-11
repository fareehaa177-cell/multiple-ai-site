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
      gradient: 'linear-gradient(135deg, #FFCC00 0%, #FFD700 100%)'
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
