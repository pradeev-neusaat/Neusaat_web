"use client";
import { useEffect, useState } from "react";
import styles from "../styles/WhyChoose.module.css"; // Import CSS module

export default function WhyChoose() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("why-choose");
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
    <section id="why-choose" className={styles.whyChoose}>
      <div className={styles.container}>
        {/* Left Side - Image */}
        <div className={styles.imageContainer}>
          <img src="/team-meeting.png" alt="Business Meeting" className={styles.image} />
        </div>

        {/* Right Side - Text Content */}
        <div className={`${styles.textContent} ${isVisible ? styles.fadeInRight : ""}`}>
          <h2 className={styles.title}>Why Choose <span>Neusaat?</span></h2>
          <h3 className={styles.subtitle}>Pioneering AI Technology Leadership</h3>
          <p className={styles.description}>
            At Neusaat, we stand out through our commitment to innovative AI solutions that drive 
            real business transformation. Our unique approach combines cutting-edge technology 
            with strategic insights.
          </p>

          {/* Bullet Points */}
          <ul className={styles.featuresList}>
            <li>✅ Advanced Machine Learning Algorithms</li>
            <li>✅ Customized AI Solutions</li>
            <li>✅ Scalable and Adaptable Frameworks</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
