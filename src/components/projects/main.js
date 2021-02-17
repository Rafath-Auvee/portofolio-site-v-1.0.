import React from "react";
import { Card } from "./Card";
import movies from "./data";
import "./style.css";
function App2() {
  return (
    <div className="helt">
      <h1 className="tagLine">Some Things I’ve Built</h1>
      <div className="re"></div>

      <main>
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
  );
}

export default App2;
