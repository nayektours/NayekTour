import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import StateCard from './components/StateCard';
import QuickViewModal from './components/QuickViewModal';
import FilterBar from './components/FilterBar';
import RegionSection from './components/RegionSection';
import StatsSection from './components/StatsSection';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const StateDiscovery = () => {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [filters, setFilters] = useState({
    search: '',
    region: 'all',
    travelStyle: 'all',
    season: 'all',
    sortBy: 'popular'
  });

  const regions = [
  { id: 'all', name: 'All India', stateCount: 28 },
  { id: 'north', name: 'North India', stateCount: 8 },
  { id: 'south', name: 'South India', stateCount: 5 },
  { id: 'east', name: 'East India', stateCount: 4 },
  { id: 'west', name: 'West India', stateCount: 4 },
  { id: 'central', name: 'Central India', stateCount: 3 },
  { id: 'northeast', name: 'Northeast', stateCount: 4 }];


  const statesData = [
  {
    id: 1,
    name: "Rajasthan",
    tagline: "Land of Kings and Desert Majesty",
    description: "Experience the grandeur of royal palaces, majestic forts, and vibrant desert culture. Rajasthan offers an unparalleled journey through India's regal heritage, from the pink city of Jaipur to the golden sands of Jaisalmer. Witness magnificent architecture, colorful festivals, and warm Rajasthani hospitality that will leave you spellbound.",
    image: "https://images.unsplash.com/photo-1728361593319-b613466d4add",
    imageAlt: "Majestic Amber Fort in Jaipur with intricate Rajasthani architecture against clear blue sky showcasing royal heritage",
    region: "north",
    travelStyle: ["heritage", "cultural", "adventure"],
    bestTime: "Oct-Mar",
    destinationCount: 15,
    packageCount: 42,
    rating: 4.8,
    isFeatured: true,
    highlights: [
    "Explore magnificent forts and palaces of Jaipur, Udaipur, and Jodhpur",
    "Experience camel safari in Thar Desert under starlit skies",
    "Witness vibrant folk dances and traditional Rajasthani cuisine",
    "Visit sacred Pushkar and attend the famous camel fair",
    "Discover intricate havelis and colorful bazaars of Jaisalmer",
    "Enjoy luxury heritage hotel stays in converted palaces"]

  },
  {
    id: 2,
    name: "Kerala",
    tagline: "God\'s Own Country - Tropical Paradise",
    description: "Immerse yourself in the serene backwaters, lush green landscapes, and pristine beaches of Kerala. This tropical paradise offers a perfect blend of natural beauty, Ayurvedic wellness, and rich cultural heritage. From houseboat cruises through tranquil backwaters to spice plantation tours in Munnar's misty hills, Kerala promises rejuvenation for body and soul.",
    image: "https://images.unsplash.com/photo-1706939224467-00a75f96a7c2",
    imageAlt: "Traditional Kerala houseboat floating on peaceful backwaters surrounded by coconut palms and lush tropical vegetation",
    region: "south",
    travelStyle: ["nature", "beach", "cultural"],
    bestTime: "Sep-Mar",
    destinationCount: 12,
    packageCount: 38,
    rating: 4.9,
    isFeatured: true,
    highlights: [
    "Cruise through scenic backwaters on traditional houseboats",
    "Rejuvenate with authentic Ayurvedic spa treatments",
    "Explore tea and spice plantations in Munnar hills",
    "Relax on pristine beaches of Kovalam and Varkala",
    "Witness Kathakali dance performances and temple festivals",
    "Savor delicious Kerala cuisine with fresh seafood"]

  },
  {
    id: 3,
    name: "Himachal Pradesh",
    tagline: "Land of Gods and Snow-Capped Peaks",
    description: "Discover the breathtaking beauty of Himalayan mountains, serene valleys, and adventure sports paradise. Himachal Pradesh offers everything from peaceful hill stations to thrilling trekking routes. Experience the spiritual aura of ancient temples, colonial charm of Shimla, and adventure activities in Manali and Dharamshala.",
    image: "https://images.unsplash.com/photo-1609674915324-2b3b259a6d67",
    imageAlt: "Snow-covered Himalayan mountain peaks with pine forests and traditional wooden houses in valley below",
    region: "north",
    travelStyle: ["adventure", "nature", "spiritual"],
    bestTime: "Mar-Jun",
    destinationCount: 18,
    packageCount: 45,
    rating: 4.7,
    isFeatured: false,
    highlights: [
    "Trek through scenic valleys and snow-capped mountains",
    "Experience adventure sports like paragliding and river rafting",
    "Visit ancient temples and Buddhist monasteries",
    "Enjoy colonial architecture in Shimla and Dalhousie",
    "Explore apple orchards and pine forests",
    "Witness stunning sunrise views from mountain peaks"]

  },
  {
    id: 4,
    name: "Goa",
    tagline: "Beach Paradise and Portuguese Heritage",
    description: "Relax on golden beaches, explore Portuguese colonial architecture, and enjoy vibrant nightlife. Goa is India's smallest state but offers the biggest beach experience with its unique blend of Indian and Portuguese cultures. From water sports to beach shacks, historic churches to spice plantations, Goa caters to every traveler's dream.",
    image: "https://images.unsplash.com/photo-1628709504436-1711bb6be6dd",
    imageAlt: "Pristine Goa beach with golden sand, turquoise waters, palm trees swaying and colorful beach umbrellas",
    region: "west",
    travelStyle: ["beach", "cultural", "adventure"],
    bestTime: "Nov-Feb",
    destinationCount: 10,
    packageCount: 35,
    rating: 4.6,
    isFeatured: true,
    highlights: [
    "Relax on famous beaches like Baga, Calangute, and Palolem",
    "Explore UNESCO World Heritage churches and cathedrals",
    "Enjoy water sports including parasailing and jet skiing",
    "Experience vibrant nightlife and beach parties",
    "Visit spice plantations and wildlife sanctuaries",
    "Savor Goan cuisine with fresh seafood specialties"]

  },
  {
    id: 5,
    name: "Uttarakhand",
    tagline: "Land of Gods and Yoga Capital",
    description: "Embark on spiritual journeys to sacred temples, practice yoga in Rishikesh, and trek through pristine Himalayan landscapes. Uttarakhand is home to the holy Char Dham pilgrimage sites and offers adventure activities alongside spiritual experiences. The state's natural beauty ranges from snow-clad peaks to dense forests and rushing rivers.",
    image: "https://images.unsplash.com/photo-1717741761502-58f1af411e20",
    imageAlt: "Sacred Ganges river flowing through Rishikesh with ancient temples on banks and Himalayan mountains in background",
    region: "north",
    travelStyle: ["spiritual", "adventure", "nature"],
    bestTime: "Apr-Jun",
    destinationCount: 16,
    packageCount: 40,
    rating: 4.8,
    isFeatured: false,
    highlights: [
    "Visit sacred Char Dham pilgrimage sites",
    "Practice yoga and meditation in Rishikesh ashrams",
    "Experience white water rafting on Ganges river",
    "Trek to Valley of Flowers and Hemkund Sahib",
    "Explore Jim Corbett National Park for wildlife",
    "Witness evening Ganga Aarti ceremonies"]

  },
  {
    id: 6,
    name: "Tamil Nadu",
    tagline: "Temple Trail and Cultural Heritage",
    description: "Explore magnificent Dravidian temples, classical dance forms, and rich cultural traditions. Tamil Nadu boasts some of India's most impressive temple architecture, from the towering gopurams of Madurai to the shore temple of Mahabalipuram. Experience classical Bharatanatyam performances, traditional silk weaving, and authentic South Indian cuisine.",
    image: "https://images.unsplash.com/flagged/photo-1582101164197-78a982d7724d",
    imageAlt: "Towering Meenakshi Temple gopuram with intricate colorful sculptures and devotees gathering in courtyard below",
    region: "south",
    travelStyle: ["cultural", "heritage", "spiritual"],
    bestTime: "Nov-Feb",
    destinationCount: 14,
    packageCount: 36,
    rating: 4.7,
    isFeatured: false,
    highlights: [
    "Visit ancient temples with stunning Dravidian architecture",
    "Witness classical Bharatanatyam dance performances",
    "Explore UNESCO World Heritage sites in Mahabalipuram",
    "Experience traditional silk weaving in Kanchipuram",
    "Enjoy hill station retreat in Ooty and Kodaikanal",
    "Savor authentic Tamil cuisine and filter coffee"]

  },
  {
    id: 7,
    name: "Maharashtra",
    tagline: "Gateway of India and Bollywood Dreams",
    description: "Experience the cosmopolitan energy of Mumbai, ancient cave temples, and scenic hill stations. Maharashtra offers a perfect mix of urban excitement and historical treasures. From the bustling streets of Mumbai to the serene Ajanta-Ellora caves, from wine country of Nashik to the hill stations of Lonavala, the state presents diverse experiences.",
    image: "https://images.unsplash.com/photo-1641923492660-9f35c65c903b",
    imageAlt: "Iconic Gateway of India monument in Mumbai with Arabian Sea in background and boats sailing during golden hour",
    region: "west",
    travelStyle: ["cultural", "heritage", "nature"],
    bestTime: "Oct-Feb",
    destinationCount: 13,
    packageCount: 32,
    rating: 4.5,
    isFeatured: false,
    highlights: [
    "Explore vibrant Mumbai city and Bollywood studios",
    "Visit UNESCO World Heritage Ajanta and Ellora caves",
    "Experience wine tasting in Nashik vineyards",
    "Trek to hill forts and enjoy monsoon waterfalls",
    "Discover ancient Buddhist caves and rock-cut temples",
    "Enjoy street food and coastal Maharashtrian cuisine"]

  },
  {
    id: 8,
    name: "Karnataka",
    tagline: "Garden City and Heritage Wonders",
    description: "Discover the IT hub of Bangalore, magnificent Mysore Palace, and ancient ruins of Hampi. Karnataka seamlessly blends modernity with tradition, offering cosmopolitan cities, royal heritage, pristine beaches, and wildlife sanctuaries. The state's diverse landscape ranges from Western Ghats to coastal plains and historical monuments.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_112f0b47b-1767841163197.png",
    imageAlt: "Illuminated Mysore Palace at night with intricate Indo-Saracenic architecture and beautifully lit gardens in foreground",
    region: "south",
    travelStyle: ["cultural", "heritage", "nature"],
    bestTime: "Oct-Mar",
    destinationCount: 15,
    packageCount: 34,
    rating: 4.6,
    isFeatured: false,
    highlights: [
    "Visit magnificent Mysore Palace and Dasara celebrations",
    "Explore ancient ruins of Hampi UNESCO World Heritage site",
    "Experience coffee plantations in Coorg hill station",
    "Discover wildlife in Bandipur and Nagarhole sanctuaries",
    "Enjoy beaches and water sports in Gokarna",
    "Savor authentic Karnataka cuisine and filter coffee"]

  },
  {
    id: 9,
    name: "West Bengal",
    tagline: "Cultural Capital and Himalayan Gateway",
    description: "Experience the intellectual and cultural richness of Kolkata, tea gardens of Darjeeling, and Sundarbans mangroves. West Bengal offers a unique blend of colonial heritage, Bengali culture, Himalayan beauty, and coastal ecosystems. From the bustling streets of Kolkata to the serene hills of Darjeeling, the state captivates with its diversity.",
    image: "https://images.unsplash.com/photo-1705730576482-407df8ee3017",
    imageAlt: "Toy train running through lush green tea plantations in Darjeeling with snow-capped Kanchenjunga mountain range visible",
    region: "east",
    travelStyle: ["cultural", "nature", "heritage"],
    bestTime: "Oct-Mar",
    destinationCount: 11,
    packageCount: 28,
    rating: 4.7,
    isFeatured: false,
    highlights: [
    "Explore colonial architecture and cultural heritage of Kolkata",
    "Ride the famous Darjeeling Himalayan toy train",
    "Visit tea gardens and enjoy panoramic mountain views",
    "Experience Sundarbans mangrove forest and Royal Bengal Tigers",
    "Discover Tibetan Buddhist monasteries in hill stations",
    "Savor authentic Bengali cuisine and sweets"]

  },
  {
    id: 10,
    name: "Sikkim",
    tagline: "Himalayan Paradise and Buddhist Serenity",
    description: "Discover pristine mountain landscapes, ancient monasteries, and adventure trekking routes. Sikkim is a small Himalayan state offering breathtaking views of Kanchenjunga, colorful Buddhist culture, and diverse flora and fauna. The state's commitment to organic farming and environmental conservation makes it a unique eco-tourism destination.",
    image: "https://images.unsplash.com/photo-1622172327433-fff482ffd21b",
    imageAlt: "Majestic Kanchenjunga mountain peak covered in snow with Buddhist prayer flags fluttering in foreground at sunrise",
    region: "northeast",
    travelStyle: ["adventure", "nature", "spiritual"],
    bestTime: "Mar-Jun",
    destinationCount: 8,
    packageCount: 25,
    rating: 4.9,
    isFeatured: false,
    highlights: [
    "Witness stunning views of Kanchenjunga peak",
    "Visit ancient Buddhist monasteries and prayer wheels",
    "Trek through rhododendron forests and alpine meadows",
    "Experience cable car ride to Tashiding monastery",
    "Explore Tsomgo Lake and Nathula Pass border",
    "Discover unique Sikkimese cuisine and organic farming"]

  },
  {
    id: 11,
    name: "Ladakh",
    tagline: "Land of High Passes and Buddhist Culture",
    description: "Experience the stark beauty of high-altitude desert, ancient monasteries, and adventure biking routes. Ladakh offers a surreal landscape of barren mountains, crystal-clear lakes, and Buddhist culture. From the magnetic hill to Pangong Lake, from Leh Palace to Nubra Valley, Ladakh is an adventure lover's paradise and spiritual seeker's retreat.",
    image: "https://images.unsplash.com/photo-1606857090627-27ca46667290",
    imageAlt: "Turquoise Pangong Lake with barren brown mountains reflecting in crystal clear water under bright blue sky",
    region: "north",
    travelStyle: ["adventure", "spiritual", "nature"],
    bestTime: "May-Sep",
    destinationCount: 10,
    packageCount: 30,
    rating: 4.8,
    isFeatured: true,
    highlights: [
    "Visit stunning Pangong and Tso Moriri high-altitude lakes",
    "Explore ancient Buddhist monasteries like Hemis and Thiksey",
    "Experience thrilling bike rides on world\'s highest motorable roads",
    "Camp under starlit skies in Nubra Valley",
    "Witness unique magnetic hill phenomenon",
    "Discover Ladakhi culture and traditional cuisine"]

  },
  {
    id: 12,
    name: "Andaman & Nicobar",
    tagline: "Tropical Islands and Pristine Beaches",
    description: "Relax on white sandy beaches, explore coral reefs, and experience island life. The Andaman and Nicobar Islands offer a tropical paradise with crystal-clear waters, diverse marine life, and untouched natural beauty. From water sports to historical cellular jail, from mangrove forests to limestone caves, the islands promise an unforgettable escape.",
    image: "https://images.unsplash.com/photo-1573390198960-fdbcaf454982",
    imageAlt: "Crystal clear turquoise waters of Radhanagar Beach with white sand, palm trees and tropical vegetation along coastline",
    region: "south",
    travelStyle: ["beach", "adventure", "nature"],
    bestTime: "Oct-May",
    destinationCount: 9,
    packageCount: 22,
    rating: 4.9,
    isFeatured: false,
    highlights: [
    "Snorkel and scuba dive in pristine coral reefs",
    "Relax on award-winning Radhanagar Beach",
    "Visit historic Cellular Jail and light show",
    "Experience water sports and island hopping",
    "Explore limestone caves and mangrove forests",
    "Witness bioluminescent beaches at night"]

  }];


  const filteredStates = useMemo(() => {
    let result = [...statesData];

    if (filters?.search) {
      result = result?.filter((state) =>
      state?.name?.toLowerCase()?.includes(filters?.search?.toLowerCase()) ||
      state?.tagline?.toLowerCase()?.includes(filters?.search?.toLowerCase()) ||
      state?.description?.toLowerCase()?.includes(filters?.search?.toLowerCase())
      );
    }

    if (filters?.region !== 'all') {
      result = result?.filter((state) => state?.region === filters?.region);
    }

    if (filters?.travelStyle !== 'all') {
      result = result?.filter((state) => state?.travelStyle?.includes(filters?.travelStyle));
    }

    if (filters?.season !== 'all') {
      result = result?.filter((state) => {
        const seasonMap = {
          'winter': ['Oct-Mar', 'Nov-Feb', 'Oct-Feb'],
          'summer': ['Mar-Jun', 'Apr-Jun', 'May-Sep'],
          'monsoon': ['Jul-Sep'],
          'year-round': ['Oct-May']
        };
        return seasonMap?.[filters?.season]?.includes(state?.bestTime);
      });
    }

    switch (filters?.sortBy) {
      case 'name-asc':
        result?.sort((a, b) => a?.name?.localeCompare(b?.name));
        break;
      case 'name-desc':
        result?.sort((a, b) => b?.name?.localeCompare(a?.name));
        break;
      case 'packages-high':
        result?.sort((a, b) => b?.packageCount - a?.packageCount);
        break;
      case 'packages-low':
        result?.sort((a, b) => a?.packageCount - b?.packageCount);
        break;
      case 'popular':
      default:
        result?.sort((a, b) => b?.rating - a?.rating);
        break;
    }

    return result;
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetFilters = () => {
    setFilters({
      search: '',
      region: 'all',
      travelStyle: 'all',
      season: 'all',
      sortBy: 'popular'
    });
    setSelectedRegion('all');
  };

  const handleQuickView = (state) => {
    setSelectedState(state);
  };

  const handleCloseModal = () => {
    setSelectedState(null);
  };

  const handleExplorePackages = (state) => {
    navigate('/package-details', { state: { selectedState: state?.name } });
  };

  const handleRegionClick = (regionId) => {
    setSelectedRegion(regionId);
    setFilters((prev) => ({ ...prev, region: regionId }));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="main-content flex-1">
        {/* <div className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary py-12 md:py-16 lg:py-20 mb-8 md:mb-12">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center text-white space-y-4 md:space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-headline">
                Discover Incredible India
              </h1>
              <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto opacity-90">
                Explore diverse landscapes, rich cultures, and unforgettable experiences across India's magnificent states
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 pt-4">
                <Button
                  variant="secondary"
                  size="lg"
                  iconName="MapPin"
                  iconPosition="left"
                  onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}>

                  Explore States
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Send"
                  iconPosition="right"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                  onClick={() => navigate('/enquiry-form')}>

                  Plan Your Journey
                </Button>
              </div>
            </div>
          </div>
        </div> */}

        <div className="max-w-7xl mx-auto container-padding">
          {/* <StatsSection /> */}

          <div className="mb-8 md:mb-12 mt-4">
            {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-6 md:mb-8 text-headline">
              Explore by Region
            </h2> */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3 md:gap-4">
              {regions?.map((region) =>
              <RegionSection
                key={region?.id}
                region={region}
                isActive={selectedRegion === region?.id}
                onClick={() => handleRegionClick(region?.id)} />

              )}
            </div>
          </div>

          <FilterBar
            filters={filters}
            onFilterChange={handleFilterChange}
            onReset={handleResetFilters} />


          {filteredStates?.length === 0 ?
          <div className="text-center py-12 md:py-16">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Icon name="SearchX" size={40} color="var(--color-muted-foreground)" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                No states found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters to see more results
              </p>
              <Button
              variant="outline"
              iconName="RotateCcw"
              iconPosition="left"
              onClick={handleResetFilters}>

                Reset All Filters
              </Button>
            </div> :

          <>
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm md:text-base text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{filteredStates?.length}</span> {filteredStates?.length === 1 ? 'state' : 'states'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
                {filteredStates?.map((state) =>
              <StateCard
                key={state?.id}
                state={state}
                onQuickView={handleQuickView} />

              )}
              </div>
            </>
          }

          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-headline">
              Can't Find Your Dream Destination?
            </h2>
            <p className="text-base md:text-lg mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
              Let our travel experts create a personalized itinerary just for you. Share your preferences and we'll craft the perfect Indian adventure.
            </p>
            <Button
              variant="secondary"
              size="lg"
              iconName="MessageCircle"
              iconPosition="right"
              onClick={() => navigate('/enquiry-form')}>

              Contact Our Experts
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      {selectedState &&
      <QuickViewModal
        state={selectedState}
        onClose={handleCloseModal}
        onExplore={handleExplorePackages} />

      }
    </div>);

};

export default StateDiscovery;