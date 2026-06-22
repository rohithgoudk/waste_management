import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";
import Stacklyimg from "../../assets/Stacklyimg.webp";

const socials = [
  {
    name: "Facebook",
    href: "/not-found",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "/not-found",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "/not-found",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "/not-found",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "/not-found",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="#fff" />
      </svg>
    ),
  },
];

const quickLinks = [
  { label: "Home",     to: "/" },
  { label: "About",    to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Process",  to: "/process" },
  { label: "Contact",  to: "/contact" },
];

const services = [
  "Recycling",
  "Waste Collection",
  "Composting",
  "Industrial Waste",
];

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">

      {/* Animated top wave divider */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="#0d2818"
          />
        </svg>
      </div>

      <div className="footer-body">
        <div className="footer-container">

          {/* ── Brand ── */}
          <div className="footer-brand">
            <div className="footer-logo-wrap">
              <img src={Stacklyimg} alt="Stackly EcoClean" className="footer-logo" />
              <div className="footer-logo-glow" />
            </div>

            <p className="footer-tagline">
              Creating a cleaner and greener world through
              sustainable waste management — one pickup at a time.
            </p>

            {/* Social Icons */}
            <div className="footer-socials">
              {socials.map((s) => (
                <button
                  key={s.name}
                  className="social-btn"
                  aria-label={s.name}
                  onClick={() => navigate("/not-found")}
                >
                  {s.icon}
                  <span className="social-tooltip">{s.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div className="footer-col">
            <h3 className="footer-heading">
              Quick Links
              <span className="heading-bar" />
            </h3>
            <ul className="footer-list">
              {quickLinks.map((lk) => (
                <li key={lk.label}>
                  <Link to={lk.to} className="footer-link">
                    <span className="link-arrow">→</span>
                    {lk.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div className="footer-col">
            <h3 className="footer-heading">
              Our Services
              <span className="heading-bar" />
            </h3>
            <ul className="footer-list">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="footer-link">
                    <span className="link-arrow">→</span>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div className="footer-col">
            <h3 className="footer-heading">
              Get in Touch
              <span className="heading-bar" />
            </h3>
            <ul className="footer-contact-list">
              <li>
                <span className="contact-icon">✉</span>
                <a href="mailto:Stackly@ecoclean.com" className="footer-link">
                  Stackly@ecoclean.com
                </a>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <a href="tel:+919998956789" className="footer-link">
                  +91 9998 956 789
                </a>
              </li>
              <li>
                <span className="contact-icon">🚨</span>
                <a href="tel:18001234567" className="footer-link">
                  1800 123 4567 (24/7)
                </a>
              </li>
              <li>
                <span className="contact-icon">📍</span>
                <span className="footer-address">
                  Hitech City, Hyderabad, TG 500081
                </span>
              </li>
            </ul>

           
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span className="copyright">
            © 2026 Stackly Waste Management. All rights reserved.
          </span>
          <div className="footer-legal">
            <button onClick={() => navigate("/not-found")} className="legal-link">Privacy Policy</button>
            <span className="legal-dot" />
            <button onClick={() => navigate("/not-found")} className="legal-link">Terms of Use</button>
            <span className="legal-dot" />
            <button onClick={() => navigate("/not-found")} className="legal-link">Sitemap</button>
          </div>
          <div className="eco-badge">
            <span>🌱</span> Carbon Neutral 2030
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;