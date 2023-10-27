import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader';
import Error from 'components/Error';
import { findCast } from 'helpers/moviesServise';
import { CastList, CastItem } from './Cast.styled';

const Cast = () => {
  const [actors, setActors] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const defaultImg = 'https://dummyimage.com/150x225/800000/800000.jpg';

  useEffect(() => {
    const searchCast = async () => {
      try {
        setError(false);
        setLoading(true);
        const { cast } = await findCast(movieId);
        setActors(cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    searchCast();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <Error text={'Sorry something went wrong, please try again'} />}
      {actors && actors.length !== 0 && (
        <CastList>
          {actors.map(({ id, name, character, profile_path }) => (
            <CastItem key={id}>
              <img
                src={
                  profile_path
                    ? `http://image.tmdb.org/t/p/w500${profile_path}`
                    : defaultImg
                }
                alt="profile"
                width="150"
                height="225"
              />
              <p>{name}</p>
              {character && (
                <>
                  <p>Character:</p>
                  <p>{character}</p>
                </>
              )}
            </CastItem>
          ))}
        </CastList>
      )}
      {actors && actors.length === 0 && (
        <Error
          text={'We don`t have any information about cast of this movie'}
        />
      )}
    </>
  );
};

export default Cast;
