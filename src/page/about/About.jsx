import React, { useRef } from "react";
import "./about.css";
import img from "../../assets/Hero/real.webp";
import { motion, useInView } from "framer-motion";

const About = () => {
  const sectionRef = useRef(null); // Reference to the section
  const isInView = useInView(sectionRef, { threshold: 0.3 }); // Trigger animation when 30% of the section is in view

  const variants = {
    hidden: { opacity: 0, x: -100, filter: "blur(10px)" }, // Blur effect when hidden
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)", // Remove blur on visibility
      transition: { duration: 0.8 }, // Duration of the animation
    },
  };

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="containers">
        <div className="about-banner">
          <img
            src={img}
            alt="About Banner"
            className="about-banner-img"
          />
        </div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Animate when section is in view
          variants={variants}
          className="about-content"
        >
          <h2 className="about-title">Efficiency. Transparency. Control.</h2>
          <p className="about-text">
            Hously developed a platform for the Real Estate marketplace that
            allows buyers and sellers to easily execute a transaction on their
            own. The platform drives efficiency, cost transparency, and
            control into the hands of the consumers. Hously is Real Estate
            Redefined.
          </p>
          <a href="#" className="learn-more-btn">
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
