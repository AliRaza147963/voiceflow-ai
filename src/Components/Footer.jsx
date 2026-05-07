import { footerCols } from '../data';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        
        {/* Brand Section */}
        <div>
          <div className="footer-brand-logo">VoiceFlow AI</div>

          <p className="footer-brand-desc">
            The developer platform for building voice-first AI applications at any scale.
          </p>

          {/* Contact Info (NEW) */}
          <div className="footer-contact">
            <p>📞 +1 713 568 1151</p>
            <p>
              📍 30 N Gould St, Sheridan,<br />
              WY 82801, United States
            </p>
          </div>

          {/* Socials */}
          <div className="footer-socials">
            {[['𝕏','https://x.com'],['in','https://linkedin.com'],['🐙','https://github.com'],['💬','#']].map(([icon, href]) => (
              <a key={icon} className="social-btn" href={href} target="_blank" rel="noreferrer">
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Footer Columns */}
        {footerCols.map((col) => (
          <div key={col.title}>
            <div className="footer-col-title">{col.title}</div>
            <ul className="footer-col-links">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="footer-copy">
          © 2026 VoiceFlow AI, Inc. All rights reserved.
        </div>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;