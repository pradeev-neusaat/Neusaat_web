import React from "react";
import styles from "../styles/Footer.module.css"; // Import CSS module
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <h2 className={styles.title}>Neusaat</h2>
        <p className={styles.description}>AI Technology Startup for Innovative Solutions</p>
        
        {/* Contact Info */}
        <div className={styles.contactInfo}>
          <p><i className="fas fa-phone-alt"></i> (+91) 588-8452</p>
          <p><i className="fas fa-envelope"></i> info@neusaat.com</p>
          <p><i className="fas fa-map-marker-alt"></i> Tamil Nadu, India</p>
        </div>

        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* Copyright Text */}
      <p className={styles.copyright}>© Neusaat 2024</p>
    </footer>
  );
};

export default Footer;
