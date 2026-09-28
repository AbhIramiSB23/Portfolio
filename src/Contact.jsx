import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="shape one"></div>
      <div className="shape two"></div>
      <div className="shape three"></div>

      <div className="contact-title">
        <span>04 — Contact</span>

        <h1>
          Let's create
          <br />
          something <em>amazing.</em>
        </h1>

        <p>
          Have an idea, project, or opportunity? Send me a message and let's
          turn your ideas into something creative.
        </p>
      </div>

      <div className="contact-wrap">
        <div className="contact-left">
          <div className="tag">LET'S TALK</div>

          <h2>
            Have a project
            <br />
            in <span>mind?</span>
          </h2>

          <p className="left-text">
            I'm always excited to work on interesting projects, learn new things
            and connect with creative people.
          </p>

          <div className="info">
            <span className="icon">✉</span>

            <div>
              <small>Email</small>
              <p>abhirami@email.com</p>
            </div>
          </div>

          <div className="info">
            <span className="icon">⌖</span>

            <div>
              <small>Location</small>
              <p>Kerala, India</p>
            </div>
          </div>

          <div className="info">
            <span className="icon">↗</span>

            <div>
              <small>Social</small>
              <p>GitHub · LinkedIn</p>
            </div>
          </div>

          <div className="hello">
            <span className="dot"></span>
            Available for opportunities
          </div>
        </div>

        <form className="contact-form">
          <div className="form-head">
            <span>01</span>
            <h2>Send a message</h2>
          </div>

          <div className="row">
            <div className="field">
              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="field">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>

          <div className="field">
            <label>Subject</label>
            <input type="text" placeholder="What is this about?" />
          </div>

          <div className="field">
            <label>Your Message</label>
            <textarea placeholder="Tell me something..."></textarea>
          </div>

          <button type="submit">
            Send Message
            <span>↗</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
