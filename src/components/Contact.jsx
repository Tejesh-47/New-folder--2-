import React, { useState } from 'react';
import { MailIcon, PhoneIcon, GithubIcon, LinkedinIcon, CheckCircleIcon, SparklesIcon } from './Icons';

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <MailIcon size={14} />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Interested in discussing opportunities, projects, or technical collaboration? Feel free to reach out!
          </p>
        </div>

        <div className="contact-grid">
          {/* Email Direct Contact Card */}
          <div className="contact-card card">
            <div className="contact-icon-wrapper email-wrapper">
              <MailIcon size={28} />
            </div>

            <div className="contact-info">
              <span className="contact-label">Email Address</span>
              <a 
                href="mailto:manjunath30101985@gmail.com" 
                className="contact-value-link"
              >
                manjunath30101985@gmail.com
              </a>
              <p className="contact-subtext">Direct email inquiry for internships & projects</p>
            </div>

            <div className="contact-btn-group">
              <a 
                href="mailto:manjunath30101985@gmail.com" 
                className="btn btn-primary btn-sm"
              >
                <MailIcon size={16} />
                <span>Send Email</span>
              </a>

              <button 
                className="btn btn-secondary btn-sm"
                onClick={() => copyToClipboard("manjunath30101985@gmail.com", "email")}
              >
                {copiedType === "email" ? (
                  <>
                    <CheckCircleIcon size={16} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <span>Copy Email</span>
                )}
              </button>
            </div>
          </div>

          {/* Phone Direct Contact Card */}
          <div className="contact-card card">
            <div className="contact-icon-wrapper phone-wrapper">
              <PhoneIcon size={28} />
            </div>

            <div className="contact-info">
              <span className="contact-label">Phone Number</span>
              <a 
                href="tel:8660012648" 
                className="contact-value-link"
              >
                +91 8660012648
              </a>
              <p className="contact-subtext">Available for calls & direct communication</p>
            </div>

            <div className="contact-btn-group">
              <a 
                href="tel:8660012648" 
                className="btn btn-outline btn-sm"
              >
                <PhoneIcon size={16} />
                <span>Call Phone</span>
              </a>

              <button 
                className="btn btn-secondary btn-sm"
                onClick={() => copyToClipboard("8660012648", "phone")}
              >
                {copiedType === "phone" ? (
                  <>
                    <CheckCircleIcon size={16} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <span>Copy Phone</span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Professional Social Media Placeholder Bar */}
        <div className="social-placeholders-card card">
          <div className="social-header">
            <SparklesIcon size={16} />
            <h4>Social Profiles & Portfolio Links</h4>
          </div>
          <p className="social-desc">
            Placeholders ready for adding custom GitHub, LinkedIn, or personal portfolio profiles when available.
          </p>

          <div className="social-links-list">
            <div className="social-item">
              <GithubIcon size={20} />
              <span>GitHub</span>
              <span className="placeholder-tag">Placeholder (Add Link in Contact.jsx)</span>
            </div>

            <div className="social-item">
              <LinkedinIcon size={20} />
              <span>LinkedIn</span>
              <span className="placeholder-tag">Placeholder (Add Link in Contact.jsx)</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.75rem;
          max-width: 960px;
          margin: 0 auto 2.5rem;
        }

        .contact-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2.25rem;
          gap: 1.25rem;
        }

        .contact-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: rgba(59, 130, 246, 0.12);
          color: var(--accent-primary);
          border: 1px solid rgba(59, 130, 246, 0.25);
        }

        .phone-wrapper {
          background-color: rgba(16, 185, 129, 0.12);
          color: var(--accent-emerald);
          border-color: rgba(16, 185, 129, 0.25);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .contact-label {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .contact-value-link {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .contact-value-link:hover {
          color: var(--accent-primary);
        }

        .contact-subtext {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .contact-btn-group {
          display: flex;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        .social-placeholders-card {
          max-width: 960px;
          margin: 0 auto;
          padding: 1.5rem 2rem;
          background-color: rgba(255, 255, 255, 0.02);
          border: 1px dashed var(--border-subtle);
        }

        .social-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--accent-primary);
          margin-bottom: 0.4rem;
        }

        .social-header h4 {
          font-size: 0.98rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .social-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .social-links-list {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .social-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-secondary);
          background-color: rgba(0, 0, 0, 0.2);
          padding: 0.5rem 0.9rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
