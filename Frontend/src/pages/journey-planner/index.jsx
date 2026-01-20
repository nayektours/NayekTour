import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Icon from '../../components/AppIcon';

import PackageSelectionCard from './components/PackageSelectionCard';
import DateSelectionCalendar from './components/DateSelectionCalendar';
import TravelerDetailsForm from './components/TravelerDetailsForm';
import JourneySummaryPanel from './components/JourneySummaryPanel';
import ProgressIndicator from './components/ProgressIndicator';

const JourneyPlanner = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [formData, setFormData] = useState({
    groupSize: '',
    accommodation: '',
    mealPlan: '',
    specialRequirements: ''
  });
  const [errors, setErrors] = useState({});
  const [showScrollTop, setShowScrollTop] = useState(false);

  const steps = [
  { id: 'package', label: 'Select Package', icon: 'Package' },
  { id: 'dates', label: 'Choose Dates', icon: 'Calendar' },
  { id: 'details', label: 'Traveler Details', icon: 'Users' },
  { id: 'review', label: 'Review & Submit', icon: 'CheckCircle' }];


  const packages = [
  {
    id: 1,
    name: "Golden Triangle Heritage Tour",
    image: "https://images.unsplash.com/photo-1669464957415-a4662a931524",
    imageAlt: "Majestic Taj Mahal monument with white marble domes and minarets against clear blue sky in Agra India",
    duration: "7 Days / 6 Nights",
    destinations: 3,
    price: 25000,
    rating: 4.8,
    highlights: [
    "Visit iconic Taj Mahal and Agra Fort",
    "Explore Delhi's historical monuments",
    "Experience Jaipur's royal palaces"]

  },
  {
    id: 2,
    name: "Kerala Backwaters Retreat",
    image: "https://images.unsplash.com/photo-1563731316056-8dacf9a43c68",
    imageAlt: "Traditional wooden houseboat floating on serene Kerala backwaters surrounded by lush green palm trees and tropical vegetation",
    duration: "5 Days / 4 Nights",
    destinations: 4,
    price: 32000,
    rating: 4.9,
    highlights: [
    "Luxury houseboat stay in backwaters",
    "Ayurvedic spa treatments",
    "Beach relaxation in Kovalam"]

  },
  {
    id: 3,
    name: "Rajasthan Royal Experience",
    image: "https://images.unsplash.com/photo-1612237157877-e3f403c24ff8",
    imageAlt: "Magnificent Rajasthani palace with ornate architecture featuring golden domes and intricate carvings at sunset",
    duration: "10 Days / 9 Nights",
    destinations: 6,
    price: 45000,
    rating: 4.7,
    highlights: [
    "Stay in heritage palace hotels",
    "Desert safari in Jaisalmer",
    "Cultural performances and folk music"]

  },
  {
    id: 4,
    name: "Himalayan Adventure Trek",
    image: "https://images.unsplash.com/photo-1716973775093-75f07f0cbd54",
    imageAlt: "Snow-capped Himalayan mountain peaks with trekking path winding through green valleys and pine forests",
    duration: "8 Days / 7 Nights",
    destinations: 5,
    price: 38000,
    rating: 4.6,
    highlights: [
    "Guided trekking in Himalayas",
    "Visit Buddhist monasteries",
    "Adventure activities and camping"]

  },
  {
    id: 5,
    name: "Goa Beach Paradise",
    image: "https://images.unsplash.com/photo-1578214257753-d655d4c32fd4",
    imageAlt: "Golden sandy beach in Goa with turquoise ocean waves and palm trees swaying in tropical breeze",
    duration: "6 Days / 5 Nights",
    destinations: 3,
    price: 28000,
    rating: 4.5,
    highlights: [
    "Beach resort accommodation",
    "Water sports and activities",
    "Portuguese heritage exploration"]

  },
  {
    id: 6,
    name: "South India Temple Circuit",
    image: "https://images.unsplash.com/photo-1727993995329-fe20d4f65972",
    imageAlt: "Ancient South Indian temple with towering gopuram featuring colorful sculptures and intricate stone carvings",
    duration: "9 Days / 8 Nights",
    destinations: 7,
    price: 35000,
    rating: 4.8,
    highlights: [
    "Visit UNESCO World Heritage temples",
    "Traditional South Indian cuisine",
    "Cultural dance performances"]

  }];


  const blockedDates = [
  new Date(2026, 0, 15),
  new Date(2026, 0, 16),
  new Date(2026, 0, 26),
  new Date(2026, 1, 14),
  new Date(2026, 2, 8)];


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
  };

  const handleDateSelect = (date) => {
    setStartDate(date);
    // Calculate end date based on package duration
    if (selectedPackage) {
      const duration = parseInt(selectedPackage?.duration?.match(/\d+/)?.[0] || 7);
      const endDate = new Date(date);
      endDate.setDate(endDate.getDate() + duration - 1);
      setEndDate(endDate);
    }
  };

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.groupSize) newErrors.groupSize = 'Please select group size';
    if (!formData?.accommodation) newErrors.accommodation = 'Please select accommodation type';
    if (!formData?.mealPlan) newErrors.mealPlan = 'Please select meal preference';

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const calculateTotalPrice = () => {
    if (!selectedPackage) return 0;

    let total = selectedPackage?.price;

    if (formData?.accommodation === 'luxury') {
      total += selectedPackage?.price * 0.3;
    } else if (formData?.accommodation === 'deluxe') {
      total += selectedPackage?.price * 0.15;
    }

    const groupSize = parseInt(formData?.groupSize) || 1;
    return Math.round(total * groupSize);
  };

  const handleProceedToEnquiry = () => {
    if (!validateForm()) {
      return;
    }

    const journeyData = {
      package: selectedPackage,
      startDate,
      endDate,
      ...formData,
      totalPrice: calculateTotalPrice()
    };

    navigate('/enquiry-form', { state: { journeyData } });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return selectedPackage !== null;
      case 1:
        return startDate !== null;
      case 2:
        return formData.groupSize && formData.accommodation && formData.mealPlan;
      default:
        return true;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="main-content flex-1">
        <div className="bg-gradient-to-r from-primary to-secondary py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-headline">
                Plan Your Perfect Journey
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Customize your Indian adventure with our interactive journey planner. Select your package, choose dates, and personalize your experience.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto container-padding py-8 md:py-12 lg:py-16">
          <ProgressIndicator currentStep={currentStep} steps={steps} />

          <div className="mt-8">
            {/* Step 1: Package Selection */}
            {currentStep === 0 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground text-headline mb-2">
                    Select Your Package
                  </h2>
                  <p className="text-muted-foreground">Choose from our curated tour packages</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {packages?.map((pkg) =>
                  <PackageSelectionCard
                    key={pkg?.id}
                    packageData={pkg}
                    isSelected={selectedPackage?.id === pkg?.id}
                    onSelect={() => handlePackageSelect(pkg)} />
                  )}
                </div>
              </div>
            )}

            {/* Step 2: Date Selection */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground text-headline mb-2">
                    Choose Your Dates
                  </h2>
                  <p className="text-muted-foreground">Select your start date</p>
                </div>
                <div className="flex justify-center">
                  <DateSelectionCalendar
                    selectedStartDate={startDate}
                    selectedEndDate={null}
                    onDateSelect={handleDateSelect}
                    blockedDates={blockedDates}
                    singleDateSelection={true} />
                </div>
                {startDate && (
                  <div className="max-w-md mx-auto p-4 bg-primary/10 rounded-lg flex items-start space-x-3">
                    <Icon name="Info" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-foreground">
                      <p>Start date: <strong>{startDate?.toLocaleDateString('en-GB')}</strong></p>
                      {endDate && <p>End date: <strong>{endDate?.toLocaleDateString('en-GB')}</strong> (calculated based on package duration)</p>}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Traveler Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground text-headline mb-2">
                    Customize Your Experience
                  </h2>
                  <p className="text-muted-foreground">Tell us about your preferences</p>
                </div>
                <div className="max-w-2xl mx-auto">
                  <TravelerDetailsForm
                    formData={formData}
                    onFormChange={handleFormChange}
                    errors={errors} />
                </div>
              </div>
            )}

            {/* Step 4: Review */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground text-headline mb-2">
                    Review Your Journey
                  </h2>
                  <p className="text-muted-foreground">Confirm your details and proceed to booking</p>
                </div>
                <div className="max-w-2xl mx-auto">
                  <JourneySummaryPanel
                    selectedPackage={selectedPackage}
                    startDate={startDate}
                    endDate={endDate}
                    formData={formData}
                    totalPrice={calculateTotalPrice()}
                    onProceedToEnquiry={handleProceedToEnquiry}
                    isSticky={false} />
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                currentStep === 0 
                  ? 'bg-muted text-muted-foreground cursor-not-allowed' 
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              Previous
            </button>

            {currentStep < steps.length - 1 ? (
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  canProceed()
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'bg-muted text-muted-foreground cursor-not-allowed'
                }`}
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleProceedToEnquiry}
                disabled={!canProceed()}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  canProceed()
                    ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                    : 'bg-muted text-muted-foreground cursor-not-allowed'
                }`}
              >
                Proceed to Enquiry
              </button>
            )}
          </div>
        </div>
      </main>
      <Footer />
      {showScrollTop &&
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-all duration-300 z-40"
        aria-label="Scroll to top">

          <Icon name="ArrowUp" size={24} color="#FFFFFF" />
        </button>
      }
    </div>);

};

export default JourneyPlanner;
