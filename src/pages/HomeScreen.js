import React from "react";
import Categories from "../components/Categories";
import FeatureMovie from "../components/FeatureMovie";
import Header from "../components/Header";
import "./HomeScreen.css";
import "../App.css";
import Categories from "../components/Categories";
import MoviePage from "./MoviePage";

function HomeScreen() {
  return (
    <div>
      <Header />
      <FeatureMovie />
      <Categories />
      <MoviePage />
    </div>
  );
}

export default HomeScreen;
