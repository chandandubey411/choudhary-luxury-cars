import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { cars } from '../data/cars';
import { filterCars, sortCars } from '../utils/filterCars';
import FilterBar from '../components/ui/FilterBar';
import CarCard from '../components/ui/CarCard';
import SectionHeading from '../components/ui/SectionHeading';

export default function Cars() {
  const [filters, setFilters] = useState({ category: 'All', type: 'All', sortBy: 'default' });

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
    return () => AOS.refreshHard();
  }, []);

  const displayedCars = sortCars(filterCars(cars, filters), filters.sortBy);

  return (
    <div>
      {/* Page Hero */}
      <section
        className="relative min-h-[40vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 px-4 py-20">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
            Our Fleet
          </h1>
          <div className="h-1 w-16 bg-[#C9A84C] mt-4 mx-auto" />
          <p className="text-white/75 mt-4 text-lg">
            Wedding cars · Self drive · Premium &amp; budget — all in one place
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <SectionHeading
          title="Explore Our Collection"
          subtitle="Choose a category, filter by vehicle type, and sort by price"
        />

        <FilterBar filters={filters} onChange={setFilters} />

        <p className="text-[#6B7280] text-sm mb-4">
          Showing {displayedCars.length} vehicle{displayedCars.length !== 1 ? 's' : ''}
        </p>

        {displayedCars.length === 0 ? (
          <div className="text-center py-20 text-[#6B7280]">
            <p className="text-xl font-medium">No vehicles found for this filter.</p>
            <p className="mt-2 text-sm">Try selecting a different category or type.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
            {displayedCars.map((car, index) => (
              <div
                key={car.id}
                data-aos="fade-up"
                data-aos-delay={index * 40}
              >
                <CarCard car={car} />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
