import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import './styles.css';

function Skills({ showAnimation }) {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
  ];

  return (
    <div className={`skills ${showAnimation ? 'fadeIn' : 'fadeOut'}`}>
      <h2>My Skills</h2>
      <div className="skills-icons">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
