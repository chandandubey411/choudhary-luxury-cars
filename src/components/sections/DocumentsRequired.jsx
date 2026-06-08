import {
  FaIdCard,
  FaCar,
  FaMobileAlt,
  FaFileAlt,
  FaBolt,
  FaCheckCircle,
} from 'react-icons/fa';

const PRIMARY_DOCS = [
  {
    icon: FaIdCard,
    label: 'Aadhaar Card',
    desc: 'Original Aadhaar card of the primary driver',
    required: true,
  },
  {
    icon: FaCar,
    label: 'Driving Licence',
    desc: 'Valid driving licence (must match driver)',
    required: true,
  },
  {
    icon: FaMobileAlt,
    label: '3 Mobile Numbers',
    desc: 'Three active contact numbers for verification',
    required: true,
  },
];

const ADDITIONAL_DOCS = [
  {
    icon: FaIdCard,
    label: 'Extra Aadhaar Card',
    desc: 'Aadhaar of a family member or reference',
  },
  {
    icon: FaBolt,
    label: 'Electricity Bill',
    desc: 'Recent electricity bill as address proof',
  },
];

export default function DocumentsRequired({ compact = false }) {
  return (
    <section
      className={`${compact ? 'py-10' : 'py-16'} bg-[#0A0A0A]`}
      id="documents-required"
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <FaFileAlt />
            Documents Required
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            What You Need to Book
          </h2>
          <p className="text-white/50 mt-2 text-sm">
            Keep these documents ready for a smooth and quick booking process
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Mandatory Documents */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-5 flex items-center gap-2">
              <FaCheckCircle /> Mandatory Documents
            </p>
            <ul className="space-y-4">
              {PRIMARY_DOCS.map(({ icon: Icon, label, desc }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-xl bg-[#C9A84C]/15 flex items-center justify-center">
                    <Icon className="text-[#C9A84C] text-base" />
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm">{label}</p>
                    <p className="text-white/50 text-xs mt-0.5">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional (one of these) */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-5 flex items-center gap-2">
              <FaCheckCircle /> Any One of These (Additional Proof)
            </p>
            <ul className="space-y-4">
              {ADDITIONAL_DOCS.map(({ icon: Icon, label, desc }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-xl bg-amber-400/10 flex items-center justify-center">
                    <Icon className="text-amber-400 text-base" />
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm">{label}</p>
                    <p className="text-white/50 text-xs mt-0.5">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Note */}
            <div className="mt-6 rounded-xl bg-amber-400/10 border border-amber-400/20 px-4 py-3">
              <p className="text-amber-300 text-xs leading-relaxed">
                <span className="font-bold">Note:</span> Submit{' '}
                <strong>any one</strong> of the above as additional address proof
                along with your Aadhaar &amp; Licence. All documents must be
                originals or clear copies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
