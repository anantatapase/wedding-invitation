import React from 'react';

import Bride from '@assets/images/she.jpg';
import Groom from '@assets/images/he.jpg';

import { styWrapper } from './styles';

function HelloSection() {
  return (
    <div id="fh5co-couple" css={styWrapper}>
      <div className="container">
        <div className="row">
          <div className="mb-4 text-center fh5co-heading">
            <h2 className="main-font">Hello!</h2>
            <p className="invite-title">
              Meet the bride and groom...
            </p>
          </div>
        </div>
        <div className="couple-wrap">
          <div className="couple-half">
            <div className="groom">
              <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
            </div>
            <div className="desc-groom">
              <h3 className="main-font">Ananta Tapase</h3>
              <p className="parent-name">
                Son of Narendra <br />& Shanta Tapase
              </p>
            </div>
          </div>
          <p className="heart-1">
            <p className="pulse text-center">
              <i className="icon-heart2"></i>
            </p>
          </p>
          <div className="heart-2">
            <i className="icon-heart2"></i>
          </div>
          <div className="couple-half">
            <div className="bride">
              <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
            </div>
            <div className="desc-bride">
              <h3 className="main-font">Priti Mishra</h3>
              <p className="parent-name parent-name__top">
                Daughter of Apsarnath <br />& Neelam Mishra
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelloSection;
