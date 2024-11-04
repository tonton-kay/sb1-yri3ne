import React from 'react';

const categories = [
  {
    title: "New In",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80",
    discount: "Up to 60% Off"
  },
  {
    title: "Dresses",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80",
    discount: "From $9.99"
  },
  {
    title: "Tops",
    image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80",
    discount: "Starting $5.99"
  },
  {
    title: "Shoes",
    image: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&q=80",
    discount: "30-70% Off"
  },
  {
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80",
    discount: "Buy 2 Get 1 Free"
  },
  {
    title: "Beauty",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80",
    discount: "Free Gift"
  },
  {
    title: "Plus Size",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80",
    discount: "New Collection"
  },
  {
    title: "Sale",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80",
    discount: "Extra 15% Off"
  }
];

const CategoryGrid = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-8 text-center">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
                <h3 className="text-lg font-semibold">{category.title}</h3>
                <p className="text-sm mt-1">{category.discount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;