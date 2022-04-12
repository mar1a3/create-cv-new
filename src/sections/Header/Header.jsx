import React, { useState, useEffect } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import './style.css';

const Navlink = ({ title, children }) => (
  <LinkScroll
    to={title ? title.toLowerCase().replace(/\s+/g, '-') : '#'}
    offset={-100}
    spy={true}
    smooth={true}
    className="nav-link"
  >
    {children ? children : title}
  </LinkScroll>
);

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${hasScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-mobile">
          <a href="#">
            <img
              className="logo-img"
              src="images/logos/GuardVPN-logo.svg"
              alt="Logo"
            />
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <img
              className="button-img"
              src={menuOpen ? 'images/close.png' : 'images/burger-open.svg'}
              alt=""
            />
          </button>
        </div>

        <nav className={menuOpen ? 'open' : 'close'}>
          <ul className="navigation">
            <li>
              <Navlink title="Plans" />
            </li>
            <li>
              <Navlink title="Features" />
            </li>
            <li className="logo-desktop">
              <Navlink title="Showcase">
                <a href="#">
                  <img
                    className="logo-img"
                    src="images/logos/GuardVPN-logo.svg"
                    alt="Logo"
                  />
                </a>
              </Navlink>
            </li>
            <li>
              <Navlink title="FAQ" />
            </li>
            <li>
              <Navlink title="Regions" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
