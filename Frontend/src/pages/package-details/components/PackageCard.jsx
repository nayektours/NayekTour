import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PackageCard = ({ packageData, featured = false }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate('/journey-planner', { state: { selectedPackage: packageData } });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    })?.format(price);
  };

  return (
    <div className={`bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${featured ? 'ring-2 ring-primary' : ''}`}>
      {featured && (
        <div className="bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold text-center">
          <Icon name="Star" size={16} className="inline mr-2" />
          Featured Package
        </div>
      )}
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
        <Image
          src={packageData?.image}
          alt={packageData?.imageAlt}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          {packageData?.duration}
        </div>
        {packageData?.discount && (
          <div className="absolute top-4 left-4 bg-error text-error-foreground px-3 py-1 rounded-full text-sm font-semibold">
            {packageData?.discount}% OFF
          </div>
        )}
      </div>
      <div className="p-4 md:p-5 lg:p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2 line-clamp-2">
              {packageData?.title}
            </h3>
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <Icon name="MapPin" size={16} />
              <span className="line-clamp-1">{packageData?.location}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)]?.map((_, index) => (
              <Icon
                key={index}
                name={index < Math.floor(packageData?.rating) ? 'Star' : 'Star'}
                size={16}
                className={index < Math.floor(packageData?.rating) ? 'text-secondary fill-secondary' : 'text-muted'}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {packageData?.rating} ({packageData?.reviews} reviews)
          </span>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {packageData?.description}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center space-x-2 text-sm">
            <Icon name="Users" size={16} className="text-primary" />
            <span className="text-foreground">{packageData?.groupSize}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Icon name="Calendar" size={16} className="text-primary" />
            <span className="text-foreground">{packageData?.availability}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {packageData?.highlights?.slice(0, 3)?.map((highlight, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 bg-muted text-foreground text-xs rounded-full"
            >
              <Icon name="Check" size={12} className="mr-1 text-success" />
              {highlight}
            </span>
          ))}
        </div>

        <div className="border-t border-border pt-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Starting from</p>
            <div className="flex items-baseline space-x-2">
              {packageData?.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(packageData?.originalPrice)}
                </span>
              )}
              <span className="text-xl md:text-2xl font-bold text-primary">
                {formatPrice(packageData?.price)}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">per person</p>
          </div>
          <Button
            variant="default"
            size="default"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={handleViewDetails}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;