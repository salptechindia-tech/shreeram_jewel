
import React from 'react';
import { MapPin, Clock, Navigation, MessageCircle, Phone } from 'lucide-react';
import { siteConfig } from '../siteConfig';
import { theme } from '../theme';
import { getWhatsAppLink } from '../utils';

const VisitUsSection: React.FC = () => {
  return (
    <section className={`${theme.spacing.section}`}>
      <div className={theme.spacing.container}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className={`text-3xl md:text-5xl font-bold ${theme.fonts.serif} mb-8`}>Visit Our Showroom</h2>
            
            <div className="space-y-8 mb-10">
              <div className="flex gap-5">
                <div className={`p-3 bg-white rounded-full ${theme.shadows} h-fit`}>
                  <MapPin className={theme.colors.accent} size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Our Location</h4>
                  <p className="opacity-70 mt-1 max-w-sm">{siteConfig.address}</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className={`p-3 bg-white rounded-full ${theme.shadows} h-fit`}>
                  <Clock className={theme.colors.accent} size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Store Timings</h4>
                  <p className="opacity-70 mt-1 whitespace-pre-line">{siteConfig.timings}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="https://www.google.com/maps" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-3 px-6 py-4 bg-white border border-gray-200 ${theme.colors.primary} font-bold text-sm uppercase tracking-widest hover:bg-gray-50 transition-colors shadow-sm`}
              >
                <Navigation size={18} />
                Get Directions
              </a>
              <a 
                href={getWhatsAppLink()} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-3 px-6 py-4 ${theme.colors.accentBg} text-white font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-colors shadow-md`}
              >
                <MessageCircle size={18} />
                WhatsApp Enquiry
              </a>
              <a 
                href={`tel:${siteConfig.phone}`}
                className="flex sm:col-span-2 items-center justify-center gap-3 px-6 py-4 border border-brown-200 text-brown-800 font-bold text-sm uppercase tracking-widest hover:bg-brown-50 transition-colors"
              >
                <Phone size={18} />
                Call +91 94433 79960
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 h-[400px] lg:h-[500px] bg-gray-200 rounded-lg overflow-hidden shadow-2xl relative">
            <iframe 
              src={siteConfig.googleMapsUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Google Maps Location"
            />
            <div className="absolute top-4 left-4 p-4 bg-white/90 backdrop-blur shadow-lg rounded max-w-xs">
              <span className="text-[10px] font-bold uppercase text-brown-600 tracking-widest block mb-1">Coimbatore Flagship</span>
              <p className="text-sm font-bold">Shriraam Jewellery</p>
              <p className="text-xs opacity-60 mt-1 leading-tight">Oppanakara Street, Coimbatore</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUsSection;
