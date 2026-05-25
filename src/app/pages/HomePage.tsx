import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Search, ChevronRight, Zap, Shield, Award, TrendingUp } from 'lucide-react';
import { brands, fuelTypes } from '../data/cars';
import { featuredCars } from '../data/featuredCars';
import LazyCarCard from '../components/LazyCarCard';
import { useState } from 'react';

const HomePage = () => {
  const [searchBrand, setSearchBrand] = useState('');
  const [searchFuel, setSearchFuel] = useState('');

  const displayCars = featuredCars.slice(0, 8);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=60&auto=format&fit=crop"
              alt="Hero Car"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0A0A0F]" />
          <div className="absolute inset-0 mesh-gradient opacity-40" />
        </div>

        {/* Animated Particles - Optimized for mobile */}
        <div className="absolute inset-0 hidden sm:block">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mobile-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-block mb-4 sm:mb-6"
            >
              <div className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 px-4 sm:px-6 py-2 rounded-full">
                <span className="text-white text-xs sm:text-sm font-medium">Premium Automotive Excellence</span>
              </div>
            </motion.div>

            <h1 className="font-display text-white mb-4 sm:mb-6 max-w-4xl mx-auto" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
              Find Your <span className="gradient-text">Dream Car</span>
            </h1>

            <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed">
              Explore the world's most prestigious vehicles. Where luxury meets performance.
            </p>

            {/* Glassmorphism Search Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-4xl mx-auto glass-strong rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-2xl shadow-2xl border-2 border-white/10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium block">Brand</label>
                  <select
                    value={searchBrand}
                    onChange={(e) => setSearchBrand(e.target.value)}
                    className="w-full glass rounded-xl px-4 py-3 text-white bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition-colors"
                  >
                    <option value="">All Brands</option>
                    {brands.map((brand) => (
                      <option key={brand} value={brand} className="bg-[#0A0A0F]">
                        {brand}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium block">Fuel Type</label>
                  <select
                    value={searchFuel}
                    onChange={(e) => setSearchFuel(e.target.value)}
                    className="w-full glass rounded-xl px-4 py-3 text-white bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition-colors"
                  >
                    <option value="">All Types</option>
                    {fuelTypes.map((fuel) => (
                      <option key={fuel} value={fuel} className="bg-[#0A0A0F]">
                        {fuel}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium block">Max Price</label>
                  <input
                    type="number"
                    placeholder="Max Price"
                    className="w-full glass rounded-xl px-4 py-3 text-white bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <Link to="/cars">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white py-4 rounded-xl font-medium flex items-center justify-center space-x-2 group hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
                >
                  <Search className="w-5 h-5" />
                  <span>Explore Collection</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Cars */}
      <section id="featured-cars" className="relative py-24">
        <div className="w-full px-3 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="font-display text-white mb-4" style={{ fontSize: 'clamp(2rem, 7vw, 5rem)' }}>
              Featured <span className="gradient-text">Collection</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg">
              Handpicked masterpieces that define automotive perfection
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // ── 2 cols on mobile → 2 on md → 3 on lg → 4 on xl ──────────
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-6"
          >
            {displayCars.map((car, index) => (
              <LazyCarCard key={car.id} car={car} index={index} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-10 sm:mt-12"
          >
            <Link to="/cars">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-white font-medium inline-flex items-center space-x-2 hover:shadow-2xl hover:shadow-purple-500/50 transition-all text-sm sm:text-base"
              >
                <span>View All Vehicles</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-white mb-4" style={{ fontSize: 'clamp(1.6rem, 6vw, 4rem)' }}>
              Why Choose <span className="gradient-text">BRINWAVSCAR IMPORTS</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // ── 2 cols on mobile → 2 on md → 4 on lg ────────────────────
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8"
          >
            {[
              {
                icon: Zap,
                title: 'Premium Selection',
                description: 'Curated collection of world-class vehicles',
                gradient: 'from-yellow-500 to-orange-500'
              },
              {
                icon: Shield,
                title: 'Trusted Quality',
                description: 'Every vehicle thoroughly inspected',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Award,
                title: 'Expert Service',
                description: 'Professional guidance every step',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: TrendingUp,
                title: 'Best Value',
                description: 'Competitive pricing guaranteed',
                gradient: 'from-green-500 to-emerald-500'
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass rounded-2xl p-4 sm:p-8 hover:bg-white/10 transition-all duration-500 group"
              >
                <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.gradient} p-[2px] mb-4 sm:mb-6`}>
                  <div className="w-full h-full rounded-xl sm:rounded-2xl bg-[#0A0A0F] flex items-center justify-center group-hover:bg-transparent transition-colors">
                    <feature.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>
                <h3 className="font-display text-sm sm:text-xl text-white mb-1.5 sm:mb-3 leading-tight">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed text-xs sm:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-red-900/20" />
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        <div className="absolute inset-0 grid-pattern" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-white mb-6" style={{ fontSize: 'clamp(1.8rem, 6vw, 4rem)' }}>
              Ready to Start Your <span className="gradient-text">Journey?</span>
            </h2>
            <p className="text-white/70 text-base sm:text-lg mb-10 max-w-2xl mx-auto">
              At BrinWavscar Imports, we don't just sell cars—we deliver trust, quality, and peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={`https://wa.me/254724098493?text=${encodeURIComponent("Hello 👋\nThank you for contacting Brinwavscar Imports 🚗\n\nKindly share your preferred car model, budget, and any key specifications.\nWe'll respond promptly with suitable options.\n\nWe look forward to assisting you.")}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white px-8 py-4 rounded-xl font-medium hover:shadow-2xl hover:shadow-green-500/50 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={`https://wa.me/254724098493?text=${encodeURIComponent("Hello \nThank you for contacting Brinwavscar Imports \n\nKindly share your preferred car model, budget, and any key specifications.\nWe'll respond promptly with suitable options.\n\nWe look forward to assisting you.")}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-5 py-3 rounded-full shadow-2xl shadow-green-500/40 hover:bg-green-600 transition-colors flex items-center gap-2 font-medium"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
         Chat
      </motion.a>
    </div>
  );
};

export default HomePage;