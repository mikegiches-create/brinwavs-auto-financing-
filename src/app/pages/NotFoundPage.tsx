import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Home, Search } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Floating Elements */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated 404 Text */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <motion.h1
            className="font-display text-[12rem] sm:text-[16rem] lg:text-[20rem] leading-none mb-4"
            style={{
              background: 'linear-gradient(135deg, #FF6B6B, #A78BFA, #4ECDC4)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            404
          </motion.h1>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-strong rounded-3xl p-12 backdrop-blur-2xl border-2 border-white/10"
          >
            <h2 className="font-display text-4xl sm:text-5xl text-white mb-6">
              Looks like you've hit a dead end
            </h2>
            <p className="text-white/70 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white px-8 py-4 rounded-xl font-medium inline-flex items-center space-x-2 hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
                >
                  <Home className="w-5 h-5" />
                  <span>Back to Home</span>
                </motion.button>
              </Link>

              <Link to="/cars">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-strong text-white px-8 py-4 rounded-xl font-medium inline-flex items-center space-x-2 hover:bg-white/10 transition-all border border-white/10"
                >
                  <Search className="w-5 h-5" />
                  <span>Browse Cars</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 -z-10">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-3xl"
          />
        </div>

        <div className="absolute bottom-1/4 right-1/4 -z-10">
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="w-96 h-96 rounded-full bg-gradient-to-br from-red-500/10 to-pink-500/10 blur-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
