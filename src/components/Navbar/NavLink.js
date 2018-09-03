import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLink = styled(Link)`
  color: white;
  font-size: 22px;
  font-weight: 300;
  color: rgb(255, 255, 255);
  line-height: 1.2;
  padding: 0 26px;
  text-decoration: none;
  cursor: pointer;
  margin: 1em 0;

  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }

  @media (min-width: 1000px) {
    font-size: 16px;
    margin: 0;
  }
`;

export default NavLink;
