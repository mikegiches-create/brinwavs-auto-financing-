import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────
interface Slide {
  image: string;
  tagline: string;
  headingPrefix: string;
  headingGrad: string;
  sub: string;
}

interface HeroCarouselProps {
  slides?: Slide[];
  interval?: number;
  children?: React.ReactNode;
}

// ─── Default slides ───────────────────────────────────────────────────────────
export const DEFAULT_SLIDES: Slide[] = [
  {
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=60&auto=format&fit=crop',
    tagline: 'Premium Automotive Excellence',
    headingPrefix: 'Find Your',
    headingGrad: 'Dream Car',
    sub: "Explore the world's most prestigious vehicles. Where luxury meets performance.",
  },
  {
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=60&auto=format&fit=crop',
    tagline: 'Unmatched Power & Precision',
    headingPrefix: 'Drive the',
    headingGrad: 'Extraordinary',
    sub: 'Hand-selected performance machines built for those who demand the very best.',
  },
  {
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1920&q=60&auto=format&fit=crop',
    tagline: 'Timeless Design. Modern Soul.',
    headingPrefix: 'Own a',
    headingGrad: 'Masterpiece',
    sub: 'Every vehicle in our collection tells a story of craftsmanship and heritage.',
  },
  {
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1920&q=60&auto=format&fit=crop',
    tagline: 'Electric. Efficient. Exhilarating.',
    headingPrefix: 'The Future',
    headingGrad: 'Is Here',
    sub: 'Discover our curated lineup of next-generation electric and hybrid vehicles.',
  },
];

// ─── Progress bar ─────────────────────────────────────────────────────────────
const ProgressBar = ({ active, interval }: { active: boolean; interval: number }) => (
  <div className="h-0.5 flex-1 bg-white/20 rounded-full overflow-hidden">
    {active ? (
      <motion.div
        className="h-full bg-white rounded-full"
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: interval / 1000, ease: 'linear' }}
      />
    ) : (
      <div className="h-full w-0 bg-white/60 rounded-full" />
    )}
  </div>
);

// ─── Main component ───────────────────────────────────────────────────────────
const HeroCarousel = ({
  slides = DEFAULT_SLIDES,
  interval = 6000,
  children,
}: HeroCarouselProps) => {
  const [current, setCurrent]     = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused]       = useState(false);
  const timerRef                  = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (index: number, dir = 1) => {
      setDirection(dir);
      setCurrent(((index % slides.length) + slides.length) % slides.length);
    },
    [slides.length],
  );

  const next = useCallback(() => goTo(current + 1,  1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, interval);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, paused, next, interval]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft')  prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev]);

  const slideVariants = {
    enter:  (d: number) => ({ opacity: 0, x: d > 0 ?  80 : -80, scale: 1.04 }),
    center:              ({ opacity: 1, x: 0,            scale: 1,    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } }),
    exit:   (d: number) => ({ opacity: 0, x: d > 0 ? -80 :  80, scale: 0.98, transition: { duration: 0.5, ease: 'easeIn' as const } }),
  };

  const slide = slides[current];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Hero image carousel"
    >
      {/* ── Slide backgrounds ── */}
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0A0A0F]" />
          <div className="absolute inset-0 mesh-gradient opacity-40" />
        </motion.div>
      </AnimatePresence>

      {/* ── Particles (desktop only) ── */}
      <div className="absolute inset-0 hidden sm:block pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth  : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{ y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)], opacity: [0, 1, 0] }}
            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>

      {/* ── Slide text ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mobile-padding w-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`text-${current}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.15 } }}
            exit={{ opacity: 0, y: -16, transition: { duration: 0.35 } }}
          >
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4 sm:mb-6"
            >
              <div className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 px-4 sm:px-6 py-2 rounded-full">
                <span className="text-white text-xs sm:text-sm font-medium">{slide.tagline}</span>
              </div>
            </motion.div>

            {/* Heading */}
            <h1
              className="font-display text-white mb-4 sm:mb-6 max-w-4xl mx-auto leading-none"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
            >
              {slide.headingPrefix}{' '}
              <span className="gradient-text">{slide.headingGrad}</span>
            </h1>

            {/* Sub-copy */}
            <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed">
              {slide.sub}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Search box / CTA passed from parent */}
        {children}
      </div>

      {/* ── Prev / Next ── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20
                   w-10 h-10 sm:w-12 sm:h-12 rounded-full
                   bg-white/10 hover:bg-white/20 backdrop-blur-sm
                   border border-white/20 hover:border-white/40
                   flex items-center justify-center transition-all duration-200 group"
      >
        <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20
                   w-10 h-10 sm:w-12 sm:h-12 rounded-full
                   bg-white/10 hover:bg-white/20 backdrop-blur-sm
                   border border-white/20 hover:border-white/40
                   flex items-center justify-center transition-all duration-200 group"
      >
        <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* ── Bottom controls ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
        {/* Progress bars */}
        <div className="flex items-center gap-2 w-48 sm:w-64">
          {slides.map((_, i) => (
            <ProgressBar key={i} active={i === current} interval={interval} />
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              aria-label={`Go to slide ${i + 1}`}
            >
              <motion.div
                animate={{
                  width:           i === current ? 24 : 8,
                  height:          8,
                  backgroundColor: i === current ? '#a855f7' : 'rgba(255,255,255,0.35)',
                }}
                transition={{ duration: 0.3 }}
                className="rounded-full"
              />
            </button>
          ))}
        </div>

        {/* Counter */}
        <p className="text-white/40 text-xs font-mono tracking-widest select-none">
          {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </p>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-8 hidden sm:block"
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
  );
};

export default HeroCarousel;