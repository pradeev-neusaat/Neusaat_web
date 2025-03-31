"use client";
import { useEffect, useState } from "react";
import styles from "../styles/HeadSection.module.css";

export default function HeadSection() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [animateText, setAnimateText] = useState(false);
  const [animateImage, setAnimateImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate Text and Image when Component Loads
  useEffect(() => {
    setTimeout(() => {
      setAnimateText(true);
      setAnimateImage(true);
    }, 500);
  }, []);

  return (
    <div className={`${styles.headSectionBackground} ${isAtTop ? styles.lightBlue : ""}`}>
      {/* 🔵 Background Circles & Dots */}
      <div className={styles.circleLeft}></div>
      <div className={styles.circleRight}></div>
      <div className={styles.dots}></div>

      {/* 💡 Head Section Content */}
      <div className={styles.headContent}>
        {/* Left: Animated Text Content */}
        <div className={`${styles.textContent} ${animateText ? styles.textAnimate : ""}`}>
          <h1>
            Elevate Your Business <br />
            <span className={styles.highlight}>Innovative AI Solutions</span>
            <br />
            Transform Your Engagement
          </h1>
          <p>
            Discover how Neusaat specializes in advanced AI technologies that streamline 
            your processes and enhance customer interactions. Stand out in today’s competitive 
            landscape while making informed decisions with AI-driven insights.
          </p>
          <button className={styles.ctaButton}>Unlock Your Potential</button>
        </div>

        {/* Right: Single Static Image */}
        <div className={`${styles.imageContainer} ${animateImage ? styles.imageAnimate : ""}`}>
          <img src="/image2.jpg" alt="AI Server" className={styles.headImage} />
        </div>
      </div>
    </div>
  );
}
