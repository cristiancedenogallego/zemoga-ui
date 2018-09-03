import styled from 'styled-components';

const RulingsGrid = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;

  @media (min-width: 760px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    grid-row-gap: auto;
  }

  @media (min-width: 1000px) {
    grid-gap: 40px;
  }
`;

export default RulingsGrid;
