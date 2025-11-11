'use client';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Terms() {
  return (
    <>
      <Navbar />

      <section
        style={{
          background: 'var(--gradient-primary)',
          color: 'white',
          padding: '80px 0',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h1 style={{ color: 'white', fontSize: '3rem', fontWeight: 'bold' }}>
            Terms &amp; Conditions
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)' }}>
            Effective Date: September 2025
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="mb-5">
                <h2>1. Agreement</h2>
                <p>
                  By using{' '}
                  <a href="https://multipleai.com.au/" target="_blank" rel="noopener noreferrer">
                    https://multipleai.com.au/
                  </a>{' '}
                  (the &ldquo;Website&rdquo;) and our services, you agree to these Terms &amp;
                  Conditions. If you do not agree, please discontinue use of the Website and our
                  services.
                </p>
              </div>

              <div className="mb-5">
                <h2>2. Services</h2>
                <p>
                  Multiple AI provides AI-driven automation, data solutions, and related services.
                  Specific service deliverables or performance obligations may be detailed in separate
                  agreements or statements of work.
                </p>
              </div>

              <div className="mb-5">
                <h2>3. Use of Website</h2>
                <ul>
                  <li>You must use the Website lawfully and must not disrupt or harm others.</li>
                  <li>
                    You must not attempt to hack, copy, or misuse Website content, trademarks, or intellectual
                    property.
                  </li>
                  <li>
                    Content provided is for general information and marketing purposes; we do not guarantee
                    uninterrupted availability or that the content is error free.
                  </li>
                </ul>
              </div>

              <div className="mb-5">
                <h2>4. User Accounts</h2>
                <ul>
                  <li>If you create an account, you are responsible for safeguarding your login details.</li>
                  <li>You agree to provide accurate, current, and complete information.</li>
                  <li>We may suspend or terminate accounts that breach these Terms.</li>
                </ul>
              </div>

              <div className="mb-5">
                <h2>5. Payments</h2>
                <ul>
                  <li>Prices are displayed in Australian dollars unless otherwise stated.</li>
                  <li>Payments must be made securely through our approved methods.</li>
                  <li>
                    Refunds (if applicable) follow our stated refund policy or applicable consumer law.
                  </li>
                </ul>
              </div>

              <div className="mb-5">
                <h2>6. Intellectual Property</h2>
                <p>
                  All Website content, including text, graphics, software, and branding, is owned by Multiple
                  AI or its licensors. You may not reproduce, distribute, or modify any content without our
                  prior written consent.
                </p>
              </div>

              <div className="mb-5">
                <h2>7. Limitation of Liability</h2>
                <ul>
                  <li>We provide the Website and our services on an &ldquo;as is&rdquo; basis.</li>
                  <li>
                    To the extent permitted by law, we are not liable for indirect or consequential damages,
                    including loss of profits or business interruption.
                  </li>
                  <li>
                    Our total liability is capped at the amount paid by you for our services in the 12 months
                    preceding the claim.
                  </li>
                </ul>
              </div>

              <div className="mb-5">
                <h2>8. Third-Party Links</h2>
                <p>
                  The Website may contain links to third-party sites. We are not responsible for the content,
                  security, or privacy practices of those sites. Accessing third-party sites is at your own risk.
                </p>
              </div>

              <div className="mb-5">
                <h2>9. Termination</h2>
                <p>
                  We may suspend or terminate your access to the Website or our services if you breach these
                  Terms or engage in conduct that we deem harmful to our business or users.
                </p>
              </div>

              <div className="mb-5">
                <h2>10. Governing Law</h2>
                <p>
                  These Terms are governed by the laws of Western Australia, Australia. You agree to submit to
                  the exclusive jurisdiction of the courts located in Western Australia for the resolution of any
                  disputes.
                </p>
              </div>

              <div className="mb-5">
                <h2>11. Updates to These Terms</h2>
                <p>
                  We may update these Terms from time to time. When we do, we will post the revised Terms on this
                  page with an updated &ldquo;Effective Date.&rdquo; Continued use of the Website after changes
                  take effect constitutes acceptance of the updated Terms.
                </p>
              </div>

              <div className="mb-5">
                <h2>12. Contact Us</h2>
                <p>For questions about these Terms, contact us at:</p>
                <p>Email: <a href="mailto:contact@multipleai.com.au">contact@multipleai.com.au</a></p>
                <p>Address: Perth, WA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

