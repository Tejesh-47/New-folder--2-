import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon, CodeIcon } from './Icons';

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

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section scrollSpy detection
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="nav-brand">
          <div className="brand-icon">
            <CodeIcon size={18} />
          </div>
          <span className="brand-text">TEJESH<span className="brand-accent">.M</span></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const isSelected = activeSection === link.href.substring(1);
              return (
                <li key={link.name} className="nav-item">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`nav-link ${isSelected ? 'active' : ''}`}
                  >
                    {link.name}
                    {isSelected && <span className="active-indicator" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-dropdown">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          height: var(--nav-height);
          background-color: var(--bg-glass);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--border-subtle);
          z-index: 1000;
          transition: background-color var(--transition-normal), border-color var(--transition-normal);
        }

        .navbar.scrolled {
          background-color: rgba(11, 15, 25, 0.95);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          border-bottom-color: rgba(59, 130, 246, 0.2);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 800;
          font-size: 1.15rem;
          letter-spacing: -0.01em;
        }

        .brand-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: var(--radius-sm);
          background: rgba(59, 130, 246, 0.15);
          color: var(--accent-primary);
          border: 1px solid rgba(59, 130, 246, 0.3);
        }

        .brand-accent {
          color: var(--accent-primary);
        }

        .desktop-nav {
          display: block;
        }

        .nav-list {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          list-style: none;
        }

        .nav-link {
          position: relative;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          padding: 0.4rem 0.2rem;
          transition: color var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .nav-link.active {
          color: var(--accent-primary);
          font-weight: 600;
        }

        .active-indicator {
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background-color: var(--accent-primary);
          border-radius: var(--radius-full);
          box-shadow: 0 0 8px var(--accent-primary);
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.4rem;
        }

        .mobile-dropdown {
          display: none;
        }

        @media (max-width: 868px) {
          .desktop-nav {
            display: none;
          }

          .mobile-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .mobile-dropdown {
            display: block;
            position: absolute;
            top: var(--nav-height);
            left: 0;
            right: 0;
            background-color: var(--bg-secondary);
            border-bottom: 1px solid var(--border-subtle);
            padding: 1rem 1.5rem;
            box-shadow: var(--shadow-lg);
          }

          .mobile-nav-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }

          .mobile-nav-link {
            display: block;
            padding: 0.6rem 0.8rem;
            color: var(--text-secondary);
            text-decoration: none;
            font-size: 0.95rem;
            font-weight: 500;
            border-radius: var(--radius-sm);
            transition: all var(--transition-fast);
          }

          .mobile-nav-link:hover, .mobile-nav-link.active {
            color: var(--accent-primary);
            background-color: rgba(59, 130, 246, 0.1);
          }
        }
      `}</style>
    </header>
  );
}
