import { Link } from "react-router-dom";

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title, name, release_date, poster_path }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>
            <img
              src={`http://image.tmdb.org/t/p/w500${poster_path}`}
              width="250"
              alt="poster"
            />
            <p>{`${title || name} (${release_date.slice(0, 4)})`}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
