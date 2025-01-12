import { API_TOKEN, BASE_URL, API_KEY } from "./config";

const fetchWithToken = (endpoint) => {
  return fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      Authorization: API_TOKEN,
      Accept: "application/json",
    },
  })
    .then((response) => {
      console.log(`HTTP status: ${response.status}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Fetched data:", data);
      return data;
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
      throw err;
    });
};

export const getTrendingMovies = () => {
  return fetchWithToken("trending/movie/day?language=en-US");
};

export const getMovieDetails = (movieId) => {
  return fetchWithToken(`movie/${movieId}?api_key=${API_KEY}`);
};

export const getMovieReviews = (movieId) => {
  return fetchWithToken(`movie/${movieId}/reviews?api_key=${API_KEY}`);
};

export const getMovieCredits = (movieId) => {
  return fetchWithToken(`movie/${movieId}/credits?api_key=${API_KEY}`);
};

export const getMovieVideos = (movieId) => {
  return fetchWithToken(`movie/${movieId}/videos?api_key=${API_KEY}`);
};

export const getSimilarMovies = (movieId) => {
  return fetchWithToken(`movie/${movieId}/similar?api_key=${API_KEY}`);
};

export const searchMovies = (query) => {
  return fetchWithToken(
    `search/movie?query=${encodeURIComponent(
      query
    )}&include_adult=false&language=en-US&page=1`
  );
};
