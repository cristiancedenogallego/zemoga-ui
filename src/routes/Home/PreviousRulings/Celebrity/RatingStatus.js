import styled from 'styled-components';

const RatingStatus = styled.div`
  width: 31px;
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 196px;
  left: 0;
  background: ${props => props.isGoodRating ? props.theme.colors.primary : props.theme.colors.secondary}
`;

export default RatingStatus;
