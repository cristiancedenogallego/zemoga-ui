// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Portal from 'components/Portal';
import papaJPG from '../papa.jpg';

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const BackgroundColor = Background.extend`
  background: rgba(51,51,51,0.45);
`;

const BackgroundBlur = Background.extend`
  z-index: 0;
  background-repeat: no-repeat;
  position: absolute;
  background-size: cover;
  /* backdrop-filter: blur(10px); */
  filter: blur(30px);
`;

type Props = {};

class CelebrityInfoCardBackground extends PureComponent<Props> {
  ref: ?HTMLDivElement;

  blurRef: ?HTMLDivElement;

  componentDidMount() {
    window.addEventListener('resize', this.handleUpdateBlurEffect);
    this.handleUpdateBlurEffect();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleUpdateBlurEffect);
  }

  handleUpdateBlurEffect = () => {
    const hero = document.getElementById('hero-container');
    if (this.ref && this.blurRef && hero) {
      const rect = this.ref.getBoundingClientRect();
      const heroRect = hero.getBoundingClientRect();
      const bodyRect = document.body.getBoundingClientRect();
      const offset = rect.top - bodyRect.top;
      const bottomOffset = rect.bottom - bodyRect.top;
      const style = window.getComputedStyle(hero, false);
      this.blurRef.style = { ...style };
      this.blurRef.style.backgroundImage = `linear-gradient(rgba(51,51,51,0.45), rgba(51,51,51,0.45)), ${style.backgroundImage}`;
      this.blurRef.style.clip = `rect(${offset}px, ${rect.right}px, ${bottomOffset}px, ${rect.left}px)`;
    }
  }

  render() {
    return [
      <BackgroundColor
        key="bg1"
        innerRef={ref => { this.ref = ref; }}
      />,
      <Portal key="bg2">
        <BackgroundBlur
          innerRef={ref => { this.blurRef = ref; }}
        />
      </Portal>,
    ];
  }
}

export default CelebrityInfoCardBackground;
