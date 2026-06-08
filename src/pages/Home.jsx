import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HeroSection from '../components/sections/HeroSection';
import FeaturedCars from '../components/sections/FeaturedCars';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import DocumentsRequired from '../components/sections/DocumentsRequired';
import Testimonials from '../components/sections/Testimonials';
import ContactPreview from '../components/sections/ContactPreview';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
    return () => AOS.refresh();
  }, []);

  return (
    <>
      <HeroSection />

      {/* Company Intro */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div data-aos="fade-right">
            <SectionHeading
              align="left"
              title="Delhi's Premier Luxury Car Rental"
              subtitle="Serving Delhi NCR with the finest fleet of luxury vehicles since 2018"
            />
            <p className="text-[#6B7280] mt-6 leading-relaxed">
              At Choudhary Luxury Cars, we believe every journey should be an experience. Whether
              it's a wedding, corporate event, airport transfer, or a special occasion, our
              meticulously maintained fleet of 30+ premium vehicles ensures you arrive in
              unmatched style and comfort. Based in the heart of Delhi, we bring world-class
              luxury to your doorstep.
            </p>
            <div className="mt-8">
              <Button variant="primary" to="/cars">
                Explore Our Fleet
              </Button>
            </div>
          </div>

          {/* Right */}
          <div data-aos="fade-left">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"
              alt="Luxury car interior"
              className="rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <FeaturedCars />
      <WhyChooseUs />
      <DocumentsRequired />
      <Testimonials />
      <ContactPreview />
    </>
  );
}
