import React from 'react';
import HeroContainer from './HeroContainer';
import HeroFeaturedCelebrity from './HeroFeaturedCelebrity';
import Container from 'components/Container';
import TimeToEndBar from './TimeToEndBar';

function Hero() {
  return (
    <HeroContainer id="hero-container">
      <Container>
        <HeroFeaturedCelebrity />
      </Container>
      <TimeToEndBar />
    </HeroContainer>
  );
}

export default Hero;
