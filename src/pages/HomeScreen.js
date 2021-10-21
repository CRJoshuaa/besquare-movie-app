import React from "react";
import Categories from "../components/Categories";
import FeatureMovie from "../components/FeatureMovie";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./HomeScreen.css";
import "../App.css";
import NowPlaying from "../components/NowPlaying";
import TrendingMovie from "../components/TrendingMovie";

function HomeScreen() {
  return (
    <div>
      <div className="main-container">
        <Header />
        <FeatureMovie />
        <TrendingMovie />
        <NowPlaying />
        <Categories />
      </div>
      {/* <Footer title="Hello World" /> */}
    </div>
  );
}

export default HomeScreen;
