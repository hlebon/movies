import React from "react";
import Movie from "./Movie";
import Movies from "./Movies";
import CreateMovie from "./CreateMovie";
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

class App extends React.Component {
  state = {
    movies: movies
  };

  _onSubmit = movie => {
    const newMovie = {
      ...movie,
      genres: movie.categories,
      status: false,
      image: "https://i.ebayimg.com/images/g/z54AAOSw7p5ajZmL/s-l300.jpg"
    };
    this.setState(currentState => {
      return {
        movies: [newMovie, ...currentState.movies]
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <div style={{ width: "40%", margin: "auto" }}>
          <CreateMovie onSubmit={this._onSubmit} />
          <br />
          <Movies movies={this.state.movies} />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
