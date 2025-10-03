import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/tours", label: "Tours" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container-editorial">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <span className="font-serif text-2xl font-bold text-foreground">
              Ikuyo Travels
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-foreground hover:text-accent transition-smooth editorial-link"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <button className="bg-accent text-accent-foreground px-6 py-2 rounded-md hover:bg-accent-hover transition-smooth">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-foreground hover:text-accent transition-smooth py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-accent text-accent-foreground px-6 py-2 rounded-md hover:bg-accent-hover transition-smooth">
                Get Started
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
