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
    genres: ["accion", "aventura"],
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
    filter: "All",
    searchText: ""
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

  _onDelete = movie => {
    this.setState(currentState => {
      return {
        movies: currentState.movies.filter(m => m.name !== movie.name)
      };
    });
  };

  _onToggle = movie => {
    const { movies } = this.state;
    const position = this.state.movies.indexOf(movie);
    if (position >= 0) {
      movies.splice(position, 1, { ...movie, status: true });
      this.setState({
        movies: movies
      });
    }
  };

  _onFilterList = filter => {
    this.setState({
      filter
    });
  };

  _onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleFilteredMovies = ({ filter, movies }) => {
    switch (filter.trim()) {
      case "Unseen":
        return movies.filter(m => !m.status);
      case "Seen":
        return movies.filter(m => m.status);
      default:
        return movies;
    }
  };

  render() {
    const movies = this.handleFilteredMovies(this.state).filter(v => {
      return v.name
        .trim()
        .toLowerCase()
        .includes(this.state.searchText.toLowerCase().trim());
    });
    return (
      <div className="App">
        <h1>My Movies</h1>
        <div className="main">
          <CreateMovie onSubmit={this._onSubmit} />
          <br />

          <Movies
            title="Movies"
            movies={movies}
            onCheck={this._onToggle}
            onDelete={this._onDelete}
          >
            <MultiCheckBox
              onClick={this._onFilterList}
              values={["Unseen", "Seen", "All"]}
              activeValues={[this.state.filter]}
              className="filterLink"
            />
            <input
              type="text"
              placeholder="Search..."
              name="searchText"
              value={this.state.searchText}
              onChange={this._onChange}
            />
          </Movies>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
