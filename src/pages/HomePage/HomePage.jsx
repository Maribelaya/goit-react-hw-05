// import { useEffect, useState } from "react";
// import { fetchTrendMovies } from "../../api";
// import MovieList from "../../components/MovieList";
// import { PuffLoader } from "react-spinners";
// import NotFoundPage from "../NotFoundPage";
// import css from "../HomePage/HomePage.module.css";

// export default function HomePage() {
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getFetchedMovies = async () => {
//       setIsLoading(true);
//       try {
//         const data = await fetchTrendMovies();
//         setMovies(data.results);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     getFetchedMovies();
//   }, []);

//   return (
//     <div className={css.loader}>
//       {isLoading && (
//         <div className={css.spinner}>
//           <PuffLoader height={80} width={80} color="#4fa94d" />
//         </div>
//       )}
//       {error && <NotFoundPage />}
//       <div>
//         <h2>Trending Today</h2>
//         <MovieList movies={movies}></MovieList>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../api";
import { useLocation } from "react-router-dom";
import MovieList from "../../components/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        setError(true);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Trending Today</h2>

      {error && <p>NotFoundPage</p>}
      {movies.length > 0 && <MovieList movies={movies} state={location} />}
    </div>
  );
}
