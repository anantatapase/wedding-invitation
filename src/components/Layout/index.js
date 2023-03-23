import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';

import Favicon from '@assets/images/favicon-logo.png';
import '@assets/css/icomoon.css';
import '@assets/css/bootstrap.css';
import '@assets/css/style.css';

const IMAGE_URL = `https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEOQIm078zfCgAdy1k0e8xz3-byYRj-Ex91TKvZLe4G2FL5PbhfiShI7lzK_F_NqtZb2waOTuw0KcXFd16sSLMkLwIK0AWw`;
const META_DESCRIPTION = `You're invited to witness Ananta and Priti's Wedding. Join Us in Celebrations! 🎉`;

function MainLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Priti ❤️Ananta Wedding</title>

        {/* Favicon */}
        <link rel="icon" type="image/png" href={Favicon} />

        {/* font and SEO tags */}
        {/* <!-- Site Name, Title, and Description to be displayed --> */}
        <meta property="og:site_name" content="Priti ❤️Ananta Wedding" />
        <meta property="og:title" content="The Wedding of Priti & Ananta" />
        <meta property="og:description" content={META_DESCRIPTION} />

        {/* <!-- Image to display fb or WhatsApp--> */}
        <meta property="og:image" itemprop="image" content={IMAGE_URL} />
        <meta property="og:image:secure_url" itemprop="image" content={IMAGE_URL} />
        <meta property="og:image:type" content="image/jpeg"></meta>
        <meta property="og:image:width" content="256" />
        <meta property="og:image:height" content="256" />

        {/* <!-- Website to visit when clicked in fb or WhatsApp--> */}
        <meta property="og:url" content="https://anantprit.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:updated_time" content="1679551738" />

        <meta name="twitter:title" content="The Wedding of Priti & Ananta" />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content={IMAGE_URL} />
        <meta name="twitter:url" content="https://anantprit.netlify.app" />
        <meta name="twitter:card" content="summary" />

        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
      </Helmet>
      <div id="page">{children}</div>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
