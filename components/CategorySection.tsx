
import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../siteConfig';
import { theme } from '../theme';

const CategorySection: React.FC = () => {
  return (
    <section className={`${theme.spacing.section} bg-white`}>
      <div className={theme.spacing.container}>
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-5xl font-bold ${theme.fonts.serif} mb-4`}>Explore Our Universe</h2>
          <div className="h-px w-24 bg-brown-200 mx-auto" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {siteConfig.categories.map((cat) => (
            <Link 
              key={cat.id} 
              to={`/category/${cat.id}`} 
              className="group flex flex-col items-center"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md mb-4 shadow-sm">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform opacity-0 group-hover:opacity-100">
                  <span className="text-white text-xs font-semibold tracking-widest uppercase">Explore Details</span>
                </div>
              </div>
              <h3 className={`text-lg md:text-xl font-bold ${theme.fonts.serif} group-hover:text-brown-700 transition-colors`}>
                {cat.name}
              </h3>
              <p className="text-xs opacity-60 text-center px-4 line-clamp-1 mt-1">{cat.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
