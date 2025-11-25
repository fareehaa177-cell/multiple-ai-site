'use client';
import { useState, useRef, useEffect } from 'react';
import { FaMicrophone, FaPlay, FaPause, FaVolumeUp } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Podcast data
const podcasts = [
  {
    id: 1,
    title: 'Automation Case Studies: Fixing Business Friction',
    file: '/podcast/Automation_Case_Studies_Fixing_Business_Friction.m4a',
  },
  {
    id: 2,
    title: 'Custom Web Apps Deliver Rapid ROI',
    file: '/podcast/Custom_Web_Apps_Deliver_Rapid_ROI.m4a',
  },
  {
    id: 3,
    title: 'Five Non-Technical Steps to Business Automation',
    file: '/podcast/Five_Non-Technical_Steps_to_Business_Automation.m4a',
  },
  {
    id: 4,
    title: 'Small Business AI Is Not Optional',
    file: '/podcast/Small_Business_AI_Is_Not_Optional.m4a',
  },
  {
    id: 5,
    title: 'Stop Being Human Middleware: Custom Apps',
    file: '/podcast/Stop_Being_Human_Middleware_Custom_Apps.m4a',
  },
  {
    id: 6,
    title: 'Stop Manual Work: Automate These Five Tasks Now',
    file: '/podcast/Stop_Manual_Work_Automate_These_Five_Tasks_Now.m4a',
  },
  {
    id: 7,
    title: 'The Hidden Cost of Plugin Convenience',
    file: '/podcast/The_Hidden_Cost_of_Plugin_Convenience.m4a',
  },
  {
    id: 8,
    title: 'Web App Strategy: Costs, Security & AI 2025',
    file: '/podcast/Web_App_Strategy_Costs_Security_AI_2025.m4a',
  },
];

