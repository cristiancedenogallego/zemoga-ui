// @flow
import React, { PureComponent } from 'react';
import RulingsGrid from './RulingsGrid';
import Celebrity from './Celebrity';

type Props = {};

type State = {
  rulings: Object[],
  isError: boolean,
}

class RulingsList extends PureComponent<Props, State> {
  state = {
    rulings: [],
    isError: false,
  };

  componentDidMount() {
    this.loadData();
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

  render() {
    return (
      <RulingsGrid>
        {this.state.rulings.map(ruling => (
          <Celebrity
            key={ruling.id}
            name={ruling.name}
            description={ruling.description}
            publishedDate={ruling.publishedDate}
            topic={ruling.topic}
            upVotes={60}
            downVotes={40}
            imageUrl={ruling.imageUrl}
          />
        ))}
      </RulingsGrid>
    );
  }
}

export default RulingsList;
