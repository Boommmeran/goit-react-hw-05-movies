import styled from '@emotion/styled';

export const ReviewsList = styled.ul`
  margin-bottom: 30px;
`;

export const ReviewsItem = styled.li`
  border: 1px solid #800;
  padding: 10px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const ReviewsTitle = styled.h5`
  font-size: 17px;
  margin-bottom: 10px;
`;

export const ReviewsText = styled.p`
  font-size: 13px;
`;
