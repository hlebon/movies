import React, { Component } from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";
import MultiCheckBox from "./MultiCheckBox";

class Movies extends Component {
  render() {
    const { movies, displaySearch = false } = this.props;
    return (
      <div className="movies">
        <h2>Movies</h2>
        {displaySearch && (
          <input type="text" placeholder="Buscar pelicula..." />
        )}
        <div>
          <MultiCheckBox className="filterLink" />
        </div>
        <ul>
          {movies.map(movie => {
            return (
              <li
                key={movie.name}
                style={{
                  border: "1px solid gray",
                  padding: ".5em"
                }}
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
