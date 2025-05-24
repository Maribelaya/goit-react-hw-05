// import { Routes, Route } from "react-router-dom";
// import Navigation from "./Navigation/Navigation";
// import { Suspense, lazy } from "react";

// const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
// const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
// const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage"));
// const MovieCast = lazy(() => import("../components/MovieCast"));
// const MovieReviews = lazy(() => import("../components/MovieReviews"));
// const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

// const App = () => {
//   return (
//     <div>
//       <Suspense fallback={<b>Loading page...</b>}>
//         <Navigation />

//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/movies" element={<MoviesPage />} />
//           <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
//             <Route index element={<HomePage />} />
//             <Route path="cast" element={<MovieCast />} />
//             <Route path="reviews" element={<MovieReviews />} />
//           </Route>
//           <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//       </Suspense>
//     </div>
//   );
// };
// export default App;

// import { Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import MoviesPage from "./pages/MoviesPage";
// import MovieDetailsPage from "./pages/MovieDetailsPage";
// import MovieCast from "./components/MovieCast";
// import MovieReviews from "./components/MovieReviews";
// import NotFoundPage from "./pages/NotFoundPage";
// import Layout from "./components/Layout"; // якщо є спільна навігація/хедер тощо

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<HomePage />} />
//         <Route path="movies" element={<MoviesPage />} />
//         <Route path="movies/:movieId" element={<MovieDetailsPage />}>
//           <Route path="cast" element={<MovieCast />} />
//           <Route path="reviews" element={<MovieReviews />} />
//         </Route>
//         <Route path="*" element={<NotFoundPage />} />
//       </Route>
//     </Routes>
//   );
// }

// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import HomePage from "../pages/HomePage/HomePage";
// import Movies from "../pages/MoviesPage/MoviesPage";
// import MovieDetailsPage from "../pages/MovieDetailsPage";
// import "./App.css";
// import MovieCast from "../components/MovieCast";
// import MovieReview from "../components/MovieReviews";

import clsx from "clsx";
import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import { lazy, Suspense } from "react";
const MoviesPage = lazy(() => import(`../pages/MoviesPage.jsx`));
const Navigation = lazy(() => import(`../components/Navigation/Navigation`));
const HomePage = lazy(() => import(`../pages/HomePage/HomePage`));
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
