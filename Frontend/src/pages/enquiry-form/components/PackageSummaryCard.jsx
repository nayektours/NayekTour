import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PackageSummaryCard = ({ packageData }) => {
  if (!packageData) return null;

  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden border border-border">
      <div className="relative h-48 md:h-56 lg:h-64">
        <Image
          src={packageData?.image}
          alt={packageData?.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          {packageData?.duration}
        </div>
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 text-headline">
          {packageData?.name}
        </h3>
        
        <div className="flex items-center text-muted-foreground mb-4">
          <Icon name="MapPin" size={16} className="mr-2" />
          <span className="text-sm">{packageData?.destination}</span>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-start">
            <Icon name="Calendar" size={18} className="mr-3 mt-1 text-primary flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">Travel Dates</p>
              <p className="text-sm text-muted-foreground">{packageData?.selectedDates || 'Not selected'}</p>
            </div>
          </div>

          <div className="flex items-start">
            <Icon name="Users" size={18} className="mr-3 mt-1 text-primary flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">Group Size</p>
              <p className="text-sm text-muted-foreground">{packageData?.groupSize || 'Not specified'}</p>
            </div>
          </div>

          <div className="flex items-start">
            <Icon name="IndianRupee" size={18} className="mr-3 mt-1 text-primary flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">Starting Price</p>
              <p className="text-lg font-bold text-primary">{packageData?.price}</p>
              <p className="text-xs text-muted-foreground">Per person (customizable)</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <p className="text-xs text-muted-foreground mb-2 font-medium">Package Highlights:</p>
          <div className="space-y-2">
            {packageData?.highlights?.slice(0, 3)?.map((highlight, index) => (
              <div key={index} className="flex items-start">
                <Icon name="Check" size={14} className="mr-2 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-xs text-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageSummaryCard;