import React, { useState } from 'react';
import { FolderCodeIcon, CpuIcon, ExternalLinkIcon, GithubIcon, TerminalIcon } from './Icons';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Python Interactive Project",
      subtitle: "Programming Logic & User Interaction",
      description: "A small interactive project developed using Python to practice programming logic, user interaction, and basic coding concepts.",
      techStack: ["Python", "CLI", "Logic Automation"],
      icon: <TerminalIcon size={24} />,
      projectUrl: null, // Placeholder for GitHub/Live link
      category: "Software Development"
    },
    {
      id: 2,
      title: "IoT Sensor-Based Project",
      subtitle: "Hardware & Sensor Data Integration",
      description: "A sensor-based IoT project focused on collecting and using sensor data to demonstrate practical technology integration.",
      techStack: ["IoT", "Sensors", "Data Collection", "Embedded Concepts"],
      icon: <CpuIcon size={24} />,
      projectUrl: null, // Placeholder for GitHub/Live link
      category: "Hardware & IoT"
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <FolderCodeIcon size={14} />
            <span>Hands-On Work</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Practical development projects demonstrating core programming, sensor integration, and problem solving
          </p>
        </div>

        <div className="projects-grid grid-2">
          {projects.map((project) => (
            <div key={project.id} className="project-card card">
              <div className="project-top">
                <div className="project-category-badge">{project.category}</div>
                <div className="project-icon-wrapper">
                  {project.icon}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <h4 className="project-subtitle-text">{project.subtitle}</h4>
              
              <p className="project-desc">{project.description}</p>

              <div className="tech-tags-wrapper">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                {project.projectUrl ? (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <span>View Project</span>
                    <ExternalLinkIcon size={14} />
                  </a>
                ) : (
                  <div className="action-placeholder-box">
                    <button 
                      className="btn btn-secondary btn-sm"
                      onClick={() => setActiveModalProject(project)}
                    >
                      <GithubIcon size={14} />
                      <span>View Project Link Info</span>
                    </button>
                    <span className="placeholder-tag">Link Placeholder Ready</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Informational Modal for Placeholder Link instructions */}
        {activeModalProject && (
          <div className="modal-backdrop" onClick={() => setActiveModalProject(null)}>
            <div className="modal-content card" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>{activeModalProject.title}</h3>
                <button className="modal-close" onClick={() => setActiveModalProject(null)}>×</button>
              </div>
              <div className="modal-body">
                <p className="modal-info-text">
                  This project link is currently ready for your custom repository or live demo link!
                </p>
                <div className="code-snippet-box">
                  <code>
                    // Open <strong>src/components/Projects.jsx</strong><br />
                    // Replace <strong>projectUrl: null</strong> with your GitHub or Demo link: <br />
                    projectUrl: "https://github.com/your-username/project-repo"
                  </code>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary btn-sm" onClick={() => setActiveModalProject(null)}>
                  Got it
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .projects-grid {
          max-width: 960px;
          margin: 0 auto;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          padding: 2rem;
        }

        .project-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .project-category-badge {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-secondary);
          background-color: rgba(99, 102, 241, 0.12);
          border: 1px solid rgba(99, 102, 241, 0.25);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }

        .project-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background-color: rgba(59, 130, 246, 0.12);
          color: var(--accent-primary);
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .project-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }

        .project-subtitle-text {
          font-size: 0.88rem;
          color: var(--accent-primary);
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .project-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .tech-tags-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          font-size: 0.78rem;
          font-family: var(--font-mono);
          color: var(--text-secondary);
          background-color: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-sm);
        }

        .project-actions {
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-subtle);
        }

        .action-placeholder-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        /* Modal styling */
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .modal-content {
          max-width: 500px;
          width: 100%;
          background-color: var(--bg-secondary);
          border: 1px solid rgba(59, 130, 246, 0.3);
          box-shadow: var(--shadow-lg);
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .modal-header h3 {
          font-size: 1.15rem;
          color: var(--text-primary);
        }

        .modal-close {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 1.5rem;
          cursor: pointer;
          line-height: 1;
        }

        .modal-info-text {
          font-size: 0.92rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .code-snippet-box {
          background-color: #090d16;
          border: 1px solid var(--border-subtle);
          padding: 0.9rem;
          border-radius: var(--radius-md);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: #60a5fa;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
        }
      `}</style>
    </section>
  );
}
