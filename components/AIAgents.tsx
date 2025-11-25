'use client';

import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

export default function AIAgents() {
  const agents = [
    {
      icon: 'bx-phone-call',
      category: 'Voice & Reception',
      examples: 'Reception Agent, Call Routing Agent',
      description: 'Answers and routes client calls, captures leads, and notifies teams.'
    },
    {
      icon: 'bx-briefcase',
      category: 'Administration & Workflow',
      examples: 'Admin Agent, Scheduler Agent',
      description: 'Manages documents, contracts, invoices, and task automation.'
    },
    {
      icon: 'bx-dollar-circle',
      category: 'Accounts & Finance',
      examples: 'Accounts Agent, Cashflow Agent',
      description: 'Tracks payments, sends reminders, and generates financial reports.'
    },
    {
      icon: 'bx-brush',
      category: 'Creative & Content',
      examples: 'Writer Agent, Video Agent, Voice Agent',
      description: 'Produces articles, proposals, and multimedia content.'
    },
    {
      icon: 'bx-data',
      category: 'Data & Analytics',
      examples: 'Insights Agent, Predictive Agent',
      description: 'Turns data into actionable dashboards and forecasts.'
    },
    {
      icon: 'bx-lock-alt',
      category: 'Cyber & Compliance',
      examples: 'Security Agent',
      description: 'Monitors data integrity and regulatory compliance.'
    },
    {
      icon: 'bx-user-voice',
      category: 'Consulting & Advisory',
      examples: 'AI Strategy Agent',
      description: 'Provides AI readiness assessments and integration planning.'
    }
  ];

  return (
    <section id="ai-agents" style={{ background: '#fff' }}>
      <Container>
        <div className="section-title">
          <h2>Intelligent Agents for Real-World Businesses</h2>
          <p>
            Every business task can be automated or enhanced by the right AI Agent. 
            Below is our suite of pre-configured agents all customisable and deployable under your brand.
          </p>
        </div>
        
        <Row>
          {agents.map((agent, index) => (
            <Col lg={6} key={index} className="mb-4">
              <div className="card-custom" style={{ height: '100%' }}>
                <div className="d-flex align-items-start">
                  <div className="card-icon" style={{ minWidth: '70px', marginRight: '20px' }}>
                    <i className={`bx ${agent.icon}`}></i>
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '10px' }}>{agent.category}</h4>
                    <p style={{ 
                      color: '#4A90E2', 
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      marginBottom: '10px'
                    }}>
                      {agent.examples}
                    </p>
                    <p style={{ color: '#666', marginBottom: 0 }}>
                      {agent.description}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-5">
          <Link href="#contact" className="btn btn-primary-custom me-3 mb-3">
            Request the Full Agent Catalogue
          </Link>
          <Link href="#contact" className="btn btn-outline-custom mb-3">
            Book a Consultation
          </Link>
        </div>
      </Container>
    </section>
  );
}
