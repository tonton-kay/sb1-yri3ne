import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">AELLE</h3>
            <ul className="space-y-2">
              <li><a href="/pages/about-us" className="hover:text-pink-500">About Us</a></li>
              <li><a href="/pages/careers" className="hover:text-pink-500">Careers</a></li>
              <li><a href="/pages/contact" className="hover:text-pink-500">Contact Us</a></li>
              <li><a href="/pages/press" className="hover:text-pink-500">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li><a href="/pages/shipping-info" className="hover:text-pink-500">Shipping Info</a></li>
              <li><a href="/pages/returns" className="hover:text-pink-500">Returns</a></li>
              <li><a href="/pages/size-guide" className="hover:text-pink-500">Size Guide</a></li>
              <li><a href="/pages/track-order" className="hover:text-pink-500">Track Order</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Care</h3>
            <ul className="space-y-2">
              <li><a href="/pages/loyalty" className="hover:text-pink-500">Loyalty Program</a></li>
              <li><a href="/pages/faq" className="hover:text-pink-500">FAQ</a></li>
              <li><a href="/pages/terms" className="hover:text-pink-500">Terms & Conditions</a></li>
              <li><a href="/pages/privacy" className="hover:text-pink-500">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-500">Facebook</a></li>
              <li><a href="#" className="hover:text-pink-500">Instagram</a></li>
              <li><a href="#" className="hover:text-pink-500">Twitter</a></li>
              <li><a href="#" className="hover:text-pink-500">Pinterest</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; 2024 AELLE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;