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
            Abhirami<span className="dot">.</span>
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

          <div className="soft-circle"></div>

          <div className="image-wrapper">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQGHghc-vCUNrg/profile-displayphoto-crop_800_800/B56Z53vxPSK0AI-/0/1780125473938?e=1792022400&v=beta&t=6uS_Cxx-CVHXy83AjKi1euKfJSYGVAbygCvHrLFaEpc"
              alt="Abhirami"
            />
          </div>

          <div className="floating-card">

            <div className="code-icon">
              &lt;/&gt;
            </div>

            <div className="card-text">
              <strong>MERN Stack</strong>
              <small>Developer</small>
            </div>

          </div>

          <div className="decor heart">♡</div>
          <div className="decor star-one">✦</div>
          <div className="decor star-two">✦</div>

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