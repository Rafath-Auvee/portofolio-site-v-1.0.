import React from "react";
import "./main.css";
import Typical from "react-typical";

const Main = () => {
  return (
    <div className="App">
      <div className="line"></div>
      <div className="line21"></div>
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
        <section class="buttons4">
          <div class="container4">
            <a href="mailto: rafath.auvee@gmail.com" class="btn2 btn-4">
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
