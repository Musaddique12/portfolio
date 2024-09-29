import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Projects({ showAnimation }) {
  const projectList = [
    { name: 'Project 1', description: 'This is project 1', link: '#' },
    { name: 'Project 2', description: 'This is project 2', link: '#' }
  ];

  return (
    <div className={`projects ${showAnimation ? 'fadeIn' : 'fadeOut'}`}>
      <h2>My Projects</h2>
      <div className="project-cards">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-link">
              <FaGithub /> View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
