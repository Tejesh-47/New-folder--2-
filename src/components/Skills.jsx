import React from 'react';
import { CodeIcon, TerminalIcon, CpuIcon, TargetIcon, LayersIcon, CheckCircleIcon, SparklesIcon } from './Icons';

export default function Skills() {
  const skillsList = [
    {
      name: "Basic C Programming",
      category: "Core Language",
      icon: <CodeIcon size={24} />,
      description: "Understanding fundamental syntax, data structures, memory concepts, and algorithmic flow in C."
    },
    {
      name: "Basic Python Programming",
      category: "High-Level Language",
      icon: <TerminalIcon size={24} />,
      description: "Writing clean, functional Python code for data processing, logic automation, and script execution."
    },
    {
      name: "Foundational Coding",
      category: "Software Fundamentals",
      icon: <LayersIcon size={24} />,
      description: "Grasping core programming paradigms, conditional logic, loops, modular functions, and clean code principles."
    },
    {
      name: "Problem Solving",
      category: "Analytical Thinking",
      icon: <TargetIcon size={24} />,
      description: "Breaking down complex problems into logical steps and implementing systematic computational solutions."
    },
    {
      name: "Interactive Project Development",
      category: "Practical Application",
      icon: <CpuIcon size={24} />,
      description: "Building hands-on projects involving user interaction, sensor integration, and real-world utility."
    },
    {
      name: "Practical Programming Concepts",
      category: "Applied Knowledge",
      icon: <SparklesIcon size={24} />,
      description: "Applying theoretical computer science principles into operational scripts, prototypes, and applications."
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <CodeIcon size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Core skills developed through coursework, self-study, and practical project execution
          </p>
        </div>

        <div className="skills-grid grid-3">
          {skillsList.map((skill, index) => (
            <div key={index} className="skill-card card">
              <div className="skill-header">
                <div className="skill-icon-box">
                  {skill.icon}
                </div>
                <span className="skill-cat-tag">{skill.category}</span>
              </div>

              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-desc">{skill.description}</p>

              <div className="skill-status-row">
                <CheckCircleIcon size={14} className="check-icon" />
                <span>Verified Focus Area</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skill-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .skill-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .skill-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background-color: rgba(59, 130, 246, 0.12);
          color: var(--accent-primary);
          border: 1px solid rgba(59, 130, 246, 0.25);
        }

        .skill-cat-tag {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent-emerald);
          background-color: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
        }

        .skill-name {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.6rem;
        }

        .skill-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .skill-status-row {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          color: var(--text-muted);
          padding-top: 0.8rem;
          border-top: 1px solid var(--border-subtle);
        }

        .check-icon {
          color: var(--accent-emerald);
        }
      `}</style>
    </section>
  );
}
