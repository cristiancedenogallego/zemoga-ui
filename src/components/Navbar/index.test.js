import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './index';
import has from 'ramda/src/has';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

jest.mock('./DesktopNavbar', () => 'DesktopNavbar');
jest.mock('./MobileNavbar', () => 'MobileNavbar');
jest.mock('ramda/src/has');

const addListener = jest.fn();

describe('Navbar', () => {
  beforeAll(() => {
    has.mockReturnValue(true);
    global.matchMedia = jest.fn();
    global.matchMedia.mockReturnValue({
      matches: true,
      addListener,
    });
  });

  test('if matchMedia not enabled not run size validation', () => {
    has.mockReturnValueOnce(false);
    const wrapper = shallow(
      <Navbar />
    );
    expect(global.matchMedia).not.toHaveBeenCalled();
  });

  test('if matchMedia is available should add listener', () => {
    const wrapper = shallow(
      <Navbar />
    );
    expect(addListener).toHaveBeenCalled();
  });

  test('Should update state with the matchMedia result', () => {
    const wrapper = shallow(
      <Navbar />
    );
    expect(wrapper.state().isDesktop).toBe(true);
  });

  test('Should call addListener with proper param', () => {
    const wrapper = shallow(
      <Navbar />
    );
    expect(addListener).toHaveBeenCalledWith(wrapper.instance().handleResize);
  });

  test('Should render the proper component if is desktop', () => {
    const wrapper = shallow(
      <Navbar />
    );
    wrapper.setState({
      isDesktop: true,
    });
    wrapper.update();
    expect(wrapper.find(DesktopNavbar).length).toBe(1);
  });

  test('Should render the proper component if is mobile', () => {
    const wrapper = shallow(
      <Navbar />
    );
    wrapper.setState({
      isDesktop: false,
    });
    wrapper.update();
    expect(wrapper.find(DesktopNavbar).length).toBe(0);
    expect(wrapper.find(MobileNavbar).length).toBe(1);
  });
})
