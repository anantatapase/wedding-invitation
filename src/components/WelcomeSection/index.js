import React from 'react';
import { object, string, bool, func } from 'prop-types';

import WeddingLogo from '@assets/images/wedding-logo.png';
import CountContainer from './CountContainer';
import { styWrapper, styHero, styBackground } from './styles';

function WelcomeSection() {

  try {
    const myAudio = document.getElementById('myAudio');
    // myAudio.play();
  } catch {
    console.error('FAILED_TO_PLAY_MUSIC');
  }


  return (
    <div css={styHero}>
      <header
        role="banner"
        className="fh5co-cover"
        css={styBackground}
        data-stellar-background-ratio="0.5"
      >
        {/* <div className="overlay"></div> */}
        <div className="container">
          <div className="row" css={styWrapper}>
            <div className="col-md-8 col-md-offset-2 text-center">
              <img src={WeddingLogo} alt="wedding-dinda-indra" />
              <h2>The Wedding of</h2>
              <h1 className="title">Ananta &amp; Priti</h1>
              <h2>#AnantPrit</h2>
              <CountContainer />
            </div>
          </div>
        </div>
      </header >
    </div >
  );
}

WelcomeSection.propTypes = {
  guestName: string.isRequired,
  isInvitation: bool.isRequired,
  isAnonymGuest: bool.isRequired,
  location: object.isRequired,
  codeLink: string,
  onClickDetail: func.isRequired,
};

WelcomeSection.defaultProps = {
  codeLink: '',
};

export default WelcomeSection;
