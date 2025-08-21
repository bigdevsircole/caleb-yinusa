import React from 'react';
import './Expertise.css';

const Expertise = () => {
  return (
    <div className="expertise-page">
      <h1>My Expertise</h1>
      <div className="expertise-categories">
        {/* Fullstack Development */}
        <div className="category">
          <h2>Frontend Development</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            {/* <li>Tailwind CSS</li> */}
            {/* <li>Next.js</li> */}
            {/* <li>Node.js</li> */}
            <li>Git & GitHub</li>
          </ul>
        </div>

        {/* Design */}
        <div className="category">
          <h2>Design</h2>
          <ul>
            <li>Photoshop</li>
            <li>CorelDraw</li>
            <li>Figma</li>
            <li>Canva</li>
          </ul>
        </div>

        {/* Digital Marketing */}
        <div className="category">
          <h2>Digital Marketing</h2>
          <ul>
            <li>Email Marketing</li>
            <li>Social Media Marketing</li>
            <li>Search Engine Optimization</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Expertise;