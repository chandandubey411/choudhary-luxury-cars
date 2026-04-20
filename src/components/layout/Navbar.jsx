import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Cars', to: '/cars' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'text-[#C9A84C] border-b-2 border-[#C9A84C] pb-0.5'
        : 'text-[#0A0A0A] hover:text-[#C9A84C]'
    }`;

  const getMobileLinkClass = ({ isActive }) =>
    `block px-4 py-3 text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'text-[#C9A84C] bg-amber-50'
        : 'text-[#0A0A0A] hover:text-[#C9A84C] hover:bg-gray-50'
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-[#FAFAFA] transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md shadow-md bg-[#FAFAFA]/90' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex-shrink-0 flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Choudhary Luxury Cars"
              className="h-10 w-auto object-contain"
            />
          </NavLink>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={getLinkClass}
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Hamburger button */}
          <button
            className="md:hidden p-2 rounded-md text-[#0A0A0A] hover:text-[#C9A84C] transition-colors duration-200"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } bg-[#FAFAFA] border-t border-gray-100`}
      >
        {navLinks.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={getMobileLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
