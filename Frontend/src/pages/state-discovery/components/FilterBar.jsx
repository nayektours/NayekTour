import React from 'react';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FilterBar = ({ filters, onFilterChange, onReset }) => {
  const regionOptions = [
    { value: 'all', label: 'All Regions' },
    { value: 'north', label: 'North India' },
    { value: 'south', label: 'South India' },
    { value: 'east', label: 'East India' },
    { value: 'west', label: 'West India' },
    { value: 'central', label: 'Central India' },
    { value: 'northeast', label: 'Northeast India' }
  ];

  const travelStyleOptions = [
    { value: 'all', label: 'All Styles' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'cultural', label: 'Cultural' },
    { value: 'beach', label: 'Beach & Coastal' },
    { value: 'heritage', label: 'Heritage' },
    { value: 'nature', label: 'Nature & Wildlife' },
    { value: 'spiritual', label: 'Spiritual' },
    { value: 'hill-station', label: 'Hill Stations' }
  ];

  const seasonOptions = [
    { value: 'all', label: 'All Seasons' },
    { value: 'winter', label: 'Winter (Oct-Feb)' },
    { value: 'summer', label: 'Summer (Mar-Jun)' },
    { value: 'monsoon', label: 'Monsoon (Jul-Sep)' },
    { value: 'year-round', label: 'Year Round' }
  ];

  const sortOptions = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'name-asc', label: 'Name (A-Z)' },
    { value: 'name-desc', label: 'Name (Z-A)' },
    { value: 'packages-high', label: 'Most Packages' },
    { value: 'packages-low', label: 'Least Packages' }
  ];

  return (
    <div className="bg-card rounded-xl shadow-md p-4 md:p-6 mb-6 md:mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
        <h2 className="text-xl md:text-2xl font-semibold text-foreground text-headline">
          Discover Your Perfect Destination
        </h2>
        <Button
          variant="outline"
          size="sm"
          iconName="RotateCcw"
          iconPosition="left"
          onClick={onReset}
        >
          Reset Filters
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Input
          type="search"
          placeholder="Search states or destinations..."
          value={filters?.search}
          onChange={(e) => onFilterChange('search', e?.target?.value)}
          className="w-full"
        />

        <Select
          options={regionOptions}
          value={filters?.region}
          onChange={(value) => onFilterChange('region', value)}
          placeholder="Select region"
        />

        <Select
          options={travelStyleOptions}
          value={filters?.travelStyle}
          onChange={(value) => onFilterChange('travelStyle', value)}
          placeholder="Travel style"
        />

        <Select
          options={seasonOptions}
          value={filters?.season}
          onChange={(value) => onFilterChange('season', value)}
          placeholder="Best season"
        />
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4 pt-4 border-t border-border">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="Info" size={16} />
          <span>Showing results based on your preferences</span>
        </div>

        <Select
          options={sortOptions}
          value={filters?.sortBy}
          onChange={(value) => onFilterChange('sortBy', value)}
          placeholder="Sort by"
          className="w-full sm:w-48"
        />
      </div>
    </div>
  );
};

export default FilterBar;