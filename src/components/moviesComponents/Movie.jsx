import React from "react";
import "../../styles/header.css";

const Movie = ({ movieData }) => {
  function unicodeToChar(text) {
    return text.replace(/\\u[\dA-F]{4}/gi, 
           function (match) {
                return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
           });
 }


  return (
    <div className="movie-container">
      <div className="title-container">
        <h2>{movieData.movie.title}</h2>
      </div>

      <div className="movie-info-with-poster">
        <img
          src={movieData.movie.poster}
          alt="movie poster"
          className="movie-poster-img"
        />
        <div className="movie-img-middle">
          <button className="movie-img-middle-text">Add {movieData.movie.title} to watchlist</button>
        </div>

        <div className="ribbon">
          <div className="ribbon-text">
            {movieData.movie.year}, {movieData.movie.runtime}
          </div>
        </div>
      </div>

      <p>Category: {movieData.movie.genre}</p>
      <p>Released {movieData.movie.released}</p>

      <p>{movieData.movie.plot}</p>

      <div className="movie-review-info">
        <h2>Review</h2>
        <p>{unicodeToChar(movieData.review.summary_short)}</p>
        <a href={movieData.review.url} target="_blank">
          {movieData.review.suggested_link_text}
        </a>
      </div>
    </div>
  );
};

export default Movie;
