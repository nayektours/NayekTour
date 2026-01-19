import React from 'react';
import Icon from '../../../components/AppIcon';

const ResponseTimeline = () => {
  const timelineSteps = [
    {
      icon: "CheckCircle2",
      title: "Enquiry Received",
      description: "Your enquiry has been successfully submitted to our travel experts",
      status: "completed",
      time: "Just now"
    },
    {
      icon: "Clock",
      title: "Expert Review",
      description: "Our team is reviewing your requirements and preferences",
      status: "current",
      time: "Within 2 hours"
    },
    {
      icon: "Phone",
      title: "Personalized Contact",
      description: "We\'ll reach out via your preferred contact method",
      status: "upcoming",
      time: "Within 4 hours"
    },
    {
      icon: "FileCheck",
      title: "Customized Itinerary",
      description: "Receive your tailored travel plan with detailed pricing",
      status: "upcoming",
      time: "Within 24 hours"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 lg:p-10">
      <div className="flex items-center space-x-3 mb-6 md:mb-8">
        <Icon name="TrendingUp" size={24} color="var(--color-primary)" />
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground text-headline">
          What Happens Next?
        </h2>
      </div>
      <div className="space-y-6 md:space-y-8">
        {timelineSteps?.map((step, index) => (
          <div key={index} className="flex gap-4 md:gap-6">
            <div className="flex flex-col items-center flex-shrink-0">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center ${
                step?.status === 'completed' ? 'bg-emerald-500' :
                step?.status === 'current'? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
              }`}>
                <Icon 
                  name={step?.icon} 
                  size={20} 
                  color={step?.status === 'upcoming' ? 'var(--color-muted-foreground)' : '#FFFFFF'} 
                />
              </div>
              {index < timelineSteps?.length - 1 && (
                <div className={`w-0.5 h-12 md:h-16 mt-2 ${
                  step?.status === 'completed' ? 'bg-emerald-500' : 'bg-gray-200 dark:bg-gray-700'
                }`} />
              )}
            </div>

            <div className="flex-1 pb-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-base md:text-lg font-semibold text-foreground">{step?.title}</h3>
                <span className="text-xs md:text-sm text-muted-foreground whitespace-nowrap ml-4">{step?.time}</span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground">{step?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponseTimeline;