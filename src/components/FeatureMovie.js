import React, { useState, useEffect } from "react";
import "./FeatureMovie.css";

function FeatureMovie() {
  const [movie, setMovie] = useState([]);
  // const [genre, setGenre] = useState([]);
  //https://api.themoviedb.org/3/genre/movie/list?api_key=66f24d566eb6008394159f46c59d027e&language=en-US

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated/?api_key=66f24d566eb6008394159f46c59d027e&language=en-US&page=1&include_adult=false&language=en-US&page=1&include_adult=false"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovie(
          data.results[Math.floor(Math.random() * data.results.length - 1)]
        );
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const formatDate = (date) => {
    var options = { year: "numeric" };
    return new Date(date).toLocaleDateString([], options);
  };

  // const showGenre = () => {
  //   fetch(
  //     "https://api.themoviedb.org/3/genre/movie/list?api_key=66f24d566eb6008394159f46c59d027e&language=en-US"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setGenre(data.genres);
  //     });

  const playTrailer = () => {
    fetch(
      `http://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=66f24d566eb6008394159f46c59d027e&`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let videoKey = data.results[0].key;
        window.open(`https://www.youtube.com/watch?v=${videoKey}`);
      });
  };

  return (
    <div className="feature-wrapper">
      <div className="feature-wrapper-header">
        <h1 className="header">Featured today</h1>
      </div>
      <div
        className="feature-poster"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w780/${
            movie.backdrop_path ? movie.backdrop_path : ""
          })`,
        }}
      >
        <div className="feature-wrapper-info">
          <h1 className="feature-wrapper-header">{movie.title}</h1>
          <div className="feature-wrapper-details">
            <span className="feature-movie-details" id="genre">
              {movie.genre_ids}
            </span>
            <span className="feature-movie-details" id="date">
              {formatDate(movie.release_date)}
            </span>
            <span className="feature-movie-details" id="score">
              {movie.vote_average}/10
            </span>
          </div>

          <div className="feature-wrapper-button">
            <button className="basic-btn">More Info</button>
            <button className="basic-btn" onClick={playTrailer}>
              View Trailer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureMovie;
