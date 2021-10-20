import HomeScreen from "./pages/HomeScreen";
import FeatureMovie from "./components/FeatureMovie";
import "./App.css";
import Categories from "./components/Categories";
import MoviePage from "./pages/MoviePage";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/moviePage">
            <MoviePage />
          </Route>
          <Route path="/movie/:id">
            <MoviePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
