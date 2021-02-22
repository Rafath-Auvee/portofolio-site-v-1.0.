import React from "react";
import "./main.css";
import Typical from "react-typical";

const Main = () => {
  return (
    <div className="App">
      <div className="line"></div>
      <div className="footer-social-icons">
        <ul className="social-icons">
          <li>
            <a href="" className="social-icon">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="" className="social-icon">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="" className="social-icon">
              <i className="fa fa-rss"></i>
            </a>
          </li>
          <li>
            <a href="" className="social-icon">
              <i className="fa fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="" className="social-icon">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="" className="social-icon">
              <i className="fa fa-github"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="line21"></div>
      <div className="mail">rafath.auvee@gmail.com</div>

      <div className="App-header">
        <h3>
          Hello, my name is <br />
        </h3>
        <h1>Rafath Bin Zafar Auvee</h1>
        <p>
          I'm a{" "}
          <Typical
            loop={Infinity}
            wrapper="a"
            steps={[
              "Freelance Web Developer 💻",
              4000,
              "Competitive Programmer 🐱‍👤",
              4000,
              "Open Sourcer 📖",
              4000,
              "2D Animator 🎭",
              4000,
              "Game Developer 🎮",
              4000,
              "Explorer & Traveller 🧳",
              4000,
              "Kayaker 🛶",
              4000,
            ]}
          />
        </p>
        <section className="buttons4">
          <div className="container4">
            <a href="mailto: rafath.auvee@gmail.com" className="btn2 btn-4">
              Email Me!
            </a>
          </div>
        </section>
      </div>

      <div className="line"></div>
    </div>
  );
};

export default Main;
