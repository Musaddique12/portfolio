import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './styles.css';
import Navbar from './Navbar';
import {answers, listen} from '../Asistance'
import { Link } from 'react-router-dom';

function Project() {
  const projectSections = [
    {
      id: 'react-firebase',
      title: 'React and Firebase',
      projects: [
        {
          name: 'Quiz',
          description: 'This is a project using React and Firebase.',
          link:'https://quiz-ruby-delta.vercel.app',
          code:"https://github.com/Musaddique12/Quiz",
        },
        {
          name: 'Portfolio',
          description: 'Another project with React and Firebase.',
          link: 'https://github.com/yourusername/project2',
          code:"",
        },
        {
            name: 'Invoice Builder',
            description: 'Another project with React and Firebase.',
            link: 'https://invoice-builder-zeta.vercel.app',
            code:"https://github.com/Musaddique12/invoice-builder",
        },
      ],
    },
    {
      id: 'mern-stack',
      title: 'MERN Stack',
      projects: [
        {
          name: 'Ai Board',
          description: 'This is a project built with the MERN stack.',
          link: 'https://ai-page.vercel.app',
          code:"https://github.com/Musaddique12/Gemini",
          // api:"https://github.com/Musaddique12/Gemini",
        },
        {
          name: 'Vlog',
          description: 'Another MERN stack project.',
          link: '/coming',
          code:"/coming",
          // api:"",
        },
      ],
    },
    {
      id: 'dot-net',
      title: '.NET',
      projects: [
        {
          name: 'Coming Soon',
          description: 'This is a .NET project.',
          link: '/coming',
          code:"/coming",
        },
        {
          name: 'Coming Soon',
          description: 'Another .NET project.',
          link: '/coming',
          code:"/coming",
        },
      ],
    },
    {
      id: 'other-tech',
      title: 'Other Technologies',
      projects: [
        {
          name: 'Project 7',
          description: 'This is a project using other technologies.',
          link: '/coming',
          code:"/coming",
        },
        {
          name: 'Project 8',
          description: 'Another project using different tech.',
          link: '/coming',
          code:"/coming",
        },
      ],
    },
  ];

  return (
    <div className="projects">
        <Link to='/'><button class="back-button">Back TO Home Page</button></Link>  
      <h2>My Projects</h2>
      {projectSections.map((section, index) => (
        <div id={section.id} className={`project-section ${section.id}`} key={index}>
          <h3>{section.title}</h3>
          <div className="project-cards">
            {section.projects.map((project, idx) => (
              <div className="project-card" key={idx}>
              <h4>{project.name}</h4>
              <p>{project.description}</p>
              {project.link && (
                  <Link to={project.link} className="project-link" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> Visit Project
                  </Link>
              )}
              {project.code && (
                  <Link to={project.code} className="project-link"  rel="noopener noreferrer">
                      <FaGithub /> View Code
                  </Link>
              )}
              <button className="summary-button" onClick={() => { answers('summary ' + project.name.toLowerCase()) }}>Summary</button>
          </div>
          
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
