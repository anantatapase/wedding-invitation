import React from 'react';

import WeddingLogo from '@assets/images/wedding-logo.png';
import Ganesh from '@assets/images/ganesh.png'
import CountContainer from './CountContainer';
import { styContainer, styBackground } from './styles';

function WelcomeSection() {
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
        <p>#AnantYePritHai</p>
        <CountContainer />
      </header >
    </div>
  );
}

WelcomeSection.propTypes = {
};

export default WelcomeSection;
