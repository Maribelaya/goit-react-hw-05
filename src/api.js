// import axios from "axios";

// const ApiKey =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmZmODA5NzgxYTdjYmNmODg3OTUxZmNmZjgwNTZjMCIsInN1YiI6IjY2MzU0YTJhNjYxMWI0MDEyNzY3NDBiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vgib_T6q6CNqb5CpeYVMt1P_JfiHzA0b16XLCqOEtug";
// const url = "https://api.themoviedb.org/";

// export const fetchSearchMovies = async (value) => {
//   try {
//     const response = await axios.get(`${url}3/search/movie/${value}`, {
//       params: { language: "en-US" },
//       headers: { Authorization: `Bearer ${ApiKey}` },
//     });
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

// export const fetchTrendMovies = async () => {
//   try {
//     const response = await axios.get(`${url}3/trending/movie/day`, {
//       params: { language: "en-US" },
//       headers: { Authorization: `Bearer ${ApiKey}` },
//     });
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

// export const fetchMovies = async (movieId) => {
//   try {
//     const response = await axios.get(`${url}3/movie/${movieId}`, {
//       params: { language: "en-US" },
//       headers: { Authorization: `Bearer ${ApiKey}` },
//     });
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

// export const fetchMovieCast = async (movieId) => {
//   try {
//     const response = await axios.get(`${url}3/movie/${movieId}/credits`, {
//       params: { language: "en-US" },
//       headers: { Authorization: `Bearer ${ApiKey}` },
//     });
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

// export const fetchMovieReviews = async (movieId) => {
//   try {
//     const response = await axios.get(`${url}3/movie/${movieId}/reviews`, {
//       params: { language: "en-US" },
//       headers: { Authorization: `Bearer ${ApiKey}` },
//     });
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

import axios from "axios";
const ApiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmZmODA5NzgxYTdjYmNmODg3OTUxZmNmZjgwNTZjMCIsInN1YiI6IjY2MzU0YTJhNjYxMWI0MDEyNzY3NDBiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vgib_T6q6CNqb5CpeYVMt1P_JfiHzA0b16XLCqOEtug";

// "cb987db4280f8ba2b4b1a2567a27fe93";
// const ACCESS_KEY =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmZmODA5NzgxYTdjYmNmODg3OTUxZmNmZjgwNTZjMCIsInN1YiI6IjY2MzU0YTJhNjYxMWI0MDEyNzY3NDBiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vgib_T6q6CNqb5CpeYVMt1P_JfiHzA0b16XLCqOEtug";
// axios.defaults.baseURL = "hhttps://api.themoviedb.org/";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export default async function getMovies(searchMovie, page) {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      api_key: ApiKey,
      query: searchMovie,
      page,
      per_page: 12,
    },
  });

  return data.results;
}

export async function getSingleMovie(id) {
  const { data } = await axios.get(`/movie/${id}`, {
    params: {
      api_key: ApiKey,
    },
  });

  return data;
}

export async function getTrendingMovies() {
  const { data } = await axios.get(`/trending/movie/week`, {
    params: {
      api_key: ApiKey,
    },
  });

  return data.results;
}

export async function getCast(id) {
  const { data } = await axios.get(`/movie/${id}/credits`, {
    params: {
      api_key: ApiKey,
    },
  });

  return data.cast;
}

export async function getReview(id) {
  const { data } = await axios.get(`/movie/${id}/reviews`, {
    params: {
      api_key: ApiKey,
    },
  });

  return data.results;
}
