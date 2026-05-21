import { Link } from 'react-router';

const OptimizedHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Optimized background - no animation */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=60&auto=format&fit=crop"
          alt="Hero Car"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0A0A0F]" />
      </div>

      {/* Content without heavy animations */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-display text-5xl md:text-7xl text-white mb-6">
          Premium Car Imports
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
          Discover exclusive luxury vehicles from around the world
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/cars"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:bg-primary/90 transition-all"
          >
            Browse Collection
          </Link>
          <button className="glass-strong text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-all border border-white/10">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default OptimizedHero;
