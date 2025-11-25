'use client';
import { FaBookOpen, FaMicrophone, FaFileDownload, FaLightbulb, FaChartLine, FaCog, FaVideo } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ebooks } from './ebooks-data';

// Video Card Component
function VideoCard({ video }: { video: { id: string; title: string; vimeoId: string } }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div
        className="glass-card"
        style={{
          padding: '26px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '16px',
          background: '#ffffff',
          border: '1px solid rgba(16, 42, 67, 0.08)',
          boxShadow: '0 8px 24px rgba(0, 26, 60, 0.08)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 16px 32px rgba(0, 26, 60, 0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 26, 60, 0.08)';
        }}
      >
        {/* Video Embed */}
        <div
          style={{
            width: '100%',
            paddingBottom: '56.25%', // 16:9 aspect ratio
            position: 'relative',
            marginBottom: '20px',
            borderRadius: '12px',
            overflow: 'hidden',
            background: '#000',
          }}
        >
          <iframe
            src={`https://player.vimeo.com/video/${video.vimeoId}?title=0&byline=0&portrait=0`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
            }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={video.title}
          />
        </div>

        {/* Video Title */}
        <h4
          style={{
            fontSize: '1.3rem',
            color: 'var(--text-dark)',
            marginBottom: '12px',
            fontWeight: 600,
            lineHeight: '1.4',
          }}
        >
          {video.title}
        </h4>
      </div>
    </div>
  );
}

// E-Book Card Component
function EBookCard({ ebook }: { ebook: typeof ebooks[0] }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div
        className="glass-card"
        style={{
          padding: '26px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '16px',
          background: '#ffffff',
          border: '1px solid rgba(16, 42, 67, 0.08)',
          boxShadow: '0 8px 24px rgba(0, 26, 60, 0.08)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 16px 32px rgba(0, 26, 60, 0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 26, 60, 0.08)';
        }}
      >
        {/* E-Book Cover */}
        <div
          style={{
            width: '100%',
            height: '280px',
            marginBottom: '20px',
            borderRadius: '12px',
            overflow: 'visible',
            background: 'linear-gradient(135deg, rgba(0, 63, 125, 0.08) 0%, rgba(0, 188, 212, 0.08) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            cursor: 'pointer',
          }}
          onClick={() => window.open(ebook.pdfPath, '_blank')}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              perspective: '1000px',
            }}
          >
            {/* 3D PDF Icon */}
            <div
              style={{
                width: '140px',
                height: '180px',
                position: 'relative',
                transform: 'rotateY(-15deg) rotateX(5deg)',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotateY(-10deg) rotateX(2deg) scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotateY(-15deg) rotateX(5deg) scale(1)';
              }}
            >
              {/* Main Document */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: '#ffffff',
                  borderRadius: '4px',
                  position: 'relative',
                  boxShadow: '0 20px 40px rgba(0, 63, 125, 0.3), 0 0 0 1px rgba(0, 63, 125, 0.1)',
                  transform: 'translateZ(20px)',
                }}
              >
                {/* Blue Header with Website Gradient */}
                <div
                  style={{
                    width: '100%',
                    height: '35%',
                    background: 'linear-gradient(135deg, #003f7d 0%, #00bcd4 100%)',
                    borderRadius: '4px 4px 0 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    boxShadow: 'inset 0 -2px 4px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <FaFileDownload size={32} style={{ color: 'white', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }} />
                </div>
                {/* White Body */}
                <div
                  style={{
                    width: '100%',
                    height: '65%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px',
                    gap: '8px',
                    background: 'linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '2.2rem',
                      fontWeight: 900,
                      background: 'linear-gradient(135deg, #003f7d 0%, #00bcd4 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      lineHeight: '1',
                      textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                      letterSpacing: '2px',
                    }}
                  >
                    PDF
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: '#5b6b84',
                      textAlign: 'center',
                      fontWeight: 500,
                    }}
                  >
                    Document
                  </div>
                </div>
              </div>
              {/* 3D Shadow Effect - Back Page */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(0, 63, 125, 0.3) 0%, rgba(0, 188, 212, 0.2) 100%)',
                  borderRadius: '4px',
                  position: 'absolute',
                  top: '8px',
                  left: '8px',
                  zIndex: -1,
                  transform: 'translateZ(-10px)',
                  boxShadow: '0 10px 30px rgba(0, 63, 125, 0.2)',
                }}
              />
              {/* 3D Shadow Effect - Second Layer */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(0, 63, 125, 0.15) 0%, rgba(0, 188, 212, 0.1) 100%)',
                  borderRadius: '4px',
                  position: 'absolute',
                  top: '4px',
                  left: '4px',
                  zIndex: -2,
                  transform: 'translateZ(-20px)',
                  boxShadow: '0 5px 15px rgba(0, 63, 125, 0.15)',
                }}
              />
            </div>
          </div>
        </div>

        {/* E-Book Title */}
        <h4
          style={{
            fontSize: '1.3rem',
            color: 'var(--text-dark)',
            marginBottom: '12px',
            fontWeight: 600,
            lineHeight: '1.4',
          }}
        >
          {ebook.title}
        </h4>

        {/* Short Description */}
        <p
          style={{
            color: 'var(--text-muted)',
            marginBottom: '20px',
            fontSize: '0.95rem',
            lineHeight: '1.6',
            flexGrow: 1,
          }}
        >
          {ebook.shortDescription}
        </p>

        {/* Download Here Button */}
        <Link
          href={`/resources/${ebook.id}`}
          className="btn-pill btn-pill-gradient"
          style={{
            display: 'inline-block',
            textAlign: 'center',
            padding: '12px 24px',
            borderRadius: '999px',
            background: 'linear-gradient(135deg, #003f7d 0%, #00bcd4 100%)',
            color: 'white',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.95rem',
            transition: 'all 0.3s ease',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Download Here
        </Link>
      </div>
    </div>
  );
}

