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
                <div className="card-icon" style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #FFCC00 0%, #FFD700 100%)' }}>
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
