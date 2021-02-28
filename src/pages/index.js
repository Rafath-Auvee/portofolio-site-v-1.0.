import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Main from "../components/MainPage";
import About from "../components/about";
import App2 from "../components/projects/main.js";
import Contact from "../components/contact/";
import Footer from "../components/footer";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    AOS.init({ duration: 9000 });
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* <div data-aos="fade-in"> */}
      <Main />
      {/* </div> */}

      <About />
      <App2 />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
