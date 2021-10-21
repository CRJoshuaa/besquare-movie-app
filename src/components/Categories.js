import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../Request";
import CategoryPoster from "./CategoryPoster";
import "./Categories.css";
import "../App.css";

function Categories() {
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

    fetchData();
  }, [fetchURL]);

  return (
    <div className="categories">
      <div>
        <h1 className="header">Browse Categories</h1>
      </div>
      <div className="category-buttons">
        <button
          className="basic-btn"
          id="action"
          onClick={() => {
            setCategory("action");
          }}
        >
          Action
        </button>
        <button
          className="basic-btn"
          id="comedy"
          onClick={() => {
            setCategory("comedy");
          }}
        >
          Comedy
        </button>
        <button
          className="basic-btn"
          id="horror"
          onClick={() => {
            setCategory("horror");
          }}
        >
          Horror
        </button>
        <button
          className="basic-btn"
          id="romance"
          onClick={() => {
            setCategory("romance");
          }}
        >
          Romance
        </button>
        <button
          className="basic-btn"
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
          return <CategoryPoster key={movie.id} movieObj={movie} />;
        })}
      </div>
    </div>
  );
}

export default Categories;
