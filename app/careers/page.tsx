'use client';
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Row,
} from 'react-bootstrap';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const roles = [
  {
    title: 'AI Solutions Consultant',
    type: 'Full-time · Perth / Hybrid',
    description:
      'Lead discovery workshops, design intelligent automation roadmaps, and translate business objectives into deployable AI solutions.',
    tags: ['Client Delivery', 'Automation', 'Consulting'],
  },
  {
    title: 'Machine Learning Engineer',
    type: 'Full-time · Remote (AU)',
    description:
      'Build and optimise production-grade ML pipelines, refine prompt architectures, and ensure responsible deployment at scale.',
    tags: ['ML Ops', 'Prompt Engineering', 'Python'],
  },
  {
    title: 'Partner Success Manager',
    type: 'Full-time · Perth',
    description:
      'Empower agency partners with enablement programs, coordinate feature releases, and drive adoption of our white label AI toolkit.',
    tags: ['Partnerships', 'Enablement', 'Growth'],
  },
];

const cultureHighlights = [
  {
    title: 'Build Fast, Build Right',
    copy: 'Ship production-ready features quickly while keeping compliance and observability at the core.',
  },
  {
    title: 'Always Learning',
    copy: 'Bi-weekly labs, internal demos, and a learning stipend keep everyone exploring the frontier.',
  },
  {
    title: 'Inclusive by Design',
    copy: 'We hire for values and curiosity, blending diverse expertise to unlock ethical AI outcomes.',
  },
  {
    title: 'Human Impact',
    copy: 'Automate the busy work so professionals can focus on strategic advisory and creativity.',
  },
];

