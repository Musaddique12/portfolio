import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Projects({ showAnimation }) {
  const projectList = [
    { name: 'Project 1', description: 'This is project 1', link: '/project' },
    { name: 'Project 2', description: 'This is project 2', link: '/project' }
  ];

  return (
    <div className={`projects ${showAnimation ? 'fadeIn' : 'fadeOut'}`}>
      <h2>My Projects</h2>
      <div className="project-cards">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <Link to={project.link} className="project-link">
              <FaGithub /> View Project
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
