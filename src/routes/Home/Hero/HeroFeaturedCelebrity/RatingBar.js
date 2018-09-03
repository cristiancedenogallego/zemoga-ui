import styled from 'styled-components';

const RatingBar = styled.div`
  display: flex;
  width: 100%;
  height: 50px;

  @media (min-width: 800px) {
    height: 80px;
  }
`;

export default RatingBar;
