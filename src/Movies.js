import React, { Component } from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";

class Movies extends Component {
  myRef = React.createRef();
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.movies.length > prevProps.movies.length) {
      setTimeout(() => {
        this.myRef.current.classList.add("show");
      }, 10);
    }
  }
  render() {
    const { movies, displaySearch = false } = this.props;
    return (
      <div className="movies">
        <h2>Movies</h2>
        {displaySearch && (
          <input type="text" placeholder="Buscar pelicula..." />
        )}
        <ul className="fade swing">
          {movies.map(movie => {
            return (
              <li
                className="show"
                id={movie.name}
                key={movie.name}
                ref={this.myRef}
                style={{ backgroundColor: "gray" }}
              >
                <Movie movie={movie} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

Movies.defaultProps = {
  displaySearch: false
};

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  displaySearch: PropTypes.bool
};

export default Movies;
