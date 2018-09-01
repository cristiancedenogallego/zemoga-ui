// @flow
import React, { PureComponent } from 'react';
import Hero from './Hero';

type Props = {};

class Home extends PureComponent<Props> {
  render() {
    return (
      <div>
        <Hero />
      </div>
    );
  }
}

export default Home;
