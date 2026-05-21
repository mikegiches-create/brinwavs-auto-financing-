import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router';
import { useRef } from 'react';
import {
  FileText, BookOpen, Calculator, CheckCircle2,
  ArrowRight, Phone, MessageCircle, Shield, Clock, Star,
} from 'lucide-react';

// ── Data ──────────────────────────────────────────────────────────────────────
const services = [
  {
    id: 'logbook',
    icon: BookOpen,
    tag: 'Instant Cash',
    title: 'Car Logbook Loans',
    headline: 'Unlock your car\'s value',
    description:
      'Use your vehicle logbook as collateral and access funds quickly without selling your car. Keep driving while we handle the paperwork.',
    perks: [
      'Keep your vehicle throughout the loan period',
      'Fast approval — funds within 24 hours',
      'Flexible repayment from 6 to 36 months',
      'Competitive interest rates from 3% p.m.',
      'No credit score checks required',
    ],
    accent: 'from-amber-500 to-orange-600',
    accentLight: 'amber-500',
    glow: 'shadow-amber-500/20',
  },
  {
    id: 'duty',
    icon: Calculator,
    tag: 'Import Duty',
    title: 'Import Duty Financing',
    headline: 'Clear your car. Pay later.',
    description:
      'Don\'t let import duty hold your dream car at the port. We finance your duty clearance so you can drive off immediately and repay comfortably.',
    perks: [
      'Cover 100% of KRA import duty costs',
      'No collateral needed for existing clients',
      'Structured repayment over 3–12 months',
      'Direct payment to KRA on your behalf',
      'Available for both personal & commercial vehicles',
    ],
    accent: 'from-sky-500 to-blue-700',
    accentLight: 'sky-400',
    glow: 'shadow-sky-500/20',
  },
  {
    id: 'checkoff',
    icon: FileText,
    tag: 'Salary-Based',
    title: 'Check-Off Loans',
    headline: 'Your payslip is your power',
    description:
      'Employed with a regular salary? Get a car loan deducted directly from your payslip each month — zero hassle, zero missed payments.',
    perks: [
      'Repayment deducted at source each month',
      'Borrow up to 3× your net monthly salary',
      'Available to civil servants & private sector',
      'Approval in 48 hours with employer letter',
      'No guarantors or extra collateral needed',
    ],
    accent: 'from-emerald-500 to-teal-700',
    accentLight: 'emerald-400',
    glow: 'shadow-emerald-500/20',
  },
];

const stats = [
  { val: '500+', label: 'Cars Financed' },
  { val: '24hr', label: 'Approval Time' },
  { val: '98%', label: 'Client Satisfaction' },
  { val: '3%', label: 'Starting Rate p.m.' },
];

// ── Animated section heading ──────────────────────────────────────────────────
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4">
    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
    <span className="text-white/60 text-xs font-medium tracking-widest uppercase">{children}</span>
  </div>
);

