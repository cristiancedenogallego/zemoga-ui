// @flow
import React from 'react';
import CloseIcon from 'icons/Close';
import GridArea from 'components/GridArea';
import Container from './Container';
import Subtitle from './Subtitle';
import Title from './Title';
import BannerExplanation from './BannerExplanation';

function InvitationBanner() {
  return (
    <Container>
      <GridArea name="titles">
        <Subtitle>Speak out. Be heard.</Subtitle>
        <Title>Be counted</Title>
      </GridArea>
      <GridArea name="explanation">
        <BannerExplanation>
          Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out
          and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
        </BannerExplanation>
      </GridArea>
      <GridArea name="close">
        <CloseIcon width="15" />
      </GridArea>
    </Container>
  );
}

export default InvitationBanner;
