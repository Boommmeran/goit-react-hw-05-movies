import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Btn = styled(Link)`
  width: 110px;
  padding: 10px;
  margin: 5px 0 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #800;
  border-radius: 10px;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  justify-content: center;

  :hover {
    background-color: #531010;
  }
`;
