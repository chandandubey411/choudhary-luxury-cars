import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { cars } from '../data/cars';
import { filterByType, sortCars } from '../utils/filterCars';
import FilterBar from '../components/ui/FilterBar';
import CarCard from '../components/ui/CarCard';
import SectionHeading from '../components/ui/SectionHeading';

export default function Cars() {
  const [filters, setFilters] = useState({ type: 'All', sortBy: 'default' });

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
    return () => AOS.refreshHard();
  }, []);

  const displayedCars = sortCars(filterByType(cars, filters.type), filters.sortBy);

  return (
    <div>
      {/* Page Hero */}
      <section
        className="relative min-h-[40vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 px-4 py-20">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
            Our Luxury Fleet
          </h1>
          <div className="h-1 w-16 bg-[#C9A84C] mt-4 mx-auto" />
          <p className="text-white/75 mt-4 text-lg">
            30+ world-class vehicles ready for your next journey
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <SectionHeading
          title="Explore Our Collection"
          subtitle="Filter by type or sort by price to find your perfect ride"
        />

        <FilterBar filters={filters} onChange={setFilters} />

        <p className="text-[#6B7280] text-sm mb-4">
          Showing {displayedCars.length} cars
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {displayedCars.map((car, index) => (
            <div
              key={car.id}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
