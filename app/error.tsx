'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
          Something went wrong!
        </h1>
        <p className="fs-5 mb-4" style={{ color: 'rgba(255,255,255,0.85)' }}>
          We encountered an unexpected error. Please try again.
        </p>
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <button
            onClick={reset}
            className="btn btn-light btn-lg px-4 py-3 rounded-pill fw-semibold"
            style={{ color: '#003f7d' }}
          >
            Try again
          </button>
          <Link
            href="/"
            className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill fw-semibold"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

