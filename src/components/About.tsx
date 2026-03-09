import { useEffect, useState } from "react";
import "./styles/About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.7 && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
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
