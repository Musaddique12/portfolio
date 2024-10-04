import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './styles.css';
import Navbar from './Navbar';
import { answers, listen } from '../Asistance';  // Assuming answers function triggers speech
import { Link, useNavigate } from 'react-router-dom';

function Project() {
  const [speakingProject, setSpeakingProject] = useState(null); // Track the currently speaking project
  const navigate = useNavigate();

  const handleSummary = (projectName) => {
    if (speakingProject === projectName) {
      // If already speaking, stop the speech and reset
      window.speechSynthesis.cancel();
      setSpeakingProject(null);
    } else {
      // Trigger speech synthesis
      window.speechSynthesis.cancel();
      answers('summary ' + projectName.toLowerCase());
      setSpeakingProject(projectName); // Set the current speaking project
    }
  };

  const handleStopSpeechAndNavigate = () => {
    window.speechSynthesis.cancel();  // Stop speech synthesis when navigating
    setSpeakingProject(null);
  };

  const projectSections = [
    {
      id: 'react-firebase',
      title: 'React and Firebase',
      projects: [
        {
          name: 'Quiz',
          description: 'This is a project using React and Firebase.',
          link: 'https://quiz-ruby-delta.vercel.app',
          code: "https://github.com/Musaddique12/Quiz",
          exist:true,
        },
        {
          name: 'Portfolio',
          description: 'Another project with React and Firebase.',
          link: 'https://portfolio-ashy-five-85.vercel.app',
          code: "https://github.com/Musaddique12/portfolio",
          exist:true,
        },
        {
          name: 'Invoice Builder',
          description: 'Another project with React and Firebase.',
          link: 'https://invoice-builder-zeta.vercel.app',
          code: "https://github.com/Musaddique12/invoice-builder",
          exist:true,
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
          code: "https://github.com/Musaddique12/Gemini",
          exist:true,
        },
        {
          name: 'Vlog',
          description: 'Another MERN stack project.',
          link: '/coming',
          code: "/coming",
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
          code: "/coming",
        },
        {
          name: 'Coming Soon',
          description: 'Another .NET project.',
          link: '/coming',
          code: "/coming",
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
          code: "/coming",
        },
        {
          name: 'Project 8',
          description: 'Another project using different tech.',
          link: '/coming',
          code: "/coming",
        },
      ],
    },
  ];

  return (
    <div className="projects">
      <Link to="/"><button className="back-button">Back TO Home Page</button></Link>
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
                  <Link
                    to={project.link}
                    className="project-link"
                    rel="noopener noreferrer"
                    onClick={() => handleStopSpeechAndNavigate()}
                  >
                    <FaExternalLinkAlt /> Visit Project
                  </Link>
                )}
                {project.code && (
                  <Link
                    to={project.code}
                    className="project-link"
                    rel="noopener noreferrer"
                    onClick={() => handleStopSpeechAndNavigate()}
                  >
                    <FaGithub /> View Code
                  </Link>
                )}
               {project.exist && <button
                  className="summary-button"
                  onClick={() => handleSummary(project.name)}
                >
                  {speakingProject === project.name ? 'Stop' : 'Summary'}
                </button>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
