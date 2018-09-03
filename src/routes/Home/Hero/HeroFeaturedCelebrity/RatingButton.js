// @flow
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.backgroundColor};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  border: none;
  opacity: 0.9;
  
  svg {
    width: 20px;

    @media (min-width: 800px) {
      width: 36px;
    }
  }
`;

function RatingButton({ backgroundColor, iconComponent } : { backgroundColor: string, iconComponent: React$Element<any> }) {
  return (
    <Button backgroundColor={backgroundColor}>
      {iconComponent}
    </Button>
  );
}

export default RatingButton;
