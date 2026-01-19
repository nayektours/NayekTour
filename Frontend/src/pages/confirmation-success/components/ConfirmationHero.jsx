import React from 'react';
import Icon from '../../../components/AppIcon';

const ConfirmationHero = ({ enquiryReference, submissionTime }) => {
  return (
    <div className="bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-950 dark:to-blue-950 py-12 md:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-emerald-500 mb-6 md:mb-8 animate-fade-in">
          <Icon name="CheckCircle2" size={40} color="#FFFFFF" className="md:w-12 md:h-12 lg:w-14 lg:h-14" />
        </div>
        
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 text-headline">
          Enquiry Submitted Successfully!
        </h1>
        
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
          Thank you for choosing Nayek Tours. Your journey to incredible India begins here.
        </p>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6 lg:p-8 inline-block">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <Icon name="FileText" size={20} color="var(--color-primary)" />
            <span className="text-sm md:text-base text-muted-foreground">Enquiry Reference</span>
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">{enquiryReference}</p>
          <p className="text-xs md:text-sm text-muted-foreground mt-2">Submitted on {submissionTime}</p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationHero;