import Button from '../components/ui/Button';
import TourCard from '../components/ui/TourCard';
import { tours } from '../data/tourData';
import { HiAdjustments, HiLightningBolt, HiHeart } from 'react-icons/hi';

const HomePage = () => {
  const featuredTours = [
    tours.find(t => t.id === 'fuji-day-trip'),
    tours.find(t => t.id === 'kansai-heart'),
    tours.find(t => t.id === 'hokkaido-winter')
  ].filter(Boolean);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1920&h=1080&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-text-primary bg-opacity-40"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
            Travel Japan Like a Local
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
            Personal, flexible journeys with your own expert guide. Discover hidden gems, avoid the crowds, and create your perfect trip.
          </p>
          <Button to="/contact">Design Your Dream Trip</Button>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-accent text-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-base md:text-lg">
            <span className="font-semibold">Rated 5/5 Stars ⭐⭐⭐⭐⭐</span>
            {' '}- "The perfect mix of famous sights and amazing places we never would have found on our own!" - The Chen Family, Singapore
          </p>
        </div>
      </section>

      {/* Why Travel With Me Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-center text-text-primary mb-4">
            Uniqueness, Convenience, and Spontaneity
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent bg-opacity-10 mb-6">
                <HiAdjustments className="text-accent text-2xl" />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-bold mb-4 text-text-primary">
                Your Trip, Your Pace
              </h3>
              <p className="text-text-secondary">
                Feel like a spontaneous stop for photos? Need a break for the kids to nap? I'll fine-tune the itinerary to you.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent bg-opacity-10 mb-6">
                <HiLightningBolt className="text-accent text-2xl" />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-bold mb-4 text-text-primary">
                Avoid the Crowds
              </h3>
              <p className="text-text-secondary">
                See the iconic sights without the stress. I know the best times to visit and the secret spots for a better view.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent bg-opacity-10 mb-6">
                <HiHeart className="text-accent text-2xl" />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-bold mb-4 text-text-primary">
                Travel with a Friend
              </h3>
              <p className="text-text-secondary">
                I'm more than a guide; I'm your local connection, here to make your journey personal and memorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Journeys Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-center text-text-primary mb-12">
            My Most Popular Journeys
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredTours.map((tour) => tour && (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button to="/tours" variant="secondary">View All Journeys</Button>
          </div>
        </div>
      </section>

      {/* About the Guide Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&h=800&fit=crop"
                  alt="Your guide"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary mb-6">
                Your Personal Guide to Authentic Japan
              </h2>
              <p className="text-base text-text-secondary mb-6 leading-relaxed">
                Hi, I'm [Friend's Name]. My bread and butter is taking families and groups on unforgettable trips.
                I love blending the iconic—like Fuji and the cherry blossoms—with the flexibility to discover local hidden gems along the way.
              </p>
              <p className="text-base text-text-secondary mb-8 leading-relaxed">
                As a very amenable guide, my goal is to make your trip feel uniquely yours.
              </p>
              <Button to="/about" variant="secondary">More About My Approach</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
