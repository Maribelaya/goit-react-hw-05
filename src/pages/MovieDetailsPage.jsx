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
