// @flow
import React from 'react';

function Menu(props: Object) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 50 50"
      style={{ enableBackground: 'new 0 0 50 50' }}
      xmlSpace="preserve"
      {...props}
    >
      <g>
        <rect y="3" width="50" height="2" fill="#FFFFFF"/>
        <rect y="17" width="50" height="2" fill="#FFFFFF"/>
        <rect y="31" width="50" height="2" fill="#FFFFFF"/>
        <rect y="45" width="50" height="2" fill="#FFFFFF"/>
      </g>
    </svg>
  );
}

export default Menu;
