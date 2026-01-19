import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1683289934315-96efac98c0bb",
    alt: "Majestic Taj Mahal monument with white marble domes and minarets reflecting in water pool during golden sunset hour in Agra India",
    title: "Discover India, Your Way",
    subtitle: "Experience the soul of incredible India through curated cultural journeys",
    cta: "Explore Destinations"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1683650101012-ca75b3269975",
    alt: "Traditional wooden houseboat floating on serene Kerala backwaters surrounded by lush green palm trees and tropical vegetation under clear blue sky",
    title: "Kerala Backwaters Await",
    subtitle: "Sail through tranquil waters and experience God\'s Own Country",
    cta: "View Packages"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1716094173739-8cc64d934910",
    alt: "Ancient Rajasthani palace architecture with ornate carved sandstone walls and traditional jharokha windows against vibrant blue sky in Jaipur",
    title: "Royal Rajasthan Heritage",
    subtitle: "Walk through centuries of history in the land of kings",
    cta: "Plan Journey"
  }];


  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroSlides?.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides?.length) % heroSlides?.length);
    setIsAutoPlaying(false);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    setIsAutoPlaying(false);
  };

  const handleCTAClick = () => {
    if (currentSlide === 0) {
      navigate('/state-discovery');
    } else if (currentSlide === 1) {
      navigate('/package-details');
    } else {
      navigate('/journey-planner');
    }
  };

  return (
    <section className="relative w-full h-[50vh] overflow-hidden">
      {heroSlides?.map((slide, index) =>
      <div
        key={slide?.id}
        className={`absolute inset-0 transition-opacity duration-1000 ${
        index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`
        }>

          <div className="absolute inset-0">
            <Image
            src={slide?.image}
            alt={slide?.alt}
            className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
          </div>

          <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 animate-fade-in">
                {slide?.title}
              </h1>
              <p className="text-body text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 md:mb-8 lg:mb-10 animate-fade-in">
                {slide?.subtitle}
              </p>
              <Button
              variant="default"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              onClick={handleCTAClick}
              className="animate-fade-in">

                {slide?.cta}
              </Button>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={handlePrevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 flex items-center justify-center group"
        aria-label="Previous slide">

        <Icon name="ChevronLeft" size={24} color="#FFFFFF" />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 flex items-center justify-center group"
        aria-label="Next slide">

        <Icon name="ChevronRight" size={24} color="#FFFFFF" />
      </button>
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-3">
        {heroSlides?.map((_, index) =>
        <button
          key={index}
          onClick={() => handleSlideChange(index)}
          className={`transition-all duration-300 rounded-full ${
          index === currentSlide ?
          'w-12 h-3 bg-white' : 'w-3 h-3 bg-white/50 hover:bg-white/70'}`
          }
          aria-label={`Go to slide ${index + 1}`} />

        )}
      </div>
      <div className="absolute bottom-8 md:bottom-12 right-4 md:right-8 z-30 flex flex-col space-y-3">
        <a
          href="https://wa.me/918421539554"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
          aria-label="Contact us on WhatsApp">

          <Icon name="MessageCircle" size={24} color="#FFFFFF" />
        </a>
        <a
          href="tel:+918421539554"
          className="w-14 h-14 rounded-full cultural-gradient hover:opacity-90 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
          aria-label="Call us now">

          <Icon name="Phone" size={24} color="#FFFFFF" />
        </a>
      </div>
    </section>);

};

export default HeroSection;