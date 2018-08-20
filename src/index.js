import React from "react";
import Movie from "./Movie";
import ReactDOM from "react-dom";

import "./styles.css";

const movie = {
  name: "Batman, el caballero de la noche",
  description: "Pelicula basada en el comic de batman",
  genres: ["accion"],
  status: true,
  image: "https://i.ebayimg.com/images/g/z54AAOSw7p5ajZmL/s-l300.jpg"
};

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Movie movie={movie} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
