import React from 'react';
import { listen,wishMe } from '../Asistance';
// import profileImage from '../assets/profile.jpg'; // Import your image here

function Landing() {
  return (
    <div className="landing">
      <img src='' alt="Profile" className="profile-image" />
      <h1 className="title">Hi, I'm Musaddique, a Web Developer</h1>
      <button onClick={listen} className="assistant-btn">
        Meet My Assistant
      </button>
      <p className="scroll-text">Scroll down to explore more</p>
    </div>
  );
}

export default Landing;
