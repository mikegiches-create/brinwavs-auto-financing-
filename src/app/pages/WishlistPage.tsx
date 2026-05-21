import { motion } from 'motion/react';
import { Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router';
import { useCarContext } from '../context/CarContext';
import { cars } from '../data/cars';
import CarCard from '../components/CarCard';

const WishlistPage = () => {
  const { wishlist } = useCarContext();
  const wishlistCars = cars.filter(car => wishlist.includes(car.id));

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <h1 className="font-display text-white">
              My <span className="gradient-text">Wishlist</span>
            </h1>
          </div>
          <p className="text-white/60 text-lg">
            {wishlistCars.length} {wishlistCars.length === 1 ? 'vehicle' : 'vehicles'} saved
          </p>
        </motion.div>

        {/* Info Banner */}
        {wishlistCars.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-6 mb-12 border border-purple-500/20"
          >
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <ShoppingBag className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Ready to take the next step?</h3>
                <p className="text-white/60 text-sm">
                contact our dealers to experience these vehicles firsthand.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Wishlist Grid */}
        {wishlistCars.length > 0 ? (
          <motion.div
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {wishlistCars.map((car, index) => (
              <CarCard key={car.id} car={car} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-16 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
              className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-red-500/20 to-pink-500/20 flex items-center justify-center"
            >
              <Heart className="w-12 h-12 text-red-400" />
            </motion.div>

            <h2 className="font-display text-3xl text-white mb-4">Your Wishlist is Empty</h2>
            <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
              Start adding your favorite vehicles to keep track of the cars you love
            </p>

            <Link to="/cars">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white px-8 py-4 rounded-xl font-medium hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
              >
                Browse Cars
              </motion.button>
            </Link>
          </motion.div>
        )}

        {/* Total Value */}
        {wishlistCars.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 glass-strong rounded-2xl p-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 mb-2">Total Collection Value</p>
                <p className="font-display text-4xl text-white">
                  Ksh {wishlistCars.reduce((sum, car) => sum + car.price, 0).toLocaleString()}
                </p>
              </div>
              <div className="text-right">
                <p className="text-white/60 mb-2">Average Price</p>
                <p className="font-display text-2xl text-white">
                  Ksh {Math.round(wishlistCars.reduce((sum, car) => sum + car.price, 0) / wishlistCars.length).toLocaleString()}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
