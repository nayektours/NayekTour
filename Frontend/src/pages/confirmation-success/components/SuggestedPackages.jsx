import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SuggestedPackages = () => {
  const navigate = useNavigate();

  const packages = [
  {
    id: 1,
    name: "Golden Triangle Tour",
    duration: "6 Days / 5 Nights",
    price: "₹24,999",
    image: "https://images.unsplash.com/photo-1628442550675-67dde28c0345",
    imageAlt: "Majestic Taj Mahal white marble monument at sunrise with reflection pool and tourists in foreground",
    highlights: ["Delhi", "Agra", "Jaipur"],
    rating: 4.8,
    reviews: 342
  },
  {
    id: 2,
    name: "Kerala Backwaters",
    duration: "5 Days / 4 Nights",
    price: "₹32,999",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_171c9a691-1765308624112.png",
    imageAlt: "Traditional Kerala houseboat with thatched roof floating on calm backwaters surrounded by lush green palm trees",
    highlights: ["Alleppey", "Munnar", "Cochin"],
    rating: 4.9,
    reviews: 287
  },
  {
    id: 3,
    name: "Goa Beach Paradise",
    duration: "4 Days / 3 Nights",
    price: "₹18,999",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ea0d9e38-1764660929642.png",
    imageAlt: "Pristine Goa beach with golden sand, turquoise water, palm trees and colorful beach umbrellas at sunset",
    highlights: ["North Goa", "South Goa", "Water Sports"],
    rating: 4.7,
    reviews: 456
  }];


  const handleExplorePackage = () => {
    navigate('/package-details');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 lg:p-10">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div className="flex items-center space-x-3">
          <Icon name="Compass" size={24} color="var(--color-primary)" />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground text-headline">
            Explore More Destinations
          </h2>
        </div>
        <Button
          variant="outline"
          size="default"
          onClick={() => navigate('/state-discovery')}
          className="hidden md:inline-flex">

          View All
        </Button>
      </div>
      <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
        While we prepare your customized itinerary, discover these popular packages loved by travelers like you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {packages?.map((pkg) =>
        <div key={pkg?.id} className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48 md:h-56 overflow-hidden">
              <Image
              src={pkg?.image}
              alt={pkg?.imageAlt}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />

              <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 px-3 py-1 rounded-full">
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={14} color="var(--color-secondary)" className="fill-current" />
                  <span className="text-xs md:text-sm font-semibold text-foreground">{pkg?.rating}</span>
                  <span className="text-xs text-muted-foreground">({pkg?.reviews})</span>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">{pkg?.name}</h3>
              
              <div className="flex items-center space-x-2 text-xs md:text-sm text-muted-foreground mb-3">
                <Icon name="Clock" size={16} />
                <span>{pkg?.duration}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {pkg?.highlights?.map((highlight, index) =>
              <span key={index} className="px-2 py-1 bg-blue-50 dark:bg-blue-950 text-primary text-xs rounded-full">
                    {highlight}
                  </span>
              )}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="text-xs text-muted-foreground">Starting from</p>
                  <p className="text-lg md:text-xl font-bold text-primary">{pkg?.price}</p>
                </div>
                <Button
                variant="default"
                size="default"
                onClick={handleExplorePackage}>

                  Explore
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-6 md:mt-8 text-center md:hidden">
        <Button
          variant="outline"
          size="lg"
          fullWidth
          onClick={() => navigate('/state-discovery')}>

          View All Packages
        </Button>
      </div>
    </div>);

};

export default SuggestedPackages;