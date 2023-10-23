import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm';
import MoviesList from 'components/MoviesList';
import { searchMovies } from 'helpers/movies-servise';

const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  // const location = useLocation();
  const query = searchParams.get('query') ?? '';

  const handleSubmit = async ({ query }, { resetForm }) => {
    query === '' ? setSearchParams({}) : setSearchParams({ query });
    try {
      const { results } = await searchMovies(query);
      setMoviesList(results);
    } catch (error) {}

    resetForm();
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} query={query} />
      <MoviesList movies={moviesList} />
    </>
  );
};

export default Movies;
