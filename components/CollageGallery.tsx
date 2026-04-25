import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../siteConfig';
import { theme } from '../theme';

const CollageGallery: React.FC = () => {
  return (
    <section className={theme.spacing.section}>
      <div className={theme.spacing.container}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:h-[600px]">
          {siteConfig.gallery.map((item, index) => (
            <Link
              key={index}
              to={`/product/${item.productId}`}
              className={`${item.span} relative group overflow-hidden ${theme.radius} bg-gray-100 cursor-pointer`}
            >
              <img
                src={item.src}
                alt="Gallery product"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollageGallery;
