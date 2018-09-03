import styled from 'styled-components';

const RatingButton = styled.button`
  width: 31px;
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin-right: 10px;
  border: ${props => props.active ? '2px solid white' : 'none'};
  background: ${props => props.isGoodRating ? props.theme.colors.primary : props.theme.colors.secondary};
`;

export default RatingButton;
