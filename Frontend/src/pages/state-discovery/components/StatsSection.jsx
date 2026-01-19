import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsSection = () => {
  const stats = [
    {
      icon: 'MapPin',
      value: '28+',
      label: 'States & UTs',
      color: 'var(--color-primary)'
    },
    {
      icon: 'Package',
      value: '500+',
      label: 'Tour Packages',
      color: 'var(--color-secondary)'
    },
    {
      icon: 'Users',
      value: '10,000+',
      label: 'Happy Travelers',
      color: 'var(--color-accent)'
    },
    {
      icon: 'Award',
      value: '15+',
      label: 'Years Experience',
      color: 'var(--color-warning)'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
      {stats?.map((stat, index) => (
        <div
          key={index}
          className="bg-card rounded-xl p-4 md:p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div
            className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3"
            style={{ backgroundColor: `${stat?.color}15` }}
          >
            <Icon name={stat?.icon} size={24} color={stat?.color} />
          </div>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-1">
            {stat?.value}
          </p>
          <p className="text-xs md:text-sm text-muted-foreground">{stat?.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;