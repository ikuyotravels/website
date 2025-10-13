import { Mail, MessageSquare } from "lucide-react";
import TravelInquiryForm from "@/components/ui/TravelInquiryForm";

const ContactPage = () => {
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
              <TravelInquiryForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;