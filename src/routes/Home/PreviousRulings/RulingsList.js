// @flow
import React from 'react';
import RulingsGrid from './RulingsGrid';
import Celebrity from './Celebrity';

function RulingsList() {
  return (
    <RulingsGrid>
      <Celebrity
        name="Kanye West"
        description="Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero."
        publishedDate="2018-09-02"
        topic="Entertainment"
        upVotes={60}
        downVotes={40}
        imageUrl="/images/kanye_west.jpg"
      />
      <Celebrity
        name="Kanye West"
        description="Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero."
        publishedDate="2018-09-02"
        topic="Entertainment"
        upVotes={30}
        downVotes={70}
        wasVoted
        imageUrl="/images/kanye_west.jpg"
      />
    </RulingsGrid>
  );
}

export default RulingsList;
