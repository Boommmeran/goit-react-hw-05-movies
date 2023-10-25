import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesList from 'components/MoviesList';
import Loader from 'components/Loader';
import Error from 'components/Error';
import { getTrendingMovies } from 'helpers/moviesServise';
import { MainTitle } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      try {
        setError(false);
        setLoading(true);
        const { results } = await getTrendingMovies();
        setTrendingMovies(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  return (
    <>
      <MainTitle>Tredning today</MainTitle>
      {trendingMovies && (
        <MoviesList movies={trendingMovies} location={location} />
      )}
      {loading && <Loader />}
      {error && <Error text={'Sorry something went wrong, please try again'} />}
    </>
  );
};

export default Home;
