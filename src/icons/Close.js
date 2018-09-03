// @flow
import React from 'react';

function Close(props: Object) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 15 16"
      {...props}
    >
      <path
        fillRule="evenodd"
        fill="rgb(51, 51, 51)"
        d="M15.010,14.487 L14.318,15.176 L7.828,8.706 L0.696,15.815 L-0.010,15.111 L7.122,8.003 L0.632,1.534 L1.323,0.845 L7.813,7.314 L13.968,1.179 L14.674,1.883 L8.519,8.017 L15.010,14.487 Z"
      />
    </svg>
  );
}

export default Close;
