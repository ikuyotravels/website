import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/tours", label: "Tours" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const handleNavClick = (to: string) => {
    window.scrollTo(0, 0);
    navigate(to);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border" role="navigation" aria-label="Main navigation">
      <div className="container-editorial">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => handleNavClick("/")}
            className="flex items-center gap-3 focus-ring rounded"
            aria-label="Ikuyo Travels - Home"
          >
            <img
              src="/logo.png"
              alt="Ikuyo Travels Logo"
              className="h-10 w-10"
            />
            <span className="font-serif text-2xl font-bold text-foreground">
              Ikuyo Travels
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.to}
                onClick={() => handleNavClick(link.to)}
                className="text-foreground hover:text-accent transition-smooth editorial-link focus-ring rounded px-2 py-1"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("/contact")}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-smooth min-touch focus-ring"
            >
              Start Planning
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 focus-ring rounded"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4" role="menu">
            {navLinks.map((link) => (
              <button
                key={link.to}
                onClick={() => handleNavClick(link.to)}
                className="block w-full text-left text-foreground hover:text-accent transition-smooth py-2 focus-ring rounded px-2"
                role="menuitem"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("/contact")}
              className="w-full bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-smooth min-touch focus-ring"
            >
              Start Planning
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
