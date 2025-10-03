import { HiGlobeAlt, HiAcademicCap, HiUserGroup, HiShieldCheck } from 'react-icons/hi';

const AboutPage = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Intro Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://source.unsplash.com/600x800/?japan,guide,professional"
                alt="Your Guide"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-text-primary mb-6">
              Your Guide, [Friend's Name]
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Welcome! I'm passionate about sharing the beauty, culture, and hidden treasures of Japan with travelers
              from around the world. With over a decade of experience, I've perfected the art of creating journeys
              that feel both extraordinary and effortlessly personal.
            </p>
          </div>
        </div>

        {/* My Philosophy Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-20">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-6">
            My Approach to Travel
          </h2>
          <div className="prose prose-lg max-w-none text-text-secondary">
            <p className="mb-4 leading-relaxed">
              I believe the best travel is personal and flexible. My passion is sharing the authentic, non-touristy
              side of Japan. While we'll see the famous sights, the real magic happens when we make a spontaneous
              stop at a local restaurant or find a perfect photo spot away from the crowds.
            </p>
            <p className="mb-4 leading-relaxed">
              Whether you're traveling with family, friends, or as a couple, I tailor each journey to your pace and
              interests. Need to slow down? Want to venture off the beaten path? Curious about a local tradition?
              I'm here to make it happen.
            </p>
            <p className="leading-relaxed">
              I handle all the logistics so you can relax and immerse yourself in the experience. From navigating
              public transport to recommending the best seasonal dishes, I'm your local connection to authentic Japan.
            </p>
          </div>
        </section>

        {/* Qualifications Section */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center">
            Experience & Qualifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center transition-shadow duration-300 hover:shadow-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent bg-opacity-10 mb-6">
                <HiGlobeAlt className="text-accent text-3xl" />
              </div>
              <h3 className="font-bold text-lg text-text-primary mb-3">Languages</h3>
              <p className="text-text-secondary">
                English & Japanese (fluent)<br />
                Chinese (conversational)
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center transition-shadow duration-300 hover:shadow-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent bg-opacity-10 mb-6">
                <HiAcademicCap className="text-accent text-3xl" />
              </div>
              <h3 className="font-bold text-lg text-text-primary mb-3">Experience</h3>
              <p className="text-text-secondary">
                10+ Years<br />
                Exploring Japan
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center transition-shadow duration-300 hover:shadow-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent bg-opacity-10 mb-6">
                <HiUserGroup className="text-accent text-3xl" />
              </div>
              <h3 className="font-bold text-lg text-text-primary mb-3">Specialization</h3>
              <p className="text-text-secondary">
                Families & Groups<br />
                4+ people
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center transition-shadow duration-300 hover:shadow-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent bg-opacity-10 mb-6">
                <HiShieldCheck className="text-accent text-3xl" />
              </div>
              <h3 className="font-bold text-lg text-text-primary mb-3">Licensed & Insured</h3>
              <p className="text-text-secondary">
                Tour Operator<br />
                License #XXXXXX
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mt-20 bg-accent bg-opacity-10 rounded-lg p-8 md:p-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-8 text-center">
            What Sets Me Apart
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl text-text-primary mb-3">Deep Local Knowledge</h3>
              <p className="text-text-secondary">
                Years of exploration mean I know the best hidden spots, seasonal highlights, and local favorites
                that guidebooks miss.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-text-primary mb-3">Genuine Flexibility</h3>
              <p className="text-text-secondary">
                Your journey adapts to you. Whether it's adjusting for weather, energy levels, or spontaneous
                discoveries, I make it work.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-text-primary mb-3">Cultural Bridge</h3>
              <p className="text-text-secondary">
                I translate more than language—I help you understand customs, etiquette, and the stories behind
                what you're experiencing.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
