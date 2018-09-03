// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import GhostButton from '../../../../components/GhostButton';
import Row from '../../../../components/Row';
import LikeIcon from '../../../../icons/Like';
import ModalButtons from '../../../../components/ModalButtons';
import DislikeIcon from '../../../../icons/Dislike';
import Button from '../../../../components/Button';
import Modal from '../../../../components/Modal';
import CelebrityDescription from './CelebrityDescription';
import RatingButton from './RatingButton';


const VotingMsg = styled.div`
  margin-bottom: 15px;
`;

type Props = {
  description: string,
  handleVote: Function,
};

type State = {
  selectedOption: string,
  voteCompleted: boolean,
  invalidVote: boolean,
};

class VoteView extends PureComponent<Props, State> {
  state = {
    selectedOption: '',
    voteCompleted: false,
    invalidVote: false,
  }

  handleSelectVoteUp = () => {
    this.setState({
      selectedOption: 'up',
    });
  }

  handleSelectVoteDown = () => {
    this.setState({
      selectedOption: 'down',
    });
  }

  toggleVoteCompleted = () => {
    const { voteCompleted, selectedOption } = this.state;
    const { handleVote } = this.props;

    if (voteCompleted) {
      const voteValue = selectedOption === 'up' ? 1 : -1;
      handleVote(voteValue);
    }

    this.setState({
      voteCompleted: !voteCompleted,
    });
  }

  toggleInvalidVote = () => {
    this.setState(state => ({
      invalidVote: !state.invalidVote,
    }));
  }

  runVote = () => {
    const { selectedOption } = this.state;
    if (!selectedOption) {
      this.setState({
        invalidVote: true,
      });
      return;
    }
    this.toggleVoteCompleted();
  }

  render() {
    const { selectedOption, voteCompleted, invalidVote } = this.state;
    const { description } = this.props;

    return (
      <div>
        <CelebrityDescription>{description}</CelebrityDescription>
        <Row alignItems="center">
          <RatingButton
            data-test-class="vote-up"
            isGoodRating
            onClick={this.handleSelectVoteUp}
            active={selectedOption === 'up'}
          >
            <LikeIcon width="18px" />
          </RatingButton>
          <RatingButton
            data-test-class="vote-down"
            onClick={this.handleSelectVoteDown}
            active={selectedOption === 'down'}
          >
            <DislikeIcon width="18px" />
          </RatingButton>
          {voteCompleted && (
            <Modal>
              <VotingMsg data-test-class="vote-confirmation">Thank you for voting!</VotingMsg>
              <ModalButtons>
                <Button primary onClick={this.toggleVoteCompleted}>Ok</Button>
              </ModalButtons>
            </Modal>
          )}
          {invalidVote && (
            <Modal>
              <VotingMsg>Please first select your vote</VotingMsg>
              <ModalButtons>
                <Button primary onClick={this.toggleInvalidVote}>Ok</Button>
              </ModalButtons>
            </Modal>
          )}
          <GhostButton onClick={this.runVote} data-test-class="vote">Vote now</GhostButton>
        </Row>
      </div>
    );
  }
}

export default VoteView;
