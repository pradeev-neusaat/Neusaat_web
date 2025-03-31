"use client";
import { useEffect, useState } from "react";
import styles from "../styles/ctaSection.module.css";

export default function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300); // Delay animation for smooth effect
  }, []);

  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        {/* Design Elements */}
        <div className={styles.circleOne}></div>
        <div className={styles.circleTwo}></div>
        <div className={styles.dots}></div>

        {/* Left Side - Text Content (Full Width Now) */}
        <div className={`${styles.textContent} ${isVisible ? styles.fadeInUp : ""}`}>
          <p className={styles.subtitle}>Transform your business with tailored AI solutions</p>
          <h2 className={styles.title}>
            Revolutionize customer engagement and operational efficiency
          </h2>
          <p className={styles.description}>
            Harness the power of intelligent technology to enhance interactions and drive growth
          </p>
          <button className={styles.ctaButton}>Start Your Transformation</button>
        </div>
      </div>
    </section>
  );
}
