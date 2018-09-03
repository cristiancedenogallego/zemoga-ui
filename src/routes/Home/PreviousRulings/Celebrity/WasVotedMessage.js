// @flow
import React from 'react';
import CelebrityDescription from './CelebrityDescription';
import GhostButton from 'components/GhostButton';

const CelebrityDescriptionWithExtraSpace = CelebrityDescription.extend`
  padding-bottom: 1em;
`;

function WasVotedMessage() {
  return (
    <div>
      <CelebrityDescriptionWithExtraSpace>
        Thank you for voting!
        <br />
      </CelebrityDescriptionWithExtraSpace>
      <GhostButton>Vote again</GhostButton>
    </div>
  );
}

export default WasVotedMessage;
