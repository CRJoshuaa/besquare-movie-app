import React, { useEffect, useState } from "react";
import FeatureMovie from "../components/FeatureMovie";
import Header from "../components/Header";
import "./HomeScreen.css";
import "../App.css";
import axios from "../axios";
import { useLocation } from "react-router-dom";
import "../pages/MoviePage.css";

function MoviePage(props) {
  const [movie, setMovie] = useState({});
  const path = useLocation();
  const movieId = parseInt(String(path.pathname).slice(7));
  console.log(movieId);

  const searchURL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=a3827e96de599b6142d695f536ca566d`;
  //https://api.themoviedb.org/3/movie/343611?api_key=a3827e96de599b6142d695f536ca566d
  const base_URL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(searchURL);
      setMovie(request.data);

      return request;
    }

    fetchData();
  }, [searchURL]);
  return (
    <div class="container">
      <img className="backdrop" src={`${base_URL}${movie.poster_path}`}></img>
      <h1 class="title">{movie.original_title}</h1>
      <p className="overview">{movie.overview}</p>
      <p className="vote_average">{movie.vote_average}</p>
      <p className="user_score">User Score</p>
    </div>
  );
}

export default MoviePage;
