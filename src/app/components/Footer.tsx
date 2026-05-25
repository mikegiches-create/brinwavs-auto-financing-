import { Link } from 'react-router';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative mt-32 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-red-900/20 opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              
              <span className="font-display text-xl tracking-tight text-white">BRINWAVSCAR IMPORTS</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Your destination for the world's finest automotive excellence. Where dreams meet reality.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-white mb-6">Explore</h4>
            <ul className="space-y-3">
              <li><Link to="/cars" className="text-white/60 hover:text-white text-sm transition-colors">Browse Cars</Link></li>
              <li><Link to="/wishlist" className="text-white/60 hover:text-white text-sm transition-colors">My Wishlist</Link></li>
              <li><Link to="/compare" className="text-white/60 hover:text-white text-sm transition-colors">Compare Vehicles</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-white/60 mt-1 flex-shrink-0" />
                <span className="text-white/60 text-sm">Mama Ngina street,Nairobi-Kenya</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-white/60 flex-shrink-0" />
                <span className="text-white/60 text-sm">0724098493</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-white/60 flex-shrink-0" />
                <span className="text-white/60 text-sm">brinwavscarimports@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social Platforms */}
          <div>
            <h4 className="font-display text-white mb-6">Social Platforms</h4>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3 text-white/60">
                <Facebook className="w-4 h-4" />
                <span className="text-sm">Brinwavs Auto Financing</span>
              </div>
              <div className="flex items-center space-x-3 text-white/60">
                <Instagram className="w-4 h-4" />
                <span className="text-sm">aggie_financial_advisor</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/40 text-sm">
            ©BRINWAVSCAR IMPORTS. All rights reserved.
          </p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
