import { useState, useEffect } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';

const testimonials = [
  { id: 1, name: 'Rahul Sharma', location: 'Delhi', rating: 5, review: 'Absolutely stunning experience! The BMW 7 Series was immaculate and the chauffeur was professional.' },
  { id: 2, name: 'Priya Mehta', location: 'Noida', rating: 5, review: 'Booked the Rolls-Royce Phantom for our wedding. It was a dream come true. Highly recommended!' },
  { id: 3, name: 'Arjun Singh', location: 'Gurgaon', rating: 5, review: 'The Lamborghini Huracán was everything I imagined. Choudhary Luxury Cars delivered perfection.' },
  { id: 4, name: 'Neha Gupta', location: 'Faridabad', rating: 4, review: 'Great service and beautiful cars. The Mercedes S-Class was spotless. Will definitely book again.' },
  { id: 5, name: 'Vikram Patel', location: 'Delhi', rating: 5, review: 'Exceptional service from booking to drop-off. The Ferrari Roma was an unforgettable experience.' },
  { id: 6, name: 'Sunita Verma', location: 'Ghaziabad', rating: 5, review: 'Used their Bentley Flying Spur for a corporate event. Impressed everyone. Top-notch service!' },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  // Show 1 on mobile, 3 on desktop
  const visibleCount = 3;
  const visible = Array.from({ length: visibleCount }, (_, i) =>
    testimonials[(index + i) % testimonials.length]
  );

  return (
    <section className="bg-[#0A0A0A] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="[&_h2]:text-white [&_.h-1]:bg-[#C9A84C] [&_p]:text-white/60">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Real experiences from our valued customers"
          />
        </div>

        <div className="relative mt-12">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visible.map((t) => (
              <div
                key={t.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar
                      key={i}
                      className={i < t.rating ? 'text-[#C9A84C]' : 'text-white/20'}
                    />
                  ))}
                </div>
                <p className="text-white/80 text-sm mt-3 leading-relaxed">{t.review}</p>
                <div className="mt-4">
                  <p className="font-bold">{t.name}</p>
                  <p className="text-white/60 text-sm">{t.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Prev / Next */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
              aria-label="Previous"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
              aria-label="Next"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
