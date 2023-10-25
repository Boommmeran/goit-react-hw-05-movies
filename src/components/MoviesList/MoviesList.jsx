import { Link } from 'react-router-dom';
import { cutter } from 'helpers/stringCutter';
import { List, MovieItem, MovieTitle } from './MoviesList.styled';

const MoviesList = ({ movies, location }) => {
  const defaultImg = 'https://dummyimage.com/250x375/800000/800000.jpg';

  return (
    <List>
      {movies.map(({ id, title, release_date, poster_path }) => (
        <MovieItem key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={
                poster_path
                  ? `http://image.tmdb.org/t/p/w500${poster_path}`
                  : defaultImg
              }
              width="250"
              height="375"
              alt="poster"
            />
            <MovieTitle>
              {`${cutter(title)} (${release_date.slice(0, 4)})`}
            </MovieTitle>
          </Link>
        </MovieItem>
      ))}
    </List>
  );
};

export default MoviesList;
