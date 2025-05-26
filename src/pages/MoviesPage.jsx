import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import getMovies from "../api";
import MovieList from "../components/MovieList";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const navigate = useNavigate();
  const [searchMovies, setSearchMovies] = useSearchParams();
  const query = searchMovies.get("query") || "";

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements.searchMovie.value.trim();
    if (query === "") {
      toast.error("Field cannot be empty");
      return;
    }
    handleSearch(query);
    navigate(`/movies?query=${query}`);
    event.target.reset();
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    const getData = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await getMovies(query, page);
        setMovies((prevMovies) => [...prevMovies, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [query, page]);

  const handleSearch = (query) => {
    setSearchMovies({ query });
    setPage(1);
    setMovies([]);
  };

  return (
    <div>
      <header>
        <Toaster position="top-left" />
        <form onSubmit={handleSubmit}>
          <div className="search-bar">
            <input
              name="searchMovie"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movie..."
            />
            <button type="submit">Search</button>
          </div>
        </form>
      </header>
      {loading && <p>Loading...</p>}
      {error && <p>NotFoundPage</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
