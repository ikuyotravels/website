import { Link } from 'react-router-dom';
import { HiMail, HiPhone } from 'react-icons/hi';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-text-primary text-background py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl font-bold mb-4">Ikuyo Travels</h3>
            <p className="text-sm opacity-80">
              Your personal guide to authentic Japan. Travel like a local.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/tours" className="opacity-80 hover:opacity-100 transition-opacity">Tours</Link></li>
              <li><Link to="/about" className="opacity-80 hover:opacity-100 transition-opacity">About</Link></li>
              <li><Link to="/stories" className="opacity-80 hover:opacity-100 transition-opacity">Guest Stories</Link></li>
              <li><Link to="/blog" className="opacity-80 hover:opacity-100 transition-opacity">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="opacity-80 hover:opacity-100 transition-opacity">FAQ</Link></li>
              <li><Link to="/contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</Link></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 opacity-80">
                <HiMail />
                <a href="mailto:info@ikuyotravels.com" className="hover:opacity-100 transition-opacity">
                  info@ikuyotravels.com
                </a>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <HiPhone />
                <a href="tel:+81123456789" className="hover:opacity-100 transition-opacity">
                  +81 (0) 123-456-789
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" aria-label="Instagram" className="opacity-80 hover:opacity-100 transition-opacity">
                <FaInstagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="opacity-80 hover:opacity-100 transition-opacity">
                <FaFacebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="opacity-80 hover:opacity-100 transition-opacity">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background border-opacity-20 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Ikuyo Travels. All rights reserved.</p>
          <p className="mt-2">Licensed Tour Operator #XXXXXX</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
