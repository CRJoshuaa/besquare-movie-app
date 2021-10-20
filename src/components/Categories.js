import React, { useEffect, useState } from "react";
import "./Categories.css";
import axios from "../axios";
import requests from "../Request";
import CategoryPoster from "./CategoryPoster";

function Categories() {
  const base_URL = "https://image.tmdb.org/t/p/original/";
  const [category, setCategory] = useState("action");
  const [movies, setMovies] = useState([]);

  const categoryFetch = {
    action: requests.fetchActionMovies,
    comedy: requests.fetchComedyMovies,
    horror: requests.fetchHorrorMovies,
    romance: requests.fetchRomanceMovies,
    documentary: requests.fetchDocumentaries,
  };

  const fetchURL = categoryFetch[category];
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    console.log(movies);

    fetchData();
  }, [fetchURL]);

  return (
    <div className="categories">
      <div className="category-title">
        <h3>Browse Categories</h3>
      </div>
      <div className="category-buttons">
        <button
          id="action"
          onClick={() => {
            setCategory("action");
          }}
        >
          Action
        </button>
        <button
          id="comedy"
          onClick={() => {
            setCategory("comedy");
          }}
        >
          Comedy
        </button>
        <button
          id="horror"
          onClick={() => {
            setCategory("horror");
          }}
        >
          Horror
        </button>
        <button
          id="romance"
          onClick={() => {
            setCategory("romance");
          }}
        >
          Romance
        </button>
        <button
          id="documentary"
          onClick={() => {
            setCategory("documentary");
          }}
        >
          Documentary
        </button>
      </div>
      <div className="category-panels">
        {movies.map((movie) => {
          if (!movie.adult) {
            return <CategoryPoster key={movie.id} movieObj={movie} />;
          }
        })}
      </div>
    </div>
  );
}

export default Categories;
