import React, { useEffect } from "react";
import "./style.css";

import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <div className="start" id="about">
        <div
          data-aos="fade-down"
          data-aos-delay="500"
          data-aos-duration="500"
          className="container"
        >
          <div className="aboutme">
            <div className="headwithline">
              <h2
                data-aos="zoom-out"
                data-aos-delay="500"
                data-aos-duration="900"
                className="jel"
              >
                About Me
              </h2>
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
            <div
              data-aos="fade"
              data-aos-delay="700"
              data-aos-duration="1000"
              className="shape"
            >
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