export default function Careers() {
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
            background: 'rgba(0, 188, 212, 0.3)',
            filter: 'blur(140px)',
          }}
        />
        <Container>
          <Row className="align-items-center gy-5">
            <Col lg={7}>
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
                Careers at Multiple AI
              </Badge>
              <h1 className="display-5 fw-bold mt-3" style={{ letterSpacing: '-0.02em' }}>
                Build the AI Backbone for the Professional Economy
              </h1>
              <p className="fs-5 mt-3" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 640 }}>
                Join product thinkers, engineers, designers, and partner specialists delivering white label AI
                experiences that scale. We enable practical, ethical AI for business ecosystems across Australia
                and beyond.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Button
                  variant="light"
                  size="lg"
                  href="mailto:contact@multipleai.com.au?subject=Careers%20Enquiry"
                  style={{
                    background: '#667eea',
                    color: '#001326',
                    border: 'none',
                    borderRadius: '999px',
                    padding: '12px 28px',
                    letterSpacing: '0.05em',
                  }}
                >
                  Talk to Talent Team
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  href="#open-roles"
                  style={{
                    borderRadius: '999px',
                    padding: '12px 28px',
                    letterSpacing: '0.05em',
                    borderWidth: 2,
                  }}
                >
                  Explore Roles
                </Button>
              </div>
            </Col>
            <Col lg={5}>
              <Card
                className="border-0 shadow-lg text-white"
                style={{
                  borderRadius: 28,
                  background: 'rgba(255,255,255,0.16)',
                  border: '1px solid rgba(255,255,255,0.16)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <Card.Body className="p-4 p-lg-5">
                  <h3 className="mb-4" style={{ letterSpacing: '0.02em' }}>
                    Work With Purpose
                  </h3>
                  <ul className="list-unstyled mb-0 d-grid gap-3">
                    {[
                      'Remote-first teams with a Perth innovation hub',
                      'Learning budget and fortnightly AI research sprints',
                      'Equity pool for key contributors aligned to impact',
                      'Transparent culture grounded in curiosity and ownership',
                    ].map((perk) => (
                      <li key={perk} className="d-flex gap-3">
                        <span
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: '50%',
                          background: '#667eea',
                            display: 'inline-block',
                            marginTop: 4,
                          }}
                        />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        id="open-roles"
        className="section"
        style={{ background: 'linear-gradient(135deg, #f8fbff 0%, #eef4ff 45%, #ffffff 100%)' }}
      >
        <Container>
          <Row className="align-items-center mb-4">
            <Col lg={7}>
              <h2 className="fw-bold" style={{ color: 'var(--text-dark)' }}>
                Open Roles
              </h2>
              <p className="lead" style={{ color: 'var(--text-muted)' }}>
                High impact opportunities for builders, storytellers, and partner first leaders.
              </p>
            </Col>
            <Col lg={5} className="text-lg-end">
              <Button
                size="lg"
                className="btn-primary px-4"
                href="mailto:contact@multipleai.com.au?subject=Speculative%20Application"
              >
                Share Your Profile
              </Button>
            </Col>
          </Row>

          <Row className="g-4">
            {roles.map((role) => (
              <Col lg={4} key={role.title}>
                <Card
                  className="h-100 border-0 shadow-sm"
                  style={{
                    borderRadius: 24,
                    border: '1px solid rgba(16, 42, 67, 0.08)',
                    boxShadow: '0 24px 48px rgba(0, 26, 60, 0.08)',
                  }}
                >
                  <Card.Body className="d-flex flex-column p-4">
                    <Badge
                      pill
                      style={{
                        background: 'rgba(0,63,125,0.12)',
                        color: '#003f7d',
                        padding: '6px 14px',
                      }}
                      className="mb-3"
                    >
                      {role.type}
                    </Badge>
                    <Card.Title style={{ color: 'var(--text-dark)' }}>{role.title}</Card.Title>
                    <Card.Text style={{ color: 'var(--text-muted)' }}>{role.description}</Card.Text>
                    <div className="mt-auto">
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        {role.tags.map((tag) => (
                          <Badge
                            key={tag}
                            bg="light"
                            text="dark"
                            style={{
                              borderRadius: '999px',
                              padding: '6px 12px',
                              color: 'var(--primary-color)',
                              background: '#eef2ff',
                            }}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        href="mailto:contact@multipleai.com.au?subject=Career%20Application"
                        className="btn-primary w-100 py-2"
                        style={{ borderRadius: '999px', letterSpacing: '0.04em' }}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section
        className="section"
        style={{
          background: 'radial-gradient(circle at top left, rgba(0, 63, 125, 0.1), transparent 55%)',
        }}
      >
        <Container>
          <Row className="g-4 align-items-center">
            <Col lg={6}>
              <h2 className="fw-bold" style={{ color: 'var(--text-dark)' }}>
                Life at Multiple AI
              </h2>
              <p className="lead" style={{ color: 'var(--text-muted)' }}>
                Work in cross-functional squads blending product, engineering, and partner success. Every release
                must be deployable, measurable, and responsible.
              </p>
            </Col>
            <Col lg={6}>
              <Row className="g-3">
                {cultureHighlights.map((value) => (
                  <Col sm={6} key={value.title}>
                    <Card
                      className="h-100 shadow-sm border-0"
                      style={{
                        borderRadius: 20,
                        border: '1px solid rgba(16, 42, 67, 0.08)',
                        boxShadow: '0 18px 36px rgba(15, 31, 56, 0.08)',
                      }}
                    >
                      <Card.Body className="p-4">
                        <Badge
                          bg="light"
                          text="dark"
                          className="mb-3"
                          style={{ color: '#003f7d' }}
                        >
                          Culture
                        </Badge>
                        <h5 style={{ color: 'var(--text-dark)' }}>{value.title}</h5>
                        <p className="mb-0" style={{ color: 'var(--text-muted)' }}>
                          {value.copy}
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="section text-center"
        style={{
          background: 'linear-gradient(135deg, #001326 0%, #003f7d 55%, #00bcd4 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-140px',
            right: '-140px',
            width: '360px',
            height: '360px',
            background: 'rgba(102, 126, 234, 0.32)',
            filter: 'blur(120px)',
          }}
        />
        <Container>
          <h2 className="text-white fw-bold">Ready to co-build the future of AI services?</h2>
          <p
            className="fs-5 mt-3"
            style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 640, margin: '0 auto 28px' }}
          >
            Don&rsquo;t see the role you&rsquo;re after? We&rsquo;re scaling fast and welcome open applications
            from humans who love solving complex problems with AI.
          </p>
          <Button
            size="lg"
            className="btn-primary px-5"
            href="mailto:contact@multipleai.com.au?subject=General%20Careers%20Enquiry"
            style={{ borderRadius: '999px', letterSpacing: '0.05em' }}
          >
            Introduce Yourself
          </Button>
        </Container>
      </section>

      <Footer />
    </>
  );
}

