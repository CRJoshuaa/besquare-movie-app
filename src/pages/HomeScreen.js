import React from "react";
import Categories from "../components/Categories";
import FeatureMovie from "../components/FeatureMovie";
import Header from "../components/Header";
import "./HomeScreen.css";
import "../App.css";

function HomeScreen() {
  return (
    <div>
      <Categories />
      <Header />
      <FeatureMovie />
      <Categories />
    </div>
  );
}

export default HomeScreen;
