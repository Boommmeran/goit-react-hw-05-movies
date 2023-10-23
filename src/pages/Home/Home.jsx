import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'helpers/movies-servise';
import MoviesList from 'components/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setError(false);
        const { results } = await getTrendingMovies();
        setTrendingMovies(results);
      } catch (error) {
        setError(true);
      }
    };

    getMovies();
  }, []);

  return (
    <>
      <h1>Tredning today</h1>
      <MoviesList movies={trendingMovies} />
      {error && <p>Some error</p>}
    </>
  );
};

export default Home;
