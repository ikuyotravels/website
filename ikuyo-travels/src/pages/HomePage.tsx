import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { TourCard } from "@/components/ui/TourCard";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { tours } from "@/data/tourData";
import { testimonials } from "@/data/testimonialData";
import { Star, Clock, Users, MapPin, Heart, Sparkles } from "lucide-react";
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
            alt="Mount Fuji with cherry blossoms at sunrise"
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            Travel Japan Like a Local
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 font-light max-w-3xl mx-auto leading-relaxed">
            Personal, flexible journeys with your own expert guide. Discover hidden gems and skip the crowds.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-8 text-sm md:text-base">
            <div className="flex items-center gap-1" aria-label="5 out of 5 stars from recent guests">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={18} fill="currentColor" aria-hidden="true" />
              ))}
            </div>
            <span>from recent guests · Licensed & insured</span>
          </div>
          <Link to="/contact" className="focus-ring inline-block">
            <Button size="lg" className="shadow-2xl min-touch">
              Design Your Dream Trip
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container-editorial">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
            What Guests Are Saying
          </h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Featured Journeys Section */}
      <section className="py-20 md:py-32">
        <div className="container-editorial">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-center mb-4">
            Featured Journeys
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Each journey is fully customizable. These are starting points to inspire your perfect trip.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/tours" className="focus-ring inline-block">
              <Button variant="outline" size="lg" className="min-touch">
                Browse Sample Journeys
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About the Guide - Elevated */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container-editorial">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
                Your Personal Guide to Authentic Japan
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hi, I'm Ananda, your guide to experiencing Japan in a way that feels uniquely yours. My bread and butter is taking families and groups on unforgettable trips across this beautiful country.
                </p>
                <p>
                  I love blending the iconic—like Fuji and the cherry blossoms—with the flexibility to discover local hidden gems along the way. Whether it's finding that perfect photo spot away from the crowds or stopping at a local restaurant that serves the best ramen you've ever tasted, I'm here to make it happen.
                </p>
                <p>
                  With over 10 years of exploring every corner of Japan, I know exactly how to create journeys that balance must-see landmarks with unexpected discoveries. My goal is to make your trip feel effortless and authentic.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/about" className="focus-ring inline-block">
                  <Button variant="secondary" size="lg" className="min-touch">
                    More About My Approach
                  </Button>
                </Link>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <img
                src={guideImage}
                alt="Ananda, your guide in Japan"
                loading="lazy"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Travel With Us - Condensed Chips */}
      <section className="py-12 md:py-16">
        <div className="container-editorial">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <div className="flex items-center gap-3 px-6 py-3 bg-card rounded-full shadow-sm">
              <Clock className="w-5 h-5 text-accent" aria-hidden="true" />
              <span className="text-sm md:text-base font-medium text-foreground">Your trip, your pace</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-card rounded-full shadow-sm">
              <MapPin className="w-5 h-5 text-accent" aria-hidden="true" />
              <span className="text-sm md:text-base font-medium text-foreground">Skip the crowds</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-card rounded-full shadow-sm">
              <Heart className="w-5 h-5 text-accent" aria-hidden="true" />
              <span className="text-sm md:text-base font-medium text-foreground">Travel with a friend</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container-editorial text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
            Ready to Start Planning?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95 leading-relaxed">
            Let's create an itinerary that perfectly matches your interests, pace, and travel style.
          </p>
          <Link to="/contact" className="focus-ring inline-block">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 min-touch">
              Start Planning
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
