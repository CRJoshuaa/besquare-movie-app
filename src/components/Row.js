import axios from "../axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import CategoryPoster from "./CategoryPoster";

function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const baseURL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="category-panels">
        {movies.map((movie) => {
          return <CategoryPoster key={movie.id} movieObj={movie} />;
        })}
      </div>
    </div>
  );
}

export default Row;