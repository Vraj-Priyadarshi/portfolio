import React from "react";
import "./Extracurricular.css";

const extracurriculars = [
  {
    role: "Publicity Core Member",
    organization: "Encode (Coding Club, PDEU)",
    description: "Organized and promoted hackathons, coding contests, and technical lectures to enhance student participation."
  },
  {
    role: "Editor",
    organization: "CSE Newsletter (PDEU)",
    description: "Curated and refined technical articles, research highlights, and departmental updates."
  }
];

function Extracurricular() {
  return (
    <section id="extracurricular" className="extracurricular-section">

      
      <div className="section-header">
        <h2 className="glow-text">Extracurricular Activities</h2>
      </div>

      <div className="extracurricular-grid">
        {extracurriculars.map((activity, idx) => (
          <div key={idx} className="extracurricular-card hud-panel" tabIndex={0}>
            <span className="hud-bracket tl"></span>
            <span className="hud-bracket tr"></span>
            <span className="hud-bracket bl"></span>
            <span className="hud-bracket br"></span>

            <div className="activity-info">
              <h3>{activity.role}</h3>
              <h4>{activity.organization}</h4>
              <p>{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Extracurricular;
