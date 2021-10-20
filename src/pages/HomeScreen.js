import React from "react";
import FeatureMovie from "../components/FeatureMovie";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./HomeScreen.css";

function HomeScreen() {
  return (
    <div>
      <Header />
      <FeatureMovie />
      <Footer title="@#$%" />
    </div>
  );
}

export default HomeScreen;
