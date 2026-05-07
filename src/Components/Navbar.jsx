import { useState, useEffect } from 'react';

function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-logo">VoiceFlow AI</div>
      <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
        {['Features', 'Pricing', 'Docs', 'Contact'].map((label) => (
          <li key={label}>
            <a href={`#${label.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          </li>
        ))}
      </ul>
      <div className="navbar-right">
        <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <button
          className="btn-primary"
          onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
        >
          Get Started
        </button>
        <button className="hamburger" onClick={() => setMenuOpen((o) => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;