import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const navigate = useNavigate();

  const contactMethods = [
    {
      id: 1,
      icon: "Phone",
      title: "Call Us",
      description: "Speak with our travel experts",
      action: "tel:+918421539554",
      label: "+91 84215 39554",
      color: "var(--color-primary)"
    },
    {
      id: 2,
      icon: "MessageCircle",
      title: "WhatsApp",
      description: "Quick response on WhatsApp",
      action: "https://wa.me/918421539554",
      label: "Chat Now",
      color: "#25D366"
    },
    {
      id: 3,
      icon: "Mail",
      title: "Email Us",
      description: "Get detailed information",
      action: "mailto:jawaleritesh1@gmail.com",
      label: "jawaleritesh1@gmail.com",
      color: "var(--color-secondary)"
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-headline text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-body text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Let us craft your perfect Indian adventure. Share your dreams, and we'll turn them into an unforgettable reality.
          </p>
          <Button
            variant="secondary"
            size="xl"
            iconName="Send"
            iconPosition="right"
            onClick={() => navigate('/enquiry-form')}
            className="shadow-xl hover:shadow-2xl"
          >
            Submit Enquiry Now
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {contactMethods?.map((method) => (
            <a
              key={method?.id}
              href={method?.action}
              target={method?.id === 2 ? "_blank" : undefined}
              rel={method?.id === 2 ? "noopener noreferrer" : undefined}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon name={method?.icon} size={32} color="#FFFFFF" />
              </div>
              <h3 className="text-headline text-xl font-bold text-white mb-2">
                {method?.title}
              </h3>
              <p className="text-sm text-white/80 mb-3">
                {method?.description}
              </p>
              <p className="text-sm font-semibold text-white">
                {method?.label}
              </p>
            </a>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Icon name="Clock" size={24} color="#FFFFFF" />
              </div>
              <div className="text-left">
                <p className="text-sm text-white/80">Available</p>
                <p className="text-lg font-bold text-white">24/7 Support</p>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-white/20" />

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Icon name="Zap" size={24} color="#FFFFFF" />
              </div>
              <div className="text-left">
                <p className="text-sm text-white/80">Response Time</p>
                <p className="text-lg font-bold text-white">Under 2 Hours</p>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-white/20" />

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Icon name="Shield" size={24} color="#FFFFFF" />
              </div>
              <div className="text-left">
                <p className="text-sm text-white/80">Booking</p>
                <p className="text-lg font-bold text-white">100% Secure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;