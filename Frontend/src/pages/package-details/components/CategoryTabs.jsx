import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryTabs = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    { id: 'all', label: 'All Packages', icon: 'Grid3x3' },
    { id: 'family', label: 'Family Tours', icon: 'Users' },
    { id: 'couple', label: 'Romantic', icon: 'Heart' },
    { id: 'adventure', label: 'Adventure', icon: 'Mountain' },
    { id: 'heritage', label: 'Heritage', icon: 'Landmark' },
    { id: 'beach', label: 'Beach', icon: 'Waves' },
    { id: 'mountain', label: 'Mountains', icon: 'TreePine' }
  ];

  return (
    <div className="bg-card rounded-lg shadow-md p-4 mb-6 overflow-x-auto">
      <div className="flex space-x-2 min-w-max lg:min-w-0 lg:justify-center">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => onCategoryChange(category?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
              activeCategory === category?.id
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-muted text-foreground hover:bg-muted/80'
            }`}
          >
            <Icon name={category?.icon} size={18} />
            <span>{category?.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;