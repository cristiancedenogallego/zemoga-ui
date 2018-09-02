// @flow
import React from 'react';
import CloseIcon from 'icons/Close';
import Container from './Container';
import Subtitle from './Subtitle';
import Title from './Title';
import BannerExplanation from './BannerExplanation';

function InvitationBanner() {
  return (
    <Container>
      <div style={{ textAlign: 'left' }}>
        <Subtitle>Speak out. Be heard.</Subtitle>
        <Title>Be counted</Title>
      </div>
      <div>
        <BannerExplanation>
          Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out
          and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
        </BannerExplanation>
      </div>
      <CloseIcon width="15" />
    </Container>
  );
}

export default InvitationBanner;
