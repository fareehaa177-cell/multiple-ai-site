'use client';
import { FormEvent, useState } from 'react';
import {
  Alert,
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from 'react-bootstrap';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const capabilityCards = [
  {
    title: 'Launch Kits & Branding Assets',
    description:
      'Download proposals, client decks, brand assets, and onboarding templates to accelerate go-to-market.',
  },
  {
    title: 'Deployment Control',
    description:
      'Manage AI automations, view pipeline status, and request enhancements directly from the delivery squad.',
  },
  {
    title: 'Performance Insights',
    description:
      'Track adoption, ROI, and campaign outcomes with dashboards built for technology partners.',
  },
];

export default function PartnerPortal() {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitted');
  };

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
            background: 'rgba(102, 126, 234, 0.3)',
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
            background: 'rgba(0, 188, 212, 0.32)',
            filter: 'blur(140px)',
          }}
        />
        <Container>
          <Row className="align-items-center gy-4">
            <Col lg={8}>
              <Badge
                bg="light"
                text="dark"
                style={{
                  background: 'rgba(255,255,255,0.16)',
                  color: 'white',
                  borderRadius: '999px',
                  padding: '8px 18px',
                  letterSpacing: '0.12em',
                }}
              >
                Partner Portal
              </Badge>
              <h1 className="mt-3 fw-bold display-5 text-white">
                Access Your White Label AI Toolkit
              </h1>
              <p
                className="mt-3 fs-5"
                style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 720 }}
              >
                Manage deployments, monitor adoption, and unlock branded resources for your
                clients. Stay aligned with launches, product updates, and enablement programs.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Button
                  variant="light"
                  className="px-4 py-3"
                  href="mailto:contact@multipleai.com.au"
                  style={{
                    background: '#667eea',
                    color: '#001326',
                    border: 'none',
                    borderRadius: '999px',
                    letterSpacing: '0.05em',
                  }}
                >
                  Request Partner Access
                </Button>
                <Button
                  variant="outline-light"
                  className="px-4 py-3"
                  href="/careers"
                  style={{
                    borderRadius: '999px',
                    letterSpacing: '0.05em',
                    borderWidth: 2,
                  }}
                >
                  Join the Delivery Squad
                </Button>
              </div>
            </Col>
            <Col lg={4} className="text-lg-end">
              <Card
                className="border-0 shadow-lg mx-lg-auto"
                style={{
                  borderRadius: 26,
                  maxWidth: 320,
                  background: 'rgba(255,255,255,0.16)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <Card.Body className="text-center text-white py-4 px-4">
                  <h5 className="fw-semibold">Trusted by Partners Across ANZ</h5>
                  <p className="mb-0" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    400+ automations orchestrated through the Multiple AI partner network.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="section"
        style={{ background: 'linear-gradient(135deg, #f8fbff 0%, #eef4ff 45%, #ffffff 100%)' }}
      >
        <Container>
          <Row className="gy-5 align-items-stretch">
            <Col lg={5}>
              <Card
                className="shadow-lg border-0 h-100"
                style={{
                  borderRadius: 26,
                  border: '1px solid rgba(16, 42, 67, 0.08)',
                  boxShadow: '0 28px 48px rgba(0, 26, 60, 0.08)',
                }}
              >
                <Card.Body className="p-4 p-lg-5">
                  <div className="mb-4">
                    <Badge bg="primary" pill>
                      Partner Login
                    </Badge>
                    <h3 className="mt-3 mb-0" style={{ color: 'var(--primary-color)' }}>
                      Secure Access
                    </h3>
                    <p className="text-muted mt-2 mb-4">
                      Sign in with the credentials provided by your Partner Manager to access your
                      toolkit and deployment hub.
                    </p>
                  </div>
                  <Form onSubmit={handleSubmit} className="d-grid gap-3">
                    <Form.Group controlId="email">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="you@agency.com"
                        required
                        size="lg"
                      />
                    </Form.Group>

                    <Form.Group controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        required
                        size="lg"
                      />
                      <div className="text-end mt-2">
                        <Button variant="link" className="p-0" style={{ color: 'var(--primary-color)' }}>
                          Forgot password?
                        </Button>
                      </div>
                    </Form.Group>

                    <Button type="submit" size="lg" className="btn-primary py-3">
                      Sign In
                    </Button>
                  </Form>

                  {status === 'submitted' && (
                    <Alert
                      variant="info"
                      className="mt-4 mb-0"
                      style={{ borderRadius: 16, background: '#edf5ff' }}
                    >
                      Portal authentication is finalised by your Partner Manager. Check your inbox for the
                      most recent access link or contact support.
                    </Alert>
                  )}
                </Card.Body>
              </Card>
            </Col>
            <Col lg={7}>
              <Row className="g-4">
                {capabilityCards.map((item) => (
                  <Col md={6} key={item.title}>
                    <Card
                      className="h-100 shadow-sm border-0"
                      style={{
                        borderRadius: 22,
                        border: '1px solid rgba(16, 42, 67, 0.08)',
                        boxShadow: '0 24px 44px rgba(15, 31, 56, 0.08)',
                      }}
                    >
                      <Card.Body className="p-4">
                        <Badge
                          bg="secondary"
                          className="mb-3"
                          style={{ background: '#eef2ff', color: 'var(--primary-color)' }}
                        >
                          Capability
                        </Badge>
                        <Card.Title style={{ color: 'var(--primary-color)' }}>{item.title}</Card.Title>
                        <Card.Text className="text-muted">{item.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              <Card
                className="shadow-sm border-0 mt-4"
                style={{
                  borderRadius: 24,
                  border: '1px solid rgba(16, 42, 67, 0.08)',
                  boxShadow: '0 24px 44px rgba(15, 31, 56, 0.08)',
                }}
              >
                <Card.Body className="p-4 p-lg-5">
                  <Row className="align-items-center gy-3">
                    <Col lg={8}>
                      <h4 className="mb-2" style={{ color: 'var(--primary-color)' }}>
                        Not a partner yet?
                      </h4>
                      <p className="mb-0 text-muted">
                        Join the Multiple AI Partner Program for white label services, commissioning revenue,
                        and dedicated launch support.
                      </p>
                    </Col>
                    <Col lg={4} className="text-lg-end">
                      <Button
                        href="mailto:contact@multipleai.com.au"
                        className="btn-primary px-4 py-3"
                      >
                        Request Invite
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="section"
        style={{
          background: 'radial-gradient(circle at top left, rgba(0, 63, 125, 0.12), transparent 55%)',
        }}
      >
        <Container>
          <Row className="gy-4 align-items-center">
            <Col lg={5}>
              <h2 className="fw-bold" style={{ color: 'var(--text-dark)' }}>
                Why Partners Choose Multiple AI
              </h2>
              <p className="lead" style={{ color: 'var(--text-muted)' }}>
                We provide the infrastructure, compliance, and technical capabilities so your team can
                focus on client growth.
              </p>
            </Col>
            <Col lg={7}>
              <Row className="g-3">
                {[
                  'Dedicated Partner Success teams across ANZ',
                  'End-to-end security with PolyVault and ISO-aligned controls',
                  'Shared roadmap planning and quarterly innovation briefings',
                  'Access to beta features, co-marketing, and deal registration',
                ].map((benefit) => (
                  <Col sm={6} key={benefit}>
                    <Card
                      className="border-0 shadow-sm h-100"
                      style={{
                        borderRadius: 20,
                        border: '1px solid rgba(16, 42, 67, 0.08)',
                        boxShadow: '0 20px 40px rgba(15, 31, 56, 0.08)',
                      }}
                    >
                      <Card.Body className="p-4">
                        <Badge bg="light" text="dark" className="mb-3">
                          Advantage
                        </Badge>
                        <Card.Text className="mb-0">{benefit}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}

