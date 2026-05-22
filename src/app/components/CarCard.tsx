import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import {
  Heart, GitCompare, Star, Zap,
  Fuel, GitMerge, Calendar, ChevronDown, ExternalLink,
} from 'lucide-react';
import { Link } from 'react-router';
import { Car } from '../data/cars';
import { useCarContext } from '../context/CarContext';
import { toast } from 'sonner';

interface CarCardProps {
  car: Car;
  index?: number;
}

const CarCard = ({ car, index = 0 }: CarCardProps) => {
  const [expanded, setExpanded] = useState(false);

  const {
    isInWishlist, addToWishlist, removeFromWishlist,
    isInCompare, addToCompare, removeFromCompare, compareList,
  } = useCarContext();

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isInWishlist(car.id)) {
      removeFromWishlist(car.id);
      toast.success('Removed from wishlist');
    } else {
      addToWishlist(car.id);
      toast.success('Added to wishlist');
    }
  };

  const handleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isInCompare(car.id)) {
      removeFromCompare(car.id);
      toast.success('Removed from compare');
    } else {
      if (compareList.length >= 3) {
        toast.error('You can only compare up to 3 cars');
        return;
      }
      addToCompare(car.id);
      toast.success('Added to compare');
    }
  };

  const handleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    setExpanded(v => !v);
  };

  // ── 4 always-visible spec pills ─────────────────────────────────────────────
  const quickSpecs = [
    car.specs?.fuelType     && { icon: Fuel,     val: car.specs.fuelType },
    car.specs?.transmission && { icon: GitMerge, val: car.specs.transmission.split(' ')[0] },
    car.specs?.horsepower   && { icon: Zap,      val: car.specs.horsepower },
    car.year                && { icon: Calendar, val: String(car.year) },
  ].filter(Boolean) as { icon: React.ElementType; val: string }[];

  // ── Extra specs revealed on expand ──────────────────────────────────────────
  const detailSpecs = [
    car.specs?.engine       && { label: 'Engine',       val: car.specs.engine },
    car.specs?.transmission && { label: 'Transmission', val: car.specs.transmission },
    car.specs?.drivetrain   && { label: 'Drivetrain',   val: car.specs.drivetrain },
    car.specs?.torque       && { label: 'Torque',       val: car.specs.torque },
    car.mileage             && { label: 'Mileage',      val: `${Number(car.mileage).toLocaleString()} km` },
    car.condition           && { label: 'Condition',    val: car.condition },
    car.specs?.color        && { label: 'Colour',       val: car.specs.color },
  ].filter(Boolean) as { label: string; val: string }[];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.5) }}
      layout
      className="glass rounded-xl sm:rounded-2xl overflow-hidden border border-white/8 hover:border-purple-500/25 transition-colors duration-300 flex flex-col"
    >
      {/* ── Image ─────────────────────────────────────────────────────────── */}
      <Link
        to={`/cars/${car.id}`}
        className="group relative block flex-shrink-0 overflow-hidden"
        style={{ aspectRatio: '16/10' }}
      >
        {car.image ? (
          <motion.img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center">
            <p className="text-white/30 text-xs">{car.brand}</p>
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Year — top left */}
        {car.year && (
          <div className="absolute top-2 left-2">
            <span className="glass-strong text-white text-[9px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-full backdrop-blur-md">
              {car.year}
            </span>
          </div>
        )}

        {/* Action buttons — top right */}
        <div className="absolute top-2 right-2 flex gap-1">
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={handleWishlist}
            className="w-6 h-6 sm:w-8 sm:h-8 glass-strong rounded-full flex items-center justify-center backdrop-blur-md hover:bg-white/20 transition-colors"
          >
            <Heart className={`w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 ${isInWishlist(car.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={handleCompare}
            className="w-6 h-6 sm:w-8 sm:h-8 glass-strong rounded-full flex items-center justify-center backdrop-blur-md hover:bg-white/20 transition-colors"
          >
            <GitCompare className={`w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 ${isInCompare(car.id) ? 'text-blue-400' : 'text-white'}`} />
          </motion.button>
        </div>

        {/* HP + Fuel chips — bottom left of image */}
        {car.specs && (
          <div className="absolute bottom-2 left-2 flex gap-1">
            {car.specs.horsepower && (
              <span className="glass-strong flex items-center gap-0.5 sm:gap-1 px-1 sm:px-1.5 py-0.5 rounded-full backdrop-blur-md">
                <Zap className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-yellow-400 flex-shrink-0" />
                <span className="text-[8px] sm:text-[9px] text-white font-medium leading-none">{car.specs.horsepower}</span>
              </span>
            )}
            {car.specs.fuelType && (
              <span className="glass-strong flex items-center gap-0.5 sm:gap-1 px-1 sm:px-1.5 py-0.5 rounded-full backdrop-blur-md">
                <Fuel className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-blue-300 flex-shrink-0" />
                <span className="text-[8px] sm:text-[9px] text-white font-medium leading-none">{car.specs.fuelType}</span>
              </span>
            )}
          </div>
        )}
      </Link>

      {/* ── Card body ─────────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-2 sm:p-4">

        {/* Name + rating */}
        <div className="flex items-start justify-between gap-1 mb-1.5">
          <Link to={`/cars/${car.id}`} className="flex-1 min-w-0">
            <h3 className="font-display text-white text-[11px] sm:text-base leading-tight line-clamp-1 hover:text-purple-300 transition-colors">
              {car.name}
            </h3>
            <p className="text-white/40 text-[9px] sm:text-xs mt-0.5 truncate">{car.brand}</p>
          </Link>
          {car.rating && (
            <div className="flex items-center gap-0.5 flex-shrink-0 mt-0.5">
              <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
              <span className="text-white text-[9px] sm:text-[11px] font-medium">{car.rating}</span>
            </div>
          )}
        </div>

        {/* Quick spec icon pills — always visible, wrap on mobile */}
        {quickSpecs.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {quickSpecs.map(({ icon: Icon, val }, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-0.5 sm:gap-1 bg-white/5 border border-white/8 rounded-full px-1.5 py-0.5"
              >
                <Icon className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-purple-400 flex-shrink-0" />
                <span className="text-[7px] sm:text-[9px] text-white/65 leading-none whitespace-nowrap">{val}</span>
              </span>
            ))}
          </div>
        )}

        {/* Price + expand toggle */}
        <div className="flex items-center justify-between pt-2 border-t border-white/8 mt-auto">
          <div>
            <p className="text-white/30 text-[7px] sm:text-[9px] leading-none mb-0.5 uppercase tracking-wide">Starting at</p>
            <p className="text-white font-display text-[11px] sm:text-base leading-none">
              Ksh {car.price.toLocaleString()}
            </p>
          </div>

          <button
            onClick={handleExpand}
            className={`flex items-center gap-0.5 sm:gap-1 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full border transition-all duration-200 ${
              expanded
                ? 'bg-purple-500/20 border-purple-500/40 text-purple-300'
                : 'bg-white/5 border-white/10 text-white/50 hover:text-white hover:bg-white/10'
            }`}
          >
            <span className="text-[8px] sm:text-[10px] font-medium">{expanded ? 'Less' : 'Details'}</span>
            <ChevronDown
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
            />
          </button>
        </div>

        {/* ── Expandable detail panel ──────────────────────────────────── */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-2 mt-2 border-t border-white/8 space-y-2">

                {/* Short description */}
                {car.shortDescription && (
                  <p className="text-white/45 text-[9px] sm:text-xs leading-relaxed">
                    {car.shortDescription}
                  </p>
                )}

                {/* Detail spec 2-col grid */}
                {detailSpecs.length > 0 && (
                  <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                    {detailSpecs.map(({ label, val }) => (
                      <div key={label}>
                        <span className="block text-white/30 text-[7px] sm:text-[8px] uppercase tracking-wider mb-0.5">{label}</span>
                        <span className="block text-white/75 text-[9px] sm:text-[11px] font-medium truncate">{val}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Full details CTA */}
                <Link
                  to={`/cars/${car.id}`}
                  className="flex items-center justify-center gap-1 w-full py-1.5 sm:py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/25 text-purple-300 text-[8px] sm:text-[10px] font-medium hover:from-purple-500/30 hover:to-blue-500/30 transition-all"
                >
                  <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  View Full Details
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default CarCard;