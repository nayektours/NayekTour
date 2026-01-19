import React from 'react';

import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const TravelerDetailsForm = ({ formData, onFormChange, errors }) => {
  const groupSizeOptions = [
    { value: '1', label: '1 Person' },
    { value: '2', label: '2 People' },
    { value: '3', label: '3 People' },
    { value: '4', label: '4 People' },
    { value: '5', label: '5 People' },
    { value: '6', label: '6 People' },
    { value: '7-10', label: '7-10 People' },
    { value: '10+', label: 'More than 10' }
  ];
  
  const accommodationOptions = [
    { value: 'standard', label: 'Standard (3-Star Hotels)' },
    { value: 'deluxe', label: 'Deluxe (4-Star Hotels)' },
    { value: 'luxury', label: 'Luxury (5-Star Hotels)' },
    { value: 'budget', label: 'Budget (Guesthouses)' }
  ];
  
  const mealOptions = [
    { value: 'breakfast', label: 'Breakfast Only' },
    { value: 'half-board', label: 'Half Board (Breakfast + Dinner)' },
    { value: 'full-board', label: 'Full Board (All Meals)' },
    { value: 'none', label: 'No Meals' }
  ];
  
  return (
    <div className="bg-card rounded-lg p-4 md:p-6 lg:p-8 shadow-md space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon name="Users" size={20} color="var(--color-primary)" />
        </div>
        <div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground text-headline">
            Traveler Details
          </h3>
          <p className="text-sm text-muted-foreground">Customize your journey preferences</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Select
          label="Group Size"
          description="Number of travelers"
          options={groupSizeOptions}
          value={formData?.groupSize}
          onChange={(value) => onFormChange('groupSize', value)}
          error={errors?.groupSize}
          required
        />
        
        <Select
          label="Accommodation Type"
          description="Choose your preferred stay"
          options={accommodationOptions}
          value={formData?.accommodation}
          onChange={(value) => onFormChange('accommodation', value)}
          error={errors?.accommodation}
          required
        />
      </div>
      <Select
        label="Meal Preference"
        description="Select meal plan for your journey"
        options={mealOptions}
        value={formData?.mealPlan}
        onChange={(value) => onFormChange('mealPlan', value)}
        error={errors?.mealPlan}
        required
      />
      <div className="space-y-2">
        <label className="block text-sm font-medium text-foreground">
          Special Requirements
          <span className="text-muted-foreground ml-1">(Optional)</span>
        </label>
        <textarea
          value={formData?.specialRequirements}
          onChange={(e) => onFormChange('specialRequirements', e?.target?.value)}
          placeholder="Any dietary restrictions, accessibility needs, or special requests..."
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 resize-none"
        />
        <p className="text-xs text-muted-foreground">
          Let us know about any specific needs to make your journey comfortable
        </p>
      </div>
      <div className="bg-muted/50 rounded-lg p-4 space-y-3">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
          <div className="space-y-2 text-sm text-foreground">
            <p className="font-medium">Customization Options:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Accommodation upgrades available at additional cost</li>
              <li>• Meal plans can be modified during the journey</li>
              <li>• Special arrangements for celebrations or events</li>
              <li>• Child-friendly options and family packages available</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelerDetailsForm;