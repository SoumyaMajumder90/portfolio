// Projects.js
import React from 'react';
import './Projects.css'; // Import the CSS file for Projects component
import Project from './Proj'; // Adjust the path based on your file structure

const Projects = () => {
  const projectsData = [
    {
      title: 'Dino game',
      description: 'Game made using HTML, CSS and JS',
      image: require('./proj1.png'), 
      link: 'https://soumyamajumder90.github.io/Dino-game/main.html',
    },
    {
        title: 'Restaurant Website',
        description: 'Used React.js, material UI',
        image: require('./proj2.png'),
        link: 'https://soumyamajumder90.github.io/Restaurant-page/',
      },
      {
        title: 'Mern To-do-list',
        description: 'Used React.js, material UI',
        image: require('./proj3.png'),
        link: 'https://venerable-quokka-f58ea2.netlify.app/',
      },
      {
        title: 'Last-Minute-Note',
        description: 'Used React.js, material UI',
        image: require('./proj4.png'),
        link: 'https://last-minute-note.netlify.app/',
      }

    // Add more project data as needed
  ];

  return (
    <div className="projects-container">
        <h1>Some highlighted Projects</h1>
      {projectsData.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
    
    
  );
};

export default Projects;