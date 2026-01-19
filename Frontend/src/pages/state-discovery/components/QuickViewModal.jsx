import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickViewModal = ({ state, onClose, onExplore }) => {
  if (!state) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-in-right">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors duration-200"
          aria-label="Close modal"
        >
          <Icon name="X" size={20} />
        </button>

        <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-t-2xl">
          <Image
            src={state?.image}
            alt={state?.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 text-headline">
              {state?.name}
            </h2>
            <p className="text-white/90 text-base md:text-lg">{state?.tagline}</p>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 text-headline">
              About {state?.name}
            </h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              {state?.description}
            </p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 text-headline">
              Highlights & Experiences
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {state?.highlights?.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-200"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={16} color="var(--color-primary)" />
                  </div>
                  <span className="text-sm md:text-base text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-border">
            <div className="text-center p-4 rounded-lg bg-muted">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                <Icon name="MapPin" size={24} color="var(--color-primary)" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-foreground">{state?.destinationCount}</p>
              <p className="text-xs md:text-sm text-muted-foreground">Destinations</p>
            </div>
            
            <div className="text-center p-4 rounded-lg bg-muted">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-2">
                <Icon name="Package" size={24} color="var(--color-secondary)" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-foreground">{state?.packageCount}</p>
              <p className="text-xs md:text-sm text-muted-foreground">Packages</p>
            </div>
            
            <div className="text-center p-4 rounded-lg bg-muted">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-2">
                <Icon name="Calendar" size={24} color="var(--color-accent)" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-foreground">{state?.bestTime}</p>
              <p className="text-xs md:text-sm text-muted-foreground">Best Season</p>
            </div>
            
            <div className="text-center p-4 rounded-lg bg-muted">
              <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center mx-auto mb-2">
                <Icon name="Star" size={24} color="var(--color-warning)" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-foreground">{state?.rating}</p>
              <p className="text-xs md:text-sm text-muted-foreground">Rating</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              variant="outline"
              size="lg"
              iconName="X"
              iconPosition="left"
              onClick={onClose}
              className="flex-1"
            >
              Close
            </Button>
            <Button
              variant="default"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              onClick={() => onExplore(state)}
              className="flex-1"
            >
              Explore Packages
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;