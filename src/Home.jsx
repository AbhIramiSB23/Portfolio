import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <main className="hero">
        <div className="hero-content">
          <div className="available">
            <span></span>
            Available for opportunities
          </div>

          <p className="hello">HELLO, I'M</p>

          <h1>
            Abhirami
            <span className="dot">.</span>
          </h1>

          <h2>
            Full Stack <span>Developer</span>
          </h2>

          <p className="hero-description">
            I build clean, responsive and user-friendly web applications using
            modern technologies. I enjoy turning ideas into simple and
            meaningful digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="/projects" className="primary-btn">
              View Projects
              <span>→</span>
            </a>

            <a href="/contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="socials">
            <a href="#">GitHub ↗</a>
            <a href="#">LinkedIn ↗</a>
            <a href="#">Instagram ↗</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="circle-bg"></div>

          <div className="image-card">
            <img
              src="https://t4.ftcdn.net/jpg/12/55/90/89/360_F_1255908978_1z8mXc07iex390GVwHJ4gUYZ6iu4NZzM.jpg"
              alt="Abhirami"
            />
          </div>

          <div className="floating-card">
            <div className="code-icon">&lt;/&gt;</div>

            <div>
              <strong>MERN Stack</strong>
              <small>Developer</small>
            </div>
          </div>

          <div className="star star-one">✦</div>
          <div className="star star-two">✦</div>
          <div className="heart">♡</div>
        </div>
      </main>

      <section className="tech-section">
        <p>TECHNOLOGIES I WORK WITH</p>

        <div className="tech-list">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
        </div>
      </section>
    </div>
  );
}

export default Home;
