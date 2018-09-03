import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const Drawer = styled.div`
  background: #333;
  width: 250px;
  position: fixed;
  top: 60px;
  right: 0;
  height: calc(100% - 60px);
  z-index: 999;
  display: flex;
  flex-direction: column;
  animation: ${appear} 0.3s;
`;

export default Drawer;
