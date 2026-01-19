import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SeasonalHighlights = () => {
  const navigate = useNavigate();

  const seasonalPackages = [
  {
    id: 1,
    season: "Winter Special",
    title: "Himalayan Snow Adventures",
    duration: "7 Days / 6 Nights",
    price: "₹45,999",
    originalPrice: "₹55,999",
    discount: "18% OFF",
    image: "https://images.unsplash.com/photo-1605726437181-eaa766efa9f9",
    alt: "Snow-covered Himalayan mountain landscape with skiers on white slopes, pine trees covered in fresh snow, and bright blue sky in Gulmarg Kashmir",
    destinations: ["Shimla", "Manali", "Dharamshala"],
    badge: "Limited Offer",
    validUntil: "31 Mar 2026"
  },
  {
    id: 2,
    season: "Monsoon Magic",
    title: "Kerala Backwater Retreat",
    duration: "5 Days / 4 Nights",
    price: "₹32,999",
    originalPrice: "₹39,999",
    discount: "17% OFF",
    image: "https://images.unsplash.com/photo-1634141693341-9d51836aa188",
    alt: "Traditional Kerala houseboat with thatched roof sailing through rain-kissed backwaters surrounded by vibrant green coconut palms and monsoon clouds",
    destinations: ["Alleppey", "Kumarakom", "Cochin"],
    badge: "Monsoon Special",
    validUntil: "30 Sep 2026"
  },
  {
    id: 3,
    season: "Festival Season",
    title: "Rajasthan Cultural Odyssey",
    duration: "8 Days / 7 Nights",
    price: "₹52,999",
    originalPrice: "₹64,999",
    discount: "18% OFF",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1603f8cc5-1767622779559.png",
    alt: "Colorful Rajasthani folk dancers in traditional mirror-work costumes performing at desert festival with illuminated palace in background during evening",
    destinations: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"],
    badge: "Festival Package",
    validUntil: "15 Nov 2026"
  }];


  const handlePackageClick = (packageId) => {
    navigate('/package-details', { state: { packageId } });
  };

  return (
    <section className="section-spacing bg-muted">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-4 py-2 mb-4">
            <Icon name="Sparkles" size={20} color="var(--color-secondary)" />
            <span className="text-sm font-semibold text-secondary">Seasonal Specials</span>
          </div>
          <h2 className="text-headline text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Limited Time Offers
          </h2>
          <p className="text-body text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience India's seasonal beauty with exclusive packages designed for the perfect time of year
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {seasonalPackages?.map((pkg) =>
          <div
            key={pkg?.id}
            className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-xl transition-all duration-300">

              <div className="relative h-56 md:h-64 overflow-hidden">
                <Image
                src={pkg?.image}
                alt={pkg?.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                  {pkg?.badge}
                </div>
                
                <div className="absolute top-4 right-4 bg-error text-white text-xs font-bold px-3 py-1 rounded-full">
                  {pkg?.discount}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs text-white/80 block mb-1">{pkg?.season}</span>
                  <h3 className="text-headline text-xl md:text-2xl font-bold text-white">
                    {pkg?.title}
                  </h3>
                </div>
              </div>

              <div className="p-4 md:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    <span className="text-sm">{pkg?.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Icon name="Calendar" size={16} />
                    <span className="text-xs">Valid till {pkg?.validUntil}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg?.destinations?.map((destination, index) =>
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-muted rounded-full text-foreground flex items-center space-x-1">

                      <Icon name="MapPin" size={12} />
                      <span>{destination}</span>
                    </span>
                )}
                </div>

                <div className="flex items-end justify-between mb-4">
                  <div>
                    <p className="text-xs text-muted-foreground line-through mb-1">
                      {pkg?.originalPrice}
                    </p>
                    <p className="text-2xl md:text-3xl font-bold text-primary">
                      {pkg?.price}
                    </p>
                    <p className="text-xs text-muted-foreground">per person</p>
                  </div>
                </div>

                <Button
                variant="default"
                size="default"
                iconName="ArrowRight"
                iconPosition="right"
                fullWidth
                onClick={() => handlePackageClick(pkg?.id)}>

                  View Details
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Button
            variant="outline"
            size="lg"
            iconName="Gift"
            iconPosition="left"
            onClick={() => navigate('/package-details')}>

            View All Seasonal Offers
          </Button>
        </div>
      </div>
    </section>);

};

export default SeasonalHighlights;