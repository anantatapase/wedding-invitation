import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from '../HelloSection/styles';

function FooterSection({ isInvitation }) {
  return (
    <Fragment>
      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>
                <small className="block">
                  Code and Ideas {' '}
                  <a href="https://github.com/idindrakusuma/thekusuma" target="_blank" rel="noreferrer">
                    Github, @indrakusuma and ChatGPT
                  </a>
                </small>
                <small className="block">
                  Images, Music and Icons {' '}
                  <a href="https://www.google.com/images" target="_blank" rel="noreferrer">
                    Google Images and Youtube
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);
