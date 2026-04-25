
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote } from 'lucide-react';
import { siteConfig } from '../siteConfig';
import { theme } from '../theme';

const ReviewSection: React.FC = () => {
  return (
    <section className={`${theme.spacing.section} bg-white overflow-hidden`}>
      <div className={theme.spacing.container}>
        <div className="text-center mb-16">
          <span className={`${theme.colors.accent} font-bold tracking-widest uppercase text-xs`}>Trust & Legacy</span>
          <h2 className={`text-3xl md:text-5xl font-bold ${theme.fonts.serif} mt-3`}>30+ Years of Excellence</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.testimonials.map((review) => (
            <div key={review.id} className={`p-8 bg-[#F9F7F2] relative ${theme.radius}`}>
              <Quote className="absolute top-6 right-6 opacity-5" size={60} />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#8B4513" stroke="#8B4513" />
                ))}
              </div>
              <p className="text-base leading-relaxed mb-8 opacity-80 font-medium italic">
                "{review.content}"
              </p>
              <div>
                <h4 className="font-bold text-lg">{review.name}</h4>
                <p className="text-xs uppercase tracking-wider opacity-60 mt-1">{review.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/reviews" 
            className={`inline-block px-8 py-3 border border-brown-300 ${theme.colors.accent} font-bold text-sm uppercase tracking-widest hover:bg-brown-50 transition-colors`}
          >
            Read More Reviews
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
