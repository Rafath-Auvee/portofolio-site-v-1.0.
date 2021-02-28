import React, { useEffect } from "react";
import "./main.css";
import Typical from "react-typical";

import AOS from "aos";
import "aos/dist/aos.css";
const Main = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
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

      <div
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-duration="1000"
        className="App-header"
      >
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
              2000,
              "Freelance Web Developer 💻",
              2000,
              "Competitive Programmer 🐱‍👤",
              2000,
              "Open Sourcer 📖",
              2000,
              "2D Animator 🎭",
              2000,
              "Game Developer 🎮",
              2000,
              "Explorer & Traveller 🧳",
              2000,
              "Kayaker 🛶",
              2000,
            ]}
          />
        </p>
        <section
          data-aos="fade"
          data-aos-delay="1000"
          data-aos-duration="900"
          className="buttons4"
        >
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
