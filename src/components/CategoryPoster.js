import React from "react";
import "./CategoryPoster.css";

function CategoryPoster(props) {
  const base_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <img
      className="poster"
      src={`${base_URL}${
        props.movieObj.poster_path
          ? props.movieObj.poster_path
          : props.movieObj.backdrop_path
      }`}
      alt=""
      onClick={() => {
        console.log(props.movieObj.popularity);
      }}
    />
  );
}

export default CategoryPoster;
