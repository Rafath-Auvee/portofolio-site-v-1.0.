import React from "react";
import "./style.css";
const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="heading-name">
        GET IN TOUCH <span>!</span>
      </h1>
      <p className="some-text">
        Whether you have an idea for a project or just want to chat, <br />
        feel free to shoot me an email!
      </p>
      <section class="buttons3">
        <div class="container3">
          <a href="rafath.auvee@gmail.com" class="btn btn-5">
            Say Hello!
          </a>
        </div>
      </section>
    </div>
  );
};
export default Contact;
