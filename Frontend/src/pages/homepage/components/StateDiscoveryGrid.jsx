import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const StateDiscoveryGrid = () => {
  const navigate = useNavigate();

  const featuredStates = [
  {
    id: 1,
    name: "Rajasthan",
    tagline: "Land of Kings",
    image: "https://images.unsplash.com/photo-1587299738133-e0be6d836c1e",
    alt: "Magnificent Amber Fort palace with yellow sandstone walls and traditional Rajput architecture set against Aravalli hills in Jaipur Rajasthan",
    highlights: ["Palaces", "Forts", "Desert Safari"],
    packageCount: 12
  },
  {
    id: 2,
    name: "Kerala",
    tagline: "God\'s Own Country",
    image: "https://images.unsplash.com/photo-1677392988966-d730d8d506dc",
    alt: "Lush green tea plantations covering rolling hills with misty mountains in background and workers harvesting tea leaves in Munnar Kerala",
    highlights: ["Backwaters", "Hill Stations", "Beaches"],
    packageCount: 15
  },
  {
    id: 3,
    name: "Himachal Pradesh",
    tagline: "Land of Gods",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18c129ac0-1765083019181.png",
    alt: "Snow-capped Himalayan mountain peaks with traditional wooden houses and pine forests in valley below under clear blue sky in Manali",
    highlights: ["Mountains", "Adventure", "Spirituality"],
    packageCount: 10
  },
  {
    id: 4,
    name: "Goa",
    tagline: "Beach Paradise",
    image: "https://images.unsplash.com/photo-1688645825053-eaa57bed1eb3",
    alt: "Golden sandy beach with turquoise Arabian Sea waves, palm trees swaying, and colorful beach shacks along coastline during sunset in Goa",
    highlights: ["Beaches", "Nightlife", "Portuguese Heritage"],
    packageCount: 8
  },
  {
    id: 5,
    name: "Uttarakhand",
    tagline: "Land of Char Dham",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_140e2e134-1766563876933.png",
    alt: "Sacred Ganges river flowing through Rishikesh with ancient temples on riverbank, suspension bridge, and Himalayan foothills in background",
    highlights: ["Pilgrimage", "Yoga", "Wildlife"],
    packageCount: 9
  },
  {
    id: 6,
    name: "Tamil Nadu",
    tagline: "Temple Trail",
    image: "https://images.unsplash.com/flagged/photo-1582101164197-78a982d7724d",
    alt: "Towering gopuram temple tower with intricate colorful sculptures of Hindu deities and ornate Dravidian architecture in Madurai Tamil Nadu",
    highlights: ["Temples", "Culture", "Cuisine"],
    packageCount: 11
  }];


  const handleStateClick = (stateName) => {
    navigate('/state-discovery', { state: { selectedState: stateName } });
  };

  return (
    <section className="section-spacing bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-headline text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Explore India State by State
          </h2>
          <p className="text-body text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            From majestic mountains to serene beaches, discover the incredible diversity of India through our curated state-wise experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredStates?.map((state) =>
          <div
            key={state?.id}
            onClick={() => handleStateClick(state?.name)}
            className="group relative overflow-hidden rounded-lg shadow-card hover:shadow-xl transition-all duration-300 cursor-pointer bg-card">

              <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
                <Image
                src={state?.image}
                alt={state?.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Icon name="MapPin" size={14} color="var(--color-primary)" />
                  <span className="text-xs font-medium text-foreground">{state?.packageCount} Packages</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="text-headline text-2xl md:text-3xl font-bold text-white mb-1">
                  {state?.name}
                </h3>
                <p className="text-accent text-sm md:text-base text-white/90 mb-3">
                  {state?.tagline}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {state?.highlights?.map((highlight, index) =>
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white">

                      {highlight}
                    </span>
                )}
                </div>

                <div className="flex items-center text-white group-hover:text-secondary transition-colors duration-300">
                  <span className="text-sm font-medium mr-2">Explore Now</span>
                  <Icon name="ArrowRight" size={16} />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Button
            variant="outline"
            size="lg"
            iconName="Map"
            iconPosition="left"
            onClick={() => navigate('/state-discovery')}>

            View All States
          </Button>
        </div>
      </div>
    </section>);

};

export default StateDiscoveryGrid;