'use client';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  Accordion,
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

const FAQ_CONTENT: FAQItem[] = [
  {
    question: 'What does Multiple AI Solutions do?',
    answer:
      'We develop custom AI software and automation tools to help businesses save time, reduce admin, and grow faster—with no technical knowledge required.',
    category: 'Products',
  },
  {
    question: 'Do I need technical skills to use your AI products?',
    answer:
      'No. Our solutions are user-friendly and fully supported. We handle setup, training, and updates—so you can focus on running your business.',
    category: 'Products',
  },
  {
    question: 'How can an AI receptionist help my business?',
    answer:
      'Our AI receptionist answers calls 24/7, books appointments, sends reminders, and follows up with clients—saving you hours every week.',
    category: 'Products',
  },
  {
    question: 'Is my data safe with your AI tools?',
    answer:
      'Absolutely. We prioritise security and only work with Australian-standard-compliant platforms to ensure full data protection and privacy.',
    category: 'Security',
  },
  {
    question: 'Can your solutions integrate with my existing systems?',
    answer:
      'Yes. We build AI tools that work seamlessly with your current CRM, calendar, email, and other business tools.',
    category: 'Products',
  },
  {
    question: 'What industries do you work with?',
    answer:
      'We support a wide range of industries including trades, finance, real estate, legal, and small businesses across Australia.',
    category: 'Services',
  },
  {
    question: 'How do I get started with Multiple AI Solutions?',
    answer:
      "Book a free consultation and we'll assess your workflows, recommend solutions, and create a tailored AI plan for your business.",
    category: 'Services',
  },
  {
    question: 'How much do your AI products cost?',
    answer:
      'Our pricing is flexible and based on your business size and needs. We offer affordable packages for startups to large teams.',
    category: 'Pricing',
  },
  {
    question: 'Do you offer local support?',
    answer:
      "Yes. We're based in Perth and offer personalised, face-to-face and remote support to ensure you're always covered.",
    category: 'Services',
  },
  {
    question: 'What kind of automation can I implement?',
    answer:
      'We automate admin tasks, document creation, invoicing, client communication, lead follow-ups, and more.',
    category: 'Products',
  },
  {
    question: 'Can I try your services before committing?',
    answer:
      'Yes. We offer a free discovery session to help you explore how AI can help before you commit to anything.',
    category: 'Services',
  },
  {
    question: 'What makes your AI tools different?',
    answer:
      'Our tools are designed specifically for Australian businesses, with local support, easy integration, and zero-tech-stress setup.',
    category: 'Products',
  },
  {
    question: 'Are your AI solutions scalable?',
    answer:
      "Yes. Whether you're a solo operator or a growing team, our solutions scale with your business.",
    category: 'Products',
  },
  {
    question: 'How quickly can I get started?',
    answer:
      'Many of our tools can be implemented within days. Custom software may take longer depending on scope.',
    category: 'Delivery',
  },
  {
    question: "What's coming next from Multiple AI Solutions?",
    answer:
      "We're constantly innovating. Stay tuned—new AI-powered products and features are launching soon to make your business even smarter.",
    category: 'Products',
  },
  {
    question: 'Who is Multiple AI Solutions for?',
    answer:
      'Professional intermediaries, accountants, marketers, consultants, and IT providers, who want to deliver AI outcomes without building internal dev teams.',
    category: 'Partners',
  },
  {
    question: 'How does the white label model work?',
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

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openItem, setOpenItem] = useState<string | null>(null);

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(FAQ_CONTENT.map((item) => item.category)))],
    []
  );

  const filteredFaqs = useMemo(() => {
    return FAQ_CONTENT.filter((faq) => {
      const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
      const term = searchTerm.trim().toLowerCase();
      const matchesSearch =
        term.length === 0 ||
        faq.question.toLowerCase().includes(term) ||
        faq.answer.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  useEffect(() => {
    setOpenItem(null);
  }, [activeCategory, searchTerm]);

  return (
    <>
      <Navbar />

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
            top: '-140px',
            left: '-140px',
            width: '360px',
            height: '360px',
            background: 'rgba(102, 126, 234, 0.32)',
            filter: 'blur(120px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-160px',
            right: '-140px',
            width: '420px',
            height: '420px',
            background: 'rgba(0, 188, 212, 0.3)',
            filter: 'blur(140px)',
          }}
        />
        <Container className="text-center">
          <Badge
            bg="light"
            text="dark"
            style={{
              background: 'rgba(255,255,255,0.16)',
              color: 'white',
              borderRadius: '999px',
              padding: '6px 16px',
              letterSpacing: '0.12em',
            }}
          >
            Help Centre
          </Badge>
          <h1 className="display-5 fw-bold mt-3 text-white" style={{ letterSpacing: '-0.02em' }}>
            Frequently Asked Questions
          </h1>
          <p
            className="fs-5 mt-3"
            style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 720, margin: '0 auto' }}
          >
            Explore guidance on partnering with Multiple AI, launching automations, and keeping your
            clients ahead of the curve.
          </p>
        </Container>
      </section>

      <section
        className="section"
        style={{ background: 'linear-gradient(135deg, #f8fbff 0%, #eef4ff 45%, #ffffff 100%)' }}
      >
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={10}>
              <Card
                className="border-0 shadow-sm"
                style={{
                  borderRadius: 24,
                  overflow: 'hidden',
                  background: '#ffffff',
                  border: '1px solid rgba(16, 42, 67, 0.08)',
                  boxShadow: '0 28px 48px rgba(0, 26, 60, 0.08)',
                }}
              >
                <Card.Body className="p-4 p-lg-5">
                  <Row className="gy-4 align-items-center">
                    <Col lg={7}>
                      <Form.Label
                        htmlFor="faq-search"
                        className="text-uppercase fw-semibold"
                        style={{ letterSpacing: '0.08em', color: 'var(--primary-color)' }}
                      >
                        Search the knowledge base
                      </Form.Label>
                      <div
                        className="d-flex align-items-center mt-2"
                        style={{
                          border: '1px solid rgba(16, 42, 67, 0.12)',
                          borderRadius: '18px',
                          padding: '12px 18px',
                          gap: '12px',
                          background: '#f9fbff',
                        }}
                      >
                        <FaSearch style={{ color: 'rgba(31, 41, 55, 0.45)' }} />
                        <Form.Control
                          id="faq-search"
                          type="search"
                          value={searchTerm}
                          onChange={(event) => setSearchTerm(event.target.value)}
                          placeholder="Search by keyword or topic"
                          className="border-0 shadow-none"
                          style={{ fontSize: '1rem' }}
                        />
                      </div>
                    </Col>
                    <Col lg={5}>
                      <div className="d-flex flex-wrap gap-2">
                        {categories.map((category) => {
                          const isActive = category === activeCategory;
                          return (
                            <Button
                              key={category}
                              variant={isActive ? 'primary' : 'outline-primary'}
                              onClick={() => setActiveCategory(category)}
                              className="px-3 py-2"
                              style={{
                                borderRadius: '999px',
                                boxShadow: isActive ? '0 10px 25px rgba(62,125,255,0.25)' : 'none',
                              }}
                            >
                              {category}
                            </Button>
                          );
                        })}
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={10}>
              {filteredFaqs.length === 0 ? (
                <Card className="border-0 shadow-sm text-center py-5" style={{ borderRadius: 22 }}>
                  <Card.Body>
                    <h4 style={{ color: 'var(--primary-color)' }}>No results found</h4>
                    <p className="text-muted mb-0">
                      Try adjusting your search terms or explore a different topic.
                    </p>
                  </Card.Body>
                </Card>
              ) : (
                <Accordion
                  activeKey={openItem ?? undefined}
                  onSelect={(eventKey) => {
                    const key = typeof eventKey === 'string' ? eventKey : null;
                    setOpenItem((prev) => (prev === key ? null : key));
                  }}
                  className="d-grid gap-3"
                >
                  {filteredFaqs.map((faq) => (
                    <Accordion.Item
                      eventKey={faq.question}
                      key={faq.question}
                      className="border-0 shadow-sm"
                      style={{
                        borderRadius: 24,
                        overflow: 'hidden',
                        border: '1px solid rgba(16, 42, 67, 0.08)',
                        boxShadow: '0 24px 44px rgba(15, 31, 56, 0.08)',
                      }}
                    >
                      <Accordion.Header>
                        <div className="d-flex flex-column gap-2">
                          <Badge
                            bg="light"
                            text="dark"
                            style={{
                              background: '#eef2ff',
                              color: 'var(--primary-color)',
                              alignSelf: 'flex-start',
                              borderRadius: '999px',
                              padding: '4px 10px',
                            }}
                          >
                            {faq.category}
                          </Badge>
                          <span className="fw-semibold" style={{ color: 'var(--primary-color)' }}>
                            {faq.question}
                          </span>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body className="fs-6 text-muted">
                        {faq.answer}
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              )}
            </Col>
          </Row>

          <Row className="justify-content-center mt-5">
            <Col lg={8}>
              <Card
                className="border-0 shadow-lg text-center"
                style={{
                  borderRadius: 28,
                  background: 'linear-gradient(135deg, #003f7d 0%, #00bcd4 80%)',
                  color: 'white',
                  padding: '48px 36px',
                  border: '1px solid rgba(255,255,255,0.18)',
                }}
              >
                <h3 className="text-white">Need a tailored walkthrough?</h3>
                <p
                  className="mt-3"
                  style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '24px' }}
                >
                  Book a session with our partner specialists for solution demos, pricing models, or
                  integration guidance.
                </p>
                <Link href="/contact" className="btn btn-primary btn-lg px-4" style={{ textDecoration: 'none', display: 'inline-block' }}>
                  Talk to the Team
                </Link>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}
