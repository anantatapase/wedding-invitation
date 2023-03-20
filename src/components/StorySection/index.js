import React, { Fragment } from 'react';

import StoryItem from './StoryItem';
import { stories } from './stories-data';

function StorySection() {
  const renderStories = () => {
    return stories.map((s, index) => <StoryItem key={index} {...s} isInverted={index % 2 === 1} />);
  };

  return (
    <Fragment>
      <div id="fh5co-couple-story">
        <div className="container">
            <div className="text-center fh5co-heading animate-box">
              <h2 className="main-font">Events</h2>
              <p>Our special events are...</p>
            </div>
          <div className="container">
            <ul className="timeline animate-box">{renderStories()}</ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default StorySection;
