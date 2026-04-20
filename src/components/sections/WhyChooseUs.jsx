import { FaCrown, FaClock, FaUserTie, FaTag } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';

const features = [
  {
    icon: FaCrown,
    title: 'Premium Fleet',
    desc: '30+ meticulously maintained luxury vehicles from the world\'s finest brands',
  },
  {
    icon: FaClock,
    title: '24/7 Support',
    desc: 'Round-the-clock assistance for all your luxury travel needs',
  },
  {
    icon: FaUserTie,
    title: 'Chauffeur Service',
    desc: 'Professional, trained chauffeurs for a truly premium experience',
  },
  {
    icon: FaTag,
    title: 'Best Rates',
    desc: 'Competitive pricing without compromising on luxury or quality',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Why Choose Us"
          subtitle="We redefine luxury car rental with unmatched service"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)] text-center"
            >
              <feature.icon className="text-3xl text-[#C9A84C] mb-4 mx-auto" />
              <h3 className="font-display font-bold text-lg text-[#0A0A0A] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#6B7280] text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
