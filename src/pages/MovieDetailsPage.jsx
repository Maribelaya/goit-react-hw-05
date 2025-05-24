// import { useParams, Outlet, useLocation } from "react-router-dom";
// import { useEffect, useState, useRef } from "react";
// import { fetchSearchMovies } from "../api";
// import toast, { Toaster } from "react-hot-toast";
// import Loader from "../components/Loader/Loader";
// // import ErrorMessage from "../components/";
// import MovieDetails from "../../components/MovieDetails/MovieDetails";
// import css from "./MovieDetailsPage.module.css";
// import { Link } from "react-router-dom";

// const MovieDetailsPage = () => {
//   const params = useParams();
//   const [movie, setMovie] = useState(null);
//   // const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const location = useLocation();
//   const backLinkHref = useRef(location.state?.from ?? "/movies");
//   const previousHref = useRef(null);
//   const backLink = backLinkHref.current;

//   useEffect(() => {
//     previousHref.current = backLink;
//     const fetchMovie = async () => {
//       try {
//         // setError(false);
//         setLoading(true);
//         const data = await fetchSearchMovies(params.movieId);
//         setMovie(data);
//       } catch (error) {
//         // setError(error);
//         toast.error("Whoops, something went wrong!");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchMovie();
//   }, [params.movieId, backLink]);

//   return (
//     <div className={css.container}>
//       {!loading && (
//         <Link to={backLinkHref.current} className={css.link}>
//           Go back
//         </Link>
//       )}
//       <Toaster position="top-right" reverseOrder={false} />
//       {loading && <Loader />}
//       {movie && <MovieDetails movie={movie} />}
//       {/* {error && <ErrorMessage />} */}
//       {!loading && (
//         <div className={css.info}>
//           <Link to="cast" className={css.link}>
//             Cast
//           </Link>
//           <Link to="reviews" className={css.link}>
//             Reviews
//           </Link>
//         </div>
//       )}

//       <Outlet />
//     </div>
//   );
// };

// export default MovieDetailsPage;
import { useEffect, useState, useRef } from "react";
import { getSingleMovie } from "../api";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLocation = useRef(location.state?.from ?? "/");

  useEffect(() => {
    if (!movieId) return;
    const getData = async () => {
      try {
        const data = await getSingleMovie(movieId);
        setMovie(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    if (movieId) {
      getData();
    }
  }, [movieId]);
  return (
    <div>
      {movie && (
        <div>
          <Link to={backLocation.current}>Back</Link>
          <div>
            <h2>{movie.original_title}</h2>
            <p>Date of production: {movie.release_date}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.id}
              width="300"
              height="300"
            />
          </div>

          <h3>Additional information:</h3>
          <ul>
            <li>
              <Link to={`cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`reviews`}>Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </div>
  );
}
