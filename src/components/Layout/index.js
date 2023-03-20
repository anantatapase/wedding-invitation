import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';

import Favicon from '@assets/images/dinda-indra.png';
import '@assets/css/icomoon.css';
import '@assets/css/bootstrap.css';
import '@assets/css/style.css';

const IMAGE_URL = ``;
const META_DESCRIPTION = `You're invited to witness Priti and Ananta's Wedding. Join Us in Celebrations! 🎉`;

function MainLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Priti ❤️ Ananta Wedding</title>

        {/* Favicon */}
        <link rel="icon" type="image/png" href={Favicon} />

        {/* font and SEO tags */}
        <meta property="og:title" content="The Wedding of Priti & Ananta ♥" />
        <meta property="og:image" content={IMAGE_URL} />
        <meta property="og:url" content="https://anantprit.netlify.app" />
        <meta property="og:site_name" content="The Wedding of Priti & Ananta ♥" />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta name="twitter:title" content="The Wedding of Priti & Ananta ♥" />
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
