import "./Header.css";
import Stacklyimg from "../../assets/S.webp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        {/* Logo */}
        <div className="logo" onClick={()=>navigate("/")}>
          <img src={Stacklyimg} alt="Stackly" className="logo-img" />
        </div>

        {/* Desktop Nav */}
        <nav>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Desktop CTA */}
        <button className="header-btn" onClick={() => navigate("/login")}>
          Get Started
        </button>

        {/* Hamburger (mobile only) */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Mobile Nav Drawer */}
      <ul className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <li><a href="#" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#services" onClick={closeMenu}>Services</a></li>
        <li><a href="#process" onClick={closeMenu}>Process</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        <button
          className="mobile-nav-btn"
          onClick={() => { closeMenu(); navigate("/login"); }}
        >
          Get Started
        </button>
      </ul>
    </>
  );
}

export default Header;