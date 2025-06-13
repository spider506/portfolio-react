import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img src="/your-photo.jpg" alt="Shaik Feroz Ali" className="profile-pic" />
      <h2>Shaik Feroz Ali</h2>
      <p>Aspiring Full-Stack Developer</p>

      <div className="info">
        <h3>Contact</h3>
        <p>Email: ferozalishaik786@gmail.com</p>
        <p>Phone: 7032525488</p>
        <p>Location: Visakhapatnam</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/shaik-feroz-ali-b18822240" target="_blank" rel="noreferrer">Profile</a></p>
      </div>

      <div className="info">
        <h3>Skills</h3>
        <ul>
          <li>HTML, CSS, JS</li>
          <li>React.js, Python</li>
          <li>MySQL, Git</li>
          <li>ModSecurity, Nginx</li>
        </ul>
      </div>

      <div className="info">
        <h3>Education</h3>
        <p>B.Tech, CSE, Raghu Engineering College<br />CGPA: 7.0<br />Graduating 2025</p>
      </div>
    </aside>
  );
};

export default Sidebar;