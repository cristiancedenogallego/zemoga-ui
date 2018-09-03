// @flow
import React from 'react';
import moment from 'moment';
import DislikeIcon from '../../../../icons/Dislike';
import LikeIcon from '../../../../icons/Like';
import CelebrityContainer from './CelebrityContainer';
import CelebrityName from './CelebrityName';
import RatingButton from './RatingButton';
import ProgressValue from './ProgressValue';
import ProgressBar from './ProgressBar';
import PercentSign from './PercentSign';
import RatingBar from './RatingBar';
import PublishInfo from './PublishInfo';
import PublishDate from './PublishDate';
import VoteView from './VoteView';
import WasVotedMessage from './WasVotedMessage';

type Props = {
  name: string,
  description: string,
  publishedDate: string,
  topic: string,
  upVotes: number,
  downVotes: number,
  imageUrl: string,
  wasVoted: boolean,
  handleVote: Function,
  handleSetWasVotedRuling: Function,
};

const RatingStatus = RatingButton.withComponent('div').extend`
  position: absolute;
  bottom: 230px;
  left: 0;
`;

function Celebrity({
  downVotes,
  upVotes,
  imageUrl,
  name,
  publishedDate,
  topic,
  wasVoted,
  handleSetWasVotedRuling,
  description,
  handleVote,
}: Props) {
  const totalVotes = downVotes + upVotes;
  const percentPositiveVotes = Math.round(totalVotes > 0 ? (upVotes * 100) / totalVotes : 0);
  const isGoodRating = percentPositiveVotes > 50;
  const percentNegativeVotes = Math.round(totalVotes > 0 ? 100 - percentPositiveVotes : 0);
  return (
    <CelebrityContainer imageUrl={imageUrl}>
      <CelebrityName>{name}</CelebrityName>
      <PublishInfo>
        <PublishDate>
          {moment(publishedDate).fromNow()}
        </PublishDate>
        <span>In </span>
        <span>{topic}</span>
      </PublishInfo>
      {wasVoted && (
        <WasVotedMessage handleSetWasVotedRuling={handleSetWasVotedRuling} />
      )}
      {!wasVoted && (
        <VoteView description={description} handleVote={handleVote} />
      )}
      <RatingStatus isGoodRating={isGoodRating}>
        {isGoodRating && <LikeIcon width="18px" />}
        {!isGoodRating && <DislikeIcon width="18px" />}
      </RatingStatus>
      <RatingBar>
        <ProgressBar progress={percentPositiveVotes} primary>
          <LikeIcon width="28px" />
          <ProgressValue>{percentPositiveVotes}</ProgressValue>
          <PercentSign>%</PercentSign>
        </ProgressBar>
        <ProgressBar progress={percentNegativeVotes} secondary>
          <ProgressValue>{percentNegativeVotes}</ProgressValue>
          <PercentSign>%</PercentSign>
          <DislikeIcon width="28px" />
        </ProgressBar>
      </RatingBar>
    </CelebrityContainer>
  );
}

export default Celebrity;
