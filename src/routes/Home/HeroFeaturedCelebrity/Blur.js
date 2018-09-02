// @flow
import React from 'react';
import styled from 'styled-components';

const Blur = styled.filter`
    filter: blur(30px);
`;

function BlurEffect() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ display: 'none' }}>
          <defs>
              <filter id="blur-filter">
                  <feGaussianBlur stdDeviation="3"></feGaussianBlur>
              </filter>
          </defs>
      </svg>
      <Blur />
    </div>
  );
}

export default BlurEffect;
