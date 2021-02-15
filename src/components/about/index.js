import React from "react";
import "./style.css";

const About = () => {
  return (
    <>
      <div className="start">
        <div className="container">
          <div className="aboutme">
            <div className="headwithline">
              <h2>About Me</h2>
              <div className="bre"></div>
            </div>
            <p className="para">
              Hello! My name is Rafath Bin Zafar Auvee. An enthusiastic,
              self-taught, motivated programmer I am studying Bachelor of
              Science & Engineering in Computer Science and Engineering at
              Bangladesh Army University of Science and Technology.
              <br /> For me, computer programming is love, passion, exploration
              & much more. Basically, I do a lot of self-made Arduino projects
              and solve problems in online Judge.
            </p>
          </div>
          <div className="hex">
            <div className="shape">
              <img
                src="https://andrafath.files.wordpress.com/2021/02/20287127_880074228823588_6235573847450463520_o.jpg"
                alt="Rafath Bin Zafar Auvee"
              />
              <div className="content"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
