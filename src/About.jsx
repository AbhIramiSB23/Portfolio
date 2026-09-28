import React from "react";
import "./about.css";

function About() {
  return (
    <section className="about">
      <div className="about-label">
        <span>01</span>
        ABOUT ME
      </div>

      <div className="about-container">
        <div className="about-intro">
          <p className="about-small">A LITTLE ABOUT ME</p>

          <h1>
            Building ideas
            <br />
            into <span>digital</span>
            <br />
            experiences.
          </h1>

          <p className="about-text">
            I'm Abhirami, a Computer Engineering graduate and aspiring Full
            Stack Developer. I enjoy creating clean, responsive and
            user-friendly web applications while continuously learning new
            technologies.
          </p>

          <a href="/contact" className="about-button">
            Let's Connect
            <span>→</span>
          </a>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <div className="card-icon">🎓</div>

            <div>
              <small>EDUCATION</small>
              <h3>Computer Engineering</h3>
              <p>Diploma in Computer Engineering</p>
            </div>
          </div>

          <div className="about-card">
            <div className="card-icon">⌘</div>

            <div>
              <small>INTERESTS</small>
              <h3>Web Development</h3>
              <p>UI/UX · Modern Technologies</p>
            </div>
          </div>

          <div className="about-card">
            <div className="card-icon">♡</div>

            <div>
              <small>PASSION</small>
              <h3>Creative Websites</h3>
              <p>Designing meaningful experiences</p>
            </div>
          </div>

          <div className="about-card">
            <div className="card-icon purple">✦</div>

            <div>
              <small>GOAL</small>
              <h3>Full Stack Developer</h3>
              <p>Learning · Building · Growing</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-bottom">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React</span>
        <span>Node.js</span>
        <span>MongoDB</span>
      </div>
    </section>
  );
}

export default About;
