import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-card rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={testimonial?.customerImage}
            alt={testimonial?.customerImageAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-4 flex-1">
          <h4 className="text-base md:text-lg font-semibold text-foreground">
            {testimonial?.customerName}
          </h4>
          <p className="text-sm text-muted-foreground">{testimonial?.location}</p>
          <div className="flex items-center mt-1">
            {[...Array(5)]?.map((_, index) => (
              <Icon
                key={index}
                name="Star"
                size={14}
                className={index < testimonial?.rating ? 'text-secondary fill-secondary' : 'text-muted'}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-muted-foreground text-sm md:text-base mb-4 line-clamp-4">
        "{testimonial?.review}"
      </p>
      <div className="flex items-center justify-between text-xs md:text-sm text-muted-foreground">
        <div className="flex items-center">
          <Icon name="MapPin" size={14} className="mr-1" />
          <span>{testimonial?.packageName}</span>
        </div>
        <div className="flex items-center">
          <Icon name="Calendar" size={14} className="mr-1" />
          <span>{testimonial?.travelDate}</span>
        </div>
      </div>
      {testimonial?.images && testimonial?.images?.length > 0 && (
        <div className="grid grid-cols-3 gap-2 mt-4">
          {testimonial?.images?.map((img, index) => (
            <div key={index} className="relative h-20 rounded-lg overflow-hidden">
              <Image
                src={img?.src}
                alt={img?.alt}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;