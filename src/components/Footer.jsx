import React from 'react';
import { CodeIcon } from './Icons';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Interests', href: '#interests' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" onClick={scrollToTop} className="footer-brand-link">
              <div className="footer-brand-icon">
                <CodeIcon size={18} />
              </div>
              <span className="footer-brand-name">TEJESH<span className="brand-accent">.M</span></span>
            </a>
            <p className="footer-tagline">
              Student • Aspiring Developer • Continuous Learner
            </p>
          </div>

          <nav className="footer-nav">
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="footer-nav-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © 2026 Tejesh M. All rights reserved.
          </p>

          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
            ↑ Back to Top
          </button>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: #070a12;
          border-top: 1px solid var(--border-subtle);
          padding: 3.5rem 0 2rem;
          color: var(--text-secondary);
        }

        .footer-container {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .footer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-brand-link {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 800;
          font-size: 1.2rem;
        }

        .footer-brand-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: var(--radius-sm);
          background: rgba(59, 130, 246, 0.15);
          color: var(--accent-primary);
          border: 1px solid rgba(59, 130, 246, 0.3);
        }

        .footer-tagline {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .footer-nav-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1.25rem;
          list-style: none;
        }

        .footer-nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.88rem;
          transition: color var(--transition-fast);
        }

        .footer-nav-link:hover {
          color: var(--accent-primary);
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .back-to-top-btn {
          background: none;
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          padding: 0.4rem 0.8rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          font-size: 0.82rem;
          transition: all var(--transition-fast);
        }

        .back-to-top-btn:hover {
          color: var(--accent-primary);
          border-color: var(--accent-primary);
          background-color: rgba(59, 130, 246, 0.1);
        }

        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            align-items: flex-start;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}
