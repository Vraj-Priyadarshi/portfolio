import React from "react";
import { FaTrophy, FaMedal, FaCode, FaExternalLinkAlt } from "react-icons/fa";
import "./Achievements.css";

const hackathons = [
  {
    title: "1st Place",
    event: "Breach 2026 FinTech Hackathon",
    details: "Won first prize among 700+ participants for building a functional multi-page EV vehicle rental system and charging network dashboard.",
    icon: <FaTrophy className="gold-trophy" />,
    images: ["/breach_1.png", "/breach_2.png"]
  },
  {
    title: "Top 10 Finish",
    event: "Ingenious Hackathon 7.0",
    details: "Built Career Saarthi, an AI/ML career-intelligence layer with skill-gap prediction and personalized recommendations. Team 'Mission ImCodeable'.",
    icon: <FaMedal className="silver-medal" />
  },
  {
    title: "Shortlisted Twice (2024, 2025)",
    event: "Smart India Hackathon",
    details: "Selected at the national level from over 500+ student teams to present innovative software solutions.",
    icon: <FaMedal className="bronze-medal" />
  }
];

const otherAchievements = [
  {
    title: "200+ Problems Solved",
    platform: "LeetCode",
    desc: "Consistent competitive programming, honing algorithmic and data structure skills.",
    icon: <FaCode />,
    link: "https://leetcode.com/"
  }
];

function Achievements() {
  return (
    <section id="achievements" className="achievements-section">


      <div className="section-header">
        <h2 className="glow-text">Achievements & Awards</h2>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        {hackathons.map((hack, idx) => (
          <div key={idx} className={`timeline-node ${idx % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-dot">
              {hack.icon}
            </div>
            <div className="timeline-content hud-panel">
              <span className="hud-bracket tl"></span>
              <span className="hud-bracket tr"></span>
              <span className="hud-bracket bl"></span>
              <span className="hud-bracket br"></span>

              <div className="timeline-header">
                <h3>{hack.title}</h3>
                <h4>{hack.event}</h4>
              </div>

              <p>{hack.details}</p>

              {hack.images && (
                <div className="hackathon-gallery">
                  {hack.images.map((img, i) => (
                    <div key={i} className="hackathon-img-wrapper hud-hexagon">
                      <img src={img} alt={`${hack.event} snapshot ${i + 1}`} data-replace="hackathon-photo" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="other-achievements">
        <h3 className="mono-readout sub-marker">▸ ADDITIONAL_MILESTONES</h3>
        <div className="trophy-case">
          {otherAchievements.map((ach, idx) => (
            <div key={idx} className="trophy-item hud-panel">
              <span className="hud-bracket tl"></span>
              <span className="hud-bracket tr"></span>
              <span className="hud-bracket bl"></span>
              <span className="hud-bracket br"></span>

              <div className="trophy-icon">{ach.icon}</div>
              <div className="trophy-info">
                <h4>{ach.title}</h4>
                <h5>{ach.platform}</h5>
                <p>{ach.desc}</p>
                {ach.link && (
                  <a href={ach.link} target="_blank" rel="noopener noreferrer" className="trophy-link">
                    View Profile <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
