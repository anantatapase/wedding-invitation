import React from 'react';

import { styWrapper } from './styles';

function ThankYouSection() {
  return (
    <div id="fh5co-started" css={styWrapper}>
      <div className="container text-center">
        <div className="fh5co-heading">
          <h2 className="main-font">Awaiting!</h2>
          <p style={{ color: '#f4efeffc' }}>
            Your gracious presence
          </p>
        </div>
        <span style={{ color: '#f4efeffc' }}>
          With gratitude to God and joy in our hearts, we along with our families request the honor of your presence at our wedding.
          We would be delighted to have your company as we unite in marriage, surrounded by our loved ones.
        </span>
      </div>
    </div>
  );
}

ThankYouSection.propTypes = {
};

export default React.memo(ThankYouSection);
