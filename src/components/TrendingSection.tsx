import React from 'react';
import { Heart } from 'lucide-react';

const products = [
  {
    name: "Floral Summer Dress",
    price: "29.99",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80",
  },
  {
    name: "Casual Denim Jacket",
    price: "49.99",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80",
  },
  {
    name: "Classic White Blouse",
    price: "24.99",
    image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80",
  },
  {
    name: "Elegant Evening Gown",
    price: "89.99",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80",
  },
];

const TrendingSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Trending Now</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="group relative">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="h-[400px] w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
              <button className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100">
                <Heart className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
              <p className="mt-1 text-lg font-semibold">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;