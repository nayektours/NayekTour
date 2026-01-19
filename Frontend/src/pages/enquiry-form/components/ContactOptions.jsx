import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactOptions = () => {
  const contactMethods = [
    {
      icon: "Phone",
      title: "Call Us Directly",
      description: "Speak with our travel experts",
      action: "tel:+918421539554",
      buttonText: "Call Now",
      buttonVariant: "outline"
    },
    {
      icon: "MessageCircle",
      title: "WhatsApp Chat",
      description: "Quick response on WhatsApp",
      action: "https://wa.me/918421539554",
      buttonText: "Chat on WhatsApp",
      buttonVariant: "success"
    },
    {
      icon: "Mail",
      title: "Email Support",
      description: "Detailed enquiries welcome",
      action: "mailto:jawaleritesh1@gmail.com",
      buttonText: "Send Email",
      buttonVariant: "secondary"
    }
  ];

  const handleContact = (action) => {
    window.open(action, '_blank');
  };

  return (
    <div className="bg-muted rounded-lg p-6 md:p-8">
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 text-headline">
          Need Immediate Assistance?
        </h3>
        <p className="text-sm md:text-base text-muted-foreground">
          Our travel experts are available to help you plan your perfect journey
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {contactMethods?.map((method, index) => (
          <div 
            key={index}
            className="bg-card rounded-lg p-4 md:p-6 border border-border hover:shadow-md transition-all duration-200"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name={method?.icon} size={24} className="text-primary" />
              </div>
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">
                {method?.title}
              </h4>
              <p className="text-xs md:text-sm text-muted-foreground mb-4">
                {method?.description}
              </p>
              <Button
                variant={method?.buttonVariant}
                size="sm"
                fullWidth
                onClick={() => handleContact(method?.action)}
              >
                {method?.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
        <div className="flex items-start">
          <Icon name="Clock" size={20} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-foreground mb-1">Response Time</p>
            <p className="text-xs text-muted-foreground">
              We typically respond to enquiries within 2-4 hours during business hours (9 AM - 8 PM IST)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactOptions;