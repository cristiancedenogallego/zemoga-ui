import styled from 'styled-components';

const DesktopContent = styled.div`
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  max-width: 970px;
  margin: 0 auto;

  @media (min-width: 1100px) {
    max-width: 1024px;
  }
`;

export default DesktopContent;