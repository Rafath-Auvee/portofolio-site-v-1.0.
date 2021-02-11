import React from "react";
import "./main.css";
import Typical from "react-typical";

const Main = () => {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Hi, I'm Rafath Bin Zafar Auvee</h1>
        <p>
          I'm a{" "}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "Freelance Web Developer 💻",
              1000,
              "Competitive Programmer ⌨",
              1000,
              "Open Sourcer 📖",
              1000,
              "2D Animator 🎭",
              1000,
              "Game Developer 🕹",
              1000,
              "Explorer & Traveller 🧳",
              1000,
              "Kayaker 🛶",
              1000,
            ]}
          />
        </p>
      </div>
    </div>
  );
};

export default Main;
