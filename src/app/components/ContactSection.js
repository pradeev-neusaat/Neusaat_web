"use client";
import { useState, useEffect } from "react";
import styles from "../styles/ContactSection.module.css";

const SMTP_ENABLED = process.env.NEXT_PUBLIC_SMTP_ENABLED === "true"; // Read from .env.local

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [smtpEnabled, setSmtpEnabled] = useState(SMTP_ENABLED); // Track SMTP status

  useEffect(() => {
    setSmtpEnabled(SMTP_ENABLED); // Update state when env changes
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");

    try {
      if (!smtpEnabled) {
        setSuccessMessage("⚠️ Email service is temporarily disabled.");
        setLoading(false);
        return;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessMessage("✅ Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSuccessMessage("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccessMessage("❌ Error sending message. Please try later.");
    }

    setLoading(false);
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        {/* Left Section - Contact Info */}
        <div className={styles.contactInfo}>
          <h4>GET IN TOUCH</h4>
          <h2>💬 Engage with Us to Unlock the <br /> Future of Your Business</h2>

          <div className={styles.contactItem}>
            <i className="fas fa-envelope"></i>
            <div>
              <h4>Contact Us Via Email</h4>
              <p>info@neusaat.com</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <i className="fas fa-phone"></i>
            <div>
              <h4>Call Us</h4>
              <p>(720) 588-8452</p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className={styles.contactForm}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label>Your First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Your Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label>Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Your Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Your Message</label>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton} disabled={loading || !smtpEnabled}>
              {loading ? "Sending..." : !smtpEnabled ? "Email Service Disabled" : "START THE CONVERSATION"}
            </button>

            {/* Display success/error message */}
            {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
