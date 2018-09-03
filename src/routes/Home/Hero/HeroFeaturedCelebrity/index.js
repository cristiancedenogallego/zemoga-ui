import React from 'react';
import styled, { withTheme } from 'styled-components';
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

const FeaturedContainer = styled.div`
  @media (min-width: 700px) {
    margin-top: 70px;
  }
`;

const FeaturedCelebrityInfo = styled.div`
  position: relative;
`;

function HeroFeaturedCelebrity({ theme } : { theme: Theme }) {
  return (
    <FeaturedContainer>
      <FeaturedCelebrityInfo>
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
      </FeaturedCelebrityInfo>
      <RatingBar>
        <RatingButton
          backgroundColor={theme.colors.primary}
          iconComponent={<LikeIcon />}
        />
        <RatingButton
          backgroundColor={theme.colors.secondary}
          iconComponent={<Dislike />}
        />
      </RatingBar>
    </FeaturedContainer>
  );
}

export default withTheme(HeroFeaturedCelebrity);
