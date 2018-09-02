import styled from 'styled-components';
import { rgba } from 'polished';

const ProgressBar = styled.div`
  width: ${props => props.progress}%;
  background: ${props => props.primary ? rgba(props.theme.colors.primary, 0.7) : rgba(props.theme.colors.secondary, 0.7)};
  justify-content: ${props => props.primary ? 'flex-start' : 'flex-end'};
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  transition: 1s ease-in;
  padding: 5px 10px;
`;

export default ProgressBar;
