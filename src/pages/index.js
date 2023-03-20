import React from 'react';
import { object } from 'prop-types';
import getQueryValue from '@helpers/getQueryValue';
/**
 * List of local components
 */
import MainLayout from '@components/Layout';
import WelcomeSection from '@components/WelcomeSection';
import HelloSection from '@components/HelloSection';
import WeddingSection from '@components/WeddingSection';
import LocationSection from '@components/LocationSection';
import StorySection from '@components/StorySection';
import PhotoSection from '@components/PhotoSection/Loadable';
import ThankYouSection from '@components/ThankYouSection';
import FooterSection from '@components/FooterSection';
import FloatingMusic from '@components/FloatingMusic/Loadable';

function Home({ location }) {
  const guestName = decodeURIComponent(getQueryValue(location, 'to') || '');
  const isInvitation = getQueryValue(location, 'type') === 'invitation';
  const firstName = guestName.replace(/ .*/, '');
  const codeLink = getQueryValue(location, 'code') || '';
  const finalTicketLink = `code=${codeLink}&name=${guestName}`;

  return (
    <MainLayout>
      <WelcomeSection />
      <HelloSection />
      <WeddingSection />
      <StorySection />
      <LocationSection />
      <PhotoSection />
      <ThankYouSection/>
      <FooterSection isInvitation={isInvitation} />
      <FloatingMusic />
    </MainLayout>
  );
}

Home.propTypes = {
  location: object.isRequired,
};

export default Home;
