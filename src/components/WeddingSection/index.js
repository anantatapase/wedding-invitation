import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import Button from '../BouncingButton';
import { styWrapper } from './styles';
import { GOOGLE_CALENDAR_LINK } from '@/constants'

function WeddingSection() {
  return (
    <Fragment>
      <div id="fh5co-event" className="text-center" css={styWrapper}>
        <div className="fh5co-heading">
          <h2 className="main-font">Save the Date</h2>
          <p style={{ color: '#f4efeffc' }}>
            We request the pleasure of your company at our wedding ceremony on...
          </p>
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
          <div>
            <Button
              link={GOOGLE_CALENDAR_LINK}
              title="Add to calender" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
