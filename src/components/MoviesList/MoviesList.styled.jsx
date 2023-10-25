import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0 auto 30px;
  width: 1070px;
`;

export const MovieItem = styled.li`
  width: calc((100% - 90px) / 4);
  padding-bottom: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }
`;

export const MovieTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-top: 10px;
`;
