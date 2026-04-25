
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { siteConfig } from '../siteConfig';
import { theme } from '../theme';
import { getWhatsAppLink } from '../utils';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className={theme.spacing.container}>
        <div className="flex justify-between items-center">
          <Link to="/" className="flex flex-col">
              <span
                className={`${theme.fonts.serif} text-2xl md:text-3xl font-bold leading-none tracking-tight
                  ${
                    location.pathname !== "/"
                      ? "text-brown-700"
                      : isScrolled
                        ? "text-brown"
                        : theme.colors.navbarCat
                  }
                `}
              >
                SHRIRAAM
              </span>

              <span
                className={`text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium opacity-80 mt-1
                  ${
                    location.pathname !== "/"
                      ? "text-brown-500"
                      : isScrolled
                        ? "text-brown"
                        : theme.colors.navbarCat
                  }
                `}
              >
                Jewellery
              </span>
            </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {siteConfig.navCategories.map((cat) => {
              const isActive = location.pathname === cat.path;
              const isHome = location.pathname === "/";

              return (
                          <Link
                            key={cat.id}
                            to={cat.path}
                            className={`text-sm font-medium uppercase tracking-wider transition-colors
                              ${
                                !isHome
                                  ? isActive
                                    ? "text-brown-700 font-bold"
                                    : "text-brown-500"
                                  : isScrolled
                                    ? "text-brown"
                                    : theme.colors.navbarCat
                              }
                              hover:text-brown-500
                            `}
                          >
                            {cat.name}
                          </Link>
                        );
                      })}
                  <Link
                      to="/collections"
                      className={`text-sm font-medium uppercase tracking-wider transition-colors
                        ${
                          location.pathname !== "/"
                            ? location.pathname === "/collections"
                              ? "text-brown-700 font-bold"
                              : "text-brown-500"
                            : isScrolled
                              ? "text-brown"
                              : theme.colors.navbarCat
                        }
                        hover:text-brown-500
                      `}
                    >
                      Collections
                    </Link>
            <a 
              href={getWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-5 py-2 ${theme.colors.accentBg} text-white rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95`}
            >
              <MessageCircle size={18} />
              Enquire
            </a>
          </nav>

          {/* Mobile Actions */}
          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-4 relative z-50">
            <a 
              href={getWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${theme.colors.accent}`}
            >
              <MessageCircle size={24} />
            </a>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={theme.colors.primary}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-24 px-8 flex flex-col space-y-8 h-full bg-[#F9F7F2]">
          {siteConfig.navCategories.map((cat) => (
            <Link 
              key={cat.id} 
              to={cat.path} 
              className={`text-3xl ${theme.fonts.serif} border-b ${theme.colors.border} pb-4`}
            >
              {cat.name}
            </Link>
          ))}
          <Link to="/collections" className={`text-3xl ${theme.fonts.serif} border-b ${theme.colors.border} pb-4`}>
            All Collections
          </Link>
          <Link to="/about" className={`text-3xl ${theme.fonts.serif} border-b ${theme.colors.border} pb-4`}>
            About Us
          </Link>
          <Link to="/visit" className={`text-3xl ${theme.fonts.serif} border-b ${theme.colors.border} pb-4`}>
            Visit Store
          </Link>
          <div className="pt-4">
             <a 
              href={getWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`w-full flex justify-center items-center gap-3 py-4 ${theme.colors.accentBg} text-white rounded-md text-lg font-bold shadow-lg`}
            >
              <MessageCircle size={24} />
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
