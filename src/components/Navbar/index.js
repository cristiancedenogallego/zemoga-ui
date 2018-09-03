// @flow
import React, { PureComponent } from 'react';
import has from 'ramda/src/has';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import NavLink from './NavLink';
import SearchLink from './SearchLink';
import SearchIcon from './SearchIcon';
import SearchLabel from './SearchLabel';

type Props = {};
type State = {
  isDesktop?: boolean,
};

class Navbar extends PureComponent<Props, State> {
  state = {}

  constructor() {
    super();
    if (has('matchMedia', window)) {
      const mq = window.matchMedia('(min-width: 1000px)');
      mq.addListener(this.handleResize);
      this.state = {
        isDesktop: mq.matches,
      };
    }
  }

  handleResize = (mq: MediaQueryList) => {
    this.setState({
      isDesktop: mq.matches,
    });
  }

  render() {
    const ProperMenuComponent = this.state.isDesktop ? DesktopNavbar : MobileNavbar;
    return (
      <ProperMenuComponent>
        <NavLink to="/">Past Trials</NavLink>
        <NavLink to="/how-it-works">How It Works</NavLink>
        <NavLink to="/login">Log In / Sign Up</NavLink>
        <SearchLink to="/search"><SearchIcon /> <SearchLabel>Buscar</SearchLabel></SearchLink>
      </ProperMenuComponent>
    )
  }
}

export default Navbar;
