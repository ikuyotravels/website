import { useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelDates: '',
    groupSize: '',
    interests: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! I will get back to you within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Let's Design Your Dream Trip
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Tell me about your Japan travel dreams, and I'll create a personalized itinerary just for you
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary mb-8">
                Send Me an Inquiry
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-text-primary mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-secondary focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-secondary focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-text-primary mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-secondary focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="travelDates" className="block text-sm font-semibold text-text-primary mb-2">
                      Preferred Travel Dates
                    </label>
                    <input
                      type="text"
                      id="travelDates"
                      name="travelDates"
                      placeholder="e.g., April 2024"
                      value={formData.travelDates}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-secondary focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="groupSize" className="block text-sm font-semibold text-text-primary mb-2">
                      Group Size *
                    </label>
                    <select
                      id="groupSize"
                      name="groupSize"
                      required
                      value={formData.groupSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-secondary focus:outline-none focus:border-accent transition-colors"
                    >
                      <option value="">Select group size</option>
                      <option value="2-3">2-3 people</option>
                      <option value="4-6">4-6 people</option>
                      <option value="7-9">7-9 people</option>
                      <option value="10+">10+ people</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="interests" className="block text-sm font-semibold text-text-primary mb-2">
                      Main Interests
                    </label>
                    <input
                      type="text"
                      id="interests"
                      name="interests"
                      placeholder="e.g., Culture, Nature, Food"
                      value={formData.interests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-secondary focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-2">
                    Tell Me About Your Dream Trip *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What would you like to experience in Japan? Any specific places you want to visit? Special requirements or preferences?"
                    className="w-full px-4 py-3 rounded-lg border border-secondary focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-hover transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-8 sticky top-24">
              <h3 className="font-serif text-2xl font-bold text-text-primary mb-6">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <HiMail className="text-accent text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary mb-1">Email</p>
                    <a href="mailto:info@ikuyotravels.com" className="text-text-secondary hover:text-accent transition-colors">
                      info@ikuyotravels.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <HiPhone className="text-accent text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary mb-1">Phone</p>
                    <a href="tel:+81123456789" className="text-text-secondary hover:text-accent transition-colors">
                      +81 (0) 123-456-789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <HiLocationMarker className="text-accent text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary mb-1">Based in</p>
                    <p className="text-text-secondary">Tokyo, Japan</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-secondary">
                <h4 className="font-semibold text-text-primary mb-3">Response Time</h4>
                <p className="text-text-secondary text-sm">
                  I typically respond to inquiries within 24 hours. I look forward to helping you plan your perfect Japan adventure!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
