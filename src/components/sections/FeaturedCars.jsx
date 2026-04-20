import { cars } from '../../data/cars';
import CarCard from '../ui/CarCard';
import SectionHeading from '../ui/SectionHeading';

const featuredCars = cars.slice(0, 6);

export default function FeaturedCars() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Our Featured Fleet"
          subtitle="Handpicked luxury vehicles for your finest moments"
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
