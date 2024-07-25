import classes from './HomePage.module.css';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../fetch';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies.results);
      } catch (error) {
        setError(true);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {error && <p>We does not have any trending movies for this date.</p>}
      <MovieList movies={trendingMovies} />
    </div>
  );
};

export default HomePage;