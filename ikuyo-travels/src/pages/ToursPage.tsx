import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { tours } from '../data/tourData';
import Button from '../components/ui/Button';
import { HiClock, HiUserGroup, HiCurrencyDollar } from 'react-icons/hi';
import { getImageUrl, getGalleryImages } from '../data/imageUrls';

const ToursPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Intro Section */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Sample Journeys
          </h1>
          <p className="text-base md:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Every journey I create is unique and fine-tuned to your interests. These itineraries are starting points
            to spark your imagination. Let's create your perfect trip together.
          </p>
        </div>

        {/* Tour List */}
        <div className="space-y-20">
          {tours.map((tour) => (
            <div
              key={tour.id}
              id={tour.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden scroll-mt-24"
            >
              {/* Tour Header with Image */}
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-[4/3] md:aspect-auto">
                  <img
                    src={getImageUrl(tour.id)}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary mb-3">
                    {tour.title}
                  </h2>
                  <p className="text-base text-text-secondary mb-6">{tour.tagline}</p>

                  {/* Key Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-3 bg-background p-3 rounded-lg">
                      <HiClock className="text-accent text-2xl flex-shrink-0" />
                      <div>
                        <p className="text-xs text-text-secondary">Duration</p>
                        <p className="font-semibold text-text-primary">{tour.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-background p-3 rounded-lg">
                      <HiUserGroup className="text-accent text-2xl flex-shrink-0" />
                      <div>
                        <p className="text-xs text-text-secondary">Group Size</p>
                        <p className="font-semibold text-text-primary">{tour.groupSize}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-background p-3 rounded-lg">
                      <HiCurrencyDollar className="text-accent text-2xl flex-shrink-0" />
                      <div>
                        <p className="text-xs text-text-secondary">Price</p>
                        <p className="font-semibold text-text-primary">{tour.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Itinerary */}
              <div className="p-8 md:p-12 border-t border-secondary">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-text-primary mb-8">
                  Itinerary
                </h3>
                <div className="space-y-6">
                  {tour.itinerary.map((item) => (
                    <div key={item.day} className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white font-bold text-lg">Day {item.day}</span>
                        </div>
                      </div>
                      <div className="flex-1 pt-2">
                        <p className="text-text-secondary leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Photo Gallery */}
                <div className="mt-10">
                  <h4 className="font-semibold text-lg text-text-primary mb-4">Photo Gallery</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {getGalleryImages(tour.id).map((imageUrl, i) => (
                      <div key={i} className="aspect-square bg-secondary rounded-lg overflow-hidden">
                        <img
                          src={imageUrl}
                          alt={`${tour.title} photo ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-10 text-center">
                  <Button to="/contact">Inquire About This Journey</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center bg-accent bg-opacity-10 rounded-lg p-12">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Ready to Design Your Journey?
          </h3>
          <p className="text-lg text-text-secondary mb-6">
            Let's create a custom itinerary that's perfect for you
          </p>
          <Button to="/contact">Get in Touch</Button>
        </div>
      </div>
    </div>
  );
};

export default ToursPage;
