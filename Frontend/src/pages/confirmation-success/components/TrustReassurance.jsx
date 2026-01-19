import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustReassurance = () => {
  const trustPoints = [
    {
      icon: "Shield",
      title: "15+ Years Experience",
      description: "Trusted by thousands of travelers across India"
    },
    {
      icon: "Award",
      title: "Expert Travel Planners",
      description: "Certified professionals with local expertise"
    },
    {
      icon: "Users",
      title: "10,000+ Happy Travelers",
      description: "Join our community of satisfied customers"
    },
    {
      icon: "Lock",
      title: "Secure & Reliable",
      description: "Your information is safe with us"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-amber-50 dark:from-blue-950 dark:to-amber-950 rounded-lg p-6 md:p-8 lg:p-10">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 text-headline">
          Why Choose Nayek Tours?
        </h2>
        <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
          Your trust is our foundation. We're committed to creating unforgettable journeys with personalized care.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {trustPoints?.map((point, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 flex items-start space-x-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <Icon name={point?.icon} size={20} color="#FFFFFF" />
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">{point?.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground">{point?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustReassurance;