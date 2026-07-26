import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Projects.css";

const pythonGames = [
  {
    name: "Guess the State",
    description: "Guess the U.S. state by name using Turtle graphics.",
    tech: ["Python", "Turtle"],
    github: "https://github.com/Vraj-Priyadarshi/guess-state",
  },
  {
    name: "Turtle Crossing Game",
    description: "Cross the road without getting hit by cars!",
    tech: ["Python", "Turtle"],
    github: "https://github.com/Vraj-Priyadarshi/Turtle-crossing-game",
  },
  {
    name: "Pong Game",
    description: "Classic two-player Pong using Python Turtle.",
    tech: ["Python", "Turtle"],
    github: "https://github.com/Vraj-Priyadarshi/pong-game",
  },
  {
    name: "Snake Game",
    description: "Eat food, grow longer, avoid collisions.",
    tech: ["Python", "Turtle"],
    github: "https://github.com/Vraj-Priyadarshi/snake-game",
  },
  {
    name: "Blackjack or 21",
    description: "A text-based Blackjack game using Python logic.",
    tech: ["Python"],
    github: "https://github.com/Vraj-Priyadarshi/Blackjack-or-21",
  },
];

const projectsData = [
  {
    name: "AgentForge",
    description: "Local-first, framework-agnostic AI agent evaluation platform running offline.",
    details: "Supports 9 providers (OpenAI, Anthropic, Ollama, LangChain, etc.) with 12 built-in metrics. Features a modular architecture with pluggable adapters, datasets, and judges for single-agent, multi-agent, and workflow evaluations. Bypasses API costs by executing evaluation loops offline using local Ollama. Tested with 180+ passing tests and strict Ruff/MyPy code validation.",
    tech: ["Python", "LangChain", "Streamlit", "Ollama"],
    github: "https://github.com/Vraj-Priyadarshi/AgentForge",
    updated: "July 2026",
    images: ["/agentforge_Dashboard.png", "/agentforge2_dashboard.png", "/agentforge_workflow_details.png", "/buildAgent.png", "/multiagent_workflow_agentforge.png"],
    features: [
      "Pluggable adapters for 9+ providers",
      "Offline local evaluation loops via Ollama",
      "12 built-in evaluation metrics",
      "Modular architecture for workflow evaluations"
    ]
  },
  {
    name: "Spec2Code AI",
    description: "Multi-agent LangGraph platform converting natural language into codebases.",
    details: "Converts ideas into structured codebases using a 6-agent LangGraph DAG workflow (Planner, Architect, Coder, Reviewer, Documentation, Tester). Features a FastAPI + PostgreSQL backend with SQLAlchemy, real-time SSE streaming of execution states, and a React 18 + TypeScript frontend. Supports JWT-based authentication and provider-agnostic LLM factories.",
    tech: ["FastAPI", "PostgreSQL", "LangGraph", "React", "TypeScript", "SQLAlchemy"],
    github: "https://github.com/Vraj-Priyadarshi/spec2code-ai",
    updated: "July 2026",
    images: ["/spec2code_homepage.png", "/spec2code_working.png", "/spec2code_output.png"],
    features: [
      "6-agent LangGraph DAG workflow",
      "Real-time SSE streaming of execution states",
      "React 18 + TypeScript frontend interface",
      "Provider-agnostic LLM factories"
    ]
  },
  {
    name: "SemSim — Question Similarity Intelligence",
    description: "NLP duplicate detection pipeline utilizing two-stage SBERT and FAISS retrieval.",
    details: "Text preprocessing, feature engineering, Word2Vec embeddings, and SBERT + FAISS + CrossEncoder architecture achieving 90% question duplicate detection accuracy. Deployed via a FastAPI backend for real-time similarity prediction and FAQ retrieval. Streamlit interface for interactive query comparisons.",
    tech: ["Python", "FastAPI", "Streamlit", "SBERT", "FAISS"],
    github: "https://github.com/Vraj-Priyadarshi/nlp_project",
    updated: "March 2026",
    images: ["/semsim1.png", "/semsim2.png"],
    features: [
      "Two-stage SBERT and FAISS retrieval",
      "90% question duplicate detection accuracy",
      "FastAPI backend for real-time similarity",
      "Interactive Streamlit dashboard"
    ],
    placeholder: false
  },
  {
    name: "Career Saarthi — AI Career Platform",
    description: "AI-powered career intelligence tool for personalized guidance and skill-gap forecasts.",
    details: "Designed as a personalized guide to career success in Healthcare, Agriculture & Smart City domains. Predicts skill gaps and generates tailored curriculum tracks. Achieved a Top 10 finish at Ingenious Hackathon 7.0 (Team 'Mission ImCodeable').",
    tech: ["React", "Spring Boot", "FastAPI", "Scikit-learn", "LLM"],
    github: "https://github.com/Vraj-Priyadarshi/carrer_sarthi",
    updated: "January 2026"
  },
  {
    name: "Sleep Disorder Classification",
    description: "Multi-class machine learning classification models predicting sleep health disorders.",
    details: "A comprehensive multi-class model predicting sleep health conditions and disorders with 91.5% accuracy. Built using biometric and health sleep dataset trends, evaluated across comprehensive feature selections (XGBoost, TensorFlow, and Scikit-learn).",
    tech: ["Python", "Scikit-learn", "XGBoost", "TensorFlow"],
    github: "https://github.com/Vraj-Priyadarshi/sleep-order-disorder",
    updated: "March 2026"
  },
  {
    name: "Authentication System",
    description: "Full-stack anonymous secret sharing application using Google OAuth.",
    details: "Features robust security with bcrypt password hashing, Passport.js authentication (Local & Google OAuth strategies), Express session management, React frontend views, and persistent storage in a PostgreSQL database.",
    tech: ["Node.js", "Express.js", "React", "Passport.js", "PostgreSQL"],
    github: "https://github.com/Vraj-Priyadarshi/secrets_authentication_project",
    updated: "March 2026"
  },
  {
    name: "Breach Hackathon Project",
    description: "First-place winning electric mobility and EV charging network application.",
    details: "Developed a functional multi-page EV vehicle rental system and charging station dashboard. Won 1st Place at Breach 2026 FinTech Hackathon among 700+ participants.",
    tech: ["HTML", "CSS", "JavaScript", "EV APIs"],
    github: "https://github.com/Vraj-Priyadarshi/breach_hackathon",
    updated: "March 2025"
  },
  {
    name: "Python Games Collection",
    description: "Mini-games collection: Guess State, Turtle Crossing, Pong, Snake, Blackjack.",
    tech: ["Python", "Turtle", "Pygame", "Tkinter"],
    isCollection: true,
  },
];

