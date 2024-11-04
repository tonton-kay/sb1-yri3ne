import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
        <p className="text-gray-600 mb-8">Get the latest updates on new products and upcoming sales</p>
        <div className="max-w-md mx-auto">
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border focus:outline-none focus:border-pink-500"
            />
            <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-pink-500 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;