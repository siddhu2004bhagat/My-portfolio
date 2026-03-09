import { useEffect, useState } from "react";
import "./styles/About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // Show only when the about section is in the viewport
        const isInView = rect.top < window.innerHeight * 0.6 && rect.bottom > window.innerHeight * 0.2;
        setIsVisible(isInView);
      }
    };

    // Use requestAnimationFrame for smoother performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <div className={`about-image ${isVisible ? "visible" : ""}`}>
          <img src="/images/profile.jpeg" alt="Sudhanshu Kr. Jaiswal" />
        </div>
        <div className="about-content">
          <h3 className="title">About Me</h3>
          <p className="para">
            Electronics & Communication Engineering student at Lovely Professional University 
            with hands-on experience in Embedded Systems, IoT Development, and Industrial Automation. 
            Skilled in Arduino, ESP32, Raspberry Pi, PLC Programming, and Computer Vision. 
            Passionate about building innovative hardware-software solutions from concept to deployment, 
            with expertise in sensor integration, wireless communication, and real-time monitoring systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
