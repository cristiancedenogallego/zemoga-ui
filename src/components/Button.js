import styled from 'styled-components';

const Button = styled.button`
  color: white;
  padding: 10px 15px;
  align-self: flex-end;
  border: none;
  background: ${props => (props.primary ? props.theme.colors.primary : props.theme.colors.secondary)};
`;

export default Button;
