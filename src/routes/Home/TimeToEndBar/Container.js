import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: ${props => props.theme.progressBarHeight};
  position: absolute;
  bottom: 0;
`;

export default Container;
