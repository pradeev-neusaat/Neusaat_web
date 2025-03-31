"use client"; // Enables client-side interactivity

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Controls hamburger menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest(`.${styles.navbar}`)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  // Toggle Mobile Menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Smooth Scroll with Offset to Center Section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = document.querySelector(`.${styles.navbar}`)?.offsetHeight || 80; // Adjust default navbar height if needed
      const offset = navbarHeight -100; // Adjust this value to control centering
      const top = section.offsetTop - (window.innerHeight / 2) + (section.clientHeight / 2) - offset;

      window.scrollTo({ top, behavior: "smooth" });

      setMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <Link href="/">Neusaat</Link>
      </div>

      {/* Hamburger Menu Button */}
      <button className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </button>

      {/* Navigation Links */}
      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <li><button onClick={() => scrollToSection("head")}>Home</button></li>
        <li><button onClick={() => scrollToSection("whyneusaat")}>Why Neusaat?</button></li>
        <li><button onClick={() => scrollToSection("services")}>Services</button></li>
        <li><button onClick={() => scrollToSection("about")}>About</button></li>
      </ul>

      <button className={styles.contactButton} onClick={() => scrollToSection("contact")}>
        Get in Touch
      </button>
    </nav>
  );
}

export default Navbar;
