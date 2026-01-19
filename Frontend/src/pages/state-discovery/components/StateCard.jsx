import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StateCard = ({ state, onQuickView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/package-details', { state: { selectedState: state?.name } });
  };

  return (
    <div
      className="group relative bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleExplore}
    >
      <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
        <Image
          src={state?.image}
          alt={state?.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {state?.isFeatured && (
          <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
            <Icon name="Star" size={14} />
            <span>Featured</span>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 text-headline">
            {state?.name}
          </h3>
          <p className="text-white/90 text-sm md:text-base line-clamp-2 mb-3">
            {state?.tagline}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-white/80 text-xs md:text-sm">
              <div className="flex items-center space-x-1">
                <Icon name="MapPin" size={16} />
                <span>{state?.destinationCount} Places</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Package" size={16} />
                <span>{state?.packageCount} Packages</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute inset-0 bg-primary/95 backdrop-blur-sm transition-all duration-300 flex flex-col justify-center items-center p-6 ${
          isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={(e) => e?.stopPropagation()}
      >
        <div className="text-center text-white space-y-4">
          <h4 className="text-xl md:text-2xl font-bold text-headline">Discover {state?.name}</h4>
          <p className="text-sm md:text-base opacity-90 line-clamp-3">{state?.description}</p>
          
          <div className="grid grid-cols-2 gap-3 mt-4">
            {state?.highlights?.slice(0, 4)?.map((highlight, index) => (
              <div key={index} className="flex items-center space-x-2 text-xs md:text-sm">
                <Icon name="Check" size={16} className="flex-shrink-0" />
                <span className="line-clamp-1">{highlight}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Button
              variant="secondary"
              size="sm"
              iconName="Eye"
              iconPosition="left"
              onClick={(e) => {
                e?.stopPropagation();
                onQuickView(state);
              }}
              className="flex-1"
            >
              Quick View
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="ArrowRight"
              iconPosition="right"
              onClick={handleExplore}
              className="flex-1 bg-white text-primary hover:bg-white/90"
            >
              Explore Packages
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateCard;