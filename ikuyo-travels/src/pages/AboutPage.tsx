import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { Award, Shield } from "lucide-react";
import guideImage from "@/assets/guide-portrait.jpg";

const AboutPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container-editorial">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={guideImage}
              alt="Ikuyo Travels guide"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
              Hi, we're Ikuyo Travels
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Welcome! We're passionate about sharing the real Japan—the places that make you feel
              like you've discovered something special, the moments that become your favorite travel
              memories.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over a decade of experience guiding travelers through Japan, we've learned that the
              best trips aren't just about checking off landmarks. They're about the spontaneous
              detours, the hidden viewpoints, and the authentic connections.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Languages
                </h3>
                <p className="text-base text-foreground leading-relaxed">
                  English & Japanese (fluent) - Chinese (conversational)
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Experience
                </h3>
                <p className="text-base text-foreground leading-relaxed">
                  10+ years curating bespoke journeys across Japan
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Specialisation
                </h3>
                <p className="text-base text-foreground leading-relaxed">
                  Flexible itineraries for families & groups of 4+
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Licensed & Insured
                </h3>
                <p className="text-base text-foreground leading-relaxed">
                  Fully registered, insured, and compliant with local regulations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <section className="mb-20 bg-card p-8 md:p-12 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Our Approach to Travel</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              We believe the best travel is personal and flexible. Our passion is sharing the
              authentic, non-touristy side of Japan while ensuring you experience the iconic sights that
              brought you here in the first place.
            </p>
            <p>
              While we'll definitely see famous landmarks like Mount Fuji and historic temples, the real
              magic happens in the in-between moments. That spontaneous stop at a local restaurant
              where they serve the best ramen in the region. The winding mountain road with a perfect
              photo spot that tourists don't know about. The flexibility to adjust our pace when the kids
              need a break or when you discover something you want to explore more deeply.
            </p>
            <p>
              We handle all the logistics—navigation, reservations, local knowledge—so you can relax and
              immerse yourself in the experience. Our specialty is creating multi-checkpoint itineraries
              that are efficient yet never feel rushed, using our own vehicle to avoid crowds and reach
              places public transportation can't.
            </p>
            <p>
              Most of our guests are families and groups of four or more who want that perfect blend of
              structure and spontaneity. Whether it's cherry blossom season in spring, autumn foliage
              viewing, or winter snow festivals, we know the best times, places, and hidden angles to
              make your trip unforgettable.
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="mb-20 bg-muted/30 p-8 md:p-12 rounded-lg text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            To provide friendly, reliable, bespoke private tours in Japan that offer unique experiences
            unknown to most tourists. Ikuyo Travels was born out of a love for exploring every corner of
            Japan and sharing its many stories with others.
          </p>
        </section>

        {/* Trust & Legitimacy */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Trust & Legitimacy</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-sm">
              <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Fully Licensed & Insured</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We operate under full insurance coverage and comply with all local regulations to
                  ensure your safety and peace of mind throughout your journey.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-sm">
              <Award className="w-6 h-6 text-accent flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Official Japan Tourism Agency License</h3>
                <p className="text-muted-foreground leading-relaxed">
                  License #XXXXXX (placeholder - to be replaced with the official number once issued).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-primary text-primary-foreground p-12 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Let's Plan Your Perfect Journey</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95 leading-relaxed">
            Ready to experience Japan in a way that feels uniquely yours? Let's talk about your dream
            trip.
          </p>
          <Link to="/contact" className="focus-ring inline-block">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 min-touch"
            >
              Start Planning Today
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