// ── Service Card ──────────────────────────────────────────────────────────────
const ServiceCard = ({
  service,
  index,
}: {
  service: typeof services[0];
  index: number;
}) => {
  const Icon = service.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      id={service.id}
      className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 lg:gap-12 items-stretch`}
    >
      {/* Accent panel */}
      <div className={`relative lg:w-2/5 rounded-2xl overflow-hidden bg-gradient-to-br ${service.accent} p-[1px] flex-shrink-0 shadow-2xl ${service.glow}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl" />
        <div className="relative h-full rounded-2xl bg-black/40 backdrop-blur-xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[240px] lg:min-h-[320px]">
          {/* Tag */}
          <div>
            <span className={`inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-gradient-to-r ${service.accent} text-white mb-4`}>
              {service.tag}
            </span>
            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${service.accent} flex items-center justify-center mb-4 shadow-lg`}>
              <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-white leading-tight mb-2">
              {service.headline}
            </h3>
          </div>

          {/* Decorative circles */}
          <div className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br ${service.accent} opacity-20 blur-2xl`} />
          <div className={`absolute top-4 right-4 w-16 h-16 rounded-full bg-gradient-to-br ${service.accent} opacity-10 blur-xl`} />

          {/* WhatsApp CTA */}
          <motion.a
            href={`https://wa.me/254724098493?text=${encodeURIComponent(`Hello! I'm interested in your ${service.title} service. Please share more details.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white text-sm font-medium px-4 py-2.5 rounded-full border border-white/20 transition-all self-start"
          >
            <MessageCircle className="w-4 h-4" />
            Enquire Now
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>
      </div>

      {/* Detail panel */}
      <div className="flex-1 glass rounded-2xl border border-white/8 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
        <h2 className="font-display text-xl sm:text-2xl lg:text-3xl text-white mb-3">
          {service.title}
        </h2>
        <p className="text-white/55 text-sm sm:text-base leading-relaxed mb-6">
          {service.description}
        </p>

        <ul className="space-y-3">
          {service.perks.map((perk, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
              className="flex items-start gap-3"
            >
              <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 text-${service.accentLight}`} />
              <span className="text-white/70 text-sm leading-snug">{perk}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

// ── Main Page ─────────────────────────────────────────────────────────────────
const OurServices = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="min-h-screen overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">

        {/* Layered background */}
        <div className="absolute inset-0">
          <motion.div style={{ y: heroY }} className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=1920&q=60&auto=format&fit=crop"
              alt="Financing background"
              className="w-full h-full object-cover scale-110"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0A0A0F]" />
          <div className="absolute inset-0 mesh-gradient opacity-30" />
        </div>

        {/* Animated grid lines */}
        <div className="absolute inset-0 grid-pattern opacity-15" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel>Import Financing</SectionLabel>

            <h1
              className="font-display text-white mb-6 leading-[0.95]"
              style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}
            >
              Drive Now,<br />
              <span className="gradient-text">Pay Smart</span>
            </h1>

            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Flexible financing solutions designed for Kenyan car owners and importers.
              From logbook loans to duty clearance — we make ownership effortless.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a
                href="#logbook"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/40 transition-all"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href={`https://wa.me/254724098493?text=${encodeURIComponent('Hello! I need help choosing a financing option for my car.')}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 glass border border-white/15 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4 text-green-400" />
                Speak to an Advisor
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border-2 border-white/25 rounded-full flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-1 bg-white/70 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="relative py-8 border-y border-white/8 bg-black/30 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center"
              >
                <p className="font-display text-2xl sm:text-3xl text-white mb-1">{s.val}</p>
                <p className="text-white/40 text-xs sm:text-sm tracking-wide">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-24">
        <div className="absolute inset-0 grid-pattern opacity-10" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <SectionLabel>What We Offer</SectionLabel>
            <h2
              className="font-display text-white"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Three Ways to <span className="gradient-text">Finance Your Car</span>
            </h2>
          </motion.div>

          <div className="space-y-10 sm:space-y-16">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ──────────────────────────────────────────────────── */}
      <section className="relative py-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/15 via-blue-900/10 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Shield,  title: 'Fully Licensed',   body: 'Regulated by the Central Bank of Kenya. Your loan is safe and transparent.' },
              { icon: Clock,   title: 'Fast Turnaround',  body: 'Most applications processed within 24 hours. No endless paperwork.' },
              { icon: Star,    title: 'Trusted by Many',  body: 'Over 500 satisfied clients across Nairobi and beyond since 2019.' },
            ].map(({ icon: Icon, title, body }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 border border-white/8 flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">{title}</h4>
                  <p className="text-white/45 text-xs leading-relaxed">{body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FOOTER BAND ──────────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/25 via-blue-900/20 to-black/40" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-display text-white mb-4"
              style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
            >
              Ready to Get <span className="gradient-text">Financed?</span>
            </h2>
            <p className="text-white/55 mb-8 text-sm sm:text-base leading-relaxed">
              Chat with our financing team today. We'll match you to the right product and get you behind the wheel faster than you think.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a
                href={`https://wa.me/254724098493?text=${encodeURIComponent('Hello! I would like to apply for car financing with Brinwavscar Imports.')}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Apply on WhatsApp
              </motion.a>
              <Link
                to="/cars"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 glass border border-white/15 text-white font-semibold rounded-full hover:bg-white/10 transition-all text-sm"
              >
                Browse Cars First
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;