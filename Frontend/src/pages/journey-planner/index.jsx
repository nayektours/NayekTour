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
    "Explore Delhi\'s historical monuments",
    "Experience Jaipur\'s royal palaces"]

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
    setCurrentStep(1);
    setTimeout(() => {
      document.getElementById('date-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleDateSelect = (date) => {
    if (!startDate || startDate && endDate) {
      setStartDate(date);
      setEndDate(null);
    } else if (startDate && !endDate) {
      if (date > startDate) {
        setEndDate(date);
        setCurrentStep(2);
        setTimeout(() => {
          document.getElementById('details-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      } else {
        setStartDate(date);
        setEndDate(null);
      }
    }
  };

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));

    if (field === 'groupSize' || field === 'accommodation' || field === 'mealPlan') {
      const allFieldsFilled =
      (field === 'groupSize' ? value : formData?.groupSize) && (
      field === 'accommodation' ? value : formData?.accommodation) && (
      field === 'mealPlan' ? value : formData?.mealPlan);

      if (allFieldsFilled) {
        setCurrentStep(3);
      }
    }
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

        <div className="max-w-7xl mx-auto container-padding py-8 md:py-12 lg:py-16">
          <ProgressIndicator currentStep={currentStep} steps={steps} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="lg:col-span-2 space-y-8 md:space-y-12">
              <section id="package-section">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Package" size={24} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground text-headline">
                      Step 1: Select Your Package
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground">Choose from our curated tour packages</p>
                  </div>
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
              </section>

              {selectedPackage &&
              <section id="date-section">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Calendar" size={24} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground text-headline">
                        Step 2: Choose Your Dates
                      </h2>
                      <p className="text-sm md:text-base text-muted-foreground">Select start and end dates for your journey</p>
                    </div>
                  </div>

                  <DateSelectionCalendar
                  selectedStartDate={startDate}
                  selectedEndDate={endDate}
                  onDateSelect={handleDateSelect}
                  blockedDates={blockedDates} />


                  {startDate && !endDate &&
                <div className="mt-4 p-4 bg-primary/10 rounded-lg flex items-start space-x-3">
                      <Icon name="Info" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground">
                        Start date selected: <strong>{startDate?.toLocaleDateString('en-GB')}</strong>. Now select your end date.
                      </p>
                    </div>
                }
                </section>
              }

              {selectedPackage && startDate && endDate &&
              <section id="details-section">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Users" size={24} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground text-headline">
                        Step 3: Customize Your Experience
                      </h2>
                      <p className="text-sm md:text-base text-muted-foreground">Tell us about your preferences</p>
                    </div>
                  </div>

                  <TravelerDetailsForm
                  formData={formData}
                  onFormChange={handleFormChange}
                  errors={errors} />

                </section>
              }
            </div>

            <div className="lg:col-span-1">
              <JourneySummaryPanel
                selectedPackage={selectedPackage}
                startDate={startDate}
                endDate={endDate}
                formData={formData}
                totalPrice={calculateTotalPrice()}
                onProceedToEnquiry={handleProceedToEnquiry}
                isSticky={true} />

            </div>
          </div>

          <div className="mt-12 md:mt-16 bg-muted/50 rounded-lg p-6 md:p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Sparkles" size={24} color="var(--color-accent)" />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-foreground text-headline">
                  Why Plan With Nayek Tours?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-foreground">
                  <div className="flex items-start space-x-2">
                    <Icon name="Check" size={16} color="var(--color-accent)" className="flex-shrink-0 mt-0.5" />
                    <span>Flexible customization options for every journey</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="Check" size={16} color="var(--color-accent)" className="flex-shrink-0 mt-0.5" />
                    <span>Real-time pricing with no hidden charges</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="Check" size={16} color="var(--color-accent)" className="flex-shrink-0 mt-0.5" />
                    <span>Expert travel consultants for personalized guidance</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="Check" size={16} color="var(--color-accent)" className="flex-shrink-0 mt-0.5" />
                    <span>24/7 support throughout your journey</span>
                  </div>
                </div>
              </div>
            </div>
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