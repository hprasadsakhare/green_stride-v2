import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { WalletConnect } from './WalletConnect';
import { MapIcon, HomeIcon, Clock } from 'lucide-react';

export function Navbar() {
  const location = useLocation();

  const getNavLinkClass = (path: string) => `
    flex items-center space-x-2 transition-colors
    ${location.pathname === path ? 'text-green-600' : 'text-gray-600 hover:text-gray-900'}
  `;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-12">
            <Link to="/" className="text-xl font-bold">
              <span className="text-green-600">g</span>reen Stride
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className={getNavLinkClass('/')}>
                <HomeIcon className="w-5 h-5" />
                <span>Home</span>
              </Link>
              <Link to="/maps" className={getNavLinkClass('/maps')}>
                <MapIcon className="w-5 h-5" />
                <span>Maps</span>
              </Link>
              <Link to="/timetable" className={getNavLinkClass('/timetable')}>
                <Clock className="w-5 h-5" />
                <span>Timetable</span>
              </Link>
            </div>
          </div>
          <WalletConnect />
        </div>
      </div>
    </nav>
  );
}