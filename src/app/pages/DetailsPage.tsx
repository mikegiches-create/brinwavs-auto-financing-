import { motion } from 'motion/react';
import { useParams, Link } from 'react-router';
import { useState, useEffect } from 'react';
import { Heart, GitCompare, Star, ChevronLeft, Gauge, Zap, Fuel, Settings } from 'lucide-react';
import { cars } from '../data/cars';
import { useCarContext } from '../context/CarContext';
import { toast } from 'sonner';

const DetailsPage = () => {
  const { id } = useParams();
  const car = cars.find(c => c.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { isInWishlist, addToWishlist, removeFromWishlist, isInCompare, addToCompare, removeFromCompare, compareList } = useCarContext();

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-display text-4xl text-white mb-4">Car Not Found</h2>
          <Link to="/cars" className="text-purple-400 hover:text-purple-300">
            Back to Listing
          </Link>
        </div>
      </div>
    );
  }

  const handleWishlist = () => {
    if (isInWishlist(car.id)) {
      removeFromWishlist(car.id);
      toast.success('Removed from wishlist');
    } else {
      addToWishlist(car.id);
      toast.success('Added to wishlist');
    }
  };

  const handleCompare = () => {
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
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-white/60 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back to home</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-strong rounded-2xl overflow-hidden mb-4">
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={car.images[selectedImage]}
                alt={car.name}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {car.images.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(index)}
                  className={`glass rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-purple-500' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${car.name} ${index + 1}`}
                    className="w-full aspect-video object-cover"
                  />
                </motion.button>
              ))}
            </div>

            {/* WhatsApp Button */}
            <motion.a
              href={`https://wa.me/254724098493?text=${encodeURIComponent(`Hello 👋\nThank you for contacting Brinwavscar Imports 🚗\n\nI am interested in the ${car.name} (${car.brand} ${car.year}).\n\nKindly share more details about this vehicle including pricing and availability.\nWe look forward to assisting you.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white px-8 py-4 rounded-xl font-medium hover:shadow-2xl hover:shadow-green-500/50 transition-all w-full mt-6 relative overflow-hidden group"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
              
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                <motion.path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>
              <span className="relative z-10">Chat on WhatsApp</span>
            </motion.a>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="font-display text-4xl text-white mb-2">{car.name}</h1>
                <p className="text-white/60 text-lg">{car.brand} • {car.year}</p>
              </div>
              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleWishlist}
                  className="w-12 h-12 glass-strong rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <Heart className={`w-6 h-6 ${isInWishlist(car.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleCompare}
                  className="w-12 h-12 glass-strong rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <GitCompare className={`w-6 h-6 ${isInCompare(car.id) ? 'text-blue-400' : 'text-white'}`} />
                </motion.button>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(car.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-white/20'}`}
                  />
                ))}
              </div>
              <span className="text-white/80 font-medium">{car.rating}</span>
              <span className="text-white/40">({car.reviews.length} reviews)</span>
            </div>

            {/* Price */}
            <div className="glass rounded-2xl p-6 mb-8">
              <p className="text-white/60 text-sm mb-2">Starting Price</p>
              <p className="font-display text-5xl text-white mb-4">
                Ksh {car.price.toLocaleString()}
              </p>
              <p className="text-white/60 text-sm">
                {car.shortDescription}
              </p>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="font-display text-2xl text-white mb-4">Description</h3>
              <p className="text-white/70 leading-relaxed">{car.description}</p>
            </div>

            {/* Specifications */}
            <div className="glass-strong rounded-2xl p-6 mb-8">
              <h3 className="font-display text-2xl text-white mb-6">Specifications</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Settings className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">Engine</p>
                    <p className="text-white font-medium">{car.specs.engine}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">Horsepower</p>
                    <p className="text-white font-medium">{car.specs.horsepower}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Gauge className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">Top Speed</p>
                    <p className="text-white font-medium">{car.specs.topSpeed}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Fuel className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">0-60 mph</p>
                    <p className="text-white font-medium">{car.specs.acceleration}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-white/50 mb-1">Mileage</p>
                  <p className="text-white">{car.specs.mileage}</p>
                </div>
                <div>
                  <p className="text-white/50 mb-1">Transmission</p>
                  <p className="text-white">{car.specs.transmission}</p>
                </div>
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-8">
              <h3 className="font-display text-xl text-white mb-4">Available Colors</h3>
              <div className="flex flex-wrap gap-3">
                {car.colors.map((color, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedColor(index)}
                    className={`group relative`}
                  >
                    <div
                      className={`w-14 h-14 rounded-full border-2 transition-all ${
                        selectedColor === index ? 'border-purple-500 scale-110' : 'border-white/20'
                      }`}
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs text-white/80">{color.name}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

                      </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="font-display text-3xl text-white mb-8">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {car.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass rounded-xl p-4 flex items-center space-x-3"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                <span className="text-white/80">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="font-display text-3xl text-white mb-8">Customer Reviews</h3>
          <div className="space-y-6">
            {car.reviews.map((review) => (
              <div key={review.id} className="glass-strong rounded-2xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-white font-medium mb-1">{review.username}</h4>
                    <p className="text-white/40 text-sm">{new Date(review.date).toLocaleDateString()}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-white/20'}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed">{review.comment}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DetailsPage;
