import React from "react";
import FeatureMovie from "../components/FeatureMovie";
import Header from "../components/Header";
import "./HomeScreen.css";
import "../App.css";
import Categories from "../components/Categories";
import MoviePage from "./MoviePage";

function HomeScreen() {
  return (
    <div>
      <Categories />
      <Header />
      <FeatureMovie />
      <MoviePage />
    </div>
  );
}

export default HomeScreen;
