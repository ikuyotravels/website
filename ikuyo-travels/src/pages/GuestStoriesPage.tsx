import TestimonialCard from '../components/ui/TestimonialCard';

const GuestStoriesPage = () => {
  const testimonials = [
    {
      quote: "The perfect mix of famous sights and amazing places we never would have found on our own! Our guide was so flexible and patient with our kids.",
      author: "The Chen Family",
      location: "Singapore",
      rating: 5
    },
    {
      quote: "We wanted an authentic experience and that's exactly what we got. From hidden temples to local restaurants, every day was a discovery.",
      author: "Sarah & Mark Johnson",
      location: "United States",
      rating: 5
    },
    {
      quote: "The itinerary was perfectly paced for our group. Our guide knew exactly when to take breaks and when to explore. Highly recommend!",
      author: "The Williams Family",
      location: "Australia",
      rating: 5
    },
    {
      quote: "Best decision we made for our Japan trip. The local knowledge and personal touch made all the difference. We felt like we were traveling with a friend.",
      author: "Emma & David Lee",
      location: "Canada",
      rating: 5
    },
    {
      quote: "We've traveled extensively but this was our most memorable trip. The attention to detail and cultural insights were exceptional.",
      author: "Robert & Jennifer Martinez",
      location: "United Kingdom",
      rating: 5
    },
    {
      quote: "Traveling with three generations was challenging, but our guide made it seamless. Everyone had an amazing time and we created memories to last a lifetime.",
      author: "The Rodriguez Family",
      location: "Mexico",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Guest Stories
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Hear from families and travelers who've experienced the magic of authentic Japan
          </p>
        </div>

        {/* Featured Story */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://source.unsplash.com/800x600/?japan,family,travel"
                alt="Happy travelers"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-xl md:text-2xl text-text-primary italic mb-6 leading-relaxed">
                "This wasn't just a tour—it was a journey into the heart of Japan. Our guide's warmth and expertise
                turned what could have been a stressful family trip into the adventure of a lifetime. The flexibility
                to explore at our own pace while still seeing everything we wanted was invaluable."
              </p>
              <p className="font-semibold text-lg text-text-primary">The Thompson Family</p>
              <p className="text-text-secondary">New Zealand • 10-Day Kansai & Tokyo Journey</p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Video Testimonials Section */}
        <section className="bg-accent bg-opacity-10 rounded-lg p-8 md:p-12 mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-8 text-center">
            Video Testimonials
          </h2>
          <p className="text-center text-text-secondary mb-8">
            Watch our guests share their experiences (Coming Soon)
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
              <p className="text-text-secondary">Video Placeholder 1</p>
            </div>
            <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
              <p className="text-text-secondary">Video Placeholder 2</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="font-serif text-4xl md:text-5xl font-bold text-accent mb-2">500+</p>
            <p className="text-text-secondary">Happy Travelers</p>
          </div>
          <div>
            <p className="font-serif text-4xl md:text-5xl font-bold text-accent mb-2">10+</p>
            <p className="text-text-secondary">Years Experience</p>
          </div>
          <div>
            <p className="font-serif text-4xl md:text-5xl font-bold text-accent mb-2">5.0</p>
            <p className="text-text-secondary">Average Rating</p>
          </div>
          <div>
            <p className="font-serif text-4xl md:text-5xl font-bold text-accent mb-2">98%</p>
            <p className="text-text-secondary">Would Recommend</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GuestStoriesPage;
