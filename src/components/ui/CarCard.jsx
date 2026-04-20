import { useNavigate } from 'react-router-dom';
import { FaGasPump, FaUsers, FaCar } from 'react-icons/fa';
import Button from './Button';

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80';

export default function CarCard({ car }) {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/contact?car=${encodeURIComponent(car.name)}`);
  };

  return (
    <div className="group rounded-2xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 overflow-hidden">
      {/* Image wrapper */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          src={car.image}
          alt={car.name}
          loading="lazy"
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = FALLBACK_IMAGE;
          }}
        />
        {/* Price badge */}
        <span className="absolute top-3 right-3 bg-[#C9A84C] text-white text-sm font-bold px-3 py-1 rounded-full">
          ₹{car.pricePerHour}/hr
        </span>
      </div>

      {/* Car name */}
      <p className="font-display font-bold text-lg text-[#0A0A0A] mt-4 px-4">
        {car.name}
      </p>

      {/* Specs row */}
      <div className="flex gap-4 px-4 mt-2 text-sm text-[#6B7280]">
        <span className="flex items-center gap-1">
          <FaGasPump /> {car.fuel}
        </span>
        <span className="flex items-center gap-1">
          <FaUsers /> {car.seats} Seats
        </span>
        <span className="flex items-center gap-1">
          <FaCar /> {car.type}
        </span>
      </div>

      {/* Book Now button */}
      <div className="mt-4 mb-4 mx-4">
        <Button variant="primary" onClick={handleBookNow} className="w-full">
          Book Now
        </Button>
      </div>
    </div>
  );
}
