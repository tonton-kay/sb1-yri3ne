import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PromoBar from './components/PromoBar';
import BenefitsSlider from './components/BenefitsSlider';
import CategoryGrid from './components/CategoryGrid';
import FlashDeals from './components/FlashDeals';
import NewArrivals from './components/NewArrivals';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <PromoBar />
      <Navbar />
      <Hero />
      <BenefitsSlider />
      <CategoryGrid />
      <FlashDeals />
      <NewArrivals />
      <Footer />
    </div>
  );
}

export default App;