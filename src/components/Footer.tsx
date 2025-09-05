import React from 'react';
import { Heart, Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo/Names */}
          <div className="mb-8">
            <h3 className="text-3xl font-serif font-bold mb-2">Mrudula & Pavan Kumar Varanasi</h3>
            <div className="flex items-center justify-center">
              <div className="h-px bg-white/30 flex-1 max-w-16"></div>
              <Heart className="mx-4 text-rose-400" size={20} />
              <div className="h-px bg-white/30 flex-1 max-w-16"></div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4">Questions?</h4>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8">
              <a href="mailto:wedding@MrudulaandPavan Kumar Varanasi.com" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Mail className="mr-2" size={16} />
                wedding@MrudulaandPavanKumarVaranasi.com
              </a>
              <a href="tel:+1234567890" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Phone className="mr-2" size={16} />
                (123) 456-7890
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4">Follow Our Journey</h4>
            <div className="flex items-center justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Wedding Date Reminder */}
          <div className="mb-8 py-8 border-t border-b border-gray-700">
            <div className="text-2xl font-serif mb-2">27/September/2025</div>
            
            <div className="text-sm text-gray-400 mt-2">Save the Date</div>
          </div>

          {/* Quote */}
          <div className="mb-8">
            <blockquote className="text-lg font-serif italic text-gray-300 mb-2">
              "Love is not just looking at each other, it's looking in the same direction."
            </blockquote>
            <cite className="text-sm text-gray-400">— Antoine de Saint-Exupéry</cite>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            © 2024 Mrudula Rose & Pavan Kumar Varanasi Alexander. Made with love.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
