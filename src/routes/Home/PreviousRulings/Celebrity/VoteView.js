// @flow
import React from 'react';
import GhostButton from 'components/GhostButton';
import Row from 'components/Row';
import LikeIcon from 'icons/Like';
import DislikeIcon from 'icons/Dislike';
import CelebrityDescription from './CelebrityDescription';
import RatingButton from './RatingButton';

type Props = {
  description: string,
};

function VoteView(props: Props) {
  return (
    <div>
      <CelebrityDescription>{props.description}</CelebrityDescription>
      <Row alignItems="center">
        <RatingButton isGoodRating active>
          <LikeIcon width="18px" />
        </RatingButton>
        <RatingButton>
          <DislikeIcon width="18px" />
        </RatingButton>
        <GhostButton>Vote now</GhostButton>
      </Row>
    </div>
  );
}

export default VoteView;
