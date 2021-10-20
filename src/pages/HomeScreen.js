import React from "react";
import FeatureMovie from "../components/FeatureMovie";
import Header from "../components/Header";
import "./HomeScreen.css";

function HomeScreen() {
  return (
    <div>
      <Header />
      <FeatureMovie />
    </div>
  );
}

export default HomeScreen;
