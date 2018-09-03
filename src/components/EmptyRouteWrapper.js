import styled from 'styled-components';

const EmptyRouteWrapper = styled.div`
  padding-top: 100px;
  min-height: 300px;
  background: rgba(0,0,0,0.6);
  text-align: center;
  color: ${props => props.theme.colors.secondary};
`;

export default EmptyRouteWrapper;
