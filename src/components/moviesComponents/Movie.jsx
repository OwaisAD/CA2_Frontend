import React from "react";
import "../../styles/header.css";

const Movie = ({ movieData }) => {

    const categories = movieData.movie.genre
    let categoriesList = categories.split(",")
    categoriesList = categoriesList.map(function(item) {
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
        {categoriesList.map((category) => {
          return <li><a href="#">{category}</a></li>
        })}
      </ul>

      <p className="movie-release">Released {movieData.movie.released}</p>

      <p>{movieData.movie.plot}</p>

      <div className="movie-review-info">
        <h2>Review</h2>
        <p>{movieData.review.summary_short}</p>
        <a href={movieData.review.url} target="_blank">
          {movieData.review.suggested_link_text}
        </a>
      </div>
    </div>
  );
};

export default Movie;
