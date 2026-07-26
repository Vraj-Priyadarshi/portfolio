import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import "./Education.css";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Engineering",
    institution: "Pandit Deendayal Energy University (PDEU), Gujarat, India",
    duration: "Aug 2023 - Jul 2027",
    description: "B.Tech in Computer Engineering with focus on Software Development, AI agents, and Machine Learning. Current CGPA: 9.53 (till 6th semester). No academic backlogs."
  },
  {
    degree: "Higher Secondary (12th) - GSEB Board",
    institution: "Ananya Vidhyalaya",
    duration: "Completed 2023",
    description: "Completed Higher Secondary in Science stream with GSEB board. Grade: 70.77%."
  },
  {
    degree: "Secondary School (10th) - GSEB Board",
    institution: "Lotus English Medium School",
    duration: "Completed 2020",
    description: "Completed Secondary School Certificate with GSEB board. Grade: 80.5%."
  }
];

function Education() {
  return (
    <section id="education" className="education-section">

      <div className="section-header">
        <h2 className="glow-text">My Education</h2>
      </div>
      
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item hud-panel">
            <span className="hud-bracket tl"></span>
            <span className="hud-bracket tr"></span>
            <span className="hud-bracket bl"></span>
            <span className="hud-bracket br"></span>

            <div className="education-status-bar mono-readout">
              <span>[ LOG ▸ 0{index + 1} ]</span>
              <span>[ {edu.duration.toUpperCase()} ]</span>
            </div>

            <div className="education-details">
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
