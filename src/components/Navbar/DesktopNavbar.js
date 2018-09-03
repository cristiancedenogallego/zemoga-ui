import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DesktopContainer from './DesktopContainer';
import DesktopContent from './DesktopContent';
import Logo from './Logo';
import Nav from './Nav';

type Props = {

}
function DesktopNavbar(props: Props) {
  return (
    <DesktopContainer>
      <DesktopContent>
        <Logo to="/">
          Rule of Thumb.
        </Logo>
        <Nav>
          {props.children}
        </Nav>
      </DesktopContent>
    </DesktopContainer>
  );
}

export default DesktopNavbar;
