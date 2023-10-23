import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { findReviews } from 'helpers/movies-servise';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const searchCast = async () => {
      try {
        const { results } = await findReviews(movieId);
        setReviews(results);
      } catch (error) {}
    };

    searchCast();
  }, [movieId]);

  return (
    <>
      {reviews && <ul>{reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h5>{`Author: ${author}`}</h5>
          <p>{content}</p>
        </li>
      ))}</ul>}
    </>
  );
};

export default Reviews;
