import HomeScreen from "./pages/HomeScreen";
import FeatureMovie from "./components/FeatureMovie";
import "./App.css";
import Categories from "./components/Categories";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <div className="App">
      <FeatureMovie />
      <Categories />
      <MoviePage />
    </div>
  );
}

export default App;
