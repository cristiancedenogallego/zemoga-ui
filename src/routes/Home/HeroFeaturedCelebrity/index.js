import React from 'react';
import { withTheme } from 'styled-components';
import { rgba } from 'polished';
import LikeIcon from 'icons/Like';
import Dislike from 'icons/Dislike';
import CelebrityInfoCard from './CelebrityInfoCard';
import CelebrityText from './CelebrityText';
import CelebrityName from './CelebrityName';
import CelebrityDesc from './CelebrityDesc';
import LinkToWiki from './LinkToWiki';
import InvitationToRating from './InvitationToRating';
import WikiIcon from './WikiIcon';
import RatingButton from './RatingButton';
import CelebrityInfoCardBackground from './CelebrityInfoCardBackground';
import RatingBar from './RatingBar';

type Theme = {
  colors: {
    primary: string,
    secondary: string,
  },
};

function HeroFeaturedCelebrity({ theme } : { theme: Theme }) {
  return (
    <div style={{  paddingTop: 70 }}>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <CelebrityInfoCardBackground />
        <CelebrityInfoCard>
          <CelebrityText>What’s your opinion on</CelebrityText>
          <CelebrityName>Pope Francis?</CelebrityName>
          <CelebrityDesc>
            He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up) 
          </CelebrityDesc>
          <LinkToWiki><WikiIcon /> More information</LinkToWiki>
          <InvitationToRating>What’s Your Verdict?</InvitationToRating>
        </CelebrityInfoCard>
      </div>
      <RatingBar>
        <RatingButton
          backgroundColor={rgba(theme.colors.primary, 0.9)}
          iconComponent={<LikeIcon width="36px" />}
        />
        <RatingButton
          backgroundColor={rgba(theme.colors.secondary, 0.9)}
          iconComponent={<Dislike width="36px" />}
        />
      </RatingBar>
    </div>
  );
}

export default withTheme(HeroFeaturedCelebrity);
