import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const JourneySummaryPanel = ({ 
  selectedPackage, 
  startDate, 
  endDate, 
  formData, 
  totalPrice,
  onProceedToEnquiry,
  isSticky = false 
}) => {
  const formatDate = (date) => {
    if (!date) return 'Not selected';
    const day = String(date?.getDate())?.padStart(2, '0');
    const month = String(date?.getMonth() + 1)?.padStart(2, '0');
    const year = date?.getFullYear();
    return `${day}/${month}/${year}`;
  };
  
  const calculateDuration = () => {
    if (!startDate || !endDate) return selectedPackage?.duration || 'N/A';
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} Days`;
  };
  
  const getAccommodationLabel = (value) => {
    const options = {
      'standard': 'Standard (3-Star)',
      'deluxe': 'Deluxe (4-Star)',
      'luxury': 'Luxury (5-Star)',
      'budget': 'Budget'
    };
    return options?.[value] || value;
  };
  
  const getMealLabel = (value) => {
    const options = {
      'breakfast': 'Breakfast Only',
      'half-board': 'Half Board',
      'full-board': 'Full Board',
      'none': 'No Meals'
    };
    return options?.[value] || value;
  };
  
  const isComplete = selectedPackage && startDate && endDate && formData?.groupSize && formData?.accommodation && formData?.mealPlan;
  
  return (
    <div className={`bg-card rounded-lg shadow-lg overflow-hidden ${isSticky ? 'lg:sticky lg:top-24' : ''}`}>
      <div className="bg-gradient-to-r from-primary to-secondary p-4 md:p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center">
            <Icon name="Briefcase" size={24} color="#FFFFFF" />
          </div>
          <div>
            <h3 className="text-white text-lg md:text-xl font-bold text-headline">Journey Summary</h3>
            <p className="text-white/80 text-xs md:text-sm">Review your selections</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:p-6 space-y-6">
        {selectedPackage ? (
          <>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Selected Package</p>
                <p className="text-base md:text-lg font-semibold text-foreground line-clamp-2">
                  {selectedPackage?.name}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Start Date</p>
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={16} color="var(--color-primary)" />
                    <p className="text-sm font-medium text-foreground">{formatDate(startDate)}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-xs text-muted-foreground mb-1">End Date</p>
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={16} color="var(--color-primary)" />
                    <p className="text-sm font-medium text-foreground">{formatDate(endDate)}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-xs text-muted-foreground mb-1">Duration</p>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} color="var(--color-accent)" />
                  <p className="text-sm font-medium text-foreground">{calculateDuration()}</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-border pt-4 space-y-3">
              <h4 className="text-sm font-semibold text-foreground">Traveler Preferences</h4>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Group Size</span>
                  <span className="text-sm font-medium text-foreground">
                    {formData?.groupSize ? `${formData?.groupSize} ${formData?.groupSize === '1' ? 'Person' : 'People'}` : 'Not selected'}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Accommodation</span>
                  <span className="text-sm font-medium text-foreground">
                    {formData?.accommodation ? getAccommodationLabel(formData?.accommodation) : 'Not selected'}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Meal Plan</span>
                  <span className="text-sm font-medium text-foreground">
                    {formData?.mealPlan ? getMealLabel(formData?.mealPlan) : 'Not selected'}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="border-t border-border pt-4">
              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Base Price</span>
                  <span className="text-sm font-medium text-foreground">
                    ₹{selectedPackage?.price?.toLocaleString('en-IN')}
                  </span>
                </div>
                
                {formData?.accommodation === 'luxury' && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Luxury Upgrade</span>
                    <span className="text-sm font-medium text-accent">
                      +₹{(selectedPackage?.price * 0.3)?.toLocaleString('en-IN')}
                    </span>
                  </div>
                )}
                
                <div className="border-t border-border pt-2 mt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-semibold text-foreground">Estimated Total</span>
                    <span className="text-xl md:text-2xl font-bold text-primary">
                      ₹{totalPrice?.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">per person (taxes included)</p>
                </div>
              </div>
            </div>
            
            <Button
              variant="default"
              size="lg"
              fullWidth
              iconName="Send"
              iconPosition="right"
              disabled={!isComplete}
              onClick={onProceedToEnquiry}
            >
              {isComplete ? 'Proceed to Enquiry' : 'Complete All Steps'}
            </Button>
            
            {!isComplete && (
              <div className="flex items-start space-x-2 text-xs text-muted-foreground">
                <Icon name="Info" size={14} className="flex-shrink-0 mt-0.5" />
                <p>Please complete all selections to proceed with your enquiry</p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-8 space-y-3">
            <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center">
              <Icon name="Package" size={32} color="var(--color-muted-foreground)" />
            </div>
            <p className="text-sm text-muted-foreground">Select a package to begin planning your journey</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JourneySummaryPanel;