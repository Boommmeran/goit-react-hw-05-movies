import { NotFoundWrap, NotFoundText, NotFoundLink } from './NotFound.styled';

const NotFound = () => {
  return (
    <NotFoundWrap>
      <NotFoundText>404 Not Found :(</NotFoundText>
      <NotFoundText>
        Sorry, but page with this address does not exist
      </NotFoundText>
      <NotFoundText>
        You can go back to <NotFoundLink to="/">trending movies</NotFoundLink>{' '}
        or to <NotFoundLink to="/movies">find movie here</NotFoundLink>
      </NotFoundText>
    </NotFoundWrap>
  );
};

export default NotFound;
