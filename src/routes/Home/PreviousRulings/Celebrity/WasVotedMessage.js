// @flow
import React from 'react';
import GhostButton from '../../../../components/GhostButton';
import CelebrityDescription from './CelebrityDescription';

const CelebrityDescriptionWithExtraSpace = CelebrityDescription.extend`
  padding-bottom: 1em;
`;

function WasVotedMessage({ handleSetWasVotedRuling } : { handleSetWasVotedRuling: Function }) {
  return (
    <div>
      <CelebrityDescriptionWithExtraSpace>
        Thank you for voting!
        <br />
      </CelebrityDescriptionWithExtraSpace>
      <GhostButton onClick={() => handleSetWasVotedRuling(false)}>Vote again</GhostButton>
    </div>
  );
}

export default WasVotedMessage;
