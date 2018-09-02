import styled from 'styled-components';

const RatingBar = styled.div`
  height: ${props => props.theme.progressBarHeight};
  position: absolute;
  bottom: 0;
  width: 100%;
  color: white;
  display: flex;
  left: 0;
  right: 0;
`;

export default RatingBar;
