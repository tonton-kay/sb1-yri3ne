import React, { useState, useEffect } from 'react';
import { ShieldCheck, Truck, RotateCcw, Clock } from 'lucide-react';

const benefits = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Secure Payments",
    description: "Multiple payment options"
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Express Delivery",
    description: "Fast worldwide shipping"
  },
  {
    icon: <RotateCcw className="w-6 h-6" />,
    title: "Easy Returns",
    description: "45-day return policy"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "24/7 Support",
    description: "Round the clock assistance"
  }
];

const BenefitsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % benefits.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-center flex-col md:flex-row"
            >
              <div className="text-primary-600">
                {benefit.icon}
              </div>
              <div>
                <h3 className="font-semibold text-sm">{benefit.title}</h3>
                <p className="text-xs text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BenefitsSlider;