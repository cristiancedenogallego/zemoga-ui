import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = styled(Link).attrs({
  to: '/',
})`
  color: rgb(255, 255, 255);
  line-height: 1.2;
  text-align: left;
  text-decoration: none;
  font-size: 24px;

  @media (min-width: 1000px) {
    font-size: 32px;
  }
`;

export default Logo;
