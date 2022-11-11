import React from "react";
import "../../styles/header.css";

const Movie = ({ movieData }) => {
  const categories = movieData.movie.genre;
  let categoriesList = categories.split(",");
  categoriesList = categoriesList.map(function (item) {
    return item.trim();
  });

  return (
    <div className="movie-container">
      <div className="title-container">{movieData.movie.title}</div>

      <div className="movie-info-with-poster">
        <img
          src={movieData.movie.poster}
          alt="movie poster"
          className="movie-poster-img"
        />
        <div className="movie-img-middle">
          <button className="movie-img-middle-text">Add to watchlist</button>
        </div>

        <div className="ribbon">
          <div className="ribbon-text">
            {movieData.movie.year}, {movieData.movie.runtime}
          </div>
        </div>
      </div>
      <ul className="movie-tags">
        {categoriesList.map((category, idx) => {
          return (
            <li key={idx}>
              <a href="#">{category}</a>
            </li>
          );
        })}
      </ul>

      <p className="movie-release">Released {movieData.movie.released}</p>

      <div className="summary-title">Summary</div>
      <div className="movie-plot-container">
        <p className="movie-plot">{movieData.movie.plot}</p>
        <p className="movie-actors">Actors: {movieData.movie.actors}</p>
      </div>

      <div className="movie-review-info">
        <h2 className="review-title">Review</h2>
        <div className="movie-review-info-inner-container">
          <p>{movieData.review.summary_short}</p>
          <div className="tag">
          <a href={movieData.review.url} target="_blank">
            {movieData.review.suggested_link_text}
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
