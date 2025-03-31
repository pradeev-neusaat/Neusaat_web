import HeadSection from "../app/components/HeadSection";
import styles from "../app/styles/Home.module.css";
import HeadSectionWrapper from "./components/HeadSection";
import ServicesSection from "../app/components/ServicesSection";
import CtaSection from "../app/components/ctaSection";
import AiBusinessSection from "../app/components/AiBusinessSection";
import FutureBusiness from "./components/FutureBusiness";
import WhyChoose from "./components/WhyChoose";
import ComprehensiveAI from "./components/ComprehensiveAI";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function Home() {
  return (
    <div>
      <main className={styles.content}>
      <section id="head">
      <HeadSection/>
        </section>
        <ServicesSection/>
        <CtaSection />
        <AiBusinessSection />
        <FutureBusiness/>
        <section id="whyneusaat">
        <WhyChoose/>
        </section>
        <section id="services">
        <ComprehensiveAI/>
        </section>
        <section id="about">
            <AboutSection />
        </section>
        <section id="contact">
            <ContactSection/>
        </section>
        <Footer/>
      </main>
    </div>
  );
  return (
    <HeadSectionWrapper>
      <HeadSection />
    </HeadSectionWrapper>
    
  );
}

export default Home;
