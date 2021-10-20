import React from "react";
import Categories from "../components/Categories";
import FeatureMovie from "../components/FeatureMovie";
import Header from "../components/Header";
import "./HomeScreen.css";

function HomeScreen() {
  return (
    <div>
      <Categories />
      <Header />
      <FeatureMovie />
    </div>
  );
}

export default HomeScreen;
