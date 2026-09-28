import React from "react";
import "./project.css";

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-heading">
        <span>03 / MY WORK</span>

        <h1>
          Things I've <i>built.</i>
        </h1>

        <p>
          A selection of projects created while learning, experimenting and
          exploring web development.
        </p>
      </div>

      <div className="projects-grid">
        <div className="project-card">
          <div className="project-image pet">
            <small>01</small>
          </div>

          <div className="project-content">
            <div className="project-title">
              <h2>PetTalk</h2>
              
            </div>

            <p>
              A friendly pet community website where users can explore and share
              pet-related content.
            </p>

            <div className="project-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="project-footer">
              <span>Web Project</span>
              
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image clone">
            <span></span>
            <small>02</small>
          </div>

          <div className="project-content">
            <div className="project-title">
              <h2>Clone Website</h2>
             
            </div>

            <p>
              A modern website clone created to practice responsive layouts and
              frontend design techniques.
            </p>

            <div className="project-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
            </div>

            <div className="project-footer">
              <span>Frontend</span>
             
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image bmi">
            <span></span>
            <small>03</small>
          </div>

          <div className="project-content">
            <div className="project-title">
              <h2>BMI Calculator</h2>
              
            </div>

            <p>
              A simple React application that calculates and displays body mass
              index clearly.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="project-footer">
              <span>React Project</span>
              
              
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image library">
            <span></span>
            <small>04</small>
          </div>

          <div className="project-content">
            <div className="project-title">
              <h2>Library Management</h2>
              
            </div>

            <p>
              A clean interface for adding, viewing and managing library book
              information.
            </p>

            <div className="project-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="project-footer">
              <span>Web Project</span>
              
            </div>
          </div>
        </div>
      </div>

      <div className="project-bottom">
        <span>MORE PROJECTS</span>
        <div></div>
        <span>04</span>
      </div>
    </section>
  );
};

export default Projects;
