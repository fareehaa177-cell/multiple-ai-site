import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #001326 0%, #003f7d 55%, #00bcd4 100%)',
        color: 'white',
        padding: '40px 20px',
      }}
    >
      <div className="container text-center">
        <h1 className="display-4 fw-bold mb-4" style={{ color: 'white' }}>
          404 - Page Not Found
        </h1>
        <p className="fs-5 mb-4" style={{ color: 'rgba(255,255,255,0.85)' }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Link
            href="/"
            className="btn-pill btn-pill-white"
          >
            Go home
          </Link>
          <Link
            href="/contact"
            className="btn-pill btn-pill-gradient"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}

