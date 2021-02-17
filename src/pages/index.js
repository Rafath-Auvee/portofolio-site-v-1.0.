import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Main from "../components/MainPage";
import About from "../components/about";
import App2 from "../components/projects/main.js";
import Contact from "../components/contact/";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Main />
      <About />
      <App2 />
      <Contact />
    </>
  );
};

export default Home;
