import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d1a6cf71-1763301532880.png",
    alt: "Professional headshot of Indian woman with long black hair wearing traditional red saree and warm smile against neutral background",
    rating: 5,
    date: "December 2025",
    package: "Kerala Backwater Experience",
    testimonial: "Our family trip to Kerala was absolutely magical! Nayek Tours planned everything perfectly - from the houseboat stay to the spice plantation visit. The kids loved every moment, and we created memories that will last a lifetime. Highly recommended for families!",
    tripImages: [
    {
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_1ea30213e-1766826271188.png",
      alt: "Happy Indian family of four standing on traditional Kerala houseboat deck with backwaters and palm trees in background during golden hour"
    }]

  },
  {
    id: 2,
    name: "Rahul & Anjali Verma",
    location: "Delhi NCR",
    image: "https://images.unsplash.com/photo-1721245445435-b263aab1c3ec",
    alt: "Professional couple photo of Indian man in blue shirt and woman in yellow dress smiling together outdoors with natural lighting",
    rating: 5,
    date: "November 2025",
    package: "Rajasthan Royal Heritage Tour",
    testimonial: "Our honeymoon in Rajasthan exceeded all expectations! The palace hotels, desert safari, and cultural experiences were breathtaking. The team handled every detail with care, making our special trip truly unforgettable. Thank you for the royal treatment!",
    tripImages: [
    {
      url: "https://images.unsplash.com/photo-1642382218687-e9d4759c3d56",
      alt: "Young couple in traditional Rajasthani attire standing in front of ornate palace archway with intricate carvings during sunset in Udaipur"
    }]

  },
  {
    id: 3,
    name: "Vikram Patel",
    location: "Bangalore, Karnataka",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1459d856e-1763295186114.png",
    alt: "Professional headshot of middle-aged Indian man with salt-and-pepper beard wearing casual blue shirt and friendly expression",
    rating: 5,
    date: "January 2026",
    package: "Himalayan Adventure Trek",
    testimonial: "As a solo traveler, I was initially hesitant, but Nayek Tours made me feel completely comfortable. The Himalayan trek was challenging yet rewarding, and I met amazing fellow travelers. The local guides were knowledgeable and the arrangements were top-notch!",
    tripImages: [
    {
      url: "https://images.unsplash.com/photo-1728555543234-9adef01f175f",
      alt: "Solo male trekker with backpack standing on mountain trail with snow-capped Himalayan peaks and prayer flags in background under clear blue sky"
    }]

  }];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials?.length]);

  const handleTestimonialChange = (index) => {
    setCurrentTestimonial(index);
  };

  const current = testimonials?.[currentTestimonial];

  return (
    <section className="section-spacing bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
            <Icon name="Heart" size={20} color="var(--color-accent)" />
            <span className="text-sm font-semibold text-accent">Traveler Stories</span>
          </div>
          <h2 className="text-headline text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-body text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Real experiences from real travelers who discovered India with us
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-80 lg:h-auto overflow-hidden">
                <Image
                  src={current?.tripImages?.[0]?.url}
                  alt={current?.tripImages?.[0]?.alt}
                  className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r" />
                
                <div className="absolute bottom-4 left-4 right-4 lg:bottom-8 lg:left-8">
                  <div className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {current?.package}
                  </div>
                  <p className="text-white text-sm">{current?.date}</p>
                </div>
              </div>

              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  {[...Array(current?.rating)]?.map((_, index) =>
                  <Icon key={index} name="Star" size={20} color="var(--color-secondary)" className="fill-current" />
                  )}
                </div>

                <blockquote className="text-body text-base md:text-lg text-foreground mb-6 leading-relaxed">
                  "{current?.testimonial}"
                </blockquote>

                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={current?.image}
                      alt={current?.alt}
                      className="w-full h-full object-cover" />

                  </div>
                  <div>
                    <h4 className="text-headline text-lg md:text-xl font-bold text-foreground">
                      {current?.name}
                    </h4>
                    <p className="text-sm text-muted-foreground flex items-center space-x-1">
                      <Icon name="MapPin" size={14} />
                      <span>{current?.location}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-3 mt-8">
            {testimonials?.map((_, index) =>
            <button
              key={index}
              onClick={() => handleTestimonialChange(index)}
              className={`transition-all duration-300 rounded-full ${
              index === currentTestimonial ?
              'w-12 h-3 bg-primary' : 'w-3 h-3 bg-border hover:bg-primary/50'}`
              }
              aria-label={`View testimonial ${index + 1}`} />

            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
          <div className="text-center p-6 bg-muted rounded-lg">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full cultural-gradient flex items-center justify-center">
              <Icon name="Users" size={32} color="#FFFFFF" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">10,000+</h3>
            <p className="text-muted-foreground">Happy Travelers</p>
          </div>

          <div className="text-center p-6 bg-muted rounded-lg">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full cultural-gradient flex items-center justify-center">
              <Icon name="Award" size={32} color="#FFFFFF" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">15+ Years</h3>
            <p className="text-muted-foreground">Travel Expertise</p>
          </div>

          <div className="text-center p-6 bg-muted rounded-lg">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full cultural-gradient flex items-center justify-center">
              <Icon name="Star" size={32} color="#FFFFFF" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9/5</h3>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialSection;