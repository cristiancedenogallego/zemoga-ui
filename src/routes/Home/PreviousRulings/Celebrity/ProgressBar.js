import styled, { css } from 'styled-components';
import { rgba } from 'polished';

const ProgressBar = styled.div`
  width: ${props => props.progress}%;
  background: ${props => (props.primary ? rgba(props.theme.colors.primary, 0.7) : rgba(props.theme.colors.secondary, 0.7))};
  justify-content: ${props => (props.primary ? 'flex-start' : 'flex-end')};
  height: 100%;
  box-sizing: border-box;
  ${props => (
    props.progress === 0 ? css`
      display: none;
    ` : 'flex'
  )}
  align-items: center;
  transition: 0.5s ease-in;
  padding: 5px 10px;
`;

export default ProgressBar;
