import clsx from "clsx";
import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import { lazy, Suspense } from "react";

import Navigation from "../components/Navigation/Navigation.jsx";

const MoviesPage = lazy(() => import(`../pages/MoviesPage.jsx`));
const HomePage = lazy(() => import(`../pages/HomePage.jsx`));
const MovieDetailsPage = lazy(() => import(`../pages/MovieDetailsPage`));
const MovieCast = lazy(() => import(`../components/MovieCast.jsx`));
const MovieReview = lazy(() => import(`../components/MovieReviews.jsx`));

function App() {
  const windowIsActive = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div>
      <header>
        <Navigation activate={windowIsActive} />
      </header>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReview />} />
          </Route>
          {<Route path="*" element={<NotFoundPage />} />}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
