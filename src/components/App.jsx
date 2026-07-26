
import React, { useEffect, useState, useRef } from "react";
import Header from "./Header";
import Skills from "./Skills";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Achievements from "./Achievements";
import Extracurricular from "./Extracurricular";
import Contact from "./Contactme";
import ScrollToTop from "./ScrollToTop";
import Loading from "./Loading";
import Starfield from "./Starfield";
import "./App.css";

// Toggle between 'video' or 'stars' mode
const BACKGROUND_MODE = "stars";

function App() {
  const [progress, setProgress] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const videoRef = useRef();

  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 125) {
          clearInterval(interval);
          return 125;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  // Scroll statistics
  useEffect(() => {
    if (progress < 125) return;
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollPercent(scrolled);
      setShowBackToTop(scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [progress]);

  // Scroll Reveal Observer
  useEffect(() => {
    if (progress < 125) return;
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.08 }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [progress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show main app when loading completes
  const showApp = progress >= 125;

  return (
    <>
      {!showApp ? (
        <Loading progress={progress} />
      ) : (
        <div className="main-app fade-in">
          <div className="app-container">
            {BACKGROUND_MODE === "video" ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="background-video"
                ref={videoRef}
              >
                <source src="/assets/videoplayback.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Starfield />
            )}
          </div>

          <div className="content-overlay">
            <ScrollToTop />
            <div className="scroll-progress-bar" style={{ width: `${scrollPercent}%` }} />
            <Header />
            <div className="reveal"><About /></div>
            <div className="reveal"><Skills /></div>
            <div className="reveal"><Projects /></div>
            <div className="reveal"><Experience /></div>
            <div className="reveal"><Achievements /></div>
            <div className="reveal"><Extracurricular /></div>
            <div className="reveal"><Contact /></div>

            <button 
              className={`back-to-top ${showBackToTop ? "visible" : ""}`} 
              onClick={scrollToTop}
              aria-label="Back to Top"
            >
              ↑
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