// Podcast Player Component
function PodcastPlayer({ podcast, isPlaying, onPlay, onPause }: { 
  podcast: typeof podcasts[0]; 
  isPlaying: boolean; 
  onPlay: () => void; 
  onPause: () => void;
}) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(console.error);
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src={podcast.file}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={onPause}
      />
      <div
        style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '20px',
          border: '1px solid rgba(16, 42, 67, 0.08)',
          boxShadow: '0 4px 12px rgba(0, 26, 60, 0.08)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
          <button
            onClick={isPlaying ? onPause : onPlay}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: 'none',
              background: 'linear-gradient(135deg, #003f7d 0%, #00bcd4 100%)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0, 63, 125, 0.3)',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} style={{ marginLeft: '2px' }} />}
          </button>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#666', marginBottom: '4px' }}>
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
            <div style={{ position: 'relative', width: '100%' }}>
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '6px',
                  width: duration ? `${(currentTime / duration) * 100}%` : '0%',
                  background: 'linear-gradient(90deg, #003f7d 0%, #00bcd4 100%)',
                  borderRadius: '3px',
                  pointerEvents: 'none',
                }}
              />
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                style={{
                  width: '100%',
                  height: '6px',
                  borderRadius: '3px',
                  background: 'transparent',
                  outline: 'none',
                  cursor: 'pointer',
                  WebkitAppearance: 'none',
                  appearance: 'none',
                  position: 'relative',
                  zIndex: 1,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Podcast Card Component
function PodcastCard({ podcast, isActive, isPlaying, onSelect, onPlay, onPause }: {
  podcast: typeof podcasts[0];
  isActive: boolean;
  isPlaying: boolean;
  onSelect: () => void;
  onPlay: () => void;
  onPause: () => void;
}) {
  return (
    <div className="col-lg-6 col-md-6">
      <div
        className="glass-card"
        style={{
          padding: '28px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '20px',
          background: '#ffffff',
          border: isActive ? '2px solid #00bcd4' : '1px solid rgba(16, 42, 67, 0.08)',
          boxShadow: isActive 
            ? '0 12px 32px rgba(0, 188, 212, 0.2)' 
            : '0 8px 24px rgba(0, 26, 60, 0.08)',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 26, 60, 0.12)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 26, 60, 0.08)';
          }
        }}
        onClick={onSelect}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, rgba(0,188,212,0.24), rgba(102,126,234,0.32))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0f1f38',
              fontSize: '24px',
              flexShrink: 0,
              boxShadow: '0 8px 16px rgba(0, 63, 125, 0.15)',
            }}
          >
            <FaMicrophone />
          </div>
          <div style={{ flex: 1 }}>
            <h4
              style={{
                fontSize: '1.25rem',
                color: 'var(--text-dark)',
                marginBottom: '12px',
                fontWeight: 600,
                lineHeight: '1.4',
              }}
            >
              {podcast.title}
            </h4>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (isActive && isPlaying) {
                    onPause();
                  } else {
                    onSelect();
                    onPlay();
                  }
                }}
                style={{
                  padding: '8px 20px',
                  borderRadius: '999px',
                  border: 'none',
                  background: isActive && isPlaying
                    ? 'linear-gradient(135deg, #003f7d 0%, #00bcd4 100%)'
                    : 'rgba(0, 63, 125, 0.1)',
                  color: isActive && isPlaying ? 'white' : '#003f7d',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isActive || !isPlaying) {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #003f7d 0%, #00bcd4 100%)';
                    e.currentTarget.style.color = 'white';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive || !isPlaying) {
                    e.currentTarget.style.background = 'rgba(0, 63, 125, 0.1)';
                    e.currentTarget.style.color = '#003f7d';
                  }
                }}
              >
                {isActive && isPlaying ? (
                  <>
                    <FaPause size={12} />
                    Pause
                  </>
                ) : (
                  <>
                    <FaPlay size={12} />
                    Play
                  </>
                )}
              </button>
              <a
                href={podcast.file}
                download
                onClick={(e) => e.stopPropagation()}
                style={{
                  padding: '8px 20px',
                  borderRadius: '999px',
                  border: '1px solid rgba(0, 63, 125, 0.2)',
                  background: 'transparent',
                  color: '#003f7d',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 63, 125, 0.1)';
                  e.currentTarget.style.borderColor = '#003f7d';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(0, 63, 125, 0.2)';
                }}
              >
                <FaVolumeUp size={12} />
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Podcast() {
  const [activePodcast, setActivePodcast] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    // Play audio logic is handled by the audio element in PodcastPlayer
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleSelectPodcast = (id: number) => {
    if (activePodcast === id) {
      // If clicking the same podcast, toggle play/pause
      setIsPlaying(!isPlaying);
    } else {
      // Select new podcast and play
      setActivePodcast(id);
      setIsPlaying(true);
    }
  };

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
            Podcast
          </span>
          <h1 style={{ color: 'white', fontSize: '3.1rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Expert Insights on AI & Automation
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)', maxWidth: '720px', margin: '18px auto 0' }}>
            Listen to short explainers on voice AI, predictive analytics, automation strategies, and partner success stories.
          </p>
        </div>
      </section>

      {/* Active Player Section */}
      {activePodcast && (
        <section
          className="section"
          style={{
            background: 'linear-gradient(135deg, #003f7d 0%, #005599 60%, #00bcd4 100%)',
            color: 'white',
            padding: '40px 0',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          }}
        >
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '16px' }}>
              <FaMicrophone size={24} style={{ color: 'rgba(255,255,255,0.9)' }} />
              <h3 style={{ margin: 0, color: 'white', fontSize: '1.3rem', fontWeight: 600 }}>
                Now Playing: {podcasts.find(p => p.id === activePodcast)?.title}
              </h3>
            </div>
            <PodcastPlayer
              podcast={podcasts.find(p => p.id === activePodcast)!}
              isPlaying={isPlaying}
              onPlay={handlePlay}
              onPause={handlePause}
            />
          </div>
        </section>
      )}

      {/* Podcasts List */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, #f8fbff 0%, #eef4ff 45%, #ffffff 100%)',
          position: 'relative',
        }}
      >
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
              All Episodes
            </span>
            <h2 style={{ fontSize: '2.35rem', color: 'var(--text-dark)', marginTop: '16px', fontWeight: 700 }}>
              Browse Our Podcast Library
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '720px', margin: '12px auto 0', fontSize: '1.05rem' }}>
              Discover actionable insights on AI automation, web apps, and business transformation.
            </p>
          </div>
          <div className="row g-4">
            {podcasts.map((podcast) => (
              <PodcastCard
                key={podcast.id}
                podcast={podcast}
                isActive={activePodcast === podcast.id}
                isPlaying={activePodcast === podcast.id && isPlaying}
                onSelect={() => handleSelectPodcast(podcast.id)}
                onPlay={handlePlay}
                onPause={handlePause}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Back to Resources */}
      <section
        className="section"
        style={{
          background: '#ffffff',
          padding: '60px 0',
        }}
      >
        <div className="container text-center">
          <Link
            href="/resources"
            className="btn-pill btn-pill-gradient"
            style={{
              display: 'inline-block',
              textDecoration: 'none',
            }}
          >
            Back to Resources
          </Link>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(135deg, #003f7d 0%, #00bcd4 100%);
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 63, 125, 0.3);
        }

        input[type="range"]::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(135deg, #003f7d 0%, #00bcd4 100%);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(0, 63, 125, 0.3);
        }

        input[type="range"]::-webkit-slider-runnable-track {
          height: 6px;
          background: rgba(0, 63, 125, 0.1);
          border-radius: 3px;
        }

        input[type="range"]::-moz-range-track {
          height: 6px;
          background: rgba(0, 63, 125, 0.1);
          border-radius: 3px;
        }
      `}</style>
    </>
  );
}

