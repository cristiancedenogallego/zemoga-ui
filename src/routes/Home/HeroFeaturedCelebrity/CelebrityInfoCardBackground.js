// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';
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
  position: fixed;
  background-size: cover;
  /* backdrop-filter: blur(10px); */
  filter: blur(30px);
`;

class CelebrityInfoCardBackground extends PureComponent {
  state = {};

  componentDidMount() {
    const hero = document.getElementById('hero-container');
    if (this.ref && hero) {
      const rect = this.ref.getBoundingClientRect();
      const heroRect = hero.getBoundingClientRect();
      const style = hero.currentStyle || window.getComputedStyle(hero, false);
      this.blurRef.style = { ...style };
      this.blurRef.style.backgroundImage = `linear-gradient(rgba(51,51,51,0.45), rgba(51,51,51,0.45)), ${style.backgroundImage}`;
      this.blurRef.style.clip = `rect(${rect.top}px, ${rect.right}px, ${rect.bottom}px, ${rect.left}px)`;
    }
  }

  render() {
    return [
      <BackgroundColor
        key="bg2"
        innerRef={ref => { this.ref = ref; }}
      />,
      <BackgroundBlur
        key="bg2"
        innerRef={ref => { this.blurRef = ref; }}
      />
    ];
  }
}

export default CelebrityInfoCardBackground;
