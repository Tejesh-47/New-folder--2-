import React from 'react';
import { GraduationCapIcon, SchoolIcon, BookOpenIcon } from './Icons';

export default function Education() {
  const educationList = [
    {
      level: "Undergraduate",
      institution: "REVA University",
      badge: "Higher Education",
      icon: <GraduationCapIcon size={24} />,
      status: "Currently Enrolled"
    },
    {
      level: "11th – 12th Grade",
      institution: "KLE College",
      badge: "Pre-University Education",
      icon: <SchoolIcon size={24} />,
      status: "Completed"
    },
    {
      level: "1st – 10th Grade",
      institution: "St. Mary's Convent",
      badge: "Primary & Secondary School",
      icon: <BookOpenIcon size={24} />,
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <GraduationCapIcon size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">Education Timeline</h2>
          <p className="section-subtitle">
            Academic progression and foundational learning journey
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          <div className="timeline-cards">
            {educationList.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-node">
                  <div className="node-icon-wrapper">
                    {item.icon}
                  </div>
                </div>

                <div className="timeline-card card">
                  <div className="card-top">
                    <span className="edu-level">{item.level}</span>
                    <span className="edu-status-badge">{item.status}</span>
                  </div>

                  <h3 className="institution-name">{item.institution}</h3>
                  <div className="institution-badge-tag">{item.badge}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .timeline-container {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: 1rem 0;
        }

        .timeline-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 27px;
          width: 2px;
          background: linear-gradient(to bottom, var(--accent-primary), rgba(59, 130, 246, 0.2));
        }

        .timeline-cards {
          display: flex;
          flex-direction: column;
          gap: 2.25rem;
        }

        .timeline-item {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 1.75rem;
        }

        .timeline-node {
          position: relative;
          z-index: 2;
          flex-shrink: 0;
        }

        .node-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: var(--bg-secondary);
          border: 2px solid var(--accent-primary);
          color: var(--accent-primary);
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
        }

        .timeline-card {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .edu-level {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--accent-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .edu-status-badge {
          font-size: 0.75rem;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          background-color: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          border: 1px solid var(--border-subtle);
        }

        .institution-name {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .institution-badge-tag {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        @media (max-width: 600px) {
          .timeline-line {
            left: 20px;
          }
          .node-icon-wrapper {
            width: 42px;
            height: 42px;
          }
          .timeline-item {
            gap: 1rem;
          }
          .institution-name {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
}
