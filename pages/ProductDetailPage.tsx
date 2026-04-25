
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MessageCircle, Phone, MapPin, Share2, Info, CheckCircle } from 'lucide-react';
import { siteConfig } from '../siteConfig';
import { theme } from '../theme';
import { getWhatsAppLink } from '../utils';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = siteConfig.products.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) return <div className="pt-32 text-center">Product not found</div>;

  const currentUrl = window.location.href;

  return (
    <div className="pt-32 pb-24">
      <div className={theme.spacing.container}>
        <div className="mb-10">
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider opacity-40">
            <Link to="/" className="hover:opacity-100">Home</Link>
            <span>/</span>
            <Link to={`/category/${product.category}`} className="hover:opacity-100">{product.category}</Link>
            <span>/</span>
            <span className="text-brown-800 opacity-100">{product.name}</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Images */}
          <div className="space-y-6">
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-2xl border border-gray-100">
              <img 
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setActiveImage(idx)}
                    className={`aspect-square rounded-md overflow-hidden border-2 transition-all ${
                      activeImage === idx ? 'border-brown-600 scale-95 shadow-inner' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${product.name} thumbnail ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-brown-50 text-brown-800 text-[10px] font-bold uppercase tracking-widest rounded mb-4">
                {product.subcategory}
              </span>
              <h1 className={`${theme.fonts.serif} text-4xl md:text-6xl font-bold mb-4`}>{product.name}</h1>
              <div className="flex items-center gap-4 text-2xl font-bold text-brown-900">
                {product.price}
              </div>
            </div>

            <div className="prose prose-brown max-w-none mb-10">
              <p className="text-lg opacity-80 leading-relaxed font-light">
                {product.description}
              </p>
            </div>

            {/* Quality Badges */}
            <div className="grid grid-cols-2 gap-4 mb-10 pb-10 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-sm font-bold opacity-70">BIS Hallmarked Purity</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-sm font-bold opacity-70">IGC Certified Stones</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-sm font-bold opacity-70">Life Time Maintenance</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-sm font-bold opacity-70">Ethically Sourced</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-4">
              <a 
                href={getWhatsAppLink(product.name, currentUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-4 w-full py-5 ${theme.colors.accentBg} text-white font-bold text-lg uppercase tracking-widest rounded shadow-xl hover:opacity-95 transition-all`}
              >
                <MessageCircle size={24} />
                Enquire via WhatsApp
              </a>
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-center gap-2 py-4 border-2 border-brown-200 text-brown-800 font-bold text-sm uppercase tracking-widest hover:bg-brown-50 transition-colors"
                >
                  <Phone size={18} />
                  Call Now
                </a>
                <Link 
                  to="/visit"
                  className="flex items-center justify-center gap-2 py-4 border-2 border-brown-200 text-brown-800 font-bold text-sm uppercase tracking-widest hover:bg-brown-50 transition-colors"
                >
                  <MapPin size={18} />
                  Visit Store
                </Link>
              </div>
            </div>

            <div className="mt-12 p-6 bg-[#F9F7F2] rounded-lg border border-brown-100 flex items-start gap-4">
              <Info className="text-brown-600 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-sm mb-1 uppercase tracking-wider">How to purchase?</h4>
                <p className="text-xs opacity-70 leading-relaxed">
                  We believe in a personalized shopping experience. Click the WhatsApp button above to discuss designs, verify stock availability, and receive a customized quote based on current market rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
