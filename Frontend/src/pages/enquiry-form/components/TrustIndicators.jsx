import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustIndicators = () => {
  const indicators = [
    {
      icon: "Award",
      value: "15+",
      label: "Years Experience",
      color: "text-primary"
    },
    {
      icon: "Users",
      value: "10,000+",
      label: "Happy Travelers",
      color: "text-accent"
    },
    {
      icon: "Shield",
      value: "100%",
      label: "Secure Booking",
      color: "text-secondary"
    },
    {
      icon: "Star",
      value: "4.8/5",
      label: "Customer Rating",
      color: "text-warning"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {indicators?.map((indicator, index) => (
        <div 
          key={index}
          className="bg-card rounded-lg p-4 md:p-6 text-center border border-border hover:shadow-md transition-shadow duration-200"
        >
          <div className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-muted mb-3 ${indicator?.color}`}>
            <Icon name={indicator?.icon} size={24} />
          </div>
          <p className="text-xl md:text-2xl font-bold text-foreground mb-1">{indicator?.value}</p>
          <p className="text-xs md:text-sm text-muted-foreground">{indicator?.label}</p>
        </div>
      ))}
    </div>
  );
};

export default TrustIndicators;