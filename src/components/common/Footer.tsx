import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail,  Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  <path d="M12 5 8.5 9.5"></path>
                  <path d="m12 5 3.5 4.5"></path>
                  <path d="M15.5 9.5h.5"></path>
                  <path d="M8.5 9.5H8"></path>
                  <path d="M9 11.5v.5"></path>
                  <path d="M15 11.5v.5"></path>
                  <path d="M12 13v5"></path>
                  <path d="M12 18h-1.5"></path>
                  <path d="M12 18h1.5"></path>
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">Everest HomeCare</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading healthcare provider in Nepal offering comprehensive medical services with a focus on quality, compassion, and accessibility.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-primary-500 p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-500 p-2 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-500 p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-500 p-2 rounded-full transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  Blog & Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/primary-care" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  Personal Care
                </Link>
              </li>
              <li>
                <Link to="/services/specialized-care" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  Meal Preparation
                </Link>
              </li>
              <li>
                <Link to="/services/home-care" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  Housekeeping
                </Link>
              </li>
              <li>
                <Link to="/services/preventive-care" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  Health Support
                </Link>
              </li>
              <li>
                <Link to="/services/telemedicine" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  Companionship
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary-500"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="text-gray-400 mt-1 flex-shrink-0 group-hover:text-primary-500 transition-colors" size={18} />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  Lakeside, Pokhara, Nepal
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="text-gray-400 flex-shrink-0 group-hover:text-primary-500 transition-colors" size={18} />
                <a href="tel:+9779709007721" className="text-gray-300 group-hover:text-white transition-colors">
                  +977 9709007721
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="text-gray-400 flex-shrink-0 group-hover:text-primary-500 transition-colors" size={18} />
                <a href="mailto:EverestHealthcare@gmail.com" className="text-gray-300 group-hover:text-white transition-colors">
                  EverestHealthcare@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {currentYear} Everest Health Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;