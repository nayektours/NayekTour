import React from 'react';
import Icon from '../../../components/AppIcon';

const RegionSection = ({ region, isActive, onClick }) => {
  const regionIcons = {
    north: 'Mountain',
    south: 'Palmtree',
    east: 'Sunrise',
    west: 'Waves',
    central: 'Landmark',
    northeast: 'TreePine'
  };

  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-4 md:p-6 rounded-xl transition-all duration-300 ${
        isActive
          ? 'bg-primary text-primary-foreground shadow-lg scale-105'
          : 'bg-card text-foreground hover:bg-muted hover:shadow-md'
      }`}
    >
      <div
        className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 transition-colors duration-300 ${
          isActive ? 'bg-white/20' : 'bg-primary/10'
        }`}
      >
        <Icon
          name={regionIcons?.[region?.id]}
          size={24}
          color={isActive ? '#FFFFFF' : 'var(--color-primary)'}
        />
      </div>
      <h3 className="text-sm md:text-base font-semibold mb-1">{region?.name}</h3>
      <p className="text-xs opacity-80">{region?.stateCount} States</p>
    </button>
  );
};

export default RegionSection;