
import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../theme';

const Hero: React.FC = () => {
  return (
   <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax effect simulation via static bg */}
      <img 
        src="hero-jewel-1.png" 
        alt="Hero Background" 
        className="absolute inset-0 w-full h-full object-cover scale-110"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      
      {/* Content */}
      <div className={`${theme.spacing.container} relative z-10 text-center text-white mt-10`}>

        <div className="max-w-4xl mx-auto space-y-8">
          <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold tracking-[0.4em] uppercase animate-fade-in">
            Established 1994
          </span>
          <h1 className={`${theme.fonts.serif} text-6xl md:text-9xl font-bold leading-tight tracking-tight drop-shadow-2xl`}>
            Legacy of <br />
            <span className="italic font-light">Elegance</span>
          </h1>
          <p className="text-lg md:text-2xl font-light opacity-90 max-w-2xl mx-auto leading-relaxed">
            Shriraam Jewellery brings you timeless masterpieces crafted with purity, trust, and exceptional artistry.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/collections" 
              className="px-12 py-5 bg-transparent border-2 border-white/50 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Explore Collection
            </Link>
            <Link 
              to="/visit" 
              className="px-12 py-5 bg-transparent border-2 border-white/50 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Our Showroom
            </Link>
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

export default Hero;
