import styled from 'styled-components';
import papa2xJpg from './papa_2x.jpg';
import papa from './papa.jpg';

const HeroContainer = styled.div`
  background-size: cover;
  background-position: 50% 0;
  height: 100vh;
  background-image: url(${papa});
  display: flex;
  align-items: center;
  position: relative;

  @media (min-device-pixel-ratio: 2) {
    background: url(${papa2xJpg});
  }
`;

export default HeroContainer;
