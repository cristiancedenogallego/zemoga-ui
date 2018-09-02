import styled from 'styled-components';
import cityJPG from './city.jpg';

const Background = styled.div`
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)),
    url(${cityJPG});
  height: 70px;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Background;
