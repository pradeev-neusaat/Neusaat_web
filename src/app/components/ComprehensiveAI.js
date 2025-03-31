"use client";
import { useEffect, useState } from "react";
import styles from "../styles/ComprehensiveAI.module.css";

export default function ComprehensiveAI() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("comprehensive-ai");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="comprehensive-ai" className={styles.section}>
      <div className={styles.container}>
        {/* Left - Text Content */}
        <div className={`${styles.textContent} ${isVisible ? styles.fadeInLeft : ""}`}>
          <h2 className={styles.title}>Our Comprehensive AI Services</h2>
          <h3 className={styles.subtitle}>Empowering Businesses Through AI</h3>
          <p className={styles.description}>
            We offer a holistic suite of AI services designed to transform your business operations, enhance customer experiences, and drive strategic growth.
          </p>

          {/* Service Cards */}
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <h4>AI Consulting</h4>
              <p>Strategic guidance on AI integration</p>
            </div>
            <div className={styles.card}>
              <h4>Machine Learning</h4>
              <p>Custom predictive models</p>
            </div>
            <div className={styles.card}>
              <h4>Data Analytics</h4>
              <p>Actionable insights generation</p>
            </div>
            <div className={styles.card}>
              <h4>AI Software</h4>
              <p>Custom application development</p>
            </div>
          </div>
        </div>

        {/* Right - Image */}
        <div className={`${styles.imageContainer} ${isVisible ? styles.fadeInRight : ""}`}>
          <img src="/ai-services.png" alt="AI Services" className={styles.mainImage} />
        </div>
      </div>
    </section>
  );
}
