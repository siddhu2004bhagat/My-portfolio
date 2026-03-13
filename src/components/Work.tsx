import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "IoT Heart & ECG Monitor",
    category: "IoT & Health Monitoring",
    tools: "ESP32, ThingSpeak, Arduino IDE, CSS",
    image: "/images/iot-monitor.png",
    github: "https://github.com/siddhu2004bhagat",
  },
  {
    title: "Finger Gesture LED Control",
    category: "Computer Vision & Embedded",
    tools: "Python, OpenCV, Arduino, Serial Communication",
    image: "/images/gesture-control.jpg",
    github: "https://github.com/siddhu2004bhagat",
  },
  {
    title: "14-Channel RC System",
    category: "Wireless Communication",
    tools: "Arduino, NRF24L01, Embedded C",
    image: "/images/rc-transmitter.jpg",
    github: "https://github.com/siddhu2004bhagat",
  },
  {
    title: "AI Exam Monitoring System",
    category: "Computer Vision & AI",
    tools: "Raspberry Pi, Python, OpenCV, Face Recognition",
    image: "/images/exam-monitor.jpeg",
    github: "https://github.com/siddhu2004bhagat",
  },
  {
    title: "IoT Firebase Control",
    category: "Cloud IoT",
    tools: "ESP32, Firebase, MIT App Inventor, WiFi",
    image: "/images/firebase-iot.png",
    github: "https://github.com/siddhu2004bhagat",
  },
  {
    title: "ESP32 Thermal Printer",
    category: "Embedded Communication",
    tools: "ESP32, UART, RP203 Thermal Printer",
    image: "/images/thermal-printer.webp",
    github: "https://github.com/siddhu2004bhagat",
  },
  {
    title: "ESP32 2.4GHz BLE & WiFi Jammer",
    category: "Security & Wireless Communication",
    tools: "ESP32, NRF24L01, Arduino IDE",
    image: "https://github.com/user-attachments/assets/80a3225b-56b1-4104-8447-73b3478cd0fc",
    github: "https://github.com/siddhu2004bhagat/Esp32-2.4GHz-Ble-WiFi-jammer",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <h4>{project.title}</h4>
                          <a href={project.github} target="_blank" rel="noreferrer" style={{ color: "var(--accentColor)", fontSize: "24px" }} data-cursor="pointer">
                            <FaGithub />
                          </a>
                        </div>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
