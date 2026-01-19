import React from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const EnquiryFormFields = ({ formData, errors, onChange, onCheckboxChange }) => {
  const travelTypeOptions = [
    { value: 'family', label: 'Family Vacation' },
    { value: 'couple', label: 'Couple Getaway' },
    { value: 'friends', label: 'Friends Trip' },
    { value: 'solo', label: 'Solo Travel' },
    { value: 'group', label: 'Group Tour' }
  ];

  const groupSizeOptions = [
    { value: '1-2', label: '1-2 People' },
    { value: '3-4', label: '3-4 People' },
    { value: '5-6', label: '5-6 People' },
    { value: '7-10', label: '7-10 People' },
    { value: '10+', label: 'More than 10 People' }
  ];

  const budgetOptions = [
    { value: 'budget', label: 'Budget Friendly (₹10,000 - ₹25,000)' },
    { value: 'moderate', label: 'Moderate (₹25,000 - ₹50,000)' },
    { value: 'premium', label: 'Premium (₹50,000 - ₹1,00,000)' },
    { value: 'luxury', label: 'Luxury (₹1,00,000+)' }
  ];

  const contactPreferenceOptions = [
    { value: 'phone', label: 'Phone Call' },
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'email', label: 'Email' }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Input
          label="Full Name"
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          value={formData?.fullName}
          onChange={onChange}
          error={errors?.fullName}
          required
        />

        <Input
          label="Email Address"
          type="email"
          name="email"
          placeholder="your.email@example.com"
          value={formData?.email}
          onChange={onChange}
          error={errors?.email}
          required
          description="We'll send confirmation to this email"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Input
          label="Phone Number"
          type="tel"
          name="phone"
          placeholder="+91 98765 43210"
          value={formData?.phone}
          onChange={onChange}
          error={errors?.phone}
          required
        />

        <Select
          label="Travel Type"
          name="travelType"
          options={travelTypeOptions}
          value={formData?.travelType}
          onChange={(value) => onChange({ target: { name: 'travelType', value } })}
          error={errors?.travelType}
          required
          placeholder="Select travel type"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Select
          label="Group Size"
          name="groupSize"
          options={groupSizeOptions}
          value={formData?.groupSize}
          onChange={(value) => onChange({ target: { name: 'groupSize', value } })}
          error={errors?.groupSize}
          required
          placeholder="Select group size"
        />

        <Select
          label="Budget Range"
          name="budget"
          options={budgetOptions}
          value={formData?.budget}
          onChange={(value) => onChange({ target: { name: 'budget', value } })}
          error={errors?.budget}
          required
          placeholder="Select budget range"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Input
          label="Preferred Travel Date"
          type="date"
          name="travelDate"
          value={formData?.travelDate}
          onChange={onChange}
          error={errors?.travelDate}
          required
          min={new Date()?.toISOString()?.split('T')?.[0]}
        />

        <Select
          label="Preferred Contact Method"
          name="contactPreference"
          options={contactPreferenceOptions}
          value={formData?.contactPreference}
          onChange={(value) => onChange({ target: { name: 'contactPreference', value } })}
          error={errors?.contactPreference}
          required
          placeholder="How should we contact you?"
        />
      </div>
      <div>
        <Input
          label="Special Requirements"
          type="text"
          name="specialRequirements"
          placeholder="Any dietary restrictions, accessibility needs, or special requests..."
          value={formData?.specialRequirements}
          onChange={onChange}
          description="Optional: Let us know about any special needs or preferences"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-3">
          Additional Preferences
        </label>
        <div className="space-y-3">
          <Checkbox
            label="I'm interested in customizing this package"
            checked={formData?.customizePackage}
            onChange={(e) => onCheckboxChange('customizePackage', e?.target?.checked)}
          />
          <Checkbox
            label="Send me information about similar packages"
            checked={formData?.similarPackages}
            onChange={(e) => onCheckboxChange('similarPackages', e?.target?.checked)}
          />
          <Checkbox
            label="Subscribe to newsletter for travel tips and offers"
            checked={formData?.newsletter}
            onChange={(e) => onCheckboxChange('newsletter', e?.target?.checked)}
          />
        </div>
      </div>
      <div className="bg-muted p-4 rounded-lg">
        <Checkbox
          label="I agree to the Terms & Conditions and Privacy Policy"
          checked={formData?.agreeTerms}
          onChange={(e) => onCheckboxChange('agreeTerms', e?.target?.checked)}
          error={errors?.agreeTerms}
          required
          description="By submitting this form, you agree to our terms of service and privacy policy"
        />
      </div>
    </div>
  );
};

export default EnquiryFormFields;