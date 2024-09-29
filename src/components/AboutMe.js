import React from 'react';

function AboutMe({ showAnimation }) {
  return (
    <div className={`about-me ${showAnimation ? 'fadeIn' : 'fadeOut'}`}>
      <h2>About Me</h2>
      <p>I am a passionate web developer with a love for creating engaging and dynamic web applications. 
      My journey in web development has allowed me to explore various technologies and continuously improve my skills.</p>
    </div>
  );
}

export default AboutMe;
