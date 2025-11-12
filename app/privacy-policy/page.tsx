'use client';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <section
        style={{
          background: 'linear-gradient(135deg, #001326 0%, #003f7d 55%, #00bcd4 100%)',
          color: 'white',
          padding: '110px 0 90px',
          textAlign: 'center',
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
            background: 'rgba(255, 224, 102, 0.3)',
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
        <div className="container position-relative">
          <h1 style={{ color: 'white', fontSize: '3rem', fontWeight: 'bold', letterSpacing: '-0.02em' }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.85)' }}>
            Effective Date: September 2025
          </p>
        </div>
      </section>

      <section
        className="section"
        style={{ background: 'linear-gradient(135deg, #f8fbff 0%, #eef4ff 45%, #ffffff 100%)' }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div
                style={{
                  borderRadius: '28px',
                  background: '#ffffff',
                  border: '1px solid rgba(16, 42, 67, 0.08)',
                  boxShadow: '0 28px 48px rgba(0, 26, 60, 0.08)',
                  padding: '48px',
                }}
              >
                <div className="mb-5">
                <h2>1. Introduction</h2>
                <p>
                  Multiple AI (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;)
                  values your privacy and is committed to protecting your personal
                  information. This Privacy Policy explains how we collect, use, store,
                  and disclose information when you use our website (
                  <a href="https://multipleai.com.au/" target="_blank" rel="noopener noreferrer">
                    https://multipleai.com.au/
                  </a>
                  ) and our services.
                </p>
              </div>

                <div className="mb-5">
                <h2>2. Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <ul>
                  <li>Personal details: name, email, phone number, company name</li>
                  <li>Account details: login credentials if you register with us</li>
                  <li>
                    Payment details: billing address and transaction data (processed securely
                    via third-party providers)
                  </li>
                  <li>Usage data: IP address, device information, browser type, pages visited</li>
                  <li>Communications: feedback, inquiries, and support messages</li>
                </ul>
              </div>

                <div className="mb-5">
                <h2>3. How We Collect Information</h2>
                <ul>
                  <li>Directly from you via forms, sign-ups, or communication</li>
                  <li>Automatically through cookies and analytics tools</li>
                  <li>From trusted third-party services (e.g., payment gateways, analytics)</li>
                </ul>
              </div>

                <div className="mb-5">
                <h2>4. Use of Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide and manage our services</li>
                  <li>Improve website performance and user experience</li>
                  <li>Process transactions and deliver purchased services</li>
                  <li>Send service updates, promotions, and marketing (if you opt in)</li>
                  <li>Ensure website security and prevent fraud</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

                <div className="mb-5">
                <h2>5. Sharing of Information</h2>
                <p>We may share information with:</p>
                <ul>
                  <li>Service providers (hosting, payments, analytics, marketing)</li>
                  <li>Legal authorities where required</li>
                  <li>Business partners or affiliates when delivering services</li>
                  <li>Successors in the event of a merger, sale, or acquisition</li>
                </ul>
              </div>

                <div className="mb-5">
                <h2>6. Cookies &amp; Tracking</h2>
                <p>
                  We use cookies and similar technologies for functionality, analytics, and marketing.
                  You can control cookies through your browser settings, though disabling cookies may
                  affect certain features of the website.
                </p>
              </div>

                <div className="mb-5">
                <h2>7. Data Security</h2>
                <p>
                  We apply reasonable technical and organisational measures&mdash;including encryption,
                  access control, and monitoring&mdash;to protect your data against unauthorised access,
                  disclosure, alteration, or destruction.
                </p>
              </div>

                <div className="mb-5">
                <h2>8. Data Retention</h2>
                <p>
                  We retain personal data only as long as necessary to fulfil the purposes outlined in
                  this policy, or to comply with business, legal, or contractual requirements.
                </p>
              </div>

                <div className="mb-5">
                <h2>9. Your Rights</h2>
                <p>
                  Depending on your location, you may have rights to access, correct, delete, or restrict
                  processing of your personal information, as well as the right to object to marketing
                  communications. To exercise these rights, contact us using the details below.
                </p>
              </div>

                <div className="mb-5">
                <h2>10. International Users</h2>
                <p>
                  If you access our website from outside Australia, you acknowledge and agree to the transfer
                  of your information to Australia or other jurisdictions where our service providers operate.
                </p>
              </div>

                <div className="mb-5">
                <h2>11. Updates to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. When we do, we will post the revised
                  policy on this page with an updated &ldquo;Effective Date.&rdquo; Continued use of our
                  website or services after changes become effective constitutes acceptance of the revised policy.
                </p>
              </div>

                <div className="mb-5">
                <h2>12. Contact Us</h2>
                <p>
                  If you have questions or concerns about this Privacy Policy, please contact us at:
                </p>
                <p>Email: <a href="mailto:contact@multipleai.com.au">contact@multipleai.com.au</a></p>
                <p>Address: Perth, WA</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

