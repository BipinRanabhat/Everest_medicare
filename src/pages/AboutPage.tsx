import React from 'react';
import AboutHero from '../components/about/AboutHero';
import OurStory from '../components/about/OurStory';
import MissionVision from '../components/about/MissionVision';
import OurTeam from '../components/about/OurTeam';
import CTASection from '../components/home/CTASection';

const AboutPage: React.FC = () => {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <OurTeam />
      <CTASection />
    </>
  );
};

export default AboutPage;