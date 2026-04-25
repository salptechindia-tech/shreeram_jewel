
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Diamond, Layers, LogOut, Menu, X } from 'lucide-react';
import { theme } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onLogout }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Products', path: '/admin/products', icon: Diamond },
    { name: 'Categories', path: '/admin/categories', icon: Layers },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-white">
      <div className="p-8 border-b border-stone-100">
        <h1 className={`${theme.fonts.serif} text-2xl font-bold ${theme.colors.primary} tracking-tight`}>
          LUXE <span className={theme.colors.accent}>ADMIN</span>
        </h1>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive 
                  ? `${theme.colors.accentBg} text-white shadow-lg` 
                  : `text-stone-600 hover:bg-stone-50`
              }`}
            >
              <Icon size={20} />
              <span className="font-semibold">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-stone-100">
        <button
          onClick={onLogout}
          className="flex items-center gap-4 w-full px-4 py-3 text-rose-600 hover:bg-rose-50 rounded-xl transition-colors font-semibold"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen ${theme.colors.bg} flex`}>
      {/* Sidebar Desktop */}
      <aside className="hidden lg:flex w-64 flex-col fixed inset-y-0 border-r border-stone-200 z-50">
        <SidebarContent />
      </aside>

      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 w-full bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between z-40">
        <h1 className={`${theme.fonts.serif} text-xl font-bold ${theme.colors.primary}`}>
          LUXE <span className={theme.colors.accent}>ADMIN</span>
        </h1>
        <button onClick={() => setSidebarOpen(true)} className="p-2 text-stone-600">
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-2xl">
            <SidebarContent />
            <button onClick={() => setSidebarOpen(false)} className="absolute top-4 right-4 p-2 text-stone-400">
              <X size={24} />
            </button>
          </div>
        </div>
      )}

      {/* Content Area */}
      <main className="flex-1 lg:ml-64 p-6 md:p-10 pt-24 lg:pt-10">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
