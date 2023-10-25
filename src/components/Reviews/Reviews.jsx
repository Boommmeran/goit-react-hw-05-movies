import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader';
import Error from 'components/Error';
import { findReviews } from 'helpers/moviesServise';
import {
  ReviewsList,
  ReviewsItem,
  ReviewsTitle,
  ReviewsText,
} from './Reviews.styled';

const Reviews = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [reviews, setReviews] = useState();

  const { movieId } = useParams();

  useEffect(() => {
    const searchCast = async () => {
      try {
        setError(false);
        setLoading(true);
        const { results } = await findReviews(movieId);
        setReviews(results);
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
      {reviews && reviews.length !== 0 && (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <ReviewsItem key={id}>
              <ReviewsTitle>{`Author: ${author}`}</ReviewsTitle>
              <ReviewsText>{content}</ReviewsText>
            </ReviewsItem>
          ))}
        </ReviewsList>
      )}
      {reviews && reviews.length === 0 && (
        <Error text={'We don`t have any reviews for this movie'} />
      )}
    </>
  );
};

export default Reviews;
