import { Btn } from 'pages/MovieDetails/MovieDetails.styled';
import {
  StyledTitle,
  InfoWraper,
  Score,
  InfoTitle,
  Text,
  BntList,
} from './Info.styled';

const Info = ({
  details: { poster_path, title, release_date, genres, overview, vote_average },
}) => {
  return (
    <>
      <StyledTitle>{`${title} (${release_date.slice(0, 4)})`}</StyledTitle>
      <InfoWraper>
        <img
          src={`http://image.tmdb.org/t/p/w500${poster_path}`}
          width="350"
          height="493"
          alt="poster"
        />
        <div>
          <Score>{`User Score: ${Math.round(vote_average * 10)}%`}</Score>
          <div>
            <InfoTitle>Overview</InfoTitle>
            <Text>{overview}</Text>
          </div>
          <div>
            <InfoTitle>Genres</InfoTitle>
            <Text>{genres.map(genre => genre.name).join(' ')}</Text>
          </div>
          <InfoTitle>Additional information</InfoTitle>
          <BntList>
            <li>
              <Btn to="cast">Cast</Btn>
            </li>
            <li>
              <Btn to="reviews">Reviews</Btn>
            </li>
          </BntList>
        </div>
      </InfoWraper>
    </>
  );
};

export default Info;
