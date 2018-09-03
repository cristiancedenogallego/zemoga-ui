// @flow
import * as React from 'react';
import ModalBody from './ModalBody';
import Overlay from './Overlay';

type Props = {
  children: React.Node,
};

function Modal({ children }: Props) {
  return (
    <Overlay>
      <ModalBody>
        {children}
      </ModalBody>
    </Overlay>
  );
}

export default Modal;
