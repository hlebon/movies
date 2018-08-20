import React from "react";
import Movie from "./Movie";
import Movies from "./Movies";
import ReactDOM from "react-dom";

import "./styles.css";

const movies = [
  {
    name: "Batman, el caballero de la noche",
    description: "Pelicula basada en el comic de batman",
    genres: ["accion"],
    status: true,
    image: "https://i.ebayimg.com/images/g/z54AAOSw7p5ajZmL/s-l300.jpg"
  },
  {
    name: "Spiderman",
    description: "Pelicula basada en el comic de spiderman",
    genres: ["accion"],
    status: false,
    image: "https://i.ebayimg.com/images/g/z54AAOSw7p5ajZmL/s-l300.jpg"
  },
  {
    name: "Superman, el regreso",
    description: "Pelicula basada en el comic de superman",
    genres: ["accion"],
    status: true,
    image: "https://i.ebayimg.com/images/g/z54AAOSw7p5ajZmL/s-l300.jpg"
  }
];

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Movies movies={movies} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
