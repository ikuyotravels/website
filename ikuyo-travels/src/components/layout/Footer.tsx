import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MessageCircle, Shield, Award } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="container-editorial py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 text-foreground">Ikuyo Travels</h3>
            <p className="text-muted-foreground leading-relaxed">
              Personal, flexible journeys with your own expert guide. Discover the authentic Japan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/tours" className="block text-muted-foreground hover:text-accent transition-smooth focus-ring">
                Sample Tours
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-accent transition-smooth focus-ring">
                About Your Guide
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-accent transition-smooth focus-ring">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Trust & Legitimacy */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Trust & Legitimacy</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Fully Licensed & Insured</span>
              </div>
              <div className="flex items-start gap-2">
                <Award className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Official Japan Tourism Agency License #XXXXXX</span>
              </div>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Get in Touch</h4>

            {/* Messaging Buttons */}
            <div className="space-y-3 mb-4">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-smooth focus-ring p-2 rounded"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://line.me/ti/p/~ikuyotravels"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-smooth focus-ring p-2 rounded"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>LINE</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-smooth focus-ring p-1 rounded"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-smooth focus-ring p-1 rounded"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:info@ikuyotravels.com"
                className="text-muted-foreground hover:text-accent transition-smooth focus-ring p-1 rounded"
                aria-label="Email us"
              >
                <Mail size={20} />
              </a>
            </div>

            <p className="text-xs text-muted-foreground">
              Available 9 AM - 6 PM JST
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Ikuyo Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