export default function Resources() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(0, 19, 38, 0.92) 0%, rgba(0, 63, 125, 0.85) 55%, rgba(0, 188, 212, 0.75) 100%), url('/images/heroimage/heroimage6.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          padding: '110px 0 90px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-140px',
            left: '-120px',
            width: '320px',
            height: '320px',
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
            background: 'rgba(0, 188, 212, 0.28)',
            filter: 'blur(140px)',
          }}
        />
        <div className="container position-relative text-center">
          <span
            style={{
              display: 'inline-block',
              padding: '8px 18px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.12)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontSize: '0.78rem',
              color: 'rgba(255,255,255,0.86)',
              marginBottom: '22px',
            }}
          >
            Resource Hub
          </span>
          <h1 style={{ color: 'white', fontSize: '3.1rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Learn How AI Transforms Business
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)', maxWidth: '720px', margin: '18px auto 0' }}>
            Insights, tutorials, and success stories tailored for professional service leaders building AI-driven practices.
          </p>
        </div>
      </section>

      {/* Main Resource Categories */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, #f8fbff 0%, #eef4ff 45%, #ffffff 100%)',
          position: 'relative',
        }}
      >
        <div className="container position-relative">
          <div className="row g-4">
            {[
              {
                title: 'Articles',
                icon: <FaBookOpen />,
                description: 'In-depth analysis, playbooks, and interviews on AI-led transformation.',
                cta: 'Read Articles',
                accent: 'linear-gradient(135deg, rgba(0,63,125,0.18), rgba(0,188,212,0.3))',
              },
              {
                title: 'Videos',
                icon: <FaVideo />,
                description: 'Expert insights on AI startups, funding strategies, and business growth.',
                cta: 'Watch Videos',
                accent: 'linear-gradient(135deg, rgba(0,188,212,0.24), rgba(102,126,234,0.32))',
              },
              {
                title: 'Podcast',
                icon: <FaMicrophone />,
                description: 'Short explainers on voice AI, predictive analytics, and partner success stories.',
                cta: 'Listen to Podcasts',
                accent: 'linear-gradient(135deg, rgba(0,188,212,0.24), rgba(102,126,234,0.32))',
              },
              {
                title: 'eBooks',
                icon: <FaFileDownload />,
                description: 'Comprehensive guides on AI implementation and best practices.',
                cta: 'Download eBooks',
                accent: 'linear-gradient(135deg, rgba(102,126,234,0.26), rgba(162,155,254,0.3))',
              },
            ].map(({ title, icon, description, cta, accent }) => (
              <div key={title} className="col-lg-3 col-md-6">
                <div
                  style={{
                    borderRadius: '26px',
                    background: '#ffffff',
                    border: '1px solid rgba(16, 42, 67, 0.08)',
                    boxShadow: '0 28px 48px rgba(0, 26, 60, 0.08)',
                    padding: '36px 30px',
                    textAlign: 'center',
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 35px 60px rgba(0, 26, 60, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 28px 48px rgba(0, 26, 60, 0.08)';
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '-120px',
                      right: '-120px',
                      width: '260px',
                      height: '260px',
                      background: accent,
                      filter: 'blur(90px)',
                    }}
                  />
                  <div
                    style={{
                      width: '66px',
                      height: '66px',
                      borderRadius: '20px',
                      background: accent,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0f1f38',
                      fontSize: '24px',
                      margin: '0 auto 20px',
                      boxShadow: '0 18px 32px rgba(15, 31, 56, 0.12)',
                      position: 'relative',
                    }}
                  >
                    {icon}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '12px', position: 'relative' }}>{title}</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '22px', position: 'relative' }}>{description}</p>
                  <Link
                    href={title === 'Articles' ? '#articles' : title === 'Videos' ? '#videos' : title === 'Podcast' ? '/podcast' : '#ebooks'}
                    className="btn-pill btn-pill-gradient"
                    style={{ position: 'relative' }}
                  >
                    {cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="section" style={{ background: 'linear-gradient(135deg, #f8fbff 0%, #ffffff 100%)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span
              style={{
                display: 'inline-block',
                padding: '6px 16px',
                borderRadius: '999px',
                background: 'rgba(0, 188, 212, 0.12)',
                color: '#003f7d',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontSize: '0.75rem',
                fontWeight: 600,
              }}
            >
              Videos
            </span>
            <h2 style={{ fontSize: '2.35rem', color: 'var(--text-dark)', marginTop: '16px', fontWeight: 700 }}>Expert Insights & Tutorials</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '720px', margin: '12px auto 0', fontSize: '1.05rem' }}>
              Learn from industry experts about AI startups, funding strategies, and business growth.
            </p>
          </div>
          <div className="row g-4">
            {[
              {
                title: 'Got A Startup Idea. Here\'s How AI Can Make It Real',
                videoId: '1139757900',
                url: 'https://vimeo.com/1139757900?fl=tl&fe=ec',
              },
              {
                title: 'Stop Waiting, Start Innovating Funding Your AI Project with Grants',
                videoId: '1139758119',
                url: 'https://vimeo.com/1139758119?fl=tl&fe=ec',
              },
              {
                title: 'Funding Your Startup: The Stages Every Founder Must Master',
                videoId: '1139758336',
                url: 'https://vimeo.com/1139758336?fl=tl&fe=ec',
              },
              {
                title: 'Pitch Perfect: The Art of Pitching Investors',
                videoId: '1139758521',
                url: 'https://vimeo.com/1139758521?fl=tl&fe=ec',
              },
              {
                title: 'Stop Chasing Leads: Let AI Bring Them to You',
                videoId: '1139758619',
                url: 'https://vimeo.com/1139758619?fl=tl&fe=ec',
              },
            ].map((video, index) => (
              <div key={video.videoId} className="col-lg-6 col-md-6">
                <div
                  className="glass-card"
                  style={{
                    padding: '0',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '20px',
                    background: '#ffffff',
                    border: '1px solid rgba(16, 42, 67, 0.08)',
                    boxShadow: '0 8px 24px rgba(0, 26, 60, 0.08)',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 16px 32px rgba(0, 26, 60, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 26, 60, 0.08)';
                  }}
                >
                  {/* Video Embed */}
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      paddingBottom: '56.25%', // 16:9 aspect ratio
                      background: '#000',
                      overflow: 'hidden',
                    }}
                  >
                    <iframe
                      src={`https://player.vimeo.com/video/${video.videoId}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none',
                      }}
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={video.title}
                    />
                  </div>
                  {/* Video Title */}
                  <div style={{ padding: '24px' }}>
                    <h4
                      style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-dark)',
                        marginBottom: 0,
                        fontWeight: 600,
                        lineHeight: '1.4',
                      }}
                    >
                      {video.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* eBooks */}
      <section id="ebooks" className="section" style={{ background: 'linear-gradient(135deg, #f8fbff 0%, #ffffff 100%)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span
              style={{
                display: 'inline-block',
                padding: '6px 16px',
                borderRadius: '999px',
                background: 'rgba(0, 63, 125, 0.08)',
                color: '#003f7d',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontSize: '0.75rem',
              }}
            >
              eBooks
            </span>
            <h2 style={{ fontSize: '2.35rem', color: 'var(--text-dark)', marginTop: '16px' }}>Downloadable Guides</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '720px', margin: '12px auto 0' }}>
              Tactical playbooks to help you plan, package, and launch AI services.
            </p>
          </div>
          <div className="row g-4">
            {ebooks.map((ebook) => (
              <EBookCard key={ebook.id} ebook={ebook} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles Section - Coming Soon */}
      <section id="articles" className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span
              style={{
                display: 'inline-block',
                padding: '6px 16px',
                borderRadius: '999px',
                background: 'rgba(0, 63, 125, 0.1)',
                color: '#003f7d',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontSize: '0.75rem',
              }}
            >
              Featured Articles
            </span>
            <h2 style={{ fontSize: '2.35rem', color: 'var(--text-dark)', marginTop: '16px' }}>
              Latest Insights on AI Automation
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '720px', margin: '12px auto 0' }}>
              Articles coming soon. Check back for the latest insights and case studies.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
