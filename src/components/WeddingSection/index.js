import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import SaveTheDateButton from './ButtonLive';
import { styWrapper } from './styles';

function WeddingSection() {
  return (
    <Fragment>
      <div id="fh5co-event" className="text-center" css={styWrapper}>
        <div className="fh5co-heading">
          <h2 className="main-font main-font__wedding">Save the Date</h2>
          <span>
            We request the pleasure of your company at our wedding ceremony on...
          </span>
        </div>
        <div className="event">
          <WeddingInfoBox
            title="Wedding"
            time="7pm Onwards"
            date="Friday, 12 May 2023"
            location="Shree Celebration and Resort, Hinganghat"
            description=""
          />
        </div>
        <div className="button" >
          <div><SaveTheDateButton /></div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
