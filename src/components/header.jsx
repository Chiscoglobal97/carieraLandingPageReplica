import { useState } from "react";
import { Link } from "react-router";
import headerLogo from "../assets/headerlogo.png";
import "./Header.css";


function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileHomeOpen, setIsMobileHomeOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen((previousState) => !previousState);
    setIsMobileHomeOpen(false);
  }

  function toggleMobileHomeMenu() {
    setIsMobileHomeOpen((previousState) => !previousState);
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
    setIsMobileHomeOpen(false);
  }



  return (
    <header className="headerContainer">
      <nav className="navContainer" aria-label="Main navigation">
        <a
          className="logoContainer"
          href="#home"
          aria-label="Go to homepage"
          onClick={closeMobileMenu}
        >
          <img
            className="headerLogo"
            src={headerLogo}
            alt="Cariera logo"
          />
        </a>

        <div
          className={`navContent ${
            isMobileMenuOpen ? "navContentOpen" : ""
          }`}
        >
          <ul className="navList">
            <li className="navItem homeNavItem">
              <button
                className="navLink homeButton"
                type="button"
                aria-expanded={isMobileHomeOpen}
                aria-controls="homeMenu"
                onClick={toggleMobileHomeMenu}
              >
                Home
              </button>

              <ul
                className={`homeMenu ${
                  isMobileHomeOpen ? "homeMenuMobileOpen" : ""
                }`}
                id="homeMenu"
              >
                <li className="homeMenuItem">
                  <a
                    className="homeMenuLink"
                    href="#about"
                    onClick={closeMobileMenu}
                  >
                    About
                  </a>
                </li>

                <li className="homeMenuItem">
                  <a
                    className="homeMenuLink"
                    href="#contact"
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </a>
                </li>

                <li className="homeMenuItem">
                  <a
                    className="homeMenuLink"
                    href="#services"
                    onClick={closeMobileMenu}
                  >
                    Services
                  </a>
                </li>
              </ul>
            </li>

            <li className="navItem">
              <a
                className="navLink"
                href="#demo"
                onClick={closeMobileMenu}
              >
                Demo
              </a>
            </li>

            <li className="navItem">
              <a
                className="navLink"
                href="#support"
                onClick={closeMobileMenu}
              >
                Support
              </a>
            </li>

            <li className="navItem">
              <a
                className="navLink"
                href="#theme"
                onClick={closeMobileMenu}
              >
                Theme
              </a>
            </li>

            <li className="navItem">
              <a
                className="navLink"
                href="#facebookGroup"
                onClick={closeMobileMenu}
              >
                FB Group
              </a>
            </li>
          </ul>

          <Link
            className="ctaButton"
            to="/login"
            onClick={closeMobileMenu}
          >
            Login
          </Link>
        </div>

        <button
          className={`mobileMenuButton ${
            isMobileMenuOpen ? "mobileMenuButtonOpen" : ""
          }`}
          type="button"
          aria-label={
            isMobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span className="menuLine"></span>
          <span className="menuLine"></span>
          <span className="menuLine"></span>
        </button>
      </nav>
    </header>
  );
}

export default Header;