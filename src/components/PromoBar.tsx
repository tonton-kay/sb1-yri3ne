import React from 'react';
import { Clock, Truck, Gift } from 'lucide-react';

const PromoBar = () => {
  return (
    <div className="bg-primary-600 text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>Flash Sale - Up to 80% Off!</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4" />
            <span>Free Shipping on Orders Over $49</span>
          </div>
          <div className="flex items-center gap-2">
            <Gift className="w-4 h-4" />
            <span>New Users Get 15% Off</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromoBar;