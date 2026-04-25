
import React from 'react';
import VisitUsSection from '../components/VisitUsSection';
import { theme } from '../theme';

const VisitUsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className={theme.spacing.container}>
        <div className="text-center mb-16">
          <h1 className={`${theme.fonts.serif} text-5xl md:text-7xl font-bold mb-4`}>Our Showroom</h1>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">
            Experience the craftsmanship in person. Visit our flagship store in the heart of Coimbatore for a personalized consultation.
          </p>
        </div>
      </div>
      <VisitUsSection />
      
      <div className={theme.spacing.container + " mt-24"}>
        <div className="bg-white p-10 md:p-16 rounded-2xl shadow-sm border border-gray-100">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <h3 className="font-bold uppercase tracking-widest text-sm text-brown-500 mb-4">Valet Parking</h3>
                <p className="text-sm opacity-70">Ample parking space available for our customers in the bustling Town Hall area.</p>
              </div>
              <div>
                <h3 className="font-bold uppercase tracking-widest text-sm text-brown-500 mb-4">Lounge Experience</h3>
                <p className="text-sm opacity-70">Comfortable seating and private viewing rooms for bridal consultations.</p>
              </div>
              <div>
                <h3 className="font-bold uppercase tracking-widest text-sm text-brown-500 mb-4">Expert Guidance</h3>
                <p className="text-sm opacity-70">Our senior staff will assist you with patience, explaining every detail of the craft.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default VisitUsPage;
