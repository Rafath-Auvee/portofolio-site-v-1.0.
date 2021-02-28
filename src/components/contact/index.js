import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./style.css";
const Contact = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div
      data-aos="fade"
      data-aos-delay="200"
      data-aos-duration="500"
      className="contact-page"
      id="contact"
    >
      <h1 className="heading-name">
        GET IN TOUCH <span>!</span>
      </h1>
      <p
        // data-aos="fade-left"
        // data-aos-delay="200"
        // data-aos-duration="500"
        className="some-text"
      >
        Whether you have an idea for a project or just want to chat, <br />
        feel free to shoot me an email!
      </p>
      <section
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-duration="500"
        class="buttons3"
      >
        <div class="container3">
          <a href="mailto: rafath.auvee@gmail.com" class="btn btn-5">
            Say Hello!
          </a>
        </div>
      </section>
    </div>
  );
};
export default Contact;
