// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../styles/components/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para cambiar estilos del header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
      <div className="logo">
        <img src="/sem.png" alt="Logo SEM" className="logo-image" />
      </div>  
        <div className="mobile-menu-button" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? 'open' : ''}`}></div>
        </div>
        
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setMenuOpen(false)}
            className="nav-item"
          >
            <div className="nav-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2zm-7-3.25c2.9 0 5.25-2.35 5.25-5.25S14.9 7.25 12 7.25 6.75 9.6 6.75 12.5 9.1 17.75 12 17.75z"/>
              </svg>
            </div>
            <span>Inicio</span>
          </Link>
          <Link
            activeClass="active"
            to="nosotros"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setMenuOpen(false)}
            className="nav-item"
          >
            <div className="nav-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <span>Nosotros</span>
          </Link>
          <Link
            activeClass="active"
            to="features"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setMenuOpen(false)}
            className="nav-item"
          >
            <div className="nav-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <span>Servicios</span>
          </Link>
          <Link
            activeClass="active"
            to="contacto"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setMenuOpen(false)}
            className="nav-item"
          >
            <div className="nav-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <span>Contacto</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;