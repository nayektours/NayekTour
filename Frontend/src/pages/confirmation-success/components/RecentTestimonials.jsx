import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RecentTestimonials = () => {
  const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_111e29bbe-1763294966477.png",
    imageAlt: "Professional Indian woman with long black hair wearing traditional red saree smiling warmly at camera",
    rating: 5,
    text: "Nayek Tours made our Kerala trip absolutely magical! The attention to detail and personalized service exceeded all expectations.",
    package: "Kerala Backwaters Experience",
    date: "December 2025"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi, NCR",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1927cf9a3-1763293370228.png",
    imageAlt: "Middle-aged Indian man with short black hair and beard wearing blue formal shirt with confident smile",
    rating: 5,
    text: "Perfect family vacation to Rajasthan! Every detail was handled professionally. Our kids still talk about the desert safari.",
    package: "Royal Rajasthan Tour",
    date: "November 2025"
  },
  {
    id: 3,
    name: "Anita Desai",
    location: "Bangalore, Karnataka",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14e479cba-1763300676390.png",
    imageAlt: "Young Indian woman with shoulder-length black hair wearing casual green top with bright cheerful smile",
    rating: 5,
    text: "Himachal adventure was breathtaking! The team\'s local knowledge and support made our honeymoon unforgettable.",
    package: "Himachal Honeymoon Package",
    date: "January 2026"
  }];


  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 lg:p-10">
      <div className="flex items-center space-x-3 mb-6 md:mb-8">
        <Icon name="Star" size={24} color="var(--color-secondary)" />
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground text-headline">
          Recent Traveler Stories
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {testimonials?.map((testimonial) =>
        <div key={testimonial?.id} className="border border-border rounded-lg p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex-shrink-0">
                <Image
                src={testimonial?.image}
                alt={testimonial?.imageAlt}
                className="w-full h-full object-cover" />

              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm md:text-base font-semibold text-foreground truncate">{testimonial?.name}</h3>
                <p className="text-xs md:text-sm text-muted-foreground truncate">{testimonial?.location}</p>
              </div>
            </div>

            <div className="flex items-center space-x-1 mb-3">
              {[...Array(testimonial?.rating)]?.map((_, i) =>
            <Icon key={i} name="Star" size={16} color="var(--color-secondary)" className="fill-current" />
            )}
            </div>

            <p className="text-sm md:text-base text-muted-foreground mb-4 line-clamp-3">
              {testimonial?.text}
            </p>

            <div className="pt-4 border-t border-border">
              <p className="text-xs md:text-sm font-medium text-primary mb-1">{testimonial?.package}</p>
              <p className="text-xs text-muted-foreground">{testimonial?.date}</p>
            </div>
          </div>
        )}
      </div>
    </div>);

};

export default RecentTestimonials;