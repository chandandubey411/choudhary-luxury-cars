const TYPES = ["All", "Sedan", "SUV", "Convertible", "Sports"];

const SORT_OPTIONS = [
  { value: "default", label: "Default" },
  { value: "price-asc", label: "Price Low to High" },
  { value: "price-desc", label: "Price High to Low" },
];

export default function FilterBar({ filters, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-3 py-4">
      <div className="flex flex-wrap gap-2">
        {TYPES.map((type) => {
          const isActive = filters.type === type;
          return (
            <button
              key={type}
              onClick={() => onChange({ ...filters, type })}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "bg-[#C9A84C] text-white"
                  : "bg-white text-[#0A0A0A] border border-gray-200 hover:border-[#C9A84C] hover:text-[#C9A84C]"
              }`}
            >
              {type}
            </button>
          );
        })}
      </div>
      <div className="ml-auto">
        <select
          value={filters.sortBy}
          onChange={(e) => onChange({ ...filters, sortBy: e.target.value })}
          className="px-4 py-2 rounded-full text-sm font-medium bg-white text-[#0A0A0A] border border-gray-200 focus:outline-none focus:border-[#C9A84C] cursor-pointer transition-colors duration-200"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
