import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { findCast } from 'helpers/movies-servise';

const Cast = () => {
  const [actors, setActors] = useState(null);
  const { movieId } = useParams();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    const searchCast = async () => {
      try {
        const { cast } = await findCast(movieId);
        setActors(cast);
      } catch (error) {}
    };

    searchCast();
  }, [movieId]);

  return (
    <>
      {actors && (
        <ul>
          {actors.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `http://image.tmdb.org/t/p/w500${profile_path}`
                    : defaultImg
                }
                alt="profile"
                width="150"
              />
              <p>{name}</p>
              <p>{`Character: ${character}`}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;