import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactChannels = () => {
  const contactMethods = [
    {
      icon: "MessageCircle",
      title: "WhatsApp",
      description: "Get instant responses on WhatsApp",
      action: "Chat Now",
      link: "https://wa.me/918421539554",
      color: "bg-emerald-500 hover:bg-emerald-600",
      primary: true
    },
    {
      icon: "Phone",
      title: "Call Us",
      description: "Speak directly with our travel experts",
      action: "Call Now",
      link: "tel:+918421539554",
      color: "bg-primary hover:bg-blue-700",
      primary: false
    },
    {
      icon: "Mail",
      title: "Email",
      description: "Send us detailed queries anytime",
      action: "Email Us",
      link: "mailto:jawaleritesh1@gmail.com",
      color: "bg-secondary hover:bg-amber-600",
      primary: false
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 lg:p-10">
      <div className="flex items-center space-x-3 mb-6 md:mb-8">
        <Icon name="Headphones" size={24} color="var(--color-primary)" />
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground text-headline">
          Need Immediate Assistance?
        </h2>
      </div>
      <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
        Our travel experts are available to answer your questions and help customize your perfect journey.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {contactMethods?.map((method, index) => (
          <div key={index} className="border border-border rounded-lg p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${method?.color} flex items-center justify-center mb-4`}>
              <Icon name={method?.icon} size={24} color="#FFFFFF" />
            </div>
            
            <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">{method?.title}</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4">{method?.description}</p>
            
            <a href={method?.link} target="_blank" rel="noopener noreferrer">
              <Button 
                variant={method?.primary ? "default" : "outline"} 
                size="default"
                fullWidth
              >
                {method?.action}
              </Button>
            </a>
          </div>
        ))}
      </div>
      <div className="mt-6 md:mt-8 p-4 md:p-6 bg-blue-50 dark:bg-blue-950 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Clock" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">Business Hours</h4>
            <p className="text-xs md:text-sm text-muted-foreground">
              Monday - Saturday: 9:00 AM - 8:00 PM IST<br />
              Sunday: 10:00 AM - 6:00 PM IST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactChannels;