import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCast } from "../api";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const fetchCastData = async () => {
      try {
        const data = await getCast(movieId);
        setCast(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching cast details:", error);
      }
    };

    if (movieId) {
      fetchCastData();
    }
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast &&
          cast.map((actor) => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.id}
                width="100"
                height="100"
              />
              <p>{actor.name}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
