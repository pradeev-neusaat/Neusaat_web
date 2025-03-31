"use client";
import { useEffect, useState } from "react";
import styles from "../styles/AiBusinessSection.module.css";

export default function AiBusinessSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("aiBusiness");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="aiBusiness" className={styles.aiBusinessSection}>
      <div className={`${styles.container} ${isVisible ? styles.fadeInUp : ""}`}>
        <p className={styles.subtitle}>Why Neusaat?</p>
        <h2 className={styles.title}>Revolutionize Your Business with AI</h2>
        <p className={styles.description}>
          Discover how Neusaat’s innovative AI solutions transform customer engagement and streamline operations for sustainable growth.
        </p>

        {/* Card Container */}
        <div className={styles.cardContainer}>
          {/* Card 1 */}
          <div className={styles.card}>
            <img src="/ai-insights.png" alt="Data-Driven Insights" />
            <div className={styles.cardContent}>
              <h3>Data-Driven Insights</h3>
              <p>Leverage AI to optimize your decision-making process and enhance business strategies.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <img src="/customer-engagement.png" alt="Customer Engagement Solutions" />
            <div className={styles.cardContent}>
              <h3>Customer Engagement Solutions</h3>
              <p>Boost customer relationships through tailored AI applications that resonate with your audience.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <img src="/flexible-ai.png" alt="Flexible AI Packages" />
            <div className={styles.cardContent}>
              <h3>Flexible AI Packages</h3>
              <p>Explore adaptable AI solutions starting at just $150/month tailored to fit your business needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
