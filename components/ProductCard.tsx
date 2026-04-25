
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { theme } from '../theme';
import { getWhatsAppLink } from '../utils';

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const currentUrl = `${window.location.origin}/#/product/${product.id}`;
  
  return (
    <div className={`group flex flex-col bg-white overflow-hidden ${theme.radius} ${theme.shadows} hover:shadow-md transition-shadow`}>
      <Link to={`/product/${product.id}`} className="relative aspect-square overflow-hidden bg-gray-50">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.tag && (
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-brown-800">
            {product.tag}
          </span>
        )}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-2 mb-1">
          <Link to={`/product/${product.id}`} className="hover:text-brown-700">
            <h3 className={`font-bold ${theme.fonts.serif} text-lg leading-tight line-clamp-1`}>{product.name}</h3>
          </Link>
          <ArrowUpRight size={16} className="opacity-40 group-hover:opacity-100 transition-opacity" />
        </div>
        <p className="text-xs opacity-60 uppercase tracking-wider mb-3">
          {product.subcategory || product.category}
        </p>
        
        <div className="mt-auto pt-4 flex items-center justify-between gap-3 border-t border-gray-50">
          <span className="text-sm font-bold text-brown-800">{product.price}</span>
          <a 
            href={getWhatsAppLink(product.name, currentUrl)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-green-700 hover:text-green-800 transition-colors"
          >
            <MessageCircle size={14} />
            Enquire
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
