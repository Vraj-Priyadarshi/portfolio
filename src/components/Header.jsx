

import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  // Scroll handler for background transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scrollspy observer for active section highlighting
  useEffect(() => {
    const sections = ["about", "skills", "projects", "experience", "education", "achievements", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -50% 0px" } // trigger active state when section occupies mid-screen
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        VRAJ_PRIYADARSHI ▸ CORE.SYS
      </div>

      <button
        className={`menu-toggle ${menuOpen ? "rotated" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle Navigation Menu"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <a 
          className={`navele mono-readout ${activeSection === "about" ? "active" : ""}`} 
          href="#about" 
          onClick={handleLinkClick}
        >
          01 ▸ ABOUT
        </a>
        <a 
          className={`navele mono-readout ${activeSection === "skills" ? "active" : ""}`} 
          href="#skills" 
          onClick={handleLinkClick}
        >
          02 ▸ SKILLS
        </a>
        <a 
          className={`navele mono-readout ${activeSection === "projects" ? "active" : ""}`} 
          href="#projects" 
          onClick={handleLinkClick}
        >
          03 ▸ PROJECTS
        </a>
        <a 
          className={`navele mono-readout ${activeSection === "experience" ? "active" : ""}`} 
          href="#experience" 
          onClick={handleLinkClick}
        >
          04 ▸ EXPERIENCE
        </a>
        <a 
          className={`navele mono-readout ${activeSection === "education" ? "active" : ""}`} 
          href="#education" 
          onClick={handleLinkClick}
        >
          05 ▸ EDUCATION
        </a>
        <a 
          className={`navele mono-readout ${activeSection === "achievements" ? "active" : ""}`} 
          href="#achievements" 
          onClick={handleLinkClick}
        >
          06 ▸ ACHIEVEMENTS
        </a>
        <a 
          className={`navele mono-readout ${activeSection === "contact" ? "active" : ""}`} 
          href="#contact" 
          onClick={handleLinkClick}
        >
          07 ▸ CONTACT
        </a>
      </nav>
    </header>
  );
}

export default Header;
