import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from './components/HeroSection';
import StateDiscoveryGrid from './components/StateDiscoveryGrid';
import SeasonalHighlights from './components/SeasonalHighlights';
import TestimonialSection from './components/TestimonialSection';
import TrustSection from './components/TrustSection';
import InstagramFeed from './components/InstagramFeed';
import CTASection from './components/CTASection';

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="main-content">
        <HeroSection />
        <StateDiscoveryGrid />
        <SeasonalHighlights />
        <TestimonialSection />
        <TrustSection />
        <InstagramFeed />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Homepage;