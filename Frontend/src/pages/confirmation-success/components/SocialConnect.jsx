import React from 'react';
import Icon from '../../../components/AppIcon';

const SocialConnect = () => {
  const socialPlatforms = [
    {
      name: "Facebook",
      icon: "Facebook",
      url: "https://facebook.com/indiawanderlust",
      followers: "25K",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "Instagram",
      icon: "Instagram",
      url: "https://instagram.com/indiawanderlust",
      followers: "45K",
      color: "bg-pink-600 hover:bg-pink-700"
    },
    {
      name: "Twitter",
      icon: "Twitter",
      url: "https://twitter.com/indiawanderlust",
      followers: "15K",
      color: "bg-sky-500 hover:bg-sky-600"
    },
    {
      name: "Youtube",
      icon: "Youtube",
      url: "https://youtube.com/indiawanderlust",
      followers: "30K",
      color: "bg-red-600 hover:bg-red-700"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 lg:p-10">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 text-headline">
          Join Our Travel Community
        </h2>
        <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
          Follow us for daily travel inspiration, exclusive offers, and real traveler stories from across India.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {socialPlatforms?.map((platform) => (
          <a
            key={platform?.name}
            href={platform?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="border border-border rounded-lg p-4 md:p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${platform?.color} flex items-center justify-center mx-auto mb-3 md:mb-4 transition-transform duration-300 group-hover:scale-110`}>
                <Icon name={platform?.icon} size={24} color="#FFFFFF" />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-foreground mb-1">{platform?.name}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{platform?.followers} followers</p>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-6 md:mt-8 p-4 md:p-6 bg-amber-50 dark:bg-amber-950 rounded-lg text-center">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Icon name="Gift" size={20} color="var(--color-secondary)" />
          <h3 className="text-sm md:text-base font-semibold text-foreground">Share Your Journey</h3>
        </div>
        <p className="text-xs md:text-sm text-muted-foreground">
          Tag us in your travel photos with #Nayek Tours and get featured on our social media!
        </p>
      </div>
    </div>
  );
};

export default SocialConnect;