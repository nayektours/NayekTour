import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e?.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-6 md:p-8 lg:p-10 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-white bg-opacity-20 mb-4 md:mb-6">
          <Icon name="Mail" size={24} color="#FFFFFF" />
        </div>

        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-headline">
          Stay Updated with Travel Inspiration
        </h2>
        
        <p className="text-sm md:text-base mb-6 md:mb-8 opacity-90">
          Get exclusive travel tips, seasonal offers, and destination guides delivered to your inbox.
        </p>

        {!isSubscribed ? (
          <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-3 md:gap-4 max-w-xl mx-auto">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e?.target?.value)}
                required
                className="bg-white dark:bg-gray-800"
              />
            </div>
            <Button 
              type="submit"
              variant="secondary"
              size="default"
              iconName="Send"
              iconPosition="right"
              className="md:w-auto"
            >
              Subscribe
            </Button>
          </form>
        ) : (
          <div className="flex items-center justify-center space-x-3 bg-white bg-opacity-20 rounded-lg p-4 max-w-xl mx-auto">
            <Icon name="CheckCircle2" size={24} color="#FFFFFF" />
            <span className="text-base md:text-lg font-semibold">Successfully subscribed!</span>
          </div>
        )}

        <p className="text-xs md:text-sm mt-4 opacity-75">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;