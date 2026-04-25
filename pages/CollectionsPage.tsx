
import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../siteConfig';
import { theme } from '../theme';

const CollectionsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className={theme.spacing.container}>
        <div className="text-center mb-16">
          <h1 className={`${theme.fonts.serif} text-5xl md:text-7xl font-bold mb-4`}>Our Collections</h1>
          <p className="text-lg opacity-60">A curated showcase of our finest work across categories.</p>
        </div>

        <div className="space-y-24">
          {siteConfig.categories.map((cat, idx) => (
            <div key={cat.id} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              <div className="w-full md:w-1/2 aspect-[16/10] overflow-hidden rounded-lg shadow-2xl">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-40">Category 0{idx + 1}</span>
                <h2 className={`${theme.fonts.serif} text-4xl md:text-5xl font-bold`}>{cat.name}</h2>
                <p className="text-lg opacity-70 leading-relaxed">{cat.description}</p>
                <div className="flex flex-wrap gap-3">
                  {cat.subcategories.map(sub => (
                    <Link 
                      key={sub}
                      to={`/category/${cat.id}/${sub.toLowerCase()}`}
                      className="px-4 py-2 bg-[#F9F7F2] border border-gray-100 rounded-full text-sm font-medium hover:bg-brown-50 transition-colors"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
                <div className="pt-4">
                  <Link 
                    to={`/category/${cat.id}`}
                    className={`inline-block px-10 py-4 ${theme.colors.accentBg} text-white font-bold uppercase tracking-widest text-sm shadow-lg`}
                  >
                    View Entire {cat.name} Collection
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;
