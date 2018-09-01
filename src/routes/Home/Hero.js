import React from 'react';
import HeroContainer from './HeroContainer';
import HeroFeaturedCelebrity from './HeroFeaturedCelebrity';

function Hero() {
  return (
    <HeroContainer>
      <HeroFeaturedCelebrity />
      <div />
    </HeroContainer>
  );
}

export default Hero;
