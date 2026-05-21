import { motion } from 'motion/react';
import { Heart, GitCompare, Star, Zap } from 'lucide-react';
import { Link } from 'react-router';
import { Car } from '../data/cars';
import { useCarContext } from '../context/CarContext';
import { toast } from 'sonner';

interface CarCardProps {
  car: Car;
  index?: number;
}

const CarCard = ({ car, index = 0 }: CarCardProps) => {
  const { isInWishlist, addToWishlist, removeFromWishlist, isInCompare, addToCompare, removeFromCompare, compareList } = useCarContext();

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/cars/${car.id}`} className="group block">
        <div className="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 w-full">
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden">
            {car.image ? (
              <motion.img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <p className="text-white/40 text-sm font-medium">{car.brand}</p>
                  <p className="text-white/30 text-xs mt-1">{car.name}</p>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex space-x-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleWishlist}
                className="w-10 h-10 glass-strong rounded-full flex items-center justify-center backdrop-blur-md hover:bg-white/20 transition-colors"
              >
                <Heart className={`w-5 h-5 ${isInWishlist(car.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleCompare}
                className="w-10 h-10 glass-strong rounded-full flex items-center justify-center backdrop-blur-md hover:bg-white/20 transition-colors"
              >
                <GitCompare className={`w-5 h-5 ${isInCompare(car.id) ? 'text-blue-400' : 'text-white'}`} />
              </motion.button>
            </div>

            {/* Badge */}
            {car.year && (
              <div className="absolute top-4 left-4">
                <div className="glass-strong px-3 py-1.5 rounded-full backdrop-blur-md">
                  <span className="text-xs text-white font-medium">{car.year}</span>
                </div>
              </div>
            )}

            {/* Specs Badge */}
            {car.specs && (
              <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                <div className="glass-strong px-3 py-1.5 rounded-full backdrop-blur-md flex items-center space-x-1.5">
                  <Zap className="w-3.5 h-3.5 text-yellow-400" />
                  <span className="text-xs text-white font-medium">{car.specs.horsepower}</span>
                </div>
                <div className="glass-strong px-3 py-1.5 rounded-full backdrop-blur-md">
                  <span className="text-xs text-white font-medium">{car.specs.fuelType}</span>
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-display text-xl text-white mb-1 group-hover:gradient-text transition-all">
                  {car.name}
                </h3>
                <p className="text-white/50 text-sm">{car.brand}</p>
              </div>
              {car.rating && (
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-white text-sm font-medium">{car.rating}</span>
                </div>
              )}
            </div>

            <p className="text-white/60 text-sm mb-4 line-clamp-2">{car.shortDescription}</p>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div>
                <p className="text-white/50 text-xs mb-1">Starting at</p>
                <p className="text-white text-2xl font-display">
                  Ksh {car.price.toLocaleString()}
                </p>
              </div>
              <motion.div
                whileHover={{ x: 5 }}
                className="text-white/60 group-hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CarCard;
