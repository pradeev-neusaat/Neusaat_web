import styles from "../styles/ServicesSection.module.css";
import { FaBrain, FaShieldAlt, FaChartBar } from "react-icons/fa"; // AI, Security, Analytics
import { RiSettings3Fill } from "react-icons/ri"; // Integration
import { MdSupportAgent } from "react-icons/md"; // Support
import { AiOutlineRobot } from "react-icons/ai"; // Automation

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesWrapper}>
        {/* Headline */}
        <h2 className={styles.title}>
          Revolutionize Your Operations with AI Technologies
        </h2>

        {/* Container for Image + Services */}
        <div className={styles.servicesContainer}>
          {/* Left - Image */}
          <div className={styles.imageContainer}>
            <img src="/ai-illustration.png" alt="AI Solutions" />
          </div>

          {/* Right - Service Items */}
          <div className={styles.servicesGrid}>
            {/* Row 1 */}
            <div className={styles.serviceItem}>
              <div className={styles.iconWrapper}>
                <FaBrain size={30} color="#0070f3" />
              </div>
              <h3>Tailored AI Solutions</h3>
              <p>Leverage AI tools designed to optimize operations.</p>
            </div>

            <div className={styles.serviceItem}>
              <div className={styles.iconWrapper}>
                <FaShieldAlt size={30} color="#ff5733" />
              </div>
              <h3>Secure Data Management</h3>
              <p>Keep your data protected and accessible.</p>
            </div>

            <div className={styles.serviceItem}>
              <div className={styles.iconWrapper}>
                <FaChartBar size={30} color="#28a745" />
              </div>
              <h3>Analytics & Insights</h3>
              <p>Drive real-time decisions with AI-powered analytics.</p>
            </div>

            {/* Row 2 */}
            <div className={styles.serviceItem}>
              <div className={styles.iconWrapper}>
                <RiSettings3Fill size={30} color="#f39c12" />
              </div>
              <h3>Seamless Integration</h3>
              <p>Integrate AI effortlessly into your systems.</p>
            </div>

            <div className={styles.serviceItem}>
              <div className={styles.iconWrapper}>
                <MdSupportAgent size={30} color="#e91e63" />
              </div>
              <h3>Proactive Customer Support</h3>
              <p>Get dedicated support for all your inquiries.</p>
            </div>

            <div className={styles.serviceItem}>
              <div className={styles.iconWrapper}>
                <AiOutlineRobot size={30} color="#9c27b0" />
              </div>
              <h3>Automated Workflow Solutions</h3>
              <p>Enhance productivity with AI-driven automation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
