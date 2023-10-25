import axios from 'axios';

const API_KEY =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmI3YTY1YmJhMTVkYTU2OGZjNzJlODdiNGU1MzA0ZSIsInN1YiI6IjYzZGQ1MWIyMzczYWMyMDA3YzFmNTIyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8pLwd2kDBypx7lwFPRi_J8X3NWyZonT21z3rtiXLa2E';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.Authorization = API_KEY;

export const getTrendingMovies = async () => {
  try {
    const { data } = await axios.get('trending/movie/day');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const searchMovies = async query => {
  try {
    const { data } = await axios.get(`search/movie?query=${query}`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const findMovieById = async id => {
  try {
    const { data } = await axios.get(`movie/${id}`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const findCast = async id => {
  try {
    const { data } = await axios.get(`movie/${id}/credits`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const findReviews = async id => {
  try {
    const { data } = await axios.get(`movie/${id}/reviews`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
