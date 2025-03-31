"use client";
import { useEffect, useState } from "react";
import styles from "../styles/FutureBusiness.module.css";

export default function FutureBusiness() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("future-business");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="future-business" className={styles.futureBusiness}>
      <div className={styles.container}>
        {/* Left Side - Text Content */}
        <div className={`${styles.textContent} ${isVisible ? styles.fadeInLeft : ""}`}>
          <h2 className={styles.title}>
            Unlock the future of your business with <span>Neusaat</span>
          </h2>
          <p className={styles.description}>
            Revolutionize the way you engage with your customers through intelligent AI solutions
            that streamline operational challenges and enhance every interaction.
          </p>

          <ul className={styles.benefitsList}>
            <li>✅ <strong>Comprehensive Project Management</strong> - Our team is dedicated to guiding you from concept to implementation, ensuring clarity and transparency.</li>
            <li>✅ <strong>Real-Time Insights</strong> - Leverage advanced technology to optimize workflow and make informed, strategic decisions.</li>
            <li>✅ <strong>Tailored AI Solutions</strong> - Collaborate with us to design tools that meet your unique needs, enhancing customer engagement and satisfaction.</li>
          </ul>

          <p className={styles.additionalText}>
            Embark on a transformative journey with Neusaat, where our commitment to your success is paramount. 
            Experience the benefits of AI-driven solutions that position your business as a leader in customer engagement.
          </p>

          {/*<button className={styles.ctaButton}>Get Started Today for just $150/month</button>*/}
        </div>

        {/* Right Side - Image Section with Triangle */}
        <div className={`${styles.imageContainer} ${isVisible ? styles.slideInRight : ""}`}>
          <div className={styles.triangleBackground}></div>
          <img src="/ai-business-main.png" alt="AI Business" className={styles.mainImage} />

          {/* Overlay Image with White Border */}
          <div className={styles.overlayWrapper}>
            <img src="/ai-business-overlay.png" alt="AI Technology" className={styles.overlayImage} />
          </div>
        </div>
      </div>
    </section>
  );
}
