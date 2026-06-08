import { cars } from '../../data/cars';
import CarCard from '../ui/CarCard';
import SectionHeading from '../ui/SectionHeading';

// Pick 3 top wedding cars + 3 top self-drive cars as featured
const weddingPicks   = cars.filter((c) => c.category === 'wedding').slice(0, 3);
const selfdrivePicks = cars.filter((c) => c.category === 'self-drive').slice(0, 3);
const featuredCars   = [...weddingPicks, ...selfdrivePicks];

export default function FeaturedCars() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Our Featured Fleet"
          subtitle="Handpicked luxury vehicles for weddings and self-drive adventures"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {featuredCars.map((car, index) => (
            <div key={car.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
