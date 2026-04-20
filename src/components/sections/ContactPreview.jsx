import { COMPANY } from '../../data/constants';
import Button from '../ui/Button';

export default function ContactPreview() {
  return (
    <section className="bg-[#C9A84C] py-16">
      <div className="text-center px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A]">
          Ready to Experience Luxury?
        </h2>
        <p className="text-[#0A0A0A]/80 mt-3">
          Call us now or send a message. We're available 24/7.
        </p>
        <p className="text-2xl font-bold text-[#0A0A0A] mt-4">{COMPANY.phone}</p>
        <div className="mt-6">
          <Button variant="primary" to="/contact">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
