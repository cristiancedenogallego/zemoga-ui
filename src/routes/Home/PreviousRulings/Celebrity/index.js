// @flow
import React from 'react';
import LikeIcon from 'icons/Like';
import DislikeIcon from 'icons/Dislike';
import moment from 'moment';
import CelebrityContainer from './CelebrityContainer';
import CelebrityName from './CelebrityName';
import CelebrityDescription from './CelebrityDescription';
import ViewFullReportButton from './ViewFullReportButton';
import RatingStatus from './RatingStatus';
import ProgressValue from './ProgressValue';
import ProgressBar from './ProgressBar';
import PercentSign from './PercentSign';
import RatingBar from './RatingBar';
import PublishInfo from './PublishInfo';
import PublishDate from './PublishDate';

type Props = {
  name: string,
  description: string,
  publishedDate: string,
  topic: string,
  upVotes: number,
  downVotes: number,
  imageUrl: string,
};


function Celebrity(props: Props) {
  const totalVotes = props.downVotes + props.upVotes;
  const percentPositiveVotes = (props.upVotes * 100) / totalVotes;
  const isGoodRating = percentPositiveVotes > 50;
  const percentNegativeVotes = 100 - percentPositiveVotes;
  return (
    <CelebrityContainer imageUrl={props.imageUrl}>
      <CelebrityName>{props.name}</CelebrityName>
      <CelebrityDescription>{props.description}</CelebrityDescription>
      <ViewFullReportButton>View Full Report</ViewFullReportButton>
      <RatingStatus isGoodRating={isGoodRating}>
        {isGoodRating && <LikeIcon width="18px" />}
        {!isGoodRating && <DislikeIcon width="18px" />}
      </RatingStatus>
      <PublishInfo>
        <PublishDate>
          {moment(props.publishDate).fromNow()}
        </PublishDate>
        <div>
          In {props.topic}
        </div>
      </PublishInfo>
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
