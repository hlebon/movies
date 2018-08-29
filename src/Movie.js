import React from "react";
import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";
import Checkbox from "./Checkbox";

function Movie({ movie, onCheck, onDelete }) {
  const { name, description, genres, status, image } = movie;
  return (
    <div className="movie">
      <div style={{ position: "absolute", right: 0, padding: "0 1em" }}>
        <FaTrashAlt
          style={{ cursor: "pointer" }}
          color="#afa7b1"
          onClick={() => {
            if (onDelete) {
              onDelete(movie);
            }
          }}
        />
      </div>
      <div className="movie-content">
        <div>
          <img src={image} alt="Batman" />
        </div>
        <div className="movie-info">
          <h3>{name}</h3>
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
            if (onCheck) {
              onCheck(movie);
            }
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
  onCheck: PropTypes.func,
  onDelete: PropTypes.func
};

export default Movie;
