import React from 'react';
import { UserIcon, TargetIcon, CodeIcon, BookOpenIcon, CpuIcon, LayersIcon } from './Icons';

export default function About() {
  const focusAreas = [
    {
      icon: <TargetIcon size={22} />,
      title: "Practical Solutions",
      description: "Focused on applying theoretical coding knowledge to solve real-world problems and build usable applications."
    },
    {
      icon: <CodeIcon size={22} />,
      title: "Programming Foundation",
      description: "Developing robust core competencies in languages like Python and C, prioritizing logic and structure."
    },
    {
      icon: <BookOpenIcon size={22} />,
      title: "Continuous Learning",
      description: "Actively exploring emerging technologies, frameworks, and tools to expand practical developer capabilities."
    },
    {
      icon: <CpuIcon size={22} />,
      title: "Hands-on Projects",
      description: "Practicing coding through personal and sensor-based interactive projects to solidify concepts."
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <UserIcon size={14} />
            <span>Profile Overview</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Motivated University Student & Aspiring Software Developer
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Biography & Narrative */}
          <div className="about-bio-card card">
            <div className="bio-header">
              <span className="bio-tag">Student & Learner</span>
              <h3 className="bio-title">Building a strong technical foundation through continuous practice</h3>
            </div>

            <p className="bio-paragraph">
              I am a motivated university student currently pursuing higher education while actively developing strong fundamentals in programming and software development. 
            </p>

            <p className="bio-paragraph">
              My focus is centered around <strong>programming logic</strong>, <strong>hands-on project development</strong>, and <strong>learning new technologies</strong>. I believe that consistent coding practice and building practical solutions are key to becoming an impactful problem solver.
            </p>

            <div className="journey-summary">
              <h4 className="summary-title">Core Development Aspirations:</h4>
              <ul className="summary-list">
                <li><span className="bullet"></span> Developing clean, logical code structure</li>
                <li><span className="bullet"></span> Understanding practical software implementation</li>
                <li><span className="bullet"></span> Exploring hardware-software integration through IoT</li>
                <li><span className="bullet"></span> Strengthening problem-solving through continuous challenge</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Focus Areas Grid */}
          <div className="focus-grid">
            {focusAreas.map((area, index) => (
              <div key={index} className="focus-card card">
                <div className="focus-icon-wrapper">
                  {area.icon}
                </div>
                <h4 className="focus-card-title">{area.title}</h4>
                <p className="focus-card-desc">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 2rem;
          align-items: stretch;
        }

        .about-bio-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .bio-tag {
          display: inline-block;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--accent-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }

        .bio-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
          line-height: 1.35;
        }

        .bio-paragraph {
          color: var(--text-secondary);
          font-size: 0.98rem;
          line-height: 1.7;
          margin-bottom: 1rem;
        }

        .bio-paragraph strong {
          color: var(--text-primary);
        }

        .journey-summary {
          margin-top: 1.5rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-subtle);
        }

        .summary-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .summary-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .summary-list li {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--accent-primary);
        }

        .focus-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        .focus-card {
          display: flex;
          flex-direction: column;
          padding: 1.35rem;
        }

        .focus-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background-color: rgba(59, 130, 246, 0.12);
          color: var(--accent-primary);
          border: 1px solid rgba(59, 130, 246, 0.2);
          margin-bottom: 1rem;
        }

        .focus-card-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.4rem;
        }

        .focus-card-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 576px) {
          .focus-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
