import * as React from 'react';
import styled from 'styled-components';
import MenuIcon from '../../icons/Menu';
import Portal from '../Portal';
import Logo from './Logo';
import Drawer from './Drawer';
import Overlay from './Overlay';


const Header = styled.header`
  background: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1%;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  box-sizing: border-box;
`;

const HamburguerButton = styled.button`
  padding: 5px;
  border: none;
  background: transparent;
`;

type Props = {
  children: React.Node,
}

class MobileNavbar extends React.PureComponent<Props> {
  state = {
    isOpen: false,
  }

  toggleMenuOpen = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  }

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <div>
        <Header>
          <Logo>Rule of Thumb.</Logo>
          <HamburguerButton onClick={this.toggleMenuOpen}>
            <MenuIcon width="30px" />
          </HamburguerButton>
        </Header>
        {isOpen && (
          <Drawer>
            {children}
          </Drawer>
        )}
        {isOpen && (
          <Portal>
            <Overlay onClick={this.toggleMenuOpen} role="presentation" />
          </Portal>
        )}
      </div>
    );
  }
}

export default MobileNavbar;
