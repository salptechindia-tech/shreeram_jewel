
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { siteConfig } from '../siteConfig';
import { theme } from '../theme';

const Footer: React.FC = () => {
  return (
    <footer className={`bg-white border-t ${theme.colors.border} pt-16 pb-24 md:pb-12`}>
      <div className={theme.spacing.container}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex flex-col">
              <span className={`${theme.fonts.serif} text-3xl font-bold ${theme.colors.primary}`}>SHRIRAAM</span>
              <span className="text-xs uppercase tracking-[0.2em] font-medium opacity-80">Jewellery</span>
            </Link>
            <p className="text-sm opacity-70 leading-relaxed max-w-xs">
              30+ years of legacy in crafting gold, diamond, and silver masterpieces with trust and purity.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className={`${theme.colors.accent} hover:opacity-70`}><Instagram size={20} /></a>
              <a href="#" className={`${theme.colors.accent} hover:opacity-70`}><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className={`text-lg font-bold ${theme.fonts.serif}`}>Collections</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {siteConfig.navCategories.map(cat => (
                <li key={cat.id}><Link to={cat.path} className="hover:underline">{cat.name}</Link></li>
              ))}
              <li><Link to="/collections" className="hover:underline">View All</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <h4 className={`text-lg font-bold ${theme.fonts.serif}`}>Information</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/about" className="hover:underline">Our Legacy</Link></li>
              <li><Link to="/reviews" className="hover:underline">Customer Testimonials</Link></li>
              <li><Link to="/visit" className="hover:underline">Visit Showroom</Link></li>
              <li><Link to="/visit" className="hover:underline">Store Timings</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className={`text-lg font-bold ${theme.fonts.serif}`}>Contact Us</h4>
            <div className="space-y-3 text-sm opacity-80">
              <div className="flex gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-1 opacity-60" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex gap-3">
                <Phone size={18} className="flex-shrink-0 opacity-60" />
                <span>{siteConfig.phone}</span>
              </div>
              <div className="flex gap-3">
                <Mail size={18} className="flex-shrink-0 opacity-60" />
                <span>{siteConfig.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
          <p>© {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Developed by <span className="font-bold">Salptech</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
