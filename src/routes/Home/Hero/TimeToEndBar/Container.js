import styled from 'styled-components';
import { rgba } from 'polished';

const Container = styled.div`
  display: flex;
  height: ${props => props.theme.progressBarHeight};
  background: ${rgba('#707070', 0.3)};
  position: absolute;
  bottom: 0;
  overflow: hidden;
  width: 100%;
`;

export default Container;
