import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { Heart, GitCompare, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCarContext } from '../context/CarContext';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { wishlist, compareList } = useCarContext();

    const scrollToFeaturedCars = () => {
    const element = document.getElementById('featured-cars');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Cars', path: '/cars', action: scrollToFeaturedCars },
    { name: 'Wishlist', path: '/wishlist' },
    { name: 'Compare', path: '/compare' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 p-[2px]"
            >
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <span className="text-white text-lg">B</span>
              </div>
            </motion.div>
            <span className="text-white text-xl tracking-tight hidden sm:block">
              BRINWAVSCAR IMPORTS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              if (link.action) {
                return (
                  <button
                    key={link.path}
                    onClick={link.action}
                    className="relative px-4 py-2 text-sm transition-colors bg-transparent border-none cursor-pointer"
                  >
                    <span className={`relative z-10 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
                      {link.name}
                    </span>
                  </button>
                );
              }
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-4 py-2 text-sm transition-colors"
                >
                  <span className={`relative z-10 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-white/20 rounded-lg"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/wishlist" className="relative group hidden sm:block">
              <Heart className={`w-5 h-5 transition-colors ${wishlist.length > 0 ? 'fill-red-500 text-red-500' : 'text-gray-400 group-hover:text-white'}`} />
              {wishlist.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center text-white"
                >
                  {wishlist.length}
                </motion.span>
              )}
            </Link>
            <Link to="/compare" className="relative group hidden sm:block">
              <GitCompare className={`w-5 h-5 transition-colors ${compareList.length > 0 ? 'text-blue-400' : 'text-gray-400 group-hover:text-white'}`} />
              {compareList.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-5 h-5 bg-blue-500 rounded-full text-xs flex items-center justify-center text-white"
                >
                  {compareList.length}
                </motion.span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-3 rounded-lg hover:bg-white/10 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10"
        >
          <div className="px-4 py-6 space-y-2">
            {/* Mobile Wishlist & Compare Links */}
            <div className="flex gap-4 pb-4 border-b border-white/10">
              <Link
                to="/wishlist"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors py-2"
              >
                <Heart className={`w-5 h-5 ${wishlist.length > 0 ? 'fill-red-500 text-red-500' : ''}`} />
                <span>Wishlist</span>
                {wishlist.length > 0 && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    {wishlist.length}
                  </span>
                )}
              </Link>
              <Link
                to="/compare"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors py-2"
              >
                <GitCompare className={`w-5 h-5 ${compareList.length > 0 ? 'text-blue-400' : ''}`} />
                <span>Compare</span>
                {compareList.length > 0 && (
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    {compareList.length}
                  </span>
                )}
              </Link>
            </div>
            
            {/* Navigation Links */}
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              if (link.action) {
                return (
                  <button
                    key={link.path}
                    onClick={() => {
                      link.action();
                      setMobileMenuOpen(false);
                    }}
                    className={`block py-3 px-4 text-lg text-left w-full rounded-lg transition-colors min-h-[44px] ${isActive ? 'text-white bg-white/20' : 'text-gray-400 hover:text-white hover:bg-white/10'} bg-transparent border-none cursor-pointer`}
                  >
                    {link.name}
                  </button>
                );
              }
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 px-4 text-lg rounded-lg transition-colors min-h-[44px] ${isActive ? 'text-white bg-white/20' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
