import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="container-editorial py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Ikuyo Travels</h3>
            <p className="text-muted-foreground">
              Personal, flexible journeys with your own expert guide. Discover the authentic Japan.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/tours" className="block text-muted-foreground hover:text-accent transition-smooth">
                Sample Tours
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-accent transition-smooth">
                About Your Guide
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-accent transition-smooth">
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-smooth"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-smooth"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="mailto:info@ikuyotravels.com"
                className="text-muted-foreground hover:text-accent transition-smooth"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
            <p className="text-muted-foreground mt-4 text-sm">
              Fully Licensed & Insured
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
