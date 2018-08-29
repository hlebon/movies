import React, { Component } from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";

class Movies extends Component {
  render() {
    const { movies, title, children } = this.props;
    return (
      <div className="movies">
        <h2>{title}</h2>
        <div>{children}</div>
        <ul>
          {movies.map(movie => {
            return (
              <li
                key={movie.name}
                style={{
                  border: "1px solid #d6d6d6",
                  padding: ".5em"
                }}
              >
                <Movie
                  movie={movie}
                  onCheck={this.props.onCheck}
                  onDelete={this.props.onDelete}
                />
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
  onCheck: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Movies;
