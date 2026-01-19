import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PackageSummaryPanel = ({ selectedPackage, onEnquire, onWhatsApp }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    })?.format(price);
  };

  if (!selectedPackage) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 lg:sticky lg:top-24 bg-card shadow-lg rounded-t-lg lg:rounded-lg p-4 md:p-6 z-40 border-t lg:border border-border">
      <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 flex items-center">
        <Icon name="Package" size={20} className="mr-2 text-primary" />
        Package Summary
      </h3>
      <div className="space-y-4">
        <div>
          <h4 className="text-base md:text-lg font-semibold text-foreground line-clamp-2">
            {selectedPackage?.title}
          </h4>
          <div className="flex items-center text-sm text-muted-foreground mt-1">
            <Icon name="MapPin" size={14} className="mr-1" />
            <span>{selectedPackage?.location}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} className="text-primary" />
            <span className="text-foreground">{selectedPackage?.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Users" size={16} className="text-primary" />
            <span className="text-foreground">{selectedPackage?.groupSize}</span>
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <div className="flex items-baseline justify-between mb-4">
            <span className="text-sm text-muted-foreground">Total Price</span>
            <div className="text-right">
              {selectedPackage?.originalPrice && (
                <span className="text-sm text-muted-foreground line-through block">
                  {formatPrice(selectedPackage?.originalPrice)}
                </span>
              )}
              <span className="text-2xl md:text-3xl font-bold text-primary">
                {formatPrice(selectedPackage?.price)}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <Button
              variant="default"
              size="lg"
              fullWidth
              iconName="Send"
              iconPosition="right"
              onClick={onEnquire}
            >
              Enquire Now
            </Button>
            <Button
              variant="success"
              size="lg"
              fullWidth
              iconName="MessageCircle"
              iconPosition="left"
              onClick={onWhatsApp}
            >
              WhatsApp Us
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground pt-2">
          <div className="flex items-center">
            <Icon name="Shield" size={14} className="mr-1 text-success" />
            <span>Secure Booking</span>
          </div>
          <div className="flex items-center">
            <Icon name="Award" size={14} className="mr-1 text-secondary" />
            <span>Best Price</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageSummaryPanel;