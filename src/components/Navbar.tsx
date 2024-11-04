import React, { useState } from 'react';
import { Search, ShoppingBag, User, Heart, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            
            <div className="flex-shrink-0 font-bold text-2xl">AELLE</div>

            <div className="flex items-center space-x-6">
              <Search className="w-5 h-5 cursor-pointer hover:text-pink-500" />
              <Heart className="w-5 h-5 cursor-pointer hover:text-pink-500" />
              <User className="w-5 h-5 cursor-pointer hover:text-pink-500" />
              <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-pink-500" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 overflow-x-auto">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center h-12 space-x-8 whitespace-nowrap">
              <a href="/collections/trending" className="text-sm hover:text-pink-500 font-medium">Trending</a>
              <a href="/collections/best-deals" className="text-sm hover:text-pink-500 font-medium text-red-500">Best Deals</a>
              <a href="/collections/clearance" className="text-sm hover:text-pink-500 font-medium text-red-500">Clearance</a>
              <a href="/collections/best-sellers" className="text-sm hover:text-pink-500 font-medium">Best Sellers</a>
              <a href="/collections/new-arrivals" className="text-sm hover:text-pink-500 font-medium">New In</a>
              <a href="/collections/women" className="text-sm hover:text-pink-500 font-medium">Women</a>
              <a href="/collections/curve-plus" className="text-sm hover:text-pink-500 font-medium">Curve + Plus</a>
              <a href="/collections/accessories" className="text-sm hover:text-pink-500 font-medium">Accessories</a>
              <a href="/collections/beauty" className="text-sm hover:text-pink-500 font-medium">Beauty</a>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden">
          <div className="fixed inset-y-0 left-0 w-64 bg-white p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-xl">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              <a href="/collections/trending" className="hover:text-pink-500">Trending</a>
              <a href="/collections/best-deals" className="text-red-500 hover:text-pink-500">Best Deals</a>
              <a href="/collections/clearance" className="text-red-500 hover:text-pink-500">Clearance</a>
              <a href="/collections/best-sellers" className="hover:text-pink-500">Best Sellers</a>
              <a href="/collections/new-arrivals" className="hover:text-pink-500">New In</a>
              <a href="/collections/women" className="hover:text-pink-500">Women</a>
              <a href="/collections/curve-plus" className="hover:text-pink-500">Curve + Plus</a>
              <a href="/collections/accessories" className="hover:text-pink-500">Accessories</a>
              <a href="/collections/beauty" className="hover:text-pink-500">Beauty</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;