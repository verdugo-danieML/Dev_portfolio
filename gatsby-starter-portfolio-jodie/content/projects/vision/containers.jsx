import React from "react";
import "./container_style.css"; // Import your styles

// Project component
const Project = ({name, description, demoLink, githubLink }) => (
  <div className="project-container">
    
    <h3>{name}</h3>
    <p>{description}</p>
    <div className="button-container">
      <a href={demoLink} target="_blank" rel="noopener noreferrer">
        <button className="demo-button">Demo</button>
      </a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <button className="github-button">GitHub</button>
      </a>
    </div>
  </div>
);

export default Project;