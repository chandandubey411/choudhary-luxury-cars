import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Button from '../ui/Button';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80',
    headline: 'Drive in Luxury, Arrive in Style',
    subtext: 'Experience the pinnacle of automotive luxury with Choudhary Luxury Cars',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1920&q=80',
    headline: 'Premium Fleet, Unmatched Comfort',
    subtext: 'Choose from 30+ world-class vehicles — BMW, Mercedes, Rolls-Royce and more',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1920&q=80',
    headline: 'Every Journey, A Masterpiece',
    subtext: 'Professional chauffeurs, 24/7 support, and transparent pricing — always',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=80',
    headline: 'Delhi\'s Most Trusted Luxury Rental',
    subtext: '500+ happy clients across Delhi NCR — book your dream ride today',
  },
];

const variants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
};

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index, dir) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, -1);
  }, [current, goTo]);

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ height: 'calc(100vh - 50px)' }}>
      {/* Background image with crossfade */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Slide content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slide.id + '-content'}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight">
            {slide.headline}
          </h1>
          <p className="text-white/80 text-lg md:text-xl mt-5">
            {slide.subtext}
          </p>
          <div className="flex items-center justify-center flex-wrap gap-4 mt-8">
            <Button variant="primary" to="/contact">Book Now</Button>
            <Button variant="outline" to="/cars">View Our Fleet</Button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 z-20 p-3 rounded-full bg-black/40 text-white hover:bg-[#C9A84C] transition-colors duration-300"
      >
        <FaChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 z-20 p-3 rounded-full bg-black/40 text-white hover:bg-[#C9A84C] transition-colors duration-300"
      >
        <FaChevronRight size={18} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-8 h-2 bg-[#C9A84C]'
                : 'w-2 h-2 bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
