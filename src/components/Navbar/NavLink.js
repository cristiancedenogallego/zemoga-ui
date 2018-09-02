import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLink = styled(Link)`
  color: white;
  font-size: 16px;
  font-weight: 300;
  color: rgb(255, 255, 255);
  line-height: 1.2;
  padding: 0 26px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export default NavLink;
