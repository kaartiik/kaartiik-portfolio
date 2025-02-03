import React from "react";
import "./styles/skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHtml5,
   faReact,
   faCss3Alt,
   faJs,
   faGit,
   faNode
} from "@fortawesome/free-brands-svg-icons";
import {faMobile, faGamepad, faVrCardboard, faCloud, faBolt, faUniversalAccess} from "@fortawesome/free-solid-svg-icons";

const skills = [
  { name: "HTML", level: 95, icon: <FontAwesomeIcon icon={faHtml5} className="homepage-social-icon"/> },
  { name: "CSS", level: 95, icon: <FontAwesomeIcon icon={faCss3Alt} className="homepage-social-icon"/> },
  { name: "JavaScript", level: 90, icon: <FontAwesomeIcon icon={faJs} className="homepage-social-icon"/> },
  { name: "React", level: 95, icon: <FontAwesomeIcon icon={faReact} className="homepage-social-icon"/> },
  { name: "React Native", level: 95, icon: <FontAwesomeIcon icon={faMobile} className="homepage-social-icon"/> },
  { name: "NodeJS", level: 75, icon: <FontAwesomeIcon icon={faNode} className="homepage-social-icon"/> },
  { name: "Pixi.js", level: 95, icon: <FontAwesomeIcon icon={faGamepad} className="homepage-social-icon"/> },
  { name: "A-Frame", level: 85, icon: <FontAwesomeIcon icon={faVrCardboard} className="homepage-social-icon"/> },
  { name: "Git/Version Control", level: 75, icon: <FontAwesomeIcon icon={faGit} className="homepage-social-icon"/> },
  { name: "Microsoft Azure", level: 75, icon: <FontAwesomeIcon icon={faCloud} className="homepage-social-icon"/> },
  { name: "Performance Optimisation", level: 80, icon: <FontAwesomeIcon icon={faBolt} className="homepage-social-icon"/> },
  { name: "Accessibility & WCAG Compliance", level: 88, icon: <FontAwesomeIcon icon={faUniversalAccess} className="homepage-social-icon"/> },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill.icon}
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;