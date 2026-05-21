import { motion, AnimatePresence } from 'motion/react';
import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { SlidersHorizontal, X, ChevronDown, Search } from 'lucide-react';
import { cars, brands, fuelTypes, transmissions } from '../data/cars';
import CarCard from '../components/CarCard';


// ─── Pill filter button ───────────────────────────────────────────────────────
const FilterPill = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`
      px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 min-h-[36px] sm:min-h-[40px] touch-manipulation
      ${active
        ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25'
        : 'glass text-white/70 hover:text-white hover:bg-white/10 border border-white/10'
      }
    `}
  >
    {label}
  </button>
);

// ─── Dropdown panel — portal-based to escape overflow clipping ────────────────
const FilterDropdown = ({
  label,
  children,
  active,
}: {
  label: string;
  children: React.ReactNode;
  active?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const updateCoords = useCallback(() => {
    if (!triggerRef.current) return;
    const r = triggerRef.current.getBoundingClientRect();
    setCoords({ top: r.bottom + 8, left: r.left });
  }, []);

  const handleOpen = () => {
    updateCoords();
    setOpen(v => !v);
  };

  useEffect(() => {
    if (!open) return;
    const handleOutside = (e: MouseEvent) => {
      if (
        panelRef.current && !panelRef.current.contains(e.target as Node) &&
        triggerRef.current && !triggerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const handleScroll = () => { updateCoords(); };
    document.addEventListener('mousedown', handleOutside);
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [open, updateCoords]);

  return (
    <div className="relative flex-shrink-0">
      <button
        ref={triggerRef}
        onClick={handleOpen}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap
          ${active
            ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50'
            : 'glass text-white/70 hover:text-white border border-white/10 hover:bg-white/10'
          }
        `}
      >
        {label}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && createPortal(
        <AnimatePresence>
          <motion.div
            ref={panelRef}
            key="dropdown"
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            style={{ position: 'fixed', top: coords.top, left: coords.left, zIndex: 9999 }}
            className="glass-strong rounded-2xl p-4 min-w-[220px] border border-white/10 shadow-2xl shadow-black/60"
          >
            {children}
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────
const ListingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<string[]>([]);
  const [selectedTransmissions, setSelectedTransmissions] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 15_000_000]);
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'newest'>('newest');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const toggle = <T,>(setter: React.Dispatch<React.SetStateAction<T[]>>, value: T) =>
    setter(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);

  const filteredAndSortedCars = useMemo(() => {
    let filtered = cars.filter(car => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const match =
          car.brand.toLowerCase().includes(q) ||
          car.model?.toLowerCase().includes(q) ||
          car.year?.toString().includes(q);
        if (!match) return false;
      }
      if (selectedBrand && car.brand !== selectedBrand) return false;
      if (selectedFuelTypes.length > 0 && !selectedFuelTypes.includes(car.specs.fuelType)) return false;
      if (selectedTransmissions.length > 0) {
        const t = car.specs.transmission.toLowerCase();
        const isManual = t.includes('manual');
        const isAuto = t.includes('automatic') || t.includes('pdk') || t.includes('dct') || t.includes('steptronic');
        if (selectedTransmissions.includes('Manual') && !isManual) return false;
        if (selectedTransmissions.includes('Automatic') && !isAuto) return false;
      }
      if (car.price < priceRange[0] || car.price > priceRange[1]) return false;
      return true;
    });

    if (sortBy === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    else filtered.sort((a, b) => b.year - a.year);

    return filtered;
  }, [searchQuery, selectedBrand, selectedFuelTypes, selectedTransmissions, priceRange, sortBy]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedBrand('');
    setSelectedFuelTypes([]);
    setSelectedTransmissions([]);
    setPriceRange([0, 15_000_000]);
  };

  const activeFilterCount =
    (selectedBrand ? 1 : 0) + selectedFuelTypes.length + selectedTransmissions.length +
    (searchQuery ? 1 : 0);

  return (
    <div className="min-h-screen">
      {/* ── Page Header ─────────────────────────────────────────────────────── */}
      <div className="border-b border-white/8 bg-black/20 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title row */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-8 pb-4 flex items-end justify-between"
          >
            <div>
              <h1 className="font-display text-white text-3xl sm:text-4xl">
                Explore Our <span className="gradient-text">Collection</span>
              </h1>
              <p className="text-white/50 text-sm mt-1">
                {filteredAndSortedCars.length} vehicles available
              </p>
            </div>

            {/* Sort — desktop */}
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-white/40 text-sm">Sort:</span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as typeof sortBy)}
                className="glass rounded-full px-4 py-2 text-white text-sm bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none"
              >
                <option value="newest" className="bg-[#0A0A0F]">Newest first</option>
                <option value="price-asc" className="bg-[#0A0A0F]">Price: Low → High</option>
                <option value="price-desc" className="bg-[#0A0A0F]">Price: High → Low</option>
              </select>
            </div>
          </motion.div>

          {/* Filter bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="pb-4 flex items-center gap-3 overflow-x-auto scrollbar-none"
          >
            {/* Search */}
            <div className="relative flex-shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                placeholder="Search…"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="glass rounded-full pl-9 pr-4 py-2 text-sm text-white placeholder-white/30 border border-white/10 focus:border-purple-500 focus:outline-none bg-white/5 w-44 focus:w-56 transition-all duration-300"
              />
            </div>

            <div className="w-px h-6 bg-white/10 flex-shrink-0" />

            {/* Brand dropdown */}
            <FilterDropdown label={selectedBrand ? `Brand (${selectedBrand})` : 'Brand'} active={selectedBrand.length > 0}>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Brand</p>
              <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                {brands.map(brand => (
                  <label key={brand} className="flex items-center gap-2.5 cursor-pointer group">
                    <input
                      type="radio"
                      name="brand"
                      checked={selectedBrand === brand}
                      onChange={() => setSelectedBrand(brand)}
                      className="w-4 h-4 rounded-full border-white/20 bg-white/5 text-purple-500 focus:ring-purple-500 focus:ring-offset-0 cursor-pointer"
                    />
                    <span className="text-white/70 group-hover:text-white transition-colors text-sm">{brand}</span>
                  </label>
                ))}
              </div>
            </FilterDropdown>

            {/* Fuel type pills */}
            {fuelTypes.map(fuel => (
              <FilterPill
                key={fuel}
                label={fuel}
                active={selectedFuelTypes.includes(fuel)}
                onClick={() => toggle(setSelectedFuelTypes, fuel)}
              />
            ))}

            {/* Transmission pills */}
            {transmissions.map(trans => (
              <FilterPill
                key={trans}
                label={trans}
                active={selectedTransmissions.includes(trans)}
                onClick={() => toggle(setSelectedTransmissions, trans)}
              />
            ))}

            
            {/* Clear */}
            {activeFilterCount > 0 && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={clearFilters}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-red-500/20 text-red-300 border border-red-500/30 hover:bg-red-500/30 hover:text-red-200 transition-all flex-shrink-0"
              >
                <X className="w-3.5 h-3.5" />
                Clear {activeFilterCount > 1 ? `(${activeFilterCount})` : ''}
              </motion.button>
            )}

            {/* Sort — mobile */}
            <div className="sm:hidden ml-auto flex-shrink-0">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as typeof sortBy)}
                className="glass rounded-full px-3 py-2 text-white text-sm bg-white/5 border border-white/10 focus:outline-none"
              >
                <option value="newest" className="bg-[#0A0A0F]">Newest</option>
                <option value="price-asc" className="bg-[#0A0A0F]">↑ Price</option>
                <option value="price-desc" className="bg-[#0A0A0F]">↓ Price</option>
              </select>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Grid ────────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Active filter chips summary */}
        <AnimatePresence>
          {activeFilterCount > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {selectedBrand && (
                <span
                  key={selectedBrand}
                  onClick={() => setSelectedBrand('')}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 text-xs border border-purple-500/30 cursor-pointer hover:bg-purple-500/25 transition-colors"
                >
                  {selectedBrand} <X className="w-3 h-3" />
                </span>
              )}
              {selectedFuelTypes.map(f => (
                <span
                  key={f}
                  onClick={() => toggle(setSelectedFuelTypes, f)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 text-xs border border-blue-500/30 cursor-pointer hover:bg-blue-500/25 transition-colors"
                >
                  {f} <X className="w-3 h-3" />
                </span>
              ))}
              {selectedTransmissions.map(t => (
                <span
                  key={t}
                  onClick={() => toggle(setSelectedTransmissions, t)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/15 text-teal-300 text-xs border border-teal-500/30 cursor-pointer hover:bg-teal-500/25 transition-colors"
                >
                  {t} <X className="w-3 h-3" />
                </span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {filteredAndSortedCars.length > 0 ? (
          <motion.div
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {filteredAndSortedCars.map((car, index) => (
              <CarCard key={car.id} car={car} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong rounded-2xl p-20 text-center mt-8"
          >
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-white/5 flex items-center justify-center">
              <SlidersHorizontal className="w-8 h-8 text-white/30" />
            </div>
            <h3 className="font-display text-2xl text-white mb-2">No vehicles found</h3>
            <p className="text-white/50 mb-6 text-sm">Try adjusting your filters to see more results</p>
            <button
              onClick={clearFilters}
              className="glass px-5 py-2.5 rounded-full text-sm text-white hover:bg-white/10 transition-colors border border-white/10"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ListingPage;