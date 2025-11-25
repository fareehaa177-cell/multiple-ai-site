'use client';

import { useState, FormEvent } from 'react';
import Popup from 'reactjs-popup';
import { FaTimes } from 'react-icons/fa';
import type { CSSProperties } from 'react';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactPopup({ trigger }: { trigger: React.ReactElement }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: '',
      });
      setErrors({});

      // Close popup after 2.5 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setIsOpen(false);
      }, 2500);
    }, 500);
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setShowSuccess(false);
    setErrors({});
  };

  const getInputStyle = (hasError: boolean): CSSProperties => ({
    width: '100%',
    padding: '14px 16px',
    borderRadius: '12px',
    border: `1px solid ${hasError ? '#ef4444' : 'rgba(0, 26, 51, 0.18)'}`,
    background: '#ffffff',
    color: '#0f1f38',
    fontSize: '1rem',
    fontWeight: 500,
    transition: 'all 0.3s ease',
    outline: 'none',
  });

  const labelStyle: CSSProperties = {
    display: 'block',
    marginBottom: '8px',
    color: '#0f1f38',
    fontWeight: 600,
    fontSize: '0.95rem',
    letterSpacing: '0.02em',
  };

  const errorStyle: CSSProperties = {
    color: '#ef4444',
    fontSize: '0.875rem',
    marginTop: '4px',
    display: 'block',
  };

  return (
    <Popup
      open={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={closeModal}
      trigger={trigger}
      modal
      nested
      closeOnDocumentClick
      contentStyle={{
        background: 'transparent',
        border: 'none',
        padding: 0,
        width: '90%',
        maxWidth: '600px',
      }}
      overlayStyle={{
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(4px)',
      }}
    >
      {((close: () => void) => (
        <div
          style={{
            background: '#ffffff',
            borderRadius: '24px',
            padding: '40px',
            position: 'relative',
            boxShadow: '0 32px 64px rgba(0, 0, 0, 0.25)',
            maxHeight: '90vh',
            overflowY: 'auto',
          }}
        >
          {/* Close Button */}
          <button
            onClick={close}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'transparent',
              border: 'none',
              fontSize: '24px',
              color: '#5b6b84',
              cursor: 'pointer',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 63, 125, 0.1)';
              e.currentTarget.style.color = '#003f7d';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#5b6b84';
            }}
            aria-label="Close"
          >
            <FaTimes />
          </button>

          {/* Success Message */}
          {showSuccess ? (
            <div
              style={{
                textAlign: 'center',
                padding: '40px 20px',
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #003f7d 0%, #00bcd4 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  fontSize: '36px',
                  color: 'white',
                }}
              >
                ✓
              </div>
              <h3
                style={{
                  fontSize: '1.75rem',
                  color: '#0f1f38',
                  marginBottom: '12px',
                  fontWeight: 700,
                }}
              >
                Thank You!
              </h3>
              <p
                style={{
                  color: '#5b6b84',
                  fontSize: '1.05rem',
                  lineHeight: 1.6,
                }}
              >
                We&apos;ll contact you soon.
              </p>
            </div>
          ) : (
            <>
              {/* Form Header */}
              <div style={{ marginBottom: '32px' }}>
                <h2
                  style={{
                    fontSize: '2rem',
                    color: '#0f1f38',
                    marginBottom: '8px',
                    fontWeight: 700,
                  }}
                >
                  Contact Us
                </h2>
                <p
                  style={{
                    color: '#5b6b84',
                    fontSize: '1rem',
                    lineHeight: 1.6,
                  }}
                >
                  Get in touch with us and we&apos;ll respond as soon as possible.
                </p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div style={{ marginBottom: '24px' }}>
                  <label htmlFor="popup-fullname" style={labelStyle}>
                    Full Name <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="popup-fullname"
                    value={formData.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = errors.fullName ? '#ef4444' : '#003f7d';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 63, 125, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = errors.fullName ? '#ef4444' : 'rgba(0, 26, 51, 0.18)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    style={getInputStyle(!!errors.fullName)}
                    placeholder="John Doe"
                  />
                  {errors.fullName && <span style={errorStyle}>{errors.fullName}</span>}
                </div>

                {/* Email Address */}
                <div style={{ marginBottom: '24px' }}>
                  <label htmlFor="popup-email" style={labelStyle}>
                    Email Address <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="popup-email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = errors.email ? '#ef4444' : '#003f7d';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 63, 125, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = errors.email ? '#ef4444' : 'rgba(0, 26, 51, 0.18)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    style={getInputStyle(!!errors.email)}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span style={errorStyle}>{errors.email}</span>}
                </div>

                {/* Phone Number */}
                <div style={{ marginBottom: '24px' }}>
                  <label htmlFor="popup-phone" style={labelStyle}>
                    Phone Number <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    id="popup-phone"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = errors.phone ? '#ef4444' : '#003f7d';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 63, 125, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = errors.phone ? '#ef4444' : 'rgba(0, 26, 51, 0.18)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    style={getInputStyle(!!errors.phone)}
                    placeholder="+61 400 000 000"
                  />
                  {errors.phone && <span style={errorStyle}>{errors.phone}</span>}
                </div>

                {/* Message */}
                <div style={{ marginBottom: '32px' }}>
                  <label htmlFor="popup-message" style={labelStyle}>
                    Message <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <textarea
                    id="popup-message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = errors.message ? '#ef4444' : '#003f7d';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 63, 125, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = errors.message ? '#ef4444' : 'rgba(0, 26, 51, 0.18)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    rows={5}
                    style={{
                      ...getInputStyle(!!errors.message),
                      resize: 'vertical',
                      minHeight: '120px',
                      fontFamily: 'inherit',
                    }}
                    placeholder="Tell us about your project or inquiry..."
                  />
                  {errors.message && <span style={errorStyle}>{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '16px 32px',
                    borderRadius: '999px',
                    background: isSubmitting
                      ? 'rgba(0, 63, 125, 0.6)'
                      : 'linear-gradient(135deg, #003f7d 0%, #00bcd4 100%)',
                    color: 'white',
                    border: 'none',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 24px rgba(0, 63, 125, 0.3)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 63, 125, 0.4)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 63, 125, 0.3)';
                    }
                  }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </>
          )}
        </div>
      )) as any}
    </Popup>
  );
}

