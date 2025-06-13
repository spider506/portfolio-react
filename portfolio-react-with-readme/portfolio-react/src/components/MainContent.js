import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <section>
        <h2>About Me</h2>
        <p>
          I’m a passionate Computer Science graduate from Raghu Engineering College, class of 2025.
          I specialize in building scalable, secure web apps and backend systems.
        </p>
      </section>

      <section>
        <h2>Experience</h2>
        <p><strong>Intern – UIDAI</strong><br />
        Worked on secure data integration and automation scripts for backend validation.</p>
      </section>

      <section>
        <h2>Projects</h2>
        <p><strong>1. WAF using ModSecurity & Nginx</strong><br />
          Implemented a WAF to block attacks like SQLi and XSS, integrated with Nginx reverse proxy.</p>

        <p><strong>2. SAP Beginner Automation</strong><br />
          Built a beginner-level SAP data mapping demo using free modules for educational purposes.</p>
      </section>
    </main>
  );
};

export default MainContent;