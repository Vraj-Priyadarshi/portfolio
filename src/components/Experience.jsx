import React, { useState } from "react";
import { FaTimes, FaSearchPlus } from "react-icons/fa";
import "./Experience.css";

function Experience() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [lightboxImg, setLightboxImg] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const images = [
    { src: "/accenture1.jpeg", alt: "Accenture Office" },
    { src: "/accenture2.jpeg", alt: "Team Presentation" },
    { src: "/accenture3.jpeg", alt: "Workplace" },
    { src: "/accenture4.jpeg", alt: "Certificates" }
  ];

  return (
    <section id="experience" className="experience-section">

      
      <div className="section-header">
        <h2 className="glow-text">My Experience</h2>
      </div>

      <div className="case-study-card hud-panel">
        <span className="hud-bracket tl"></span>
        <span className="hud-bracket tr"></span>
        <span className="hud-bracket bl"></span>
        <span className="hud-bracket br"></span>

        <div className="case-study-header">
          <div className="case-study-title">
            <h3 className="glow-text">Associate Software Engineering Intern</h3>
            <h4>Accenture</h4>
          </div>
          <div className="case-study-meta mono-readout">
            <span>[ MAY–JULY 2026 ]</span>
            <span>[ BENGALURU, INDIA ]</span>
          </div>
        </div>

        <div className="case-study-tech">
          {["Python", "LangGraph", "LangChain", "LLM-as-a-Judge", "FastAPI", "Streamlit", "Agent Orchestration"].map(tech => (
            <span key={tech} className="tech-badge mono-readout">{tech.toUpperCase()}</span>
          ))}
        </div>

        <div className="case-study-narrative">
          <p>
            Over the past two months, I got the opportunity to work on Generative AI, Agentic AI, AI agent evaluation, and research-oriented projects like AgentForge, Local Judge Bias Lab, Task-Aware Predictability (TAP), and Agentic Workflow Intelligence (AWI). It was an amazing experience that helped me learn a lot, both technically and personally.
          </p>
        </div>

        <div className="case-study-achievements">
          <ul>
            <li>Designed and built an Agent Evaluation Framework benchmarking multiple agent architectures with standardized datasets, evaluation pipelines, and 10+ quantitative metrics.</li>
            <li>Built AgentArena, a platform comparing Simple Chain, ReAct, Plan-and-Execute, and Multi-Agent architectures across benchmark tasks and evaluation dimensions.</li>
            <li>Implemented LLM-as-a-Judge, trajectory evaluation, tool-selection assessment, and agent reliability analysis methodologies.</li>
          </ul>
        </div>

        <div className="case-study-expandables">
          <div className={`expandable-section ${expandedSection === 'built' ? 'active' : ''}`}>
            <button className="expandable-trigger mono-readout" onClick={() => toggleSection('built')}>
              [ {expandedSection === 'built' ? '-' : '+'} ] WHAT I BUILT
            </button>
            {expandedSection === 'built' && (
              <div className="expandable-content">
                <p><strong>AgentForge:</strong> A comprehensive platform for multi-agent workflows.</p>
                <p><strong>Local Judge Bias Lab (LJBL):</strong> A framework to identify and quantify bias in LLM-as-a-Judge evaluations.</p>
                <p><strong>AgentArena:</strong> A benchmarking suite for different agent architectures.</p>
                <p><strong>TAP & AWI:</strong> Research frameworks for task predictability and workflow intelligence.</p>
              </div>
            )}
          </div>

          <div className={`expandable-section ${expandedSection === 'learnings' ? 'active' : ''}`}>
            <button className="expandable-trigger mono-readout" onClick={() => toggleSection('learnings')}>
              [ {expandedSection === 'learnings' ? '-' : '+'} ] KEY LEARNINGS
            </button>
            {expandedSection === 'learnings' && (
              <div className="expandable-content">
                <p>Identified LLM-as-a-Judge bias patterns, specifically same-model vs cross-model biases.</p>
                <p>Gained deep insights into agent evaluation methodology design.</p>
                <p>Learned how to lead a team through a complex research-driven engineering project.</p>
              </div>
            )}
          </div>
        </div>

        <div className="case-study-gallery">
          <div className="gallery-track">
            {images.map((img, idx) => (
              <div key={idx} className="gallery-item hud-hexagon" onClick={() => setLightboxImg(img.src)}>
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="hover-overlay"><FaSearchPlus /></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightboxImg && (
        <div className="lightbox-modal fade-in" onClick={() => setLightboxImg(null)}>
          <div className="lightbox-content hud-panel" onClick={(e) => e.stopPropagation()}>
            <span className="hud-bracket tl"></span>
            <span className="hud-bracket tr"></span>
            <span className="hud-bracket bl"></span>
            <span className="hud-bracket br"></span>
            <button className="close-lightbox" aria-label="Close lightbox" onClick={() => setLightboxImg(null)}><FaTimes /></button>
            <img src={lightboxImg} alt="Enlarged view" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Experience;
