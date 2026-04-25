
import React from 'react';
import Hero from '../components/Hero';
import CollageGallery from '../components/CollageGallery';
import CategorySection from '../components/CategorySection';
import NewArrivalsCarousel from '../components/NewArrivalsCarousel';
import FeaturedBanner from '../components/FeaturedBanner';
import ReviewSection from '../components/ReviewSection';
import VisitUsSection from '../components/VisitUsSection';

const HomePage: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <CollageGallery />
      <CategorySection />
      <NewArrivalsCarousel />
      <FeaturedBanner />
      <ReviewSection />
      <VisitUsSection />
    </div>
  );
};

export default HomePage;
