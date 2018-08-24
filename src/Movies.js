import React, { Component } from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";

class Movies extends Component {
  render() {
    const { movies, title, children } = this.props;
    return (
      <div className="movies">
        <h2>{title}</h2>
        {movies.length > 0 && <div>{children}</div>}
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
                <Movie movie={movie} onCheck={this.props.onCheck} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  displaySearch: PropTypes.bool,
  onCheck: PropTypes.func.isRequired
};

export default Movies;
