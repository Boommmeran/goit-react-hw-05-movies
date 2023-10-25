import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import SearchForm from 'components/SearchForm';
import MoviesList from 'components/MoviesList';
import Loader from 'components/Loader';
import Error from 'components/Error';
import { searchMovies } from 'helpers/moviesServise';

const Movies = () => {
  const [moviesList, setMoviesList] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (!query) {
          return;
        }
        setError(false);
        setLoading(true);
        const { results } = await searchMovies(query);
        if (query !== '' && results.length === 0) {
          toast.error('Movies witn this name doesn`t exists');
          return;
        }
        setMoviesList(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [query]);

  const handleSubmit = async ({ query }, { resetForm }) => {
    query === '' ? setSearchParams({}) : setSearchParams({ query });
    resetForm();
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} query={query} />
      {moviesList && <MoviesList movies={moviesList} location={location} />}
      {loading && <Loader />}
      {error && <Error text={'Sorry something went wrong, please try again'} />}
    </>
  );
};

export default Movies;
