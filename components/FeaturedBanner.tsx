
import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../theme';

const FeaturedBanner: React.FC = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden">
      <img 
        src="public\bridal-category.png" 
        alt="Bridal Collection" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className={`${theme.spacing.container} relative z-10`}>
        <div className="max-w-xl text-white">
          <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold tracking-[0.3em] uppercase mb-6">
            The Wedding Edit
          </span>
          <h2 className={`text-5xl md:text-7xl font-bold ${theme.fonts.serif} mb-6 leading-tight`}>
            Majestic <br />Bridal Couture
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed font-light">
            Each set is crafted with patience and precision, ensuring you look breathtaking on your special day.
          </p>
          <Link 
            to="/category/bridal"
            className="px-12 py-5 bg-transparent border-2 border-white/50 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            Explore Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBanner;
