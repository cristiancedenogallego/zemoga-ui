// @flow
import React, { PureComponent } from 'react';
import path from 'ramda/src/path';
import RulingsGrid from './RulingsGrid';
import Celebrity from './Celebrity';

type Props = {};

type State = {
  rulings: Object[],
  isError: boolean,
  votes: Object,
  wasVoted: Object,
}

class RulingsList extends PureComponent<Props, State> {
  state = {
    rulings: [],
    isError: false,
    votes: {},
    wasVoted: {},
  };

  componentDidMount() {
    this.loadData();
    this.loadVotes();
  }

  loadData = async () => {
    try {
      const response = await fetch('/data.json');
      const rulings = await response.json();
      this.setState({
        rulings,
      });
    } catch (ex) {
      this.setState({
        isError: true,
      });
    }
  }

  loadVotes = () => {
    if (typeof Storage !== 'undefined') {
      const jsonVotes = localStorage.getItem('votes');
      const votes = jsonVotes ? JSON.parse(jsonVotes) : {};
      this.setState({
        votes,
      });
    }
  }

  handleVote = (rulingId: number) => (voteValue: -1 | 1) => {
    const { votes } = this.state;
    const nextVotes = { ...votes };
    const currentRulingVotes = nextVotes[rulingId] || {};
    const currentRulingVotesUp = currentRulingVotes.up || 0;
    const currentRulingVotesDown = currentRulingVotes.down || 0;
    const nextRulingVotesUp = voteValue === 1 ? currentRulingVotesUp + 1 : currentRulingVotesUp;
    const nextRulingVotesDown = (
      voteValue === -1 ? currentRulingVotesDown + 1 : currentRulingVotesDown
    );
    const nextRulingVotes = {
      up: nextRulingVotesUp,
      down: nextRulingVotesDown,
    };
    nextVotes[rulingId] = nextRulingVotes;
    localStorage.setItem('votes', JSON.stringify(nextVotes));

    this.setWasVotedRuling(rulingId)(true);
    this.setState({
      votes: nextVotes,
    });
  };

  setWasVotedRuling = (rulingId: number) => (wasVoted: boolean) => {
    this.setState((state) => {
      const nextWasVoted = { ...state.wasVoted };
      nextWasVoted[rulingId] = wasVoted;
      return {
        wasVoted: nextWasVoted,
      };
    });
  };

  render() {
    const { wasVoted, rulings } = this.state;
    return (
      <RulingsGrid>
        {rulings.map(ruling => (
          <Celebrity
            key={ruling.id}
            name={ruling.name}
            description={ruling.description}
            publishedDate={ruling.publishedDate}
            topic={ruling.topic}
            upVotes={path(['votes', ruling.id, 'up'], this.state) || 0}
            downVotes={path(['votes', ruling.id, 'down'], this.state) || 0}
            imageUrl={ruling.imageUrl}
            handleVote={this.handleVote(ruling.id)}
            wasVoted={wasVoted[ruling.id]}
            handleSetWasVotedRuling={this.setWasVotedRuling(ruling.id)}
          />
        ))}
      </RulingsGrid>
    );
  }
}

export default RulingsList;
