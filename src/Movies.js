import React, { Component } from "react";
import Movie from "./Movie";

class Movies extends Component {
  render() {
    const { movies, displaySearch = false } = this.props;
    return (
      <div className="movies">
        {displaySearch && (
          <input type="text" placeholder="Buscar pelicula..." />
        )}
        <ul>{movies.map(movie => <Movie movie={movie} />)}</ul>
      </div>
    );
  }
}

export default Movies;
