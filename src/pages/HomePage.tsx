import React from 'react';
import Hero from '../components/home/Hero';
import ServiceHighlights from '../components/home/ServiceHighlights';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';
import BlogPreview from '../components/home/BlogPreview';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ServiceHighlights />
      <WhyChooseUs />
      <Testimonials />
      <BlogPreview />
      <CTASection />
    </>
  );
};

export default HomePage;