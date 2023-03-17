import React from 'react';
import { object, string, bool, func } from 'prop-types';

import WeddingLogo from '@assets/images/wedding-logo.png';
import Ganesh from '@assets/images/ganesh.png'
import CountContainer from './CountContainer';
import { styContainer, styBackground } from './styles';

function WelcomeSection() {

  try {
    const myAudio = document.getElementById('myAudio');
    // myAudio.play();
  } catch {
    console.error('FAILED_TO_PLAY_MUSIC');
  }


  return (
    <div css={styContainer}>
      <header
        role="banner"
        className="fh5co-cover"
        css={styBackground}
        data-stellar-background-ratio="0.5"
      >
        <img className="ganesh" src={Ganesh} alt="ganesh" />
        <div></div>
        <img className="logo" src={WeddingLogo} alt="wedding-ananta-priti" />
        <h2>The Wedding of</h2>
        <h1 className="title">Ananta &amp; Priti</h1>
        <h2>#AnantPrit</h2>
        <CountContainer />
      </header >
    </div>
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
