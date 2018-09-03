import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  max-width: 98%;

  @media (min-width: 900px) {
    max-width: 870px;
  }
  
  @media (min-width: 1100px) {
    max-width: 1024px;
  }
`;

export default Container;
