import React, { useState } from "react";
import "./Skills.css";

const skillsData = [
  {
    title: "AI / ML Libraries",
    icons: [
      { label: "NumPy", img: "/assets/skills/icons8-numpy.svg" },
      { label: "Pandas", img: "/assets/skills/icons8-pandas.svg" },
      { label: "Matplotlib", img: "/assets/skills/icons8-matplotlib.svg" },
      { label: "Seaborn", img: "/assets/skills/seaborn-2.webp" },
      { label: "Scikit-learn", img: "/assets/skills/scikit-learn.svg" },
      { label: "TensorFlow", img: "/assets/skills/tensorflow-tf.svg" },
      { label: "PyTorch", img: "/assets/skills/pytorch.svg" },
      { label: "Keras", img: "/assets/skills/keras.svg" },
      { label: "Transformers", img: "/assets/skills/transformer.webp" },
      { label: "Sentence-Transformers", img: "/assets/skills/transformer.webp" },
      { label: "LangChain", img: "/assets/skills/langchain-color.svg" },
      { label: "LangGraph", img: "/assets/skills/langgraph-color.svg" },
      { label: "LangSmith", img: "/assets/skills/langsmith-color.svg" },
      { label: "Ollama", img: "/assets/skills/ollama.svg" },
      { label: "RAG", img: "/assets/skills/Rag--Streamline-Carbon.svg" },
      { label: "Prompt Engineering", img: "/assets/skills/prompt_enginnering.webp" },
      { label: "Agent Orchestration", img: "/assets/skills/agent_orchestration.svg" },
      { label: "Multi-Agent Systems", img: "/assets/skills/multiagent.webp" },
      { label: "LLM Evaluation", img: "/assets/skills/llm-text.svg" },
      { label: "Agent Benchmarking", img: "" },
      { label: "Agent Observability", img: "" }
    ]
  },
  {
    title: "Web Development",
    icons: [
      { label: "React", img: "/assets/skills/icons8-react-js.svg" },
      { label: "Node.js", img: "/assets/skills/icons8-nodejs.svg" },
      { label: "Express.js", img: "/assets/skills/icons8-express-js.svg" },
      { label: "Bootstrap", img: "/assets/skills/icons8-bootstrap.svg" },
      { label: "REST APIs", img: "/assets/skills/Rest-API_logo.webp" },
      { label: "FastAPI", img: "/assets/skills/FastAPI.svg" },
      { label: "Streamlit", img: "/assets/skills/Streamlit.svg" },
      { label: "Uvicorn", img: "/assets/skills/uvicorn.svg" }
    ]
  },
  {
    title: "Programming Languages",
    icons: [
      { label: "Python", img: "/assets/skills/icons8-python.svg" },
      { label: "JavaScript", img: "/assets/skills/icons8-javascript.svg" },
      { label: "Java", img: "/assets/skills/icons8-java.svg" },
      { label: "C", img: "/assets/skills/icons8-c.svg" },
      { label: "C++", img: "/assets/skills/icons8-c (1).svg" },
      { label: "HTML", img: "/assets/skills/icons8-html.svg" },
      { label: "CSS", img: "/assets/skills/icons8-css.svg" }
    ]
  },
  {
    title: "Tools & Platforms",
    icons: [
      { label: "Git", img: "/assets/skills/icons8-git.svg" },
      { label: "GitHub", img: "/assets/skills/icons8-github.svg" },
      { label: "VS Code", img: "/assets/skills/icons8-vs-code.svg" },
      { label: "PostgreSQL", img: "/assets/skills/icons8-postgres.svg" },
      { label: "MongoDB", img: "/assets/skills/icons8-mongodb.svg" }
    ]
  }
];

function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const [failedImages, setFailedImages] = useState({});

  const handleImageError = (label) => {
    setFailedImages((prev) => ({ ...prev, [label]: true }));
  };

  const renderFallbackSvg = (groupTitle) => {
    return (
      <img 
        src="/assets/skills/artificial-intelligence-ai-icon.svg" 
        alt="AI Icon Fallback" 
        className="skill-logo fallback-logo" 
        style={{ filter: "drop-shadow(0 0 5px var(--color-accent-cyan))" }}
      />
    );
  };

  const currentGroup = skillsData[activeTab];

  return (
    <section id="skills" className="skills-section">

      <div className="section-header">
        <h2 className="glow-text">My Skills</h2>
      </div>

      {/* Tab Buttons */}
      <div className="skills-tabs" role="tablist">
        {skillsData.map((group, index) => (
          <button
            key={index}
            className={`tab-button mono-readout ${index === activeTab ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setActiveTab(index); }}
            tabIndex={0}
            role="tab"
            aria-selected={index === activeTab}
          >
            {group.title.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Active Skill Group */}
      <div className="skill-group">
        <h3 className="mono-readout">GROUP ▸ {currentGroup.title.toUpperCase()}</h3>
        <div className="skill-icons">
          {currentGroup.icons.map((skill, idx) => (
            <div key={`${activeTab}-${idx}`} className="skill-card hud-panel" tabIndex={0} style={{ animationDelay: `${idx * 0.05}s` }}>
              <span className="hud-bracket tl"></span>
              <span className="hud-bracket tr"></span>
              <span className="hud-bracket bl"></span>
              <span className="hud-bracket br"></span>
              
              {failedImages[skill.label] || !skill.img ? (
                renderFallbackSvg(currentGroup.title)
              ) : (
                <img
                  src={skill.img}
                  alt={`${skill.label} brand logo`}
                  className="skill-logo"
                  onError={() => handleImageError(skill.label)}
                />
              )}
              <span className="skill-name">{skill.label}</span>
              <div className="proficiency-bar" title="Proficiency Level">
                <div className="prof-fill"></div>
                <div className="prof-fill"></div>
                <div className="prof-fill"></div>
                <div className="prof-fill"></div>
                <div className="prof-empty"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
