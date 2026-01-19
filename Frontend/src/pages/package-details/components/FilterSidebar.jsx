import React from 'react';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Button from '../../../components/ui/Button';

const FilterSidebar = ({ filters, onFilterChange, onReset }) => {
  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'family', label: 'Family Tours' },
    { value: 'couple', label: 'Romantic Getaways' },
    { value: 'adventure', label: 'Adventure Tours' },
    { value: 'heritage', label: 'Heritage & Culture' },
    { value: 'beach', label: 'Beach Holidays' },
    { value: 'mountain', label: 'Mountain Escapes' }
  ];

  const durationOptions = [
    { value: 'all', label: 'Any Duration' },
    { value: '1-3', label: '1-3 Days' },
    { value: '4-7', label: '4-7 Days' },
    { value: '8-14', label: '8-14 Days' },
    { value: '15+', label: '15+ Days' }
  ];

  const priceRangeOptions = [
    { value: 'all', label: 'Any Price' },
    { value: '0-10000', label: 'Under ₹10,000' },
    { value: '10000-25000', label: '₹10,000 - ₹25,000' },
    { value: '25000-50000', label: '₹25,000 - ₹50,000' },
    { value: '50000-100000', label: '₹50,000 - ₹1,00,000' },
    { value: '100000+', label: 'Above ₹1,00,000' }
  ];

  const seasonOptions = [
    { value: 'all', label: 'All Seasons' },
    { value: 'summer', label: 'Summer (Mar-Jun)' },
    { value: 'monsoon', label: 'Monsoon (Jul-Sep)' },
    { value: 'winter', label: 'Winter (Oct-Feb)' }
  ];

  return (
    <div className="bg-card rounded-lg shadow-md p-4 md:p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg md:text-xl font-bold text-foreground flex items-center">
          <Icon name="SlidersHorizontal" size={20} className="mr-2 text-primary" />
          Filters
        </h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={onReset}
          iconName="RotateCcw"
          iconPosition="left"
        >
          Reset
        </Button>
      </div>
      <div className="space-y-6">
        <div>
          <Select
            label="Category"
            options={categoryOptions}
            value={filters?.category}
            onChange={(value) => onFilterChange('category', value)}
            className="mb-4"
          />
        </div>

        <div>
          <Select
            label="Duration"
            options={durationOptions}
            value={filters?.duration}
            onChange={(value) => onFilterChange('duration', value)}
            className="mb-4"
          />
        </div>

        <div>
          <Select
            label="Price Range"
            options={priceRangeOptions}
            value={filters?.priceRange}
            onChange={(value) => onFilterChange('priceRange', value)}
            className="mb-4"
          />
        </div>

        <div>
          <Select
            label="Best Season"
            options={seasonOptions}
            value={filters?.season}
            onChange={(value) => onFilterChange('season', value)}
            className="mb-4"
          />
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Inclusions</h4>
          <div className="space-y-2">
            <Checkbox
              label="Accommodation"
              checked={filters?.inclusions?.accommodation}
              onChange={(e) => onFilterChange('inclusions', { ...filters?.inclusions, accommodation: e?.target?.checked })}
            />
            <Checkbox
              label="Meals"
              checked={filters?.inclusions?.meals}
              onChange={(e) => onFilterChange('inclusions', { ...filters?.inclusions, meals: e?.target?.checked })}
            />
            <Checkbox
              label="Transport"
              checked={filters?.inclusions?.transport}
              onChange={(e) => onFilterChange('inclusions', { ...filters?.inclusions, transport: e?.target?.checked })}
            />
            <Checkbox
              label="Guide"
              checked={filters?.inclusions?.guide}
              onChange={(e) => onFilterChange('inclusions', { ...filters?.inclusions, guide: e?.target?.checked })}
            />
            <Checkbox
              label="Activities"
              checked={filters?.inclusions?.activities}
              onChange={(e) => onFilterChange('inclusions', { ...filters?.inclusions, activities: e?.target?.checked })}
            />
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Rating</h4>
          <div className="space-y-2">
            {[5, 4, 3]?.map((rating) => (
              <Checkbox
                key={rating}
                label={
                  <div className="flex items-center">
                    {[...Array(rating)]?.map((_, i) => (
                      <Icon key={i} name="Star" size={14} className="text-secondary fill-secondary" />
                    ))}
                    <span className="ml-2 text-sm">& above</span>
                  </div>
                }
                checked={filters?.rating === rating}
                onChange={() => onFilterChange('rating', rating)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;