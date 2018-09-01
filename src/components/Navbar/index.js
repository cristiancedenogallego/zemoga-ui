// @flow
import React, { PureComponent } from 'react';
import has from 'ramda/src/has';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

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
    if (this.state.isDesktop) {
      return (
        <DesktopNavbar />
      );
    }
    return <MobileNavbar />;
  }
}

export default Navbar;
