import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaBullseye,
  FaEye,
  FaShieldAlt,
  FaHandshake,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { COMPANY } from '../data/constants';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
    return () => AOS.refreshHard();
  }, []);

  return (
    <div>
      {/* 1. Page Hero */}
      <section
        className="relative min-h-[45vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1563720223185-11003d516935?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 px-4 py-24">
          <h1 className="font-display text-5xl font-bold text-white tracking-tight">About Us</h1>
          <div className="h-1 w-16 bg-[#C9A84C] mt-4 mx-auto" />
          <p className="text-white/75 mt-4 text-lg">
            Delhi's premier luxury car rental experience
          </p>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <SectionHeading align="left" title="Our Story" />
              <p className="text-[#6B7280] mt-6 leading-relaxed">
                Founded in the heart of Delhi, {COMPANY.name} was born from a deep passion
                for luxury automobiles and a desire to make premium experiences accessible.
                We started with a small fleet and a big dream — to redefine how people
                experience luxury travel in the capital.
              </p>
              <p className="text-[#6B7280] mt-4 leading-relaxed">
                Since 2019, we have been serving discerning clients across Delhi NCR,
                offering an unmatched selection of the world's finest vehicles. From
                corporate events to weddings and special occasions, we bring elegance
                to every journey.
              </p>
              <p className="text-[#6B7280] mt-4 leading-relaxed">
                Our commitment to excellence, transparency, and customer satisfaction
                has made us the trusted choice for luxury car rentals in Delhi.
              </p>
            </div>
            <div data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80"
                alt="Luxury car"
                className="w-full rounded-2xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading title="Mission & Vision" />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 border-t-4 border-[#C9A84C]" data-aos="fade-up">
              <FaBullseye className="text-3xl text-[#C9A84C] mb-3" />
              <h3 className="font-display text-xl font-bold text-[#0A0A0A] mb-3">
                Our Mission
              </h3>
              <p className="text-[#6B7280] leading-relaxed">
                To provide an unparalleled luxury car rental experience that combines
                world-class vehicles with exceptional service, making every journey
                memorable and every client feel like royalty.
              </p>
            </div>
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 border-t-4 border-[#C9A84C]" data-aos="fade-up" data-aos-delay="100">
              <FaEye className="text-3xl text-[#C9A84C] mb-3" />
              <h3 className="font-display text-xl font-bold text-[#0A0A0A] mb-3">
                Our Vision
              </h3>
              <p className="text-[#6B7280] leading-relaxed">
                To become India's most trusted luxury car rental brand, expanding our
                fleet and reach while maintaining the personal touch and attention to
                detail that sets us apart from the rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why We're Different */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading title="Why We're Different" />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-2xl p-6 shadow" data-aos="fade-up">
              <FaShieldAlt className="text-3xl text-[#C9A84C] mb-3" />
              <h3 className="font-bold text-[#0A0A0A] mb-2">Verified & Insured Fleet</h3>
              <p className="text-[#6B7280] text-sm">
                Every vehicle in our fleet is thoroughly verified, regularly maintained,
                and fully insured for your peace of mind.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow" data-aos="fade-up" data-aos-delay="100">
              <FaHandshake className="text-3xl text-[#C9A84C] mb-3" />
              <h3 className="font-bold text-[#0A0A0A] mb-2">Transparent Pricing</h3>
              <p className="text-[#6B7280] text-sm">
                No hidden charges, no surprises. Our pricing is clear and upfront so
                you always know exactly what you're paying for.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow" data-aos="fade-up" data-aos-delay="200">
              <FaMapMarkerAlt className="text-3xl text-[#C9A84C] mb-3" />
              <h3 className="font-bold text-[#0A0A0A] mb-2">Delhi NCR Coverage</h3>
              <p className="text-[#6B7280] text-sm">
                We serve all major areas across Delhi NCR with prompt pickup and
                drop-off services tailored to your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Stats Bar */}
      <section className="bg-[#0A0A0A] py-16">
        <div className="flex justify-center gap-16 flex-wrap">
          <div className="text-center">
            <p className="text-4xl font-display font-bold text-[#C9A84C]">500+</p>
            <p className="text-white/70 text-sm mt-1">Happy Clients</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-display font-bold text-[#C9A84C]">30+</p>
            <p className="text-white/70 text-sm mt-1">Luxury Cars</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-display font-bold text-[#C9A84C]">5+</p>
            <p className="text-white/70 text-sm mt-1">Years Experience</p>
          </div>
        </div>
      </section>
    </div>
  );
}
