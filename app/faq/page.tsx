'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/fa';

type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

const faqs: FAQItem[] = [
  {
    question: 'Who is Multiple AI Solutions for?',
    answer:
      'Professional intermediaries — accountants, marketers, consultants, and IT providers — who want to deliver AI outcomes without building internal dev teams.',
    category: 'Partners',
  },
  {
    question: 'How does the white-label model work?',
    answer:
      'We deliver AI tools under your brand. You maintain the client relationship while we handle configuration, hosting, and ongoing optimisation.',
    category: 'Products',
  },
  {
    question: 'What onboarding support do partners receive?',
    answer:
      'Every partner gets a dedicated success manager, a launch playbook, branded enablement assets, and access to the Partner Portal.',
    category: 'Partners',
  },
  {
    question: 'Is client data secure?',
    answer:
      'Yes. Data is encrypted in transit and at rest, stored on Australian infrastructure, and governed by PolyVault security controls.',
    category: 'Security',
  },
  {
    question: 'Can Multiple AI integrate with existing systems?',
    answer:
      'Absolutely. Our integration layer connects with CRMs, marketing automation, ERP, and data warehouses via secure APIs.',
    category: 'Products',
  },
  {
    question: 'Do you offer bespoke AI development?',
    answer:
      'Yes. Bespoke builds are available through scoped engagements that include discovery, prototyping, and production support.',
    category: 'Services',
  },
  {
    question: 'How quickly can we launch a new client?',
    answer:
      'Most standard deployments go live within 4–6 weeks, with accelerators available for pre-configured industry bundles.',
    category: 'Delivery',
  },
  {
    question: 'What is the pricing model?',
    answer:
      'Pricing is a mix of platform subscription, usage-based AI credits, and optional professional services. Partner discounts apply.',
    category: 'Pricing',
  },
];

const categories = ['All', ...Array.from(new Set(faqs.map((faq) => faq.category)))];

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  useEffect(() => {
    setOpenQuestion(null);
  }, [activeCategory, searchTerm]);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
        <div className="container text-center">
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.2)',
              padding: '6px 16px',
              borderRadius: '999px',
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Help Centre
          </span>
          <h1 style={{ color: 'white', fontSize: '3rem', fontWeight: 'bold', marginTop: '18px' }}>
            Frequently Asked Questions
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              color: 'rgba(255,255,255,0.85)',
              maxWidth: '720px',
              margin: '18px auto 0',
            }}
          >
            Explore guidance on partnering with Multiple AI, launching automations, and keeping your
            clients ahead of the curve.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#f5f7fb' }}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10">
              <div
                className="card border-0 shadow-sm"
                style={{ borderRadius: '18px', overflow: 'hidden', background: 'white' }}
              >
                <div className="card-body p-4 p-lg-5">
                  <div className="row g-4 align-items-center">
                    <div className="col-lg-7">
                      <label
                        htmlFor="faq-search"
                        style={{
                          fontSize: '0.9rem',
                          fontWeight: 600,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: 'var(--primary-color)',
                        }}
                      >
                        Search the knowledge base
                      </label>
                      <div
                        className="d-flex align-items-center mt-2"
                        style={{
                          border: '1px solid rgba(31, 41, 55, 0.1)',
                          borderRadius: '12px',
                          padding: '10px 14px',
                          gap: '12px',
                        }}
                      >
                        <FaSearch style={{ color: 'rgba(31, 41, 55, 0.45)' }} />
                        <input
                          id="faq-search"
                          type="search"
                          value={searchTerm}
                          onChange={(event) => setSearchTerm(event.target.value)}
                          placeholder="Search by keyword or topic"
                          style={{
                            border: 'none',
                            outline: 'none',
                            width: '100%',
                            fontSize: '1rem',
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '10px',
                          justifyContent: 'flex-start',
                        }}
                      >
                        {categories.map((category) => {
                          const isActive = category === activeCategory;
                          return (
                            <button
                              type="button"
                              key={category}
                              onClick={() => setActiveCategory(category)}
                              style={{
                                borderRadius: '999px',
                                padding: '8px 18px',
                                border: 'none',
                                background: isActive ? 'var(--primary-color)' : '#eef2ff',
                                color: isActive ? 'white' : 'var(--primary-color)',
                                fontWeight: 600,
                                letterSpacing: '0.02em',
                                boxShadow: isActive ? '0 10px 20px rgba(62,125,255,0.25)' : 'none',
                                transition: 'all 0.2s ease',
                                cursor: 'pointer',
                              }}
                            >
                              {category}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              {filteredFaqs.length === 0 && (
                <div className="card border-0 shadow-sm text-center p-5" style={{ borderRadius: '18px' }}>
                  <h4 style={{ color: 'var(--primary-color)' }}>No results</h4>
                  <p className="mb-0">Try adjusting your search terms or explore another topic.</p>
                </div>
              )}

              <div className="accordion" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {filteredFaqs.map((faq) => {
                  const isOpen = openQuestion === faq.question;
                  return (
                    <div
                      key={faq.question}
                      className="card border-0 shadow-sm"
                      style={{
                        borderRadius: '18px',
                        overflow: 'hidden',
                        background: 'white',
                        transition: 'transform 0.2s ease',
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenQuestion(isOpen ? null : faq.question)}
                        className="card-body"
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          border: 'none',
                          background: 'transparent',
                          padding: '24px 28px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '12px',
                        }}
                      >
                        <div className="d-flex justify-content-between align-items-start gap-3">
                          <div>
                            <span
                              style={{
                                display: 'inline-block',
                                padding: '4px 12px',
                                borderRadius: '999px',
                                background: '#eef2ff',
                                color: 'var(--primary-color)',
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                              }}
                            >
                              {faq.category}
                            </span>
                            <h4 style={{ marginBottom: 0, marginTop: '12px', color: 'var(--primary-color)' }}>
                              {faq.question}
                            </h4>
                          </div>
                          <span
                            style={{
                              fontSize: '1.1rem',
                              color: 'var(--primary-color)',
                              flexShrink: 0,
                            }}
                          >
                            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                          </span>
                        </div>
                        {isOpen && (
                          <p style={{ marginBottom: 0, color: 'var(--text-dark)' }}>{faq.answer}</p>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-lg-8">
              <div
                className="card border-0 shadow-lg text-center"
                style={{
                  borderRadius: '18px',
                  background: 'var(--gradient-primary)',
                  color: 'white',
                  padding: '40px 30px',
                }}
              >
                <h3 style={{ color: 'white' }}>Need a tailored walkthrough?</h3>
                <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '24px' }}>
                  Book a session with our partner specialists for solution demos, pricing models, or integration
                  questions.
                </p>
                <Link href="/contact" className="btn-primary btn-lg">
                  Talk to the Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
