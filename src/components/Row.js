import styled, { css } from 'styled-components';

const Row = styled.div`
  display: flex;
  ${props => (props.alignItems ? css`
    align-items: ${props.alignItems};
  ` : '')}
`;

export default Row;
