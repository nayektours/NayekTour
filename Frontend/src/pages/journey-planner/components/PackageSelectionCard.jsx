import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const PackageSelectionCard = ({ packageData, isSelected, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className={`relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
        isSelected
          ? 'ring-4 ring-primary shadow-xl scale-[1.02]'
          : 'hover:shadow-lg hover:scale-[1.01]'
      }`}
    >
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
        <Image
          src={packageData?.image}
          alt={packageData?.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {isSelected && (
          <div className="absolute top-4 right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center animate-fade-in">
            <Icon name="Check" size={24} color="#FFFFFF" />
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold mb-2 text-headline">
            {packageData?.name}
          </h3>
          <div className="flex items-center space-x-4 text-white/90 text-sm md:text-base">
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={16} color="#FFFFFF" />
              <span>{packageData?.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="MapPin" size={16} color="#FFFFFF" />
              <span>{packageData?.destinations} Places</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-card p-4 md:p-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-muted-foreground text-xs md:text-sm mb-1">Starting from</p>
            <p className="text-2xl md:text-3xl font-bold text-primary">₹{packageData?.price?.toLocaleString('en-IN')}</p>
            <p className="text-xs md:text-sm text-muted-foreground">per person</p>
          </div>
          <div className="flex items-center space-x-1 bg-secondary/10 px-3 py-1 rounded-full">
            <Icon name="Star" size={16} color="var(--color-secondary)" />
            <span className="text-sm font-semibold text-secondary">{packageData?.rating}</span>
          </div>
        </div>
        
        <div className="space-y-2">
          {packageData?.highlights?.slice(0, 3)?.map((highlight, index) => (
            <div key={index} className="flex items-start space-x-2">
              <Icon name="Check" size={16} color="var(--color-accent)" className="flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground line-clamp-1">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageSelectionCard;