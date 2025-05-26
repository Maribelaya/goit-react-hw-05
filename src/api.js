import axios from "axios";
const ApiKey = "6bff809781a7cbcf887951fcff8056c0";
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
