import styled from 'styled-components';
import cityJPG from './city.jpg';

const Background = styled.div`
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)),
    url(${cityJPG});
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
    height: 70px;
  }
`;

export default Background;
