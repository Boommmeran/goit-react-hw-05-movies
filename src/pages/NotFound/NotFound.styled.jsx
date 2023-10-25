import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NotFoundWrap = styled.div`
  text-align: center;
  color: #800;
  font-size: 43px;
  font-weight: 700;
  margin-top: 80px;
`;

export const NotFoundText = styled.p`
:not(:first-child) {
  margin-top: 20px;
}
`;

export const NotFoundLink = styled(Link)`
  text-decoration: underline;
`