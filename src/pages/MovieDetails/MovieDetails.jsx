import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { findMovieById } from 'helpers/movies-servise';
import Info from 'components/Info';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const findMovie = async () => {
      try {
        const movie = await findMovieById(movieId);
        setMovieInfo(movie);
      } catch (error) {}
    };

    findMovie();
  }, [movieId]);

  return (
    <>
      <p>MovieDetails</p>
      {movieInfo && <Info details={movieInfo} />}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
