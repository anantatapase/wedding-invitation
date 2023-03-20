import React from 'react';
import { string, bool } from 'prop-types';
import { Link } from 'gatsby';

import { styWrapper, styFlex } from './styles';

function ConfirmationSection({ isInvitation, guestName, codeLink }) {
  // if (!isInvitation) return null;

  return (
    <div id="fh5co-started" css={styWrapper}>
      <div className="container">
          <div className="text-center fh5co-heading">
            <h2 className="main-font"></h2>
            <p className="sub-title" style={{ color: '#f4efeffc' }}>
              <strong>Shree Celebrations and Resort</strong>
              <br />
              NH7, Kolhi, Jam Road, Hinganghat, Maharashtra
            </p>
          </div>
        </div>
      </div>
  );
}

ConfirmationSection.propTypes = {
  codeLink: string.isRequired,
  isInvitation: bool.isRequired,
  guestName: string.isRequired,
};

export default React.memo(ConfirmationSection);
