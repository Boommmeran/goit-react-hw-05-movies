import { useState, useEffect, useRef, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Info from 'components/Info';
import Loader from 'components/Loader';
import Error from 'components/Error';
import { findMovieById } from 'helpers/moviesServise';
import { Btn } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const findMovie = async () => {
      try {
        setError(false);
        setLoading(true);
        const movie = await findMovieById(movieId);
        setMovieInfo(movie);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    findMovie();
  }, [movieId]);

  return (
    <>
      <Btn to={backLinkRef.current}>{<FaArrowLeft />}Go back</Btn>
      {movieInfo && <Info details={movieInfo} />}
      {loading && <Loader />}
      {error && <Error text={'Sorry something went wrong, please try again'} />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
