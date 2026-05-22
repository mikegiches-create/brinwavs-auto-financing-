import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, GitCompare, Menu, X, ChevronDown, BookOpen, Calculator, FileText } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useCarContext } from '../context/CarContext';

// ── Services submenu data ─────────────────────────────────────────────────────
const serviceItems = [
  {
    icon: BookOpen,
    label: 'Car Logbook Loans',
    desc: 'Cash against your logbook',
    to: '/our-services#logbook',
    accent: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
  {
    icon: Calculator,
    label: 'Import Duty Financing',
    desc: 'Clear your car, pay later',
    to: '/our-services#duty',
    accent: 'text-sky-400',
    bg: 'bg-sky-500/10',
  },
  {
    icon: FileText,
    label: 'Check-Off Loans',
    desc: 'Deducted from your salary',
    to: '/our-services#checkoff',
    accent: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
];

// ── Desktop Services Dropdown ─────────────────────────────────────────────────
const ServicesDropdown = ({ isActive }: { isActive: boolean }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className="relative flex items-center gap-1 px-4 py-2 text-sm transition-colors rounded-lg cursor-pointer"
      >
        {isActive && (
          <motion.div
            layoutId="navbar-active"
            className="absolute inset-0 bg-white/20 rounded-lg"
            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className={`relative z-10 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'} transition-colors`}>
          Our Services
        </span>
        <ChevronDown
          className={`relative z-10 w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''} ${isActive ? 'text-white' : 'text-gray-500'}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.16 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-68 z-50"
            style={{ width: '272px' }}
          >
            {/* Arrow */}
            <div className="flex justify-center mb-0">
              <div className="w-3 h-3 bg-white/8 border-l border-t border-white/10 rotate-45 -mb-1.5 relative z-10" />
            </div>

            <div className="glass-strong rounded-2xl border border-white/10 shadow-2xl shadow-black/70 overflow-hidden">
              {/* Header */}
              <div className="px-4 pt-3.5 pb-2.5 border-b border-white/8">
                <p className="text-white/35 text-[9px] uppercase tracking-[0.15em] font-semibold">Import Financing</p>
              </div>

              {/* Items */}
              <div className="p-2">
                {serviceItems.map(({ icon: Icon, label, desc, to, accent, bg }) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/8 transition-colors group"
                  >
                    <div className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-4 h-4 ${accent}`} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white/90 text-xs font-medium leading-tight">{label}</p>
                      <p className="text-white/35 text-[10px] mt-0.5 leading-tight">{desc}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Footer */}
              <div className="px-2 pb-2.5">
                <Link
                  to="/our-services"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] font-medium hover:bg-purple-500/20 transition-colors"
                >
                  View All Services →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ── Main Navbar ───────────────────────────────────────────────────────────────
const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { wishlist, compareList } = useCarContext();

  const scrollToFeaturedCars = () => {
    const element = document.getElementById('featured-cars');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // Regular nav links (Services handled separately)
  const navLinks = [
    { name: 'Home',     path: '/' },
    { name: 'Cars',     path: '/cars', action: scrollToFeaturedCars },
    { name: 'Wishlist', path: '/wishlist' },
    { name: 'Compare',  path: '/compare' },
  ];

  const isServicesActive = location.pathname === '/our-services';

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

            {/* Services dropdown — desktop only */}
            <ServicesDropdown isActive={isServicesActive} />
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
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-5 space-y-1">

              {/* Wishlist & Compare row */}
              <div className="flex gap-3 pb-4 mb-2 border-b border-white/8">
                <Link
                  to="/wishlist"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/8"
                >
                  <Heart className={`w-4 h-4 ${wishlist.length > 0 ? 'fill-red-500 text-red-500' : ''}`} />
                  <span className="text-sm">Wishlist</span>
                  {wishlist.length > 0 && (
                    <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full leading-none">
                      {wishlist.length}
                    </span>
                  )}
                </Link>
                <Link
                  to="/compare"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/8"
                >
                  <GitCompare className={`w-4 h-4 ${compareList.length > 0 ? 'text-blue-400' : ''}`} />
                  <span className="text-sm">Compare</span>
                  {compareList.length > 0 && (
                    <span className="bg-blue-500 text-white text-[10px] px-1.5 py-0.5 rounded-full leading-none">
                      {compareList.length}
                    </span>
                  )}
                </Link>
              </div>

              {/* Regular nav links */}
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                if (link.action) {
                  return (
                    <button
                      key={link.path}
                      onClick={() => { link.action(); setMobileMenuOpen(false); }}
                      className={`block w-full text-left py-3 px-4 text-base rounded-xl transition-colors min-h-[44px] bg-transparent border-none cursor-pointer ${
                        isActive ? 'text-white bg-white/15' : 'text-gray-400 hover:text-white hover:bg-white/8'
                      }`}
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
                    className={`block py-3 px-4 text-base rounded-xl transition-colors min-h-[44px] ${
                      isActive ? 'text-white bg-white/15' : 'text-gray-400 hover:text-white hover:bg-white/8'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Services accordion */}
              <div className="rounded-xl overflow-hidden border border-white/8">
                <button
                  onClick={() => setMobileServicesOpen(v => !v)}
                  className={`w-full flex items-center justify-between py-3 px-4 text-base transition-colors min-h-[44px] ${
                    isServicesActive ? 'text-white bg-white/15' : 'text-gray-400 hover:text-white hover:bg-white/8'
                  }`}
                >
                  <span>Our Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="overflow-hidden border-t border-white/8 bg-white/3"
                    >
                      <div className="px-3 py-2 space-y-1">
                        <p className="text-white/25 text-[9px] uppercase tracking-[0.15em] font-semibold px-2 pt-1 pb-0.5">
                          Import Financing
                        </p>
                        {serviceItems.map(({ icon: Icon, label, desc, to, accent, bg }) => (
                          <Link
                            key={to}
                            to={to}
                            onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}
                            className="flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-white/8 transition-colors"
                          >
                            <div className={`w-7 h-7 rounded-lg ${bg} flex items-center justify-center flex-shrink-0`}>
                              <Icon className={`w-3.5 h-3.5 ${accent}`} />
                            </div>
                            <div>
                              <p className="text-white/85 text-sm leading-tight">{label}</p>
                              <p className="text-white/35 text-[10px] mt-0.5">{desc}</p>
                            </div>
                          </Link>
                        ))}
                        <Link
                          to="/our-services"
                          onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}
                          className="flex items-center justify-center gap-1.5 w-full py-2 mt-1 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium hover:bg-purple-500/20 transition-colors"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;