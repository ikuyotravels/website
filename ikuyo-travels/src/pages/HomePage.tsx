import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { TourCard } from "@/components/ui/TourCard";
import { tours } from "@/data/tourData";
import { Star, Clock, Users, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-fuji.jpg";
import guideImage from "@/assets/guide-portrait.jpg";

const HomePage = () => {
  const featuredTours = tours.filter(tour => tour.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Mount Fuji with cherry blossoms"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
            Travel Japan Like a Local
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 font-light max-w-3xl mx-auto leading-relaxed">
            Personal, flexible journeys with your own expert guide. Discover hidden gems, avoid the crowds, and create your perfect trip.
          </p>
          <Link to="/contact">
            <Button size="lg" className="shadow-2xl">
              Design Your Dream Trip
            </Button>
          </Link>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-accent text-accent-foreground py-6">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <p className="text-sm md:text-base">
              Rated 5/5 Stars — "The perfect mix of famous sights and amazing places we never would have found on our own!" - The Chen Family, Singapore
            </p>
          </div>
        </div>
      </section>

      {/* Why Travel With Me Section */}
      <section className="py-20 md:py-32">
        <div className="container-editorial">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-center mb-16">
            Uniqueness, Convenience, and Spontaneity
          </h2>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif mb-4">Your Trip, Your Pace</h3>
              <p className="text-muted-foreground leading-relaxed">
                Feel like a spontaneous stop for photos? Need a break for the kids to nap? I'll fine-tune the itinerary to you.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif mb-4">Avoid the Crowds</h3>
              <p className="text-muted-foreground leading-relaxed">
                See the iconic sights without the stress. I know the best times to visit and the secret spots for a better view.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif mb-4">Travel with a Friend</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm more than a guide; I'm your local connection, here to make your journey personal and memorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Journeys Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container-editorial">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-center mb-4">
            My Most Popular Journeys
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            These carefully curated itineraries showcase the best of Japan, from iconic landmarks to hidden treasures.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/tours">
              <Button variant="outline" size="lg">
                View All Sample Journeys
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About the Guide Section */}
      <section className="py-20 md:py-32">
        <div className="container-editorial">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
                Your Personal Guide to Authentic Japan
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hi, I'm your guide to experiencing Japan in a way that feels uniquely yours. My bread and butter is taking families and groups on unforgettable trips across this beautiful country.
                </p>
                <p>
                  I love blending the iconic—like Fuji and the cherry blossoms—with the flexibility to discover local hidden gems along the way. Whether it's finding that perfect photo spot away from the crowds or stopping at a local restaurant that serves the best ramen you've ever tasted, I'm here to make it happen.
                </p>
                <p>
                  As a very amenable guide, my goal is to make your trip feel effortless and authentic. With over 10 years of exploring every corner of Japan, I know exactly how to create journeys that balance must-see landmarks with unexpected discoveries.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/about">
                  <Button variant="secondary">
                    More About My Approach
                  </Button>
                </Link>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <img
                src={guideImage}
                alt="Your guide in Japan"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-accent text-accent-foreground">
        <div className="container-editorial text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
            Ready to Start Planning?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's create an itinerary that perfectly matches your interests, pace, and travel style.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
