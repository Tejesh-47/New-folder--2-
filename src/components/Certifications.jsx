import React from 'react';
import { AwardIcon, ExternalLinkIcon, CheckCircleIcon } from './Icons';

export default function Certifications() {
  const certsList = [
    {
      title: "IBM SkillsBuild – Python Certification",
      issuer: "IBM SkillsBuild",
      focus: "Python Programming & Practical Fundamentals",
      credentialUrl: null, // Placeholder for Tejesh to add certificate URL
      status: "Verified Credential"
    },
    {
      title: "Scaler – Certification",
      issuer: "Scaler",
      focus: "Software Engineering Principles & Coding Fundamentals",
      credentialUrl: null, // Placeholder for Tejesh to add certificate URL
      status: "Verified Credential"
    }
  ];

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <AwardIcon size={14} />
            <span>Learning Milestones</span>
          </div>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Formal learning achievements and skill verification from recognized learning platforms
          </p>
        </div>

        <div className="certs-grid grid-2">
          {certsList.map((cert, index) => (
            <div key={index} className="cert-card card">
              <div className="cert-badge-icon">
                <AwardIcon size={28} />
              </div>

              <div className="cert-body">
                <div className="cert-meta-row">
                  <span className="issuer-tag">{cert.issuer}</span>
                  <span className="status-pill">
                    <CheckCircleIcon size={12} />
                    {cert.status}
                  </span>
                </div>

                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-focus">{cert.focus}</p>

                <div className="cert-footer">
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                    >
                      <span>Verify Certificate</span>
                      <ExternalLinkIcon size={14} />
                    </a>
                  ) : (
                    <div className="cert-placeholder">
                      <span className="placeholder-tag">Certificate Link Placeholder</span>
                      <span className="placeholder-hint">(Can be linked when ready)</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .certs-grid {
          max-width: 900px;
          margin: 0 auto;
        }

        .cert-card {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          padding: 2rem;
        }

        .cert-badge-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%);
          color: var(--accent-primary);
          border: 1px solid rgba(59, 130, 246, 0.3);
          flex-shrink: 0;
        }

        .cert-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .cert-meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.25rem;
        }

        .issuer-tag {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--accent-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.75rem;
          color: var(--accent-emerald);
          background-color: rgba(16, 185, 129, 0.1);
          padding: 0.15rem 0.55rem;
          border-radius: var(--radius-full);
        }

        .cert-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.35;
        }

        .cert-focus {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 0.75rem;
        }

        .cert-footer {
          padding-top: 0.75rem;
          border-top: 1px solid var(--border-subtle);
        }

        .btn-sm {
          padding: 0.4rem 0.9rem;
          font-size: 0.82rem;
        }

        .cert-placeholder {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .placeholder-hint {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        @media (max-width: 650px) {
          .cert-card {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
