import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #800;
  color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

export const NavList = styled.ul`
  display: flex;
  gap: 40px;
`;

export const Link = styled(NavLink)`
  position: relative;
  display: inline-block;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  padding: 25px 0;

  &.active {
    ::after {
      position: absolute;
      bottom: 3px;
      right: 0;
      content: '';
      width: 100%;
      height: 4px;
      background-color: #fff;
      border-radius: 2px;
    }
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
