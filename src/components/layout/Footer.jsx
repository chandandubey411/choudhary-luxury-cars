import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { COMPANY } from "../../data/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0A0A0A" }} className="text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src="/logo.png"
                alt="Choudhary Luxury Cars"
                className="max-h-20 w-auto max-w-[200px] object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Drive in Luxury, Arrive in Style. Premium car rentals for every occasion.
            </p>
            <p className="text-sm leading-relaxed">{COMPANY.address}</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#C9A84C" }}>
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", to: "/" },
                { label: "Cars", to: "/cars" },
                { label: "About", to: "/about" },
                { label: "Contact", to: "/contact" },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="transition-colors duration-200 hover:text-[#C9A84C]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#C9A84C" }}>
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="transition-colors duration-200 hover:text-[#C9A84C]"
                >
                  +91 {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="transition-colors duration-200 hover:text-[#C9A84C] break-all"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href={COMPANY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-xl transition-colors duration-200 hover:text-[#C9A84C]"
              >
                <FaInstagram />
              </a>
              <a
                href={COMPANY.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-xl transition-colors duration-200 hover:text-[#C9A84C]"
              >
                <FaFacebook />
              </a>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-xl transition-colors duration-200 hover:text-[#C9A84C]"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-600">
          &copy; {currentYear} {COMPANY.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
