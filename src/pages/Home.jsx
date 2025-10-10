import React from 'react';
import AppNavbar from '../components/AppNavbar';
import HeroSection from '../components/HeroSection';
import CategorySection from '../components/CategorySection';
import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <AppNavbar />
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <Footer />
    </>
  );
};

export default Home;