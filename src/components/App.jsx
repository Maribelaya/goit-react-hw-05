//import { } from "../api";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import MoviesPage from "../pages/MoviesPage";
import MovieCast from "./MovieCast";

const App = () => {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<div>HomePage</div>}></Route>
        <Route path="/movies" element={MoviesPage}></Route>
        <Route path="/movies/:movieId" element={MovieDetailsPage}></Route>
        <Route path="/movies/:movieId/cast" element={MovieCast}></Route>
        <Route path="/movies/:movieId/reviews"></Route>
        <Route path="*"></Route>
      </Routes>
    </div>
  );
};
export default App;
{
  /* <Route exact path="/" component={HomePage} />
<Route path="/movies" component={MoviesPage} />
<Route path="/movies/:movieId" component={MovieDetailsPage} />
<Route path="/movies/:movieId/cast" component={MovieCast} />
<Route path="/movies/:movieId/reviews" component={MovieReviews} />
<Route component={NotFoundPage} /> */
}
