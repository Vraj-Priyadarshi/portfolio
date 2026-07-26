// src/About.jsx
import React from "react";
import "./About.css";
import { FaDownload } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about-section">

      <div className="about-layout-container">
        
        {/* TOP SECTION: Image + Intro */}
        <div className="about-top">
          <div className="profile-pic-wrapper">
            <div className="scanning-ring"></div>
            <div className="profile-pic hud-hexagon">
              <img
                src="/profile_photo.jpeg"
                alt="Vraj Priyadarshi"
              />
            </div>
          </div>

          <div className="about-intro hud-panel">
            <span className="hud-bracket tl"></span>
            <span className="hud-bracket tr"></span>
            <span className="hud-bracket bl"></span>
            <span className="hud-bracket br"></span>
            
            <h2 className="glow-text greeting">Initialization Complete.</h2>
            <p className="intro-text">
              I'm Vraj Priyadarshi, a final-year Computer Science Engineering student at PDEU, with a strong focus on <strong className="highlight-cyan">Agentic AI, LLM Evaluation, and Multi-Agent Systems</strong>, alongside foundational interests in Machine Learning, Deep Learning, and competitive programming.
            </p>
            <p className="intro-text">
              I recently completed a Software Engineering internship at <strong className="highlight-white">Accenture</strong>, where I designed an Agent Evaluation Framework and built AgentArena, a platform benchmarking multi-agent architectures using LLM-as-a-Judge and trajectory evaluation.
            </p>
          </div>
        </div>

        {/* BOTTOM SECTION: Details + Education */}
        <div className="about-bottom">
          <div className="about-details hud-panel">
            <span className="hud-bracket tl"></span>
            <span className="hud-bracket tr"></span>
            <span className="hud-bracket bl"></span>
            <span className="hud-bracket br"></span>
            
            <h3 className="mono-readout subtitle">▸ SYSTEM_CAPABILITIES</h3>
            <p>
              My project work spans the agentic AI stack — from <strong className="highlight-white">AgentForge</strong>, a framework-agnostic evaluation platform, to <strong className="highlight-white">Spec2Code AI</strong>, a 6-agent LangGraph system. I've also built NLP systems like <strong className="highlight-white">SemSim</strong>, a Quora duplicate-question detector.
            </p>
            <p>
              I have hands-on experience with Python, C++, and Java. My full-stack toolkit includes React, FastAPI, Node.js, Express, PostgreSQL, and MongoDB. I'm always looking to connect with people working on agent orchestration, LLM evaluation, or applied AI systems!
            </p>
          </div>

          <div className="about-sidebar">
            <div className="education-mini hud-panel">
              <span className="hud-bracket tl"></span>
              <span className="hud-bracket tr"></span>
              <span className="hud-bracket bl"></span>
              <span className="hud-bracket br"></span>
              
              <h3 className="glow-text">Education</h3>
              <p>
                <strong>B.Tech in Computer Engineering</strong><br/>
                Pandit Deendayal Energy University (PDEU)<br/>
                <span className="duration-text">Aug 2023 - Jul 2027</span><br/>
                CGPA: 9.53 (till 6th semester)
              </p>
            </div>

            <div className="resume-btn-container">
              <a 
                href="https://drive.google.com/file/d/1q5IxxwNKbd3HYELtW7ZQMLaJ_7MdbBcp/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn hud-btn mono-readout" 
              >
                <FaDownload /> [ EXECUTE ▸ VIEW_RESUME ]
              </a>
            </div>
          </div>
        </div>

      </div>
      
      <div className="about-quote hud-panel">
        <span className="hud-bracket tl"></span>
        <span className="hud-bracket tr"></span>
        <span className="hud-bracket bl"></span>
        <span className="hud-bracket br"></span>
        <q>
          Code is like humor. When you have to explain it, it’s bad. – Cory House
        </q>
      </div>
    </section>
  );
}

export default About;
