import React from 'react';
import { object } from 'prop-types';
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

function Home() {
  return (
    <MainLayout>
      <FloatingMusic />
      <WelcomeSection />
      <HelloSection />
      <WeddingSection />
      <StorySection />
      <LocationSection />
      <PhotoSection />
      <ThankYouSection />
      <FooterSection />
    </MainLayout>
  );
}

Home.propTypes = {
  location: object.isRequired,
};

export default Home;
