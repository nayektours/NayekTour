import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const InstagramFeed = () => {
  const instagramPosts = [
  {
    id: 1,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e2513026-1764747052385.png",
    alt: "Colorful traditional Indian street market with vibrant textiles, handicrafts, and local vendors in narrow alley with hanging lanterns",
    likes: 2847,
    caption: "Lost in the colors of Jaipur\'s bazaars 🎨"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1564462359369-aa82699a45de",
    alt: "Serene sunrise view over Varanasi ghats with ancient temples, boats on Ganges river, and morning mist creating mystical atmosphere",
    likes: 3521,
    caption: "Spiritual mornings at Varanasi 🙏"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1652021979353-2288f1835b65",
    alt: "Delicious Indian thali meal with multiple colorful curries, rice, naan bread, and traditional brass serving plates on wooden table",
    likes: 4102,
    caption: "Flavors of incredible India 🍛"
  },
  {
    id: 4,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f0a985e9-1767031925533.png",
    alt: "Adventure seekers paragliding over lush green Himalayan valleys with snow-capped peaks and winding rivers in background",
    likes: 2956,
    caption: "Flying high in Himachal 🪂"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1679937698873-6065742c8d32",
    alt: "Traditional Indian wedding ceremony with bride and groom in ornate attire, flower decorations, and cultural rituals in palace setting",
    likes: 5234,
    caption: "Celebrating love, Indian style 💑"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1641549140365-93dc6fb4ad91",
    alt: "Majestic Bengal tiger walking through tall grass in Ranthambore National Park with ancient fort ruins visible in background",
    likes: 6789,
    caption: "Wildlife encounters in Ranthambore 🐅"
  }];


  return (
    <section className="section-spacing bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full px-4 py-2 mb-4">
            <Icon name="Instagram" size={20} color="#E4405F" />
            <span className="text-sm font-semibold" style={{ color: '#E4405F' }}>Follow Our Journey</span>
          </div>
          <h2 className="text-headline text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Travel Stories from Instagram
          </h2>
          <p className="text-body text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Join our community of explorers and share your India moments with #Nayek Tours
          </p>
          <a
            href="https://instagram.com/indiawanderlust"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-200">

            <span className="font-semibold">@nayektours</span>
            <Icon name="ExternalLink" size={16} />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {instagramPosts?.map((post) =>
          <a
            key={post?.id}
            href="https://instagram.com/indiawanderlust"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-lg bg-muted">

              <Image
              src={post?.image}
              alt={post?.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center space-x-2 text-white mb-2">
                    <Icon name="Heart" size={16} className="fill-current" />
                    <span className="text-xs font-semibold">{post?.likes?.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-white line-clamp-2">{post?.caption}</p>
                </div>
              </div>

              <div className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Icon name="Instagram" size={16} color="#E4405F" />
              </div>
            </a>
          )}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <a
            href="https://instagram.com/indiawanderlust"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300">

            <Icon name="Instagram" size={20} />
            <span>Follow Us on Instagram</span>
          </a>
        </div>
      </div>
    </section>);

};

export default InstagramFeed;