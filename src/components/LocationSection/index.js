import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK } from '@/constants';
import { styWrapper } from './styles';
import Button from '../BouncingButton';

function LocationSection() {
  return (
    <Fragment>
      <div id="fh5co-event" className="text-center" css={styWrapper}>
        <div className="container">
          <div className="fh5co-heading animate-box">
            <h2 className="main-font">Location</h2>
            <p className="sub-title" style={{ color: '#f4efeffc' }}>
              <strong>Shree Celebrations and Resort</strong>
              <br />
              NH7, Kolhi, Jam Road, Hinganghat, Maharashtra
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7920.293266961091!2d110.4250066322774!3d-6.992004594949059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708ca11d0e6f61%3A0x8c359fe27c58195d!2sHARRIS%20Hotel%20Sentraland%20Semarang!5e0!3m2!1sen!2sid!4v1590977401700!5m2!1sen!2sidhttps://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29884.17994638868!2d78.8538072!3d20.5667095!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd365bfcf47e983%3A0xd1c93e9238a70041!2sSHREE%20Celebrations%20and%20Resorts!5e0!3m2!1sen!2sin!4v1679320931038!5m2!1sen!2sin"
            width="95%"
            style={{ maxWidth: '950px', border: '0' }}
            height="300"
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
            title="Google Maps - Ananta & Priti Wedding"
          ></iframe>
          <div className='button'>
            <Button link={GOOGLE_MAPS_LINK} title="Get the direction" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);
