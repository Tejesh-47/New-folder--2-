import React from 'react';
import { ChevronRightIcon, MailIcon, SparklesIcon, CodeIcon, TerminalIcon, CpuIcon } from './Icons';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="section hero-section">
      <div className="container hero-container">
        {/* Left Column: Text & Call to Actions */}
        <div className="hero-content">
          <div className="hero-badge">
            <SparklesIcon size={14} />
            <span>Aspiring Software Developer</span>
          </div>

          <h1 className="hero-title">
            TEJESH <span className="text-accent">M</span>
          </h1>

          <h2 className="hero-subtitle">
            Student <span className="divider">|</span> Aspiring Developer
          </h2>

          <p className="hero-intro">
            Motivated university student with a growing foundation in programming and hands-on project development. Interested in building practical solutions, learning new technologies, and strengthening coding skills through continuous practice.
          </p>

          <div className="hero-actions">
            <button 
              onClick={() => scrollToSection('projects')} 
              className="btn btn-primary"
            >
              <span>View My Projects</span>
              <ChevronRightIcon size={18} />
            </button>

            <button 
              onClick={() => scrollToSection('contact')} 
              className="btn btn-secondary"
            >
              <MailIcon size={18} />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Quick status indicators */}
          <div className="hero-stats">
            <div className="stat-pill">
              <span className="dot dot-green"></span>
              <span>Open for Internships</span>
            </div>
            <div className="stat-pill">
              <span className="dot dot-blue"></span>
              <span>Python & C Foundation</span>
            </div>
            <div className="stat-pill">
              <span className="dot dot-purple"></span>
              <span>IoT & Sensor Tech</span>
            </div>
          </div>
        </div>

        {/* Right Column: Abstract Developer Visual Illustration */}
        <div className="hero-visual">
          <div className="visual-wrapper">
            {/* Ambient Background Glow */}
            <div className="ambient-glow"></div>

            {/* Simulated Code Terminal Card */}
            <div className="code-card">
              <div className="card-header">
                <div className="header-dots">
                  <span className="dot-red"></span>
                  <span className="dot-yellow"></span>
                  <span className="dot-green"></span>
                </div>
                <div className="card-title">
                  <TerminalIcon size={14} />
                  <span>developer_profile.py</span>
                </div>
              </div>
              <div className="card-body">
                <pre className="code-content">
                  <code>
                    <span className="code-keyword">class</span> <span className="code-class">DeveloperProfile</span>:<br />
                    &nbsp;&nbsp;<span className="code-keyword">def</span> <span className="code-func">__init__</span>(self):<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;self.name = <span className="code-string">"Tejesh M"</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;self.role = <span className="code-string">"Student & Developer"</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;self.focus = [<span className="code-string">"Problem Solving"</span>, <span className="code-string">"Python"</span>, <span className="code-string">"IoT"</span>]<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;self.status = <span className="code-string">"Continuously Learning"</span><br /><br />
                    &nbsp;&nbsp;<span className="code-keyword">def</span> <span className="code-func">build_solution</span>(self, problem):<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">return</span> f<span className="code-string">"Practical solution for &#123;problem&#125;"</span>
                  </code>
                </pre>
              </div>
            </div>

            {/* Floating Graphic Accents */}
            <div className="floating-badge badge-top-right">
              <CpuIcon size={18} />
              <span>IoT & Sensors</span>
            </div>

            <div className="floating-badge badge-bottom-left">
              <CodeIcon size={18} />
              <span>Python & Logic</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 4rem;
          padding-bottom: 5rem;
          background: radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
                      radial-gradient(circle at 90% 80%, rgba(99, 102, 241, 0.05) 0%, transparent 50%);
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3.5rem;
          align-items: center;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.9rem;
          border-radius: var(--radius-full);
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.25);
          color: var(--accent-primary);
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .text-accent {
          color: var(--accent-primary);
        }

        .hero-subtitle {
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
        }

        .hero-subtitle .divider {
          color: var(--accent-primary);
          margin: 0 0.4rem;
        }

        .hero-intro {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 580px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2.25rem;
          flex-wrap: wrap;
        }

        .hero-stats {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .stat-pill {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.82rem;
          color: var(--text-secondary);
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
        }

        .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
        }
        .dot-green { background-color: var(--accent-emerald); }
        .dot-blue { background-color: var(--accent-primary); }
        .dot-purple { background-color: var(--accent-secondary); }

        /* Visual Illustration Styling */
        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .visual-wrapper {
          position: relative;
          width: 100%;
          max-width: 440px;
        }

        .ambient-glow {
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, rgba(99, 102, 241, 0.15) 50%, transparent 70%);
          filter: blur(25px);
          z-index: 1;
        }

        .code-card {
          position: relative;
          z-index: 2;
          background-color: #0d1322;
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: var(--radius-lg);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), var(--shadow-accent);
          overflow: hidden;
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          background-color: #080c16;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .header-dots {
          display: flex;
          gap: 6px;
        }

        .header-dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .dot-red { background-color: #ef4444; }
        .dot-yellow { background-color: #f59e0b; }
        .dot-green { background-color: #10b981; }

        .card-title {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .card-body {
          padding: 1.25rem 1.25rem 1.5rem;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          line-height: 1.6;
        }

        .code-content {
          color: var(--text-primary);
        }

        .code-keyword { color: #f472b6; }
        .code-class { color: #60a5fa; }
        .code-func { color: #34d399; }
        .code-string { color: #fbbf24; }

        .floating-badge {
          position: absolute;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1rem;
          border-radius: var(--radius-md);
          background-color: #151e30;
          border: 1px solid rgba(59, 130, 246, 0.3);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-primary);
          animation: float 4s ease-in-out infinite;
        }

        .badge-top-right {
          top: -15px;
          right: -15px;
          border-color: rgba(99, 102, 246, 0.4);
        }

        .badge-bottom-left {
          bottom: -15px;
          left: -15px;
          animation-delay: 2s;
          border-color: rgba(16, 185, 129, 0.4);
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-content {
            align-items: center;
          }
          .hero-title {
            font-size: 2.8rem;
          }
          .hero-intro {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-visual {
            margin-top: 1rem;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 2.25rem;
          }
          .hero-subtitle {
            font-size: 1.1rem;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
