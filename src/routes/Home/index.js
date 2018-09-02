// @flow
import React, { PureComponent } from 'react';
import Container from 'components/Container';
import Hero from './Hero';
import InvitationBanner from './InvitationBanner';
import PreviousRulings from './PreviousRulings';
import SuggestBanner from './SuggestBanner';

type Props = {};

class Home extends PureComponent<Props> {
  render() {
    return (
      <div>
        <Hero />
        <Container>
          <div>
            <InvitationBanner />
            <PreviousRulings />
            <SuggestBanner />
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
