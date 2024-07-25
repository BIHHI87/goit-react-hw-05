import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org';
const API_READ_ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDAwZGU5ZjhjNWZiMDMxYTQ0NGMzYTJjOGZmYWRlOSIsIm5iZiI6MTcyMDgyNjEyOC43MTgzMSwic3ViIjoiNjY5MTQ4MDYwM2I1ZDQ1MjY1ZWU0N2NhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.ZbG5iFm3tdvQD0bIjJ6hp--XsPkBaFEBg2MRTEy_ni0';
const options = {
  headers: {
    Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
  },
};

export const fetchMoviesByQuery = async (query = '') => {
  try {
    const response = await axios.get(`${BASE_URL}/3/search/movie`, {
      params: { query },
      headers: {
        Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}//3/trending/movie/day?language=en-US`,
      options
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieById = async (id = 0) => {
  try {
    const response = await axios.get(`${BASE_URL}/3/movie/${id}`, options);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieCast = async (id = 0) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/3/movie/${id}/credits`,
      options
    );

    return response.data;
  } catch (error) {
    console.log('fetchMovieCast error', error);
  }
};

export const fetchMovieReviews = async (id = 0) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/3/movie/${id}/reviews`,
      options
    );

    return response.data;
  } catch (error) {
    console.log('fetchMovieCast error', error);
  }
};