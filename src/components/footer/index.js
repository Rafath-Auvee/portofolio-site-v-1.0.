import React, { useEffect } from "react";
import "./style.css";

import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="Main-Footer">
      <a href="https://github.com/TrojanAttack/portofolio-site-v-1.0.">
        <div className="Footer-Text">
          Designed &amp; Built by Rafath Bin Zafar Auvee
        </div>
      </a>
    </div>
  );
};

export default Footer;
