import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";
import logo from "./bhaktabuilders_logo_transparent.png";
import { FaPhone } from "react-icons/fa";

export const NavLinks = ({ className, onClick }) => (
  <ul className={className}>
    <li><NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : styles.link} onClick={onClick}>Home</NavLink></li>
    <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.activeLink : styles.link} onClick={onClick}>About us</NavLink></li>
    <li><NavLink to="/projects" className={({ isActive }) => isActive ? styles.activeLink : styles.link} onClick={onClick}>Projects</NavLink></li>
    <li><NavLink to="/contact" className={({ isActive }) => isActive ? styles.activeLink : styles.link} onClick={onClick}>Contact</NavLink></li> 
  </ul>
);

const ToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className={styles.toggleContainer}>
      <button className={styles.toggleButton} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "x" : "☰"}
      </button>
      <div className={`${styles.popupMenu} ${isOpen ? styles.open : ""}`}>
        <NavLinks className={styles.toggleNavLinks} onClick={closeMenu} />
      </div>
    </div>
  );
};

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine navbar class based on route
  const getNavbarClass = () => {
    if (location.pathname === "/") return `${styles.navigationHeaderDiv} ${styles.homePageStyle}`;
    if (location.pathname.startsWith("/about")) return `${styles.navigationHeaderDiv} ${styles.aboutPageStyle}`;
    if (location.pathname.startsWith("/projects")) return `${styles.navigationHeaderDiv} ${styles.projectsPageStyle}`;
    if (location.pathname.startsWith("/contact")) return `${styles.navigationHeaderDiv} ${styles.contactPageStyle}`;
    return styles.navigationHeaderDiv;
  };

  return (
    <header className={`${getNavbarClass()} ${isScrolled ? styles.shrink : ""}`}>
      <ul className={styles.navigationList}>
        <li>
          <Link to="/">
            <img
              src={logo}
              alt="Bhakta Logo"
              height="100px"
              className={`${styles.logo} ${isScrolled ? styles.logoShrink : ""}`}
            />
          </Link>
        </li>
        <NavLinks className={styles.navbarNavLinks} />
        <li><ToggleMenu /></li>
      </ul>
    </header>
  );
};

export default Navbar;