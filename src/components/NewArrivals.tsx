import React from 'react';
import { Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Floral Print Maxi Dress",
    price: 25.99,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80",
    isNew: true,
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: "Cropped Denim Jacket",
    price: 35.99,
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80",
    isNew: true,
    rating: 4.8,
    reviews: 95
  },
  {
    id: 3,
    name: "Ruffled Sleeve Blouse",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80",
    isNew: true,
    rating: 4.2,
    reviews: 67
  },
  {
    id: 4,
    name: "High-Waist Pants",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80",
    isNew: true,
    rating: 4.6,
    reviews: 154
  }
];

const NewArrivals = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">New Arrivals</h2>
        <a href="#" className="text-primary-600 hover:text-primary-700">
          View All
        </a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="group relative border rounded-lg p-2 hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              {product.isNew && (
                <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 rounded-full text-xs">
                  New
                </div>
              )}
              <button className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100">
                <Heart className="w-4 h-4" />
              </button>
            </div>
            
            <div className="mt-2">
              <h3 className="text-sm font-medium truncate">{product.name}</h3>
              <div className="mt-1">
                <span className="text-primary-600 font-bold">${product.price}</span>
              </div>
              <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                <span>★ {product.rating}</span>
                <span>({product.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewArrivals;