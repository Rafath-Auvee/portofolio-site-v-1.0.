import React, { useEffect } from "react";
import { Card } from "./Card";
import movies from "./data";
import "./style.css";

import AOS from "aos";
import "aos/dist/aos.css";
function App2() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div
      data-aos="fade-right"
      data-aos-delay="200"
      data-aos-duration="1000"
      id="projects"
    >
      <div className="helt">
        <h1 className="tagLine">Some Things I’ve Built</h1>
        <div className="re"></div>

        <main data-aos="fade" data-aos-delay="1000" data-aos-duration="1000">
          {movies.map((movie) => (
            <Card classes="mr" key={`${movie.id}`}>
              <Card.Image src={movie.image} alt={movie.title} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.desc}</Card.Text>
                <div className="cht">
                  <Card.Button>{movie.ctaText}</Card.Button>
                  <Card.Button>{movie.btaText}</Card.Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </main>
      </div>
    </div>
  );
}

export default App2;
