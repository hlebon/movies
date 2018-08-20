import React from "react";
import PropTypes from "prop-types";
import Checkbox from "./Checkbox";

function Movie({ movie, onCheck }) {
  const { name, description, genres, status, image } = movie;
  return (
    <div className="movie">
      <div className="movie-content">
        <div>
          <img src={image} alt="Batman" />
        </div>
        <div className="movie-info">
          <h2>{name}</h2>
          <p>{description}</p>
          <ul className="movie-genres">
            {genres.map(genre => <li key={genre}>{genre}</li>)}
          </ul>
        </div>
      </div>
      <div className="movie-checkbox">
        <Checkbox
          status={status}
          onCheck={value => {
            console.log(value);
          }}
        />
      </div>
    </div>
  );
}

Movie.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.bool
  }).isRequired,
  onCheck: PropTypes.func
};

export default Movie;
