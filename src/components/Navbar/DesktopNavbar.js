import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchIcon from './SearchIcon';
import DesktopContainer from './DesktopContainer';
import DesktopContent from './DesktopContent';
import Logo from './Logo';
import Nav from './Nav';
import NavLink from './NavLink';
import SearchLink from './SearchLink';

function DesktopNavbar() {
  return (
    <DesktopContainer>
      <DesktopContent>
        <Logo to="/">
          Rule of Thumb.
        </Logo>
        <Nav>
          <NavLink to="/past-trials">Past Trials</NavLink>
          <NavLink to="/how-it-works">How It Works</NavLink>
          <NavLink to="/login">Log In / Sign Up</NavLink>
          <SearchLink to="/search"><SearchIcon /></SearchLink>
        </Nav>
      </DesktopContent>
    </DesktopContainer>
  );
}

export default DesktopNavbar;
