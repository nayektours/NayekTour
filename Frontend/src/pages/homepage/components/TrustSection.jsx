import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustSection = () => {
  const trustFeatures = [
  {
    id: 1,
    icon: "Shield",
    title: "Secure Booking",
    description: "100% secure payment gateway with instant confirmation and transparent pricing"
  },
  {
    id: 2,
    icon: "Users",
    title: "Expert Guides",
    description: "Licensed local guides with deep cultural knowledge and multilingual support"
  },
  {
    id: 3,
    icon: "Clock",
    title: "24/7 Support",
    description: "Round-the-clock assistance throughout your journey for complete peace of mind"
  },
  {
    id: 4,
    icon: "ThumbsUp",
    title: "Best Price Guarantee",
    description: "Competitive pricing with no hidden charges and flexible payment options"
  }];


  const certifications = [
  {
    id: 1,
    name: "Ministry of Tourism",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1493366bd-1764660929050.png",
    alt: "Official government certification badge with Indian national emblem and Ministry of Tourism approval seal on white background"
  },
  {
    id: 2,
    name: "IATO Member",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17b360606-1764660929491.png",
    alt: "Indian Association of Tour Operators membership certificate with gold seal and official logo on cream background"
  },
  {
    id: 3,
    name: "ISO Certified",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12c3236d3-1764657838848.png",
    alt: "ISO 9001 quality management certification badge with blue and white colors showing international standards compliance"
  }];


  const mediaFeatures = [
  {
    id: 1,
    publication: "Travel + Leisure India",
    quote: "One of India\'s most trusted travel curators",
    date: "December 2025"
  },
  {
    id: 2,
    publication: "Conde Nast Traveller",
    quote: "Exceptional cultural experiences with authentic local touch",
    date: "November 2025"
  }];


  return (
    <section className="section-spacing bg-muted">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-trust/10 rounded-full px-4 py-2 mb-4">
            <Icon name="ShieldCheck" size={20} color="var(--color-trust)" />
            <span className="text-sm font-semibold text-trust">Trusted Excellence</span>
          </div>
          <h2 className="text-headline text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose Nayek Tours
          </h2>
          <p className="text-body text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            15+ years of crafting unforgettable journeys with local expertise and global standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {trustFeatures?.map((feature) =>
          <div
            key={feature?.id}
            className="bg-card rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 group">

              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Icon name={feature?.icon} size={32} color="var(--color-primary)" className="group-hover:text-white" />
              </div>
              <h3 className="text-headline text-lg md:text-xl font-bold text-foreground mb-2">
                {feature?.title}
              </h3>
              <p className="text-body text-sm text-muted-foreground leading-relaxed">
                {feature?.description}
              </p>
            </div>
          )}
        </div>

        <div className="bg-card rounded-2xl p-6 md:p-8 lg:p-10 mb-12 md:mb-16">
          <h3 className="text-headline text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Certified & Recognized
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {certifications?.map((cert) =>
            <div key={cert?.id} className="text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                  <Image
                  src={cert?.image}
                  alt={cert?.alt}
                  className="w-full h-full object-contain p-2" />

                </div>
                <p className="text-sm font-medium text-foreground">{cert?.name}</p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 md:p-8 lg:p-10">
          <h3 className="text-headline text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Featured In
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {mediaFeatures?.map((feature) =>
            <div
              key={feature?.id}
              className="bg-card rounded-lg p-6 border-l-4 border-primary">

                <div className="flex items-start space-x-3 mb-3">
                  <Icon name="Quote" size={24} color="var(--color-primary)" className="flex-shrink-0 mt-1" />
                  <p className="text-body text-base md:text-lg text-foreground italic">
                    "{feature?.quote}"
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-primary">{feature?.publication}</p>
                  <p className="text-xs text-muted-foreground">{feature?.date}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 md:mt-16 bg-card rounded-2xl p-6 md:p-8 lg:p-10 text-center">
          <Icon name="Award" size={48} color="var(--color-secondary)" className="mx-auto mb-4" />
          <h3 className="text-headline text-2xl md:text-3xl font-bold text-foreground mb-4">
            Our Commitment to You
          </h3>
          <p className="text-body text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We don't just plan trips; we craft experiences that connect you with India's soul. Every journey is personalized, every detail matters, and your satisfaction is our success. From the moment you enquire to the day you return home with memories, we're with you every step of the way.
          </p>
        </div>
      </div>
    </section>);

};

export default TrustSection;