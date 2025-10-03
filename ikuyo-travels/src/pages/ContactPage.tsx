import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    groupSize: "",
    travelDates: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send the data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. I'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      groupSize: "",
      travelDates: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container-editorial">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
              Let's Create Your Perfect Journey
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Share your travel dreams with me, and I'll craft a personalized itinerary that brings them to life.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Info Sidebar */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-serif mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a
                        href="mailto:info@ikuyotravels.com"
                        className="text-muted-foreground hover:text-accent transition-smooth"
                      >
                        info@ikuyotravels.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">WhatsApp</p>
                      <p className="text-muted-foreground">Available upon request</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">What to Include</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Your travel dates or preferred season</li>
                  <li>• Number of travelers in your group</li>
                  <li>• Must-see destinations or experiences</li>
                  <li>• Any special requirements or preferences</li>
                  <li>• Your budget range (if you're comfortable sharing)</li>
                </ul>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg">
                <p className="text-sm text-foreground">
                  <strong>Response Time:</strong> I typically respond within 24 hours. For urgent inquiries, please mention it in your message.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-smooth"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-smooth"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="groupSize" className="block text-sm font-medium mb-2">
                      Group Size *
                    </label>
                    <select
                      id="groupSize"
                      name="groupSize"
                      required
                      value={formData.groupSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-smooth"
                    >
                      <option value="">Select group size</option>
                      <option value="2-3">2-3 people</option>
                      <option value="4-6">4-6 people</option>
                      <option value="7-9">7-9 people</option>
                      <option value="10+">10+ people</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="travelDates" className="block text-sm font-medium mb-2">
                      Travel Dates
                    </label>
                    <input
                      type="text"
                      id="travelDates"
                      name="travelDates"
                      value={formData.travelDates}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-smooth"
                      placeholder="e.g., April 2024"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell Me About Your Dream Trip *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-smooth resize-none"
                    placeholder="Share your interests, must-see places, travel style, or any questions you have..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Your Inquiry
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to be contacted about your travel inquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
