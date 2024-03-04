// Project.js
import React from 'react';
import './Proj.css'; // Import the CSS file for Project component

const Proj = ({ image, title, description, link }) => {
  return (
    <div className="project-container">
      <div className="leftproj">
        <img src={image} alt={title} />
      </div>
      <div className="rightproj">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
};

export default Proj;