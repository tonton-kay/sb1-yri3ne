import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[600px]">
      <img
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Fashion Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Summer Collection 2024</h1>
          <p className="text-xl mb-8">Discover the latest trends in fashion</p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;