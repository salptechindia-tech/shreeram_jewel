
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { siteConfig } from '../siteConfig';
import { theme } from '../theme';
import ProductCard from '../components/ProductCard';

const CategoryListingPage: React.FC = () => {
  const { cat } = useParams<{ cat: string }>();
  const category = siteConfig.categories.find(c => c.id === cat);
  const products = siteConfig.products.filter(p => p.category === cat);

  if (!category) return <div className="pt-32 text-center">Category not found</div>;

  return (
    <div className="pt-32 pb-24">
      {/* Category Header */}
      <div className="relative h-[40vh] flex items-center justify-center mb-16 overflow-hidden">
        <img src={category.image} alt={category.name} className="absolute inset-0 w-full h-full object-cover blur-sm opacity-100" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white">
          <h1 className={`${theme.fonts.serif} text-5xl md:text-7xl font-bold`}>{category.name}</h1>
          <p className="mt-4 text-lg opacity-80 max-w-xl mx-auto">{category.description}</p>
        </div>
      </div>

      <div className={theme.spacing.container}>
        {/* Filter Bar (Placeholder) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 border-b border-gray-200 pb-8">
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 w-full md:w-auto">
            <Link to={`/category/${cat}`} className="px-4 py-2 bg-brown-800 text-white rounded-full text-sm font-bold shadow-md">All</Link>
            {category.subcategories.map(sub => (
              <Link 
                key={sub} 
                to={`/category/${cat}/${sub.toLowerCase()}`}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold whitespace-nowrap hover:bg-gray-50 transition-colors"
              >
                {sub}
              </Link>
            ))}
          </div>
          <span className="text-sm opacity-60 font-medium">{products.length} Products Found</span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.length > 0 ? (
            products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full py-24 text-center">
              <p className="text-xl opacity-40">No products found in this category yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryListingPage;
