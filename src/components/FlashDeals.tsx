import React from 'react';
import { Timer } from 'lucide-react';

const deals = [
  {
    id: 1,
    name: "Summer Floral Dress",
    originalPrice: 49.99,
    salePrice: 19.99,
    discount: 60,
    image: "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&q=80",
    timeLeft: "2:15:30"
  },
  {
    id: 2,
    name: "Denim Jacket",
    originalPrice: 79.99,
    salePrice: 29.99,
    discount: 63,
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80",
    timeLeft: "1:45:20"
  },
  {
    id: 3,
    name: "Elegant Blouse",
    originalPrice: 39.99,
    salePrice: 15.99,
    discount: 60,
    image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80",
    timeLeft: "3:30:15"
  },
  {
    id: 4,
    name: "Casual Pants",
    originalPrice: 59.99,
    salePrice: 24.99,
    discount: 58,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80",
    timeLeft: "0:59:59"
  }
];

const FlashDeals = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Timer className="w-6 h-6 text-primary-600" />
          Flash Deals
        </h2>
        <a href="#" className="text-primary-600 hover:text-primary-700">
          View All
        </a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {deals.map((deal) => (
          <div key={deal.id} className="group relative border rounded-lg p-2 hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src={deal.image}
                alt={deal.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute top-2 left-2 bg-primary-600 text-white px-2 py-1 rounded-full text-xs">
                -{deal.discount}%
              </div>
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-full text-xs">
                {deal.timeLeft}
              </div>
            </div>
            
            <div className="mt-2">
              <h3 className="text-sm font-medium truncate">{deal.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-primary-600 font-bold">${deal.salePrice}</span>
                <span className="text-gray-400 line-through text-sm">${deal.originalPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FlashDeals;