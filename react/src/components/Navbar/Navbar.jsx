import React, { useState, useEffect } from "react";
import { NavLink,Link,useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";
import logo from "./bhaktabuilders_logo_transparent.png";
import { FaPhone } from "react-icons/fa";

export const NavLinks = ({ className, onClick }) => {
  return (
    <ul className={className}>
      <li><NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : styles.link} onClick={onClick}>Home</NavLink></li>
      <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.activeLink : styles.link} onClick={onClick}>About us</NavLink></li>
      <li><NavLink to="/projects" className={({ isActive }) => isActive ? styles.activeLink : styles.link} onClick={onClick}>Projects</NavLink></li>
      <li><NavLink to="/contact" className={({ isActive }) => isActive ? styles.activeLink : styles.link} onClick={onClick}>Contact</NavLink></li> 
    </ul>
  );
};

const ToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false); // Function to close menu

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
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Get current path
  const [navClass, setNavClass] = useState(styles.navigationHeaderDiv);
  
  useEffect(() => {
    // Handle Scroll Effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Update class based on route change
    let newClass = styles.navigationHeaderDiv;
    if (location.pathname === "/") {
      newClass = `${styles.navigationHeaderDiv} ${styles.homePageStyle}`;
    } else if (location.pathname.includes("/about")) {
      newClass = `${styles.navigationHeaderDiv} ${styles.aboutPageStyle}`;
    } else if (location.pathname.includes("/projects")) {
      newClass = `${styles.navigationHeaderDiv} ${styles.projectsPageStyle}`;
    }

    console.log("Updated Navbar Class:", newClass); // Debugging
    setNavClass(newClass);
  }, [location.pathname]); // Trigger effect when URL changes

  return (
    <header className={`${navClass} ${isScrolled ? styles.shrink : navClass}`}>
      <ul className={styles.navigationList}>
        <li>
          <Link to="/">
            <img height="100px" src={logo} alt="BhaktaLogo" className={`${styles.logo} ${isScrolled ? styles.logoShrink : ""}`} />
          </Link>
        </li>
        <NavLinks className={styles.navbarNavLinks} />
        <button className={styles.button} onClick={() => window.location.href = `tel:${"+44 7729 167039"}`} type="button">
          <FaPhone size={'35px'}/>  
        </button>
        <li><ToggleMenu /></li>
      </ul>
    </header>
  );
};
  

export default Navbar;