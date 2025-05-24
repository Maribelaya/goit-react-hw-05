// import { useState, useEffect } from "react";
// import { fetchMovieReviews } from "./MovieApi";
// import { useParams } from "react-router-dom";

// const MovieReviews = () => {
//   const { movieId } = useParams();
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const reviewsData = await fetchMovieReviews(movieId);
//         setReviews(reviewsData);
//       } catch (error) {
//         console.error("Error fetching movie reviews:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchReviews();
//   }, [movieId]);

//   if (loading) {
//     return <p>Loading reviews...</p>;
//   }

//   return (
//     <div>
//       <h2>Movie Reviews</h2>
//       {reviews.length > 0 ? (
//         <ul>
//           {reviews.map((review) => (
//             <li key={review.id}>
//               <h3>{review.author}</h3>
//               <p>{review.content}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No reviews available</p>
//       )}
//     </div>
//   );
// };

// export default MovieReviews;

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
