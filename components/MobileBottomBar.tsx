
import React from 'react';
import { MessageCircle, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '../siteConfig';
import { theme } from '../theme';
import { getWhatsAppLink } from '../utils';

const MobileBottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] grid grid-cols-3">
      <a 
        href={`tel:${siteConfig.phone}`}
        className="flex flex-col items-center justify-center py-3 gap-1 active:bg-gray-50"
      >
        <Phone size={20} className={theme.colors.primary} />
        <span className="text-[10px] font-medium uppercase tracking-wider">Call</span>
      </a>
      
      <a 
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex flex-col items-center justify-center py-3 gap-1 ${theme.colors.accentBg} text-white`}
      >
        <MessageCircle size={22} />
        <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
      </a>

      <a 
        href="/#/visit"
        className="flex flex-col items-center justify-center py-3 gap-1 active:bg-gray-50"
      >
        <MapPin size={20} className={theme.colors.primary} />
        <span className="text-[10px] font-medium uppercase tracking-wider">Store</span>
      </a>
    </div>
  );
};

export default MobileBottomBar;
