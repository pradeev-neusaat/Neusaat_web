"use client";
import { useEffect, useState } from "react";
import styles from "../styles/AboutSection.module.css";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("aboutSection");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="aboutSection" className={`${styles.aboutSection} ${isVisible ? styles.fadeIn : ""}`}>
      <div className={styles.aboutContainer}>
        
        {/* Left Content */}
        <div className={styles.textContent}>
          <h2>About Neusaat</h2>
          <h3>Driving Innovation Through AI</h3>
          <p>
            Neusaat is a forward-thinking AI startup dedicated to empowering businesses through intelligent solutions. 
            Our mission is to bridge the gap between complex technological challenges and practical, user-friendly applications.
          </p>

          {/* Vision Box */}
          <div className={styles.visionBox}>
            <p>
              &quot;As a forward-thinking AI startup, we are committed to leveraging AI to transform businesses. 
              We strive to bring intelligent solutions that redefine customer engagement and operational efficiency.&quot;
            </p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className={styles.imageContainer}>
          <img src="/about-neusaat.png" alt="Team Meeting" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
