import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ConfirmationHero from './components/ConfirmationHero';
import ResponseTimeline from './components/ResponseTimeline';
import ContactChannels from './components/ContactChannels';
import TrustReassurance from './components/TrustReassurance';
import RecentTestimonials from './components/RecentTestimonials';
import SuggestedPackages from './components/SuggestedPackages';
import NewsletterSignup from './components/NewsletterSignup';
import SocialConnect from './components/SocialConnect';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const ConfirmationSuccess = () => {
  const navigate = useNavigate();

  const enquiryData = {
    reference: `IW${Date.now()?.toString()?.slice(-8)}`,
    submissionTime: new Date()?.toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="main-content flex-1">
        <ConfirmationHero 
          enquiryReference={enquiryData?.reference}
          submissionTime={enquiryData?.submissionTime}
        />

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 space-y-8 md:space-y-12 lg:space-y-16">
          <ResponseTimeline />

          <ContactChannels />

          <TrustReassurance />

          <RecentTestimonials />

          <SuggestedPackages />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <NewsletterSignup />
            <SocialConnect />
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-blue-950 dark:to-emerald-950 rounded-lg p-6 md:p-8 lg:p-10 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary mb-4 md:mb-6">
                <Icon name="MapPin" size={24} color="#FFFFFF" />
              </div>
              
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 md:mb-4 text-headline">
                Ready to Explore More?
              </h2>
              
              <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
                Discover more incredible destinations across India while we prepare your personalized itinerary.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Button 
                  variant="default" 
                  size="lg"
                  iconName="Compass"
                  iconPosition="left"
                  onClick={() => navigate('/state-discovery')}
                >
                  Explore Destinations
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  iconName="Home"
                  iconPosition="left"
                  onClick={() => navigate('/homepage')}
                >
                  Back to Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConfirmationSuccess;