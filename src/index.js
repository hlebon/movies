import React from "react";
import ReactDOM from "react-dom";
import Movies from "./Movies";
import MultiCheckBox from "./MultiCheckBox";
import CreateMovie from "./CreateMovie";

import "./styles.css";

const movies = [
  {
    name: "Batman, el caballero de la noche",
    description: "Pelicula basada en el comic de batman",
    genres: ["accion"],
    status: false,
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
    status: false,
    image: "https://i.ebayimg.com/images/g/z54AAOSw7p5ajZmL/s-l300.jpg"
  }
];

class App extends React.Component {
  state = {
    movies: movies,
    moviesSeen: []
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

  _addToSeen1 = movie => {
    const { movies } = this.state;
    const position = this.state.movies.indexOf(movie);
    if (position >= 0) {
      movies.splice(position, 1, { ...movie, status: true });
      this.setState({
        movies: movies
      });
    }
  };

  _addToSeen = movie => {
    this.setState(currentApp => ({
      movies: currentApp.movies.filter(m => m.name !== movie.name),
      moviesSeen: [
        ...currentApp.moviesSeen,
        ...currentApp.movies.reduce((acc, current) => {
          if (current.name === movie.name) {
            acc.push({
              ...current,
              status: true
            });
          }
          return acc;
        }, [])
      ]
    }));
  };

  _removeFromSeen = movie => {
    this.setState(currentApp => ({
      moviesSeen: currentApp.moviesSeen.filter(m => m.name !== movie.name),
      movies: [
        ...currentApp.movies,
        ...currentApp.moviesSeen.reduce((acc, current) => {
          if (current.name === movie.name) {
            acc.push({
              ...current,
              status: false
            });
          }
          return acc;
        }, [])
      ]
    }));
  };

  render() {
    console.log("movieSeen", this.state.moviesSeen);
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <div className="main">
          <CreateMovie onSubmit={this._onSubmit} />
          <br />
          <Movies
            title="Seen"
            movies={this.state.moviesSeen}
            onCheck={this._removeFromSeen}
          >
            <MultiCheckBox
              values={["Seen", "Unseen", "All"]}
              className="filterLink"
            />
          </Movies>
          <br />
          <Movies
            title="Movies"
            movies={this.state.movies}
            onCheck={this._addToSeen1}
          >
            <MultiCheckBox
              values={["Unseen", "Seen", "All"]}
              className="filterLink"
            />
            <input type="text" />
          </Movies>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