function ImageCarousel({ images, placeholder }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  
  const prev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, idx) => (
          <img 
            key={idx} 
            src={img} 
            alt={`Screenshot ${idx + 1}`} 
            className="carousel-image" 
            data-replace={placeholder ? "project-hero" : undefined}
          />
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button className="carousel-btn left" onClick={prev} aria-label="Previous image"><FaChevronLeft /></button>
          <button className="carousel-btn right" onClick={next} aria-label="Next image"><FaChevronRight /></button>
          <div className="carousel-dots">
            {images.map((_, idx) => (
              <span key={idx} className={`dot ${idx === currentIndex ? 'active' : ''}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggle = (i) => {
    setExpandedIndex(expandedIndex === i ? null : i);
  };

  const handleKeyDown = (e, i) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(i);
    }
  };

  return (
    <section id="projects" className="projects-section">

      
      <div className="section-header">
        <h2 className="glow-text">My Projects</h2>
      </div>
      <div className="projects-grid">
        {projectsData.map((p, i) => {
          const isExpanded = expandedIndex === i;

          if (p.isCollection && isExpanded) {
            return (
              <div 
                key={i} 
                className="project-card expanded python-collection hud-panel"
                tabIndex={0}
                onKeyDown={(e) => handleKeyDown(e, i)}
              >
                <span className="hud-bracket tl"></span>
                <span className="hud-bracket tr"></span>
                <span className="hud-bracket bl"></span>
                <span className="hud-bracket br"></span>

                <button 
                  className="close-btn" 
                  onClick={() => toggle(i)}
                  aria-label="Close project card"
                >
                  <FaTimes />
                </button>
                <h3 className="mono-readout">DATA ▸ {p.name.toUpperCase()}</h3>
                <p>{p.description}</p>
                <div className="collection-grid">
                  {pythonGames.map((game, idx) => (
                    <div key={idx} className="sub-project-card hud-panel">
                      <span className="hud-bracket tl"></span>
                      <span className="hud-bracket tr"></span>
                      <span className="hud-bracket bl"></span>
                      <span className="hud-bracket br"></span>

                      <h4>{game.name}</h4>
                      <p>{game.description}</p>
                      <div className="project-tech">
                        {game.tech.map((t, j) => (
                          <span key={j} className="tech-tag mono-readout">{t.toUpperCase()}</span>
                        ))}
                      </div>
                      <div className="project-links">
                        <a href={game.github} target="_blank" rel="noopener noreferrer" aria-label="View Source on GitHub">
                          <FaGithub />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          const hasImages = p.images && p.images.length > 0;
          const isShowcase = hasImages || p.features;

          return (
            <div
              key={i}
              className={`project-card hud-panel ${isExpanded ? "expanded" : ""} ${isShowcase ? "product-showcase" : ""}`}
              onClick={() => toggle(i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              tabIndex={0}
              role="button"
              aria-expanded={isExpanded}
            >
              <span className="hud-bracket tl"></span>
              <span className="hud-bracket tr"></span>
              <span className="hud-bracket bl"></span>
              <span className="hud-bracket br"></span>

              {isExpanded && (
                <button 
                  className="close-btn" 
                  onClick={(e) => { e.stopPropagation(); toggle(i); }}
                  aria-label="Close project details"
                >
                  <FaTimes />
                </button>
              )}

              {isShowcase && hasImages && (
                <div className="project-hero-wrapper">
                  <ImageCarousel images={p.images} placeholder={p.placeholder} />
                  <div className="hero-hover-actions">
                    <a href={p.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      <FaGithub /> GitHub
                    </a>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              )}
              
              <div className="project-content">
                <div className="project-status-bar mono-readout">
                  <span>REPO ▸ PUBLIC</span>
                </div>

                <h3>{p.name}</h3>
                <p>{isExpanded ? p.details : p.description}</p>

                {isExpanded && p.features && (
                  <ul className="project-features">
                    {p.features.map((feature, fIdx) => (
                      <li key={fIdx}>{feature}</li>
                    ))}
                  </ul>
                )}

                <div className="project-tech">
                  {p.tech.map((t, j) => (
                    <span key={j} className="tech-tag mono-readout">{t.toUpperCase()}</span>
                  ))}
                </div>
                
                {isExpanded && p.github && (!isShowcase || !hasImages) && (
                  <div className="project-links" onClick={(e) => e.stopPropagation()}>
                    <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label="View Repository on GitHub">
                      <FaGithub /> Source Code
                    </a>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label="View Live Website">
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
