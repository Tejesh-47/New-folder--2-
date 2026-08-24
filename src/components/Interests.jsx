import React from 'react';
import { PaletteIcon, ActivityIcon, TrendingUpIcon, CompassIcon, SparklesIcon } from './Icons';

export default function Interests() {
  const interests = [
    {
      title: "Painting",
      category: "Creative Pursuit",
      icon: <PaletteIcon size={24} />,
      description: "Cultivating visual creativity, detail-oriented design perspective, and artistic expression through painting."
    },
    {
      title: "Participating in Sports",
      category: "Physical Activity & Teamwork",
      icon: <ActivityIcon size={24} />,
      description: "Engaging in sports to foster discipline, teamwork, endurance, and a balanced lifestyle."
    },
    {
      title: "Improving Technical Skills",
      category: "Continuous Development",
      icon: <TrendingUpIcon size={24} />,
      description: "Dedicated to daily coding practice, refining logical reasoning, and expanding technology knowledge."
    },
    {
      title: "Exploring Practical Applications",
      category: "Applied Engineering",
      icon: <CompassIcon size={24} />,
      description: "Investigating how programming and software solutions solve everyday challenges and automate real tasks."
    }
  ];

  return (
    <section id="interests" className="section interests-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <SparklesIcon size={14} />
            <span>Personal Endeavors</span>
          </div>
          <h2 className="section-title">Hobbies & Interests</h2>
          <p className="section-subtitle">
            Activities and pursuits that shape a well-rounded analytical and creative perspective
          </p>
        </div>

        <div className="interests-grid grid-2">
          {interests.map((item, index) => (
            <div key={index} className="interest-card card">
              <div className="interest-header">
                <div className="interest-icon-box">
                  {item.icon}
                </div>
                <div className="interest-header-text">
                  <span className="interest-cat">{item.category}</span>
                  <h3 className="interest-title">{item.title}</h3>
                </div>
              </div>

              <p className="interest-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .interests-grid {
          max-width: 960px;
          margin: 0 auto;
        }

        .interest-card {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.75rem;
        }

        .interest-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .interest-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          background-color: rgba(59, 130, 246, 0.12);
          color: var(--accent-primary);
          border: 1px solid rgba(59, 130, 246, 0.25);
          flex-shrink: 0;
        }

        .interest-header-text {
          display: flex;
          flex-direction: column;
        }

        .interest-cat {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .interest-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .interest-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
