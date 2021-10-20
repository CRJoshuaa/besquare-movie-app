import React from "react";
import Categories from "../components/Categories";
import FeatureMovie from "../components/FeatureMovie";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./HomeScreen.css";
import "../App.css";

function HomeScreen() {
  return (
    <div>
      <Header />
      <FeatureMovie />

      <Categories />
      <Footer title="@#$%" />
    </div>
  );
}

export default HomeScreen;
