import styled from 'styled-components';

const Container = styled.div`
  margin: 35px 0;
  background-color: rgb(235, 235, 235);
  padding: 23px 28px;
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  align-items: center;
  grid-template-areas: 'titles close' 'explanation 0';

  @media (min-width: 600px) {
    grid-template-areas: 'titles explanation close';
    grid-row-gap: 0;
  }
`;

export default Container;
