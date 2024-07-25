import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../fetch';
import classes from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const currentReviews = await fetchMovieReviews(movieId);

        currentReviews.results.length > 0
          ? setReviews(currentReviews.results)
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
    <div>
      {error && <p>We does not have any reviews for this movie.</p>}
      {reviews && (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;