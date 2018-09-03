// @flow
import React from 'react';
import Container from './Container';
import TimeToEndLabel from './TimeToEndLabel';
import TimeToEndDays from './TimeToEndDays';
import FontLight from '../../../../components/FontLight';

function TimeToEndBar() {
  return (
    <Container>
      <TimeToEndLabel>CLOSING IN</TimeToEndLabel>
      <TimeToEndDays>
        22&nbsp;
        <FontLight>days</FontLight>
      </TimeToEndDays>
    </Container>
  );
}

export default TimeToEndBar;
