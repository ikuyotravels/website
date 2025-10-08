import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useLocation } from "react-router-dom";
import { Mail, MessageSquare, Send, ChevronDown, Check } from "lucide-react";

import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/hooks/use-toast";
import { tours } from "@/data/tourData";
import { getTourThumbnailImage } from "@/lib/tourMedia";

type ContactFormData = {
  name: string;
  email: string;
  groupSize: string;
  travelDates: string;
  message: string;
  selectedTourId: string;
};

const ContactPage = () => {
  const { toast } = useToast();
  const location = useLocation();
  const preselectedTourId =
    (location.state as { selectedTourId?: string } | undefined)?.selectedTourId ?? "";

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    groupSize: "",
    travelDates: "",
    message: "",
    selectedTourId: preselectedTourId,
  });
  const [isJourneyDropdownOpen, setJourneyDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (preselectedTourId) {
      setFormData(prev => ({ ...prev, selectedTourId: preselectedTourId }));
    }
  }, [preselectedTourId]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setJourneyDropdownOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setJourneyDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      groupSize: "",
      travelDates: "",
      message: "",
      selectedTourId: preselectedTourId,
    });
    setJourneyDropdownOpen(false);
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleJourneySelect = (tourId: string) => {
    setFormData(prev => ({ ...prev, selectedTourId: tourId }));
    setJourneyDropdownOpen(false);
  };

  const selectedTour = tours.find(tour => tour.id === formData.selectedTourId);

  return (
    <div className="min-h-screen">
      <PageHero
        backgroundImage="/serene-mount-fuji-reflection.png"
        title="Let's Create Your Perfect Journey"
        description="Share your travel dreams with us, and we'll craft a personalized itinerary that brings them to life."
      />

      <section className="py-12 md:py-16">
        <div className="container-editorial">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-12">
              <aside className="md:col-span-2 space-y-6">
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

                <div className="bg-accent/10 p-6 rounded-lg">
                  <p className="text-sm text-foreground">
                    <strong>Response Time:</strong> We typically respond within 24 hours. For urgent
                    inquiries, please mention it in your message.
                  </p>
                </div>
              </aside>

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

                  <input type="hidden" name="selectedTourId" value={formData.selectedTourId} />

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Journeys I'm Interested In
                    </label>
                    <div className="relative" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() => setJourneyDropdownOpen(prev => !prev)}
                        className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-smooth flex items-center justify-between gap-3"
                        aria-haspopup="listbox"
                        aria-expanded={isJourneyDropdownOpen}
                      >
                        {selectedTour ? (
                          <span className="flex items-center gap-3">
                            <img
                              src={getTourThumbnailImage(selectedTour.id)}
                              alt=""
                              className="w-14 h-10 rounded object-cover"
                            />
                            <span className="text-left">
                              <span className="block font-medium text-foreground">{selectedTour.title}</span>
                              <span className="block text-xs text-muted-foreground">
                                {selectedTour.tagline}
                              </span>
                            </span>
                          </span>
                        ) : (
                          <span className="text-muted-foreground">Select a sample journey</span>
                        )}
                        <ChevronDown className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
                      </button>

                      {isJourneyDropdownOpen && (
                        <div className="absolute z-20 mt-2 w-full bg-card border border-border rounded-lg shadow-lg max-h-64 overflow-y-auto">
                          <ul role="listbox" aria-label="Journeys">
                            {tours.map(tour => {
                              const isActive = tour.id === formData.selectedTourId;
                              return (
                                <li key={tour.id}>
                                  <button
                                    type="button"
                                    onClick={() => handleJourneySelect(tour.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-muted/50 transition-smooth ${
                                      isActive ? "bg-muted/50" : ""
                                    }`}
                                    role="option"
                                    aria-selected={isActive}
                                  >
                                    <img
                                      src={getTourThumbnailImage(tour.id)}
                                      alt=""
                                      className="w-12 h-9 rounded object-cover"
                                    />
                                    <div className="flex-1">
                                      <p className="font-medium text-sm text-foreground">{tour.title}</p>
                                      <p className="text-xs text-muted-foreground">{tour.tagline}</p>
                                    </div>
                                    {isActive && <Check className="w-4 h-4 text-accent" aria-hidden="true" />}
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Tell Us About Your Dream Trip *
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
      </section>
    </div>
  );
};

export default ContactPage;
