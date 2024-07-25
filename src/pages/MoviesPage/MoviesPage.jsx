import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import classes from './MoviesPage.module.css';
import { fetchMoviesByQuery } from '../../fetch';
import GoBack from '../../components/GoBack/GoBack';
import MovieList from '../../components/MovieList/MovieList';

const MoviesPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      setSearchValue(query);
      searchMovies(query);
    }
  }, [searchParams]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const trimmedSearchValue = searchValue.trim();
    if (trimmedSearchValue === '') {
      setMovies([]);
      setSearchParams({});
      return;
    }
    setSearchParams({ query: trimmedSearchValue });
  };

  const searchMovies = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const datas = await fetchMoviesByQuery(query);
      setMovies(datas.results);
    } catch (error) {
      console.error('Error fetching movies: ', error);
      setError('Error fetching movies.');
      setMovies([]);
    } finally {
      setLoading(false);
      setSearchValue('');
    }
  };

  return (
    <div className={classes.moviePage}>
      <GoBack />
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>We does not have any trending movies for this query.</p>}
      {!loading && !error && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;