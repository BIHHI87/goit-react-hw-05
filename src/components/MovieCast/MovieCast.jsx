import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../fetch';
import classes from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const currentCast = await fetchMovieCast(movieId);

        currentCast.cast.length > 0
          ? setCast(currentCast.cast)
          : setError(true);

        } catch (error) {
        setError(true);
        console.log('error', error);
      }
    };

    if (movieId) {
      getData();
    }
  }, [movieId]);

  return (
    <div className={classes.movieCast}>
      {error && <p>We does not have any casts for this movie.</p>}
      {cast && (
        <ul className={classes.castList}>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id} className={classes.castItem}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
              />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;