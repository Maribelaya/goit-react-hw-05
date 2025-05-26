import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReview } from "../api";

export default function MovieReview() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const fetchReviewData = async () => {
      setLoading(true);
      try {
        const data = await getReview(movieId);
        setReviews(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error("Error fetching cast details", error);
      } finally {
        setLoading(false);
      }
    };

    if (movieId) {
      fetchReviewData();
    }
  }, [movieId]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      <h2>Reviews</h2>
      <ul>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>No reviews available</p>
        )}
      </ul>
    </div>
  );
}
