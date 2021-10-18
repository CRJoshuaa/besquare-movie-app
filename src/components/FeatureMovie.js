import React from "react";

function FeatureMovie() {
  return (
    <div className="wrapper">
      <div className="poster">
        <h1>Title</h1>
        <div className="wrapper-info">
          <li>Year</li>
          <li>Type</li>
          <li>Rating</li>
        </div>
        <div className="wrapper-button">
          <button className="more-info">More Info</button>
          <button className="view-trailer">View Trailer</button>
        </div>
      </div>
    </div>
  );
}

export default FeatureMovie;
