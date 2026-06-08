import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ContactForm from '../components/sections/ContactForm';
import DocumentsRequired from '../components/sections/DocumentsRequired';
import SectionHeading from '../components/ui/SectionHeading';
import { COMPANY } from '../data/constants';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const car = searchParams.get('car') || '';

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
    return () => AOS.refreshHard();
  }, []);

  return (
    <div>
      {/* Page Hero */}
      <section
        className="relative min-h-[45vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 px-4 py-24">
          <h1 className="font-display text-5xl font-bold text-white tracking-tight">Contact Us</h1>
          <div className="h-1 w-16 bg-[#C9A84C] mt-4 mx-auto" />
          <p className="text-white/75 mt-4 text-lg">
            We'd love to hear from you — reach out anytime
          </p>
        </div>
      </section>

      {/* Documents Required */}
      <DocumentsRequired compact />

      {/* Two-column layout */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Contact Form */}
            <div data-aos="fade-right">
              <ContactForm initialCar={car} />
            </div>

            {/* Right: Info + Map */}
            <div data-aos="fade-left">
              <SectionHeading align="left" title="Get In Touch" />

              <div className="mt-8 space-y-5">
                {/* Phone */}
                <div className="flex gap-3 items-start">
                  <FaPhone className="text-[#C9A84C] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#0A0A0A]">Phone</p>
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="text-[#6B7280] hover:text-[#C9A84C] transition-colors"
                    >
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3 items-start">
                  <FaEnvelope className="text-[#C9A84C] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#0A0A0A]">Email</p>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-[#6B7280] hover:text-[#C9A84C] transition-colors break-all"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-3 items-start">
                  <FaMapMarkerAlt className="text-[#C9A84C] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#0A0A0A]">Address</p>
                    <p className="text-[#6B7280]">{COMPANY.address}</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.9!2d77.2!3d28.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQyJzAwLjAiTiA3N8KwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                className="w-full h-64 rounded-2xl mt-6 border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Choudhary Luxury Cars Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
