import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import PackageSummaryCard from './components/PackageSummaryCard';
import TrustIndicators from './components/TrustIndicators';
import ContactOptions from './components/ContactOptions';
import EnquiryFormFields from './components/EnquiryFormFields';

const EnquiryForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    travelType: '',
    groupSize: '',
    budget: '',
    travelDate: '',
    contactPreference: '',
    specialRequirements: '',
    customizePackage: false,
    similarPackages: false,
    newsletter: false,
    agreeTerms: false
  });
  const [errors, setErrors] = useState({});

  const mockPackageData = {
    name: "Golden Triangle Heritage Tour",
    destination: "Delhi, Agra & Jaipur",
    duration: "6 Days / 5 Nights",
    price: "₹24,999",
    image: "https://images.unsplash.com/photo-1669464957415-a4662a931524",
    imageAlt: "Majestic Taj Mahal monument with white marble domes and minarets against clear blue sky in Agra India",
    selectedDates: "15 Feb 2026 - 20 Feb 2026",
    groupSize: "4 Adults",
    highlights: [
    "Visit iconic Taj Mahal at sunrise",
    "Explore Amber Fort and City Palace",
    "Traditional Rajasthani dinner experience",
    "Professional English-speaking guide",
    "4-star hotel accommodation included",
    "All transfers in AC vehicle"]

  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.fullName?.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData?.fullName?.trim()?.length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const phoneRegex = /^[+]?[\d\s-]{10,}$/;
    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex?.test(formData?.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData?.travelType) {
      newErrors.travelType = 'Please select travel type';
    }

    if (!formData?.groupSize) {
      newErrors.groupSize = 'Please select group size';
    }

    if (!formData?.budget) {
      newErrors.budget = 'Please select budget range';
    }

    if (!formData?.travelDate) {
      newErrors.travelDate = 'Please select travel date';
    }

    if (!formData?.contactPreference) {
      newErrors.contactPreference = 'Please select contact preference';
    }

    if (!formData?.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors?.[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleCheckboxChange = (name, checked) => {
    setFormData((prev) => ({
      ...prev,
      [name]: checked
    }));
    if (errors?.[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();

    if (!validateForm()) {
      const firstErrorField = Object.keys(errors)?.[0];
      const errorElement = document.querySelector(`[name="${firstErrorField}"]`);
      if (errorElement) {
        errorElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/confirmation-success', {
        state: {
          enquiryData: formData,
          packageData: mockPackageData
        }
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="main-content flex-grow">
        <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-8 md:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 mb-4">
                <Icon name="Send" size={32} className="text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-headline">
                Complete Your Enquiry
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Share your travel preferences and our experts will craft the perfect journey for you
              </p>
            </div>

            <TrustIndicators />
          </div>
        </div>

        <div className="max-w-7xl mx-auto container-padding py-8 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg shadow-lg p-6 md:p-8 lg:p-10 border border-border">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Icon name="FileText" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground text-headline">
                      Enquiry Details
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      All fields marked with * are required
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <EnquiryFormFields
                    formData={formData}
                    errors={errors}
                    onChange={handleInputChange}
                    onCheckboxChange={handleCheckboxChange} />


                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
                    <Button
                      type="submit"
                      variant="default"
                      size="lg"
                      iconName="Send"
                      iconPosition="right"
                      loading={isSubmitting}
                      fullWidth
                      className="sm:flex-1">

                      {isSubmitting ? 'Submitting Enquiry...' : 'Submit Enquiry'}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      onClick={() => navigate(-1)}
                      disabled={isSubmitting}
                      className="sm:w-auto">

                      Go Back
                    </Button>
                  </div>
                </form>

                <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <div className="flex items-start">
                    <Icon name="Info" size={20} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">
                        What happens next?
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Our travel expert will review your requirements</li>
                        <li>• You'll receive a customized itinerary within 24 hours</li>
                        <li>• We'll contact you via your preferred method to discuss details</li>
                        <li>• Final booking confirmation after your approval</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 md:mt-8">
                <ContactOptions />
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <PackageSummaryCard packageData={mockPackageData} />

                <div className="bg-card rounded-lg shadow-md p-6 border border-border">
                  <div className="flex items-center mb-4">
                    <Icon name="Shield" size={24} className="text-primary mr-3" />
                    <h3 className="text-lg font-semibold text-foreground">
                      Your Information is Safe
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    We use industry-standard encryption to protect your personal information. 
                    Your data will never be shared with third parties.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Icon name="Check" size={16} className="text-accent mr-2 flex-shrink-0" />
                      <span>SSL Encrypted Connection</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Icon name="Check" size={16} className="text-accent mr-2 flex-shrink-0" />
                      <span>GDPR Compliant</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Icon name="Check" size={16} className="text-accent mr-2 flex-shrink-0" />
                      <span>No Spam Guarantee</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-6 text-white">
                  <div className="flex items-center mb-4">
                    <Icon name="Sparkles" size={24} className="mr-3" />
                    <h3 className="text-lg font-semibold">
                      Special Offer
                    </h3>
                  </div>
                  <p className="text-sm mb-4 opacity-90">
                    Book within 48 hours of enquiry and get 10% off on your package!
                  </p>
                  <div className="flex items-center text-sm">
                    <Icon name="Clock" size={16} className="mr-2 flex-shrink-0" />
                    <span>Offer valid until 13 Jan 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>);

};

export default EnquiryForm;