import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import PackageCard from './components/PackageCard';
import FilterSidebar from './components/FilterSidebar';
import TestimonialCard from './components/TestimonialCard';
import PackageSummaryPanel from './components/PackageSummaryPanel';
import CategoryTabs from './components/CategoryTabs';

const PackageDetails = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: 'all',
    duration: 'all',
    priceRange: 'all',
    season: 'all',
    rating: null,
    inclusions: {
      accommodation: false,
      meals: false,
      transport: false,
      guide: false,
      activities: false
    }
  });

  const packages = [
  {
    id: 1,
    title: "Golden Triangle Heritage Tour",
    location: "Delhi, Agra, Jaipur",
    image: "https://images.unsplash.com/photo-1683289934315-96efac98c0bb",
    imageAlt: "Majestic Taj Mahal monument with white marble domes and minarets reflecting in water pool during golden hour sunset",
    duration: "6 Days / 5 Nights",
    price: 35000,
    originalPrice: 45000,
    discount: 22,
    rating: 4.8,
    reviews: 342,
    groupSize: "2-15 People",
    availability: "Year Round",
    category: "heritage",
    description: "Experience India's most iconic heritage circuit covering three magnificent cities. Witness the eternal beauty of Taj Mahal, explore the royal palaces of Jaipur, and discover Delhi's historical monuments.",
    highlights: ["Taj Mahal Visit", "Amber Fort", "Red Fort", "City Palace", "Local Cuisine", "Cultural Shows"]
  },
  {
    id: 2,
    title: "Kerala Backwaters & Beach Escape",
    location: "Kochi, Alleppey, Kovalam",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_171c9a691-1765308624112.png",
    imageAlt: "Traditional wooden houseboat with thatched roof floating on serene Kerala backwaters surrounded by lush green palm trees",
    duration: "7 Days / 6 Nights",
    price: 42000,
    originalPrice: 55000,
    discount: 24,
    rating: 4.9,
    reviews: 287,
    groupSize: "2-10 People",
    availability: "Sep-Mar",
    category: "beach",
    description: "Discover God's Own Country with tranquil backwater cruises, pristine beaches, and authentic Kerala cuisine. Experience the perfect blend of relaxation and cultural immersion.",
    highlights: ["Houseboat Stay", "Beach Resort", "Ayurvedic Spa", "Kathakali Show", "Seafood Delights", "Tea Plantation"]
  },
  {
    id: 3,
    title: "Himalayan Adventure Trek",
    location: "Manali, Kasol, Tosh",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18c129ac0-1765083019181.png",
    imageAlt: "Snow-capped Himalayan mountain peaks with trekkers hiking on rocky trail surrounded by pine forests and clear blue sky",
    duration: "8 Days / 7 Nights",
    price: 28000,
    rating: 4.7,
    reviews: 198,
    groupSize: "4-12 People",
    availability: "Apr-Jun, Sep-Nov",
    category: "adventure",
    description: "Embark on an exhilarating journey through the majestic Himalayas. Trek through pristine valleys, camp under starlit skies, and experience the thrill of mountain adventures.",
    highlights: ["Mountain Trekking", "Camping", "River Rafting", "Paragliding", "Local Villages", "Bonfire Nights"]
  },
  {
    id: 4,
    title: "Rajasthan Royal Family Tour",
    location: "Jaipur, Udaipur, Jodhpur",
    image: "https://images.unsplash.com/photo-1553504944-6546cf49b1d1",
    imageAlt: "Magnificent Rajasthani palace with ornate architecture featuring golden domes and intricate carvings against blue sky",
    duration: "9 Days / 8 Nights",
    price: 65000,
    originalPrice: 80000,
    discount: 19,
    rating: 4.9,
    reviews: 421,
    groupSize: "2-8 People",
    availability: "Oct-Mar",
    category: "family",
    description: "Experience royal Rajasthan with your family. Stay in heritage hotels, explore magnificent forts, enjoy camel safaris, and create unforgettable memories in the land of kings.",
    highlights: ["Heritage Hotels", "Fort Visits", "Camel Safari", "Folk Performances", "Royal Cuisine", "Desert Camp"]
  },
  {
    id: 5,
    title: "Goa Beach & Nightlife Romance",
    location: "North & South Goa",
    image: "https://images.unsplash.com/photo-1647191935053-45981471040c",
    imageAlt: "Romantic sunset view of Goa beach with golden sand, swaying palm trees, and couple walking along shoreline",
    duration: "5 Days / 4 Nights",
    price: 32000,
    rating: 4.6,
    reviews: 512,
    groupSize: "2 People",
    availability: "Oct-Apr",
    category: "couple",
    description: "Perfect romantic getaway featuring pristine beaches, vibrant nightlife, Portuguese heritage, and intimate dining experiences. Ideal for couples seeking sun, sand, and romance.",
    highlights: ["Beach Resorts", "Water Sports", "Sunset Cruises", "Candlelight Dinners", "Casino Nights", "Church Visits"]
  },
  {
    id: 6,
    title: "Ladakh High Altitude Adventure",
    location: "Leh, Nubra Valley, Pangong",
    image: "https://images.unsplash.com/photo-1600534178698-514e291cf7be",
    imageAlt: "Breathtaking Ladakh landscape with turquoise Pangong Lake surrounded by barren brown mountains and clear blue sky",
    duration: "10 Days / 9 Nights",
    price: 55000,
    originalPrice: 70000,
    discount: 21,
    rating: 4.8,
    reviews: 276,
    groupSize: "4-10 People",
    availability: "May-Sep",
    category: "adventure",
    description: "Journey to the roof of the world. Experience the stark beauty of Ladakh, visit ancient monasteries, camp by pristine lakes, and ride through the world's highest motorable passes.",
    highlights: ["Pangong Lake", "Nubra Valley", "Khardung La Pass", "Monasteries", "Bactrian Camels", "Stargazing"]
  },
  {
    id: 7,
    title: "Andaman Island Paradise",
    location: "Port Blair, Havelock, Neil Island",
    image: "https://images.unsplash.com/photo-1550085764-9e2c9d940fb5",
    imageAlt: "Crystal clear turquoise waters of Andaman beach with white sand, tropical palm trees, and wooden pier extending into sea",
    duration: "6 Days / 5 Nights",
    price: 48000,
    rating: 4.7,
    reviews: 389,
    groupSize: "2-12 People",
    availability: "Oct-May",
    category: "beach",
    description: "Escape to tropical paradise with pristine beaches, crystal-clear waters, and vibrant marine life. Perfect for snorkeling, scuba diving, and beach relaxation.",
    highlights: ["Scuba Diving", "Snorkeling", "Beach Resorts", "Island Hopping", "Seafood", "Water Sports"]
  },
  {
    id: 8,
    title: "Varanasi Spiritual Journey",
    location: "Varanasi, Sarnath",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1461fdc21-1764653949972.png",
    imageAlt: "Sacred Ganges river ghats in Varanasi with ancient stone steps, floating diyas, and devotees performing evening aarti ceremony",
    duration: "4 Days / 3 Nights",
    price: 22000,
    rating: 4.9,
    reviews: 445,
    groupSize: "2-20 People",
    availability: "Year Round",
    category: "heritage",
    description: "Immerse yourself in India's spiritual heart. Witness ancient rituals on the Ganges, explore sacred temples, and experience the timeless traditions of this holy city.",
    highlights: ["Ganga Aarti", "Boat Ride", "Temple Visits", "Sarnath Tour", "Silk Shopping", "Street Food"]
  }];


  const testimonials = [
  {
    id: 1,
    customerName: "Priya & Rahul Sharma",
    location: "Mumbai, Maharashtra",
    customerImage: "https://images.unsplash.com/photo-1640745690757-5e3a53f5113c",
    customerImageAlt: "Smiling Indian woman with long black hair wearing traditional red saree and gold jewelry",
    rating: 5,
    review: "Our Golden Triangle tour was absolutely magical! The guide was knowledgeable, hotels were luxurious, and every detail was perfectly planned. The Taj Mahal at sunrise was a moment we'll cherish forever. Nayek Tours made our anniversary trip truly special.",
    packageName: "Golden Triangle Heritage Tour",
    travelDate: "December 2025",
    images: [
    {
      src: "https://images.unsplash.com/photo-1504757335316-3a1e2861eef4",
      alt: "Couple posing in front of Taj Mahal with white marble monument in background during golden hour"
    },
    {
      src: "https://img.rocket.new/generatedImages/rocket_gen_img_124cf6b15-1767102954163.png",
      alt: "Traditional Rajasthani palace courtyard with ornate arches and colorful decorations"
    },
    {
      src: "https://images.unsplash.com/photo-1567337710282-00832b415979",
      alt: "Delicious Indian thali meal with multiple curry dishes, rice, and naan bread on brass plate"
    }]

  },
  {
    id: 2,
    customerName: "Amit Patel Family",
    location: "Ahmedabad, Gujarat",
    customerImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1927cf9a3-1763293370228.png",
    customerImageAlt: "Middle-aged Indian man with short black hair wearing blue shirt and glasses smiling warmly",
    rating: 5,
    review: "Took our kids on the Rajasthan Royal Family Tour and it exceeded all expectations! The heritage hotels felt like living in a palace, camel safari was thrilling, and the cultural performances were mesmerizing. Our children learned so much about Indian history while having fun.",
    packageName: "Rajasthan Royal Family Tour",
    travelDate: "January 2026",
    images: [
    {
      src: "https://images.unsplash.com/photo-1732511181236-61b97dc0c799",
      alt: "Family of four standing in front of magnificent Rajasthani fort with golden sunset lighting"
    },
    {
      src: "https://images.unsplash.com/photo-1613495973774-2da882b5d503",
      alt: "Children riding decorated camel in Thar desert with sand dunes in background"
    },
    {
      src: "https://images.unsplash.com/photo-1580052040477-87681a58ff83",
      alt: "Traditional Rajasthani folk dancers performing in colorful costumes with swirling skirts"
    }]

  },
  {
    id: 3,
    customerName: "Sneha & Karthik",
    location: "Bangalore, Karnataka",
    customerImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1c1670234-1763299945576.png",
    customerImageAlt: "Young Indian woman with shoulder-length black hair wearing white dress smiling at camera",
    rating: 5,
    review: "Kerala backwaters experience was pure bliss! The houseboat was comfortable, food was delicious, and the scenery was breathtaking. Kovalam beach resort was perfect for relaxation. The Ayurvedic spa treatments were rejuvenating. Highly recommend for couples!",
    packageName: "Kerala Backwaters & Beach Escape",
    travelDate: "November 2025",
    images: [
    {
      src: "https://images.unsplash.com/photo-1657865187142-0b498b6f8a2e",
      alt: "Romantic couple sitting on houseboat deck surrounded by Kerala backwaters and palm trees"
    },
    {
      src: "https://images.unsplash.com/photo-1605461674429-9db86ede8893",
      alt: "Serene Kerala beach with golden sand, coconut palms, and turquoise waters at sunset"
    },
    {
      src: "https://images.unsplash.com/photo-1704728233642-7a03de4e1e19",
      alt: "Traditional Kerala cuisine served on banana leaf with rice, curries, and coconut chutney"
    }]

  }];


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      category: 'all',
      duration: 'all',
      priceRange: 'all',
      season: 'all',
      rating: null,
      inclusions: {
        accommodation: false,
        meals: false,
        transport: false,
        guide: false,
        activities: false
      }
    });
    setActiveCategory('all');
  };

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEnquire = () => {
    if (selectedPackage) {
      navigate('/enquiry-form', { state: { selectedPackage } });
    }
  };

  const handleWhatsApp = () => {
    const message = selectedPackage ?
    `Hi! I'm interested in the ${selectedPackage?.title} package. Can you provide more details?` :
    "Hi! I'm interested in your tour packages. Can you help me?";
    window.open(`https://wa.me/918421539554?text=${encodeURIComponent(message)}`, '_blank');
  };

  const filteredPackages = packages?.filter((pkg) => {
    if (activeCategory !== 'all' && pkg?.category !== activeCategory) return false;
    if (filters?.category !== 'all' && pkg?.category !== filters?.category) return false;
    if (filters?.rating && pkg?.rating < filters?.rating) return false;

    if (filters?.priceRange !== 'all') {
      const [min, max] = filters?.priceRange?.split('-')?.map((v) => v?.replace('+', ''));
      if (max) {
        if (pkg?.price < parseInt(min) || pkg?.price > parseInt(max)) return false;
      } else {
        if (pkg?.price < parseInt(min)) return false;
      }
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="main-content flex-1">
        <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-headline">
                Discover Your Perfect Journey
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Curated tour packages designed to showcase India's incredible diversity. From heritage wonders to beach paradises, find your ideal adventure.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8">
                <div className="flex items-center space-x-2">
                  <Icon name="Package" size={24} />
                  <span className="text-lg font-semibold">{packages?.length}+ Packages</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={24} />
                  <span className="text-lg font-semibold">10,000+ Travelers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={24} />
                  <span className="text-lg font-semibold">15+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto container-padding">
            <CategoryTabs
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory} />


            <div className="lg:hidden mb-4">
              <Button
                variant="outline"
                fullWidth
                iconName="SlidersHorizontal"
                iconPosition="left"
                onClick={() => setShowMobileFilters(!showMobileFilters)}>

                {showMobileFilters ? 'Hide Filters' : 'Show Filters'}
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className={`lg:col-span-1 ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
                <FilterSidebar
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onReset={handleResetFilters} />

              </div>

              <div className="lg:col-span-3">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">
                    {filteredPackages?.length} Packages Found
                  </h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="ArrowUpDown"
                    iconPosition="left">

                    Sort By
                  </Button>
                </div>

                {filteredPackages?.length > 0 ?
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredPackages?.map((pkg, index) =>
                  <div key={pkg?.id} onClick={() => handlePackageSelect(pkg)}>
                        <PackageCard
                      packageData={pkg}
                      featured={index === 0} />

                      </div>
                  )}
                  </div> :

                <div className="text-center py-12 md:py-16">
                    <Icon name="SearchX" size={64} className="mx-auto text-muted mb-4" />
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                      No Packages Found
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Try adjusting your filters to see more results
                    </p>
                    <Button
                    variant="default"
                    onClick={handleResetFilters}
                    iconName="RotateCcw"
                    iconPosition="left">

                      Reset Filters
                    </Button>
                  </div>
                }
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-headline">
                What Our Travelers Say
              </h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                Real experiences from real travelers who discovered India with us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials?.map((testimonial) =>
              <TestimonialCard key={testimonial?.id} testimonial={testimonial} />
              )}
            </div>

            <div className="text-center mt-8 md:mt-12">
              <Button
                variant="outline"
                size="lg"
                iconName="MessageSquare"
                iconPosition="left">

                Read More Reviews
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 lg:p-16 text-center text-primary-foreground">
              <Icon name="Sparkles" size={48} className="mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-headline">
                Can't Find Your Perfect Package?
              </h2>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Let us create a customized itinerary just for you. Share your preferences and we'll design your dream journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  iconName="Send"
                  iconPosition="right"
                  onClick={() => navigate('/enquiry-form')}>

                  Request Custom Package
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => window.location.href = 'tel:+918421539554'}
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">

                  Call Us Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card py-12 md:py-16 border-t border-border">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Secure Booking</h3>
                <p className="text-sm text-muted-foreground">
                  Safe and encrypted payment process
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Best Price Guarantee</h3>
                <p className="text-sm text-muted-foreground">
                  Competitive rates with no hidden costs
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Headphones" size={32} className="text-success" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">
                  Round-the-clock assistance during your journey
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Expert Guides</h3>
                <p className="text-sm text-muted-foreground">
                  Knowledgeable local guides for authentic experiences
                </p>
              </div>
            </div>
          </div>
        </section>

        {selectedPackage &&
        <div className="hidden lg:block fixed right-8 top-24 w-80 z-40">
            <PackageSummaryPanel
            selectedPackage={selectedPackage}
            onEnquire={handleEnquire}
            onWhatsApp={handleWhatsApp} />

          </div>
        }

        {selectedPackage &&
        <div className="lg:hidden">
            <PackageSummaryPanel
            selectedPackage={selectedPackage}
            onEnquire={handleEnquire}
            onWhatsApp={handleWhatsApp} />

          </div>
        }
      </main>
      <Footer />
    </div>);

};

export default PackageDetails;