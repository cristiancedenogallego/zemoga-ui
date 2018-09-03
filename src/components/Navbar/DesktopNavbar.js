import * as React from 'react';
import DesktopContainer from './DesktopContainer';
import DesktopContent from './DesktopContent';
import Logo from './Logo';
import Nav from './Nav';

type Props = {
  children: React.Node,
};

function DesktopNavbar({ children }: Props) {
  return (
    <DesktopContainer>
      <DesktopContent>
        <Logo to="/">
          Rule of Thumb.
        </Logo>
        <Nav>
          {children}
        </Nav>
      </DesktopContent>
    </DesktopContainer>
  );
}

export default DesktopNavbar;
