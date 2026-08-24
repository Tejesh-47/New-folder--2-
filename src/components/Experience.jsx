import React from 'react';
import { BriefcaseIcon, BookOpenIcon, TargetIcon, CodeIcon, CheckCircleIcon } from './Icons';

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <BriefcaseIcon size={14} />
            <span>Professional Journey</span>
          </div>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Current professional standing and focus areas
          </p>
        </div>

        <div className="experience-card card">
          <div className="exp-icon-banner">
            <div className="exp-icon-box">
              <BriefcaseIcon size={32} />
            </div>
            <div className="exp-header-text">
              <span className="exp-status-tag">Status & Focus</span>
              <h3 className="exp-main-heading">Currently Building Experience</h3>
            </div>
          </div>

          <p className="exp-description">
            Currently focused on education, skill development, certifications, and practical project work. Actively seeking entry-level developer opportunities, university internships, and technical collaborations to apply and expand hands-on programming abilities.
          </p>

          <div className="exp-pillars-grid">
            <div className="pillar-item">
              <div className="pillar-icon">
                <BookOpenIcon size={18} />
              </div>
              <div className="pillar-info">
                <h4>Academics & Theory</h4>
                <p>Building strong computer science fundamentals through coursework at REVA University.</p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon">
                <CodeIcon size={18} />
              </div>
              <div className="pillar-info">
                <h4>Hands-On Projects</h4>
                <p>Developing practical Python scripts and sensor-driven IoT prototypes.</p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon">
                <TargetIcon size={18} />
              </div>
              <div className="pillar-info">
                <h4>Industry Certifications</h4>
                <p>Earning verified credentials from IBM SkillsBuild and Scaler.</p>
              </div>
            </div>
          </div>

          <div className="readiness-banner">
            <CheckCircleIcon size={18} className="readiness-icon" />
            <span>Ready for Entry-Level & Internship Software Development Roles</span>
          </div>
        </div>
      </div>

      <style>{`
        .experience-card {
          max-width: 860px;
          margin: 0 auto;
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .exp-icon-banner {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .exp-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(16, 185, 129, 0.15) 100%);
          color: var(--accent-primary);
          border: 1px solid rgba(59, 130, 246, 0.3);
          flex-shrink: 0;
        }

        .exp-status-tag {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--accent-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .exp-main-heading {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .exp-description {
          font-size: 1.02rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .exp-pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
        }

        .pillar-item {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
        }

        .pillar-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: var(--radius-sm);
          background-color: rgba(255, 255, 255, 0.04);
          color: var(--accent-primary);
          border: 1px solid var(--border-subtle);
          flex-shrink: 0;
        }

        .pillar-info h4 {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }

        .pillar-info p {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .readiness-banner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          background-color: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          color: var(--accent-emerald);
          font-size: 0.88rem;
          font-weight: 600;
          margin-top: 0.5rem;
        }

        @media (max-width: 768px) {
          .exp-pillars-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
