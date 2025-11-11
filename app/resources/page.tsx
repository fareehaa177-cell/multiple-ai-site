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
                <div className="card-icon mx-auto" style={{ background: 'linear-gradient(135deg, #FFCC00 0%, #FFD700 100%)' }}>
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
