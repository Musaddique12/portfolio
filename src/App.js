import React, { useEffect, useState } from 'react';
import './components/styles.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Project from './components/Project';
import Contact from './components/Contact';
import Skills from './components/Skill';
import { listen, wishMe } from './Asistance';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ComingSoon from './components/ComingSoon';

function App() {
  useEffect(() => {
    wishMe();
  }, []);

  const [showButton, setShowButton] = useState(false);
  const [showAboutAnimation, setShowAboutAnimation] = useState(false);
  const [showSkillsAnimation, setShowSkillsAnimation] = useState(false);
  const [showProjectsAnimation, setShowProjectsAnimation] = useState(false);
  const [showContactAnimation, setShowContactAnimation] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }

    const aboutSection = document.querySelector('.about-me');
    const skillsSection = document.querySelector('.skills');
    const projectsSection = document.querySelector('.projects');
    const contactSection = document.querySelector('.contact');

    if (aboutSection) {
      setShowAboutAnimation(aboutSection.getBoundingClientRect().top >= 0 && aboutSection.getBoundingClientRect().bottom <= (window.innerHeight));
    }

    if (skillsSection) {
      setShowSkillsAnimation(skillsSection.getBoundingClientRect().top >= 0 && skillsSection.getBoundingClientRect().bottom <= window.innerHeight);
    }

    if (projectsSection) {
      setShowProjectsAnimation(projectsSection.getBoundingClientRect().top >= 0 && projectsSection.getBoundingClientRect().bottom <= window.innerHeight);
    }

    if (contactSection) {
      setShowContactAnimation(contactSection.getBoundingClientRect().top >= 0 && contactSection.getBoundingClientRect().bottom <= window.innerHeight);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define your routes here
  const routes = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          {showButton && (
            <button id="assistant-button" onClick={listen}>
              Meet My Assistant
            </button>
          )}
          <Landing />
          <AboutMe showAnimation={showAboutAnimation} />
          <Skills showAnimation={showSkillsAnimation} />
          <Projects showAnimation={showProjectsAnimation} />
          <Contact showAnimation={showContactAnimation} />
        </>
      ),
    },
    {
      path: '/project',
      element: (
      <>
       <button id="assistant-button" onClick={listen}>
              Meet My Assistant
            </button>
      <Project />
      </>),
    },
    {path:'/coming',Component:ComingSoon}
  ]);

  return (
    <RouterProvider router={routes} />
  );
}

export default App;
