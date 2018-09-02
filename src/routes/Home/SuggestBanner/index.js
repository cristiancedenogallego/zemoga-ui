// @flow
import React from 'react';
import Background from './Background';
import SuggestBannerText from './SuggestBannerText';
import GhostButton from './GhostButton';

function SuggestBanner() {
  return (
    <Background>
      <SuggestBannerText>
        Is there anyone else you would want us to add?
      </SuggestBannerText>
      <GhostButton>Submit a Name</GhostButton>
    </Background>
  );
}

export default SuggestBanner;
