import React, { useState, useEffect } from "react";
// import { Icon } from "@components/icons";
import "./style.css";
const Footer = () => {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    if (process.env.AUV !== "production") {
      return;
    }
    fetch(
      "https://api.github.com/repos/Rafath-Bin-Zafar-Auvee/portofolio-site-v-1.0."
    )
      .then((response) => response.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="foot">
      <a href="https://github.com/TrojanAttack/portofolio-site-v-1.0.">
        <div>Designed &amp; Built by Rafath Bin Zafar Auvee</div>
        {githubInfo.stars && githubInfo.forks && (
          <div className="github-stats">
            <span>
              {/* <Icon name="Star" /> */}
              <span>{githubInfo.stars.toLocaleString()}</span>
            </span>
            <span>
              {/* <Icon name="Fork" /> */}
              <span>{githubInfo.forks.toLocaleString()}</span>
            </span>
          </div>
        )}
      </a>
    </div>
  );
};

export default Footer;
