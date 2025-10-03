import { tours } from "@/data/tourData";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { Calendar, Users, DollarSign } from "lucide-react";

const ToursPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container-editorial">
        {/* Page Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
            Sample Journeys
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every journey I create is unique and fine-tuned to your interests. These itineraries are starting points to spark your imagination. Let's create your perfect trip together.
          </p>
        </div>

        {/* Tours List */}
        <div className="space-y-20">
          {tours.map((tour, index) => (
            <article key={tour.id} className="bg-card rounded-lg shadow-md overflow-hidden">
              {/* Tour Header */}
              <div className="p-8 md:p-12">
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-serif mb-3">
                    {tour.title}
                  </h2>
                  <p className="text-lg text-muted-foreground italic">
                    {tour.tagline}
                  </p>
                </div>

                {/* Key Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 p-6 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-accent flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-semibold">{tour.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-accent flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Group Size</p>
                      <p className="font-semibold">{tour.groupSize}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-accent flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Price</p>
                      <p className="font-semibold text-accent">{tour.price}</p>
                    </div>
                  </div>
                </div>

                {/* Itinerary */}
                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-serif mb-6">Itinerary</h3>
                  <div className="space-y-6">
                    {tour.itinerary.map((day) => (
                      <div key={day.day} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                            {day.day}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-2">Day {day.day}</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {day.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 border-t border-border">
                  <Link to="/contact">
                    <Button size="lg">Inquire About This Journey</Button>
                  </Link>
                  {index < tours.length - 1 && (
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => {
                        const nextTour = document.getElementById(`tour-${tours[index + 1].id}`);
                        nextTour?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      See Next Journey
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 p-12 bg-muted/30 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-serif mb-4">
            Don't See What You're Looking For?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            These are just examples. Every itinerary is completely customizable to match your dreams, interests, and travel style.
          </p>
          <Link to="/contact">
            <Button size="lg">Create Your Custom Journey</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToursPage;
