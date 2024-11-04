import React from 'react';

const categories = [
  {
    title: "Women's Fashion",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80",
  },
  {
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80",
  },
  {
    title: "Shoes",
    image: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&q=80",
  },
  {
    title: "New Arrivals",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80",
  },
];

const CategorySection = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg cursor-pointer">
            <div className="aspect-w-1 aspect-h-1 w-full">
              <img
                src={category.image}
                alt={category.title}
                className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">{category.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;