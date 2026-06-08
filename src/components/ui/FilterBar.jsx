const CATEGORIES = [
  { value: "All",        label: "All Cars" },
  { value: "wedding",    label: "💍 Wedding (13 hrs)" },
  { value: "self-drive", label: "🚗 Self Drive (24 hrs)" },
];

// Types available per category
const WEDDING_TYPES   = ["All", "SUV", "Sedan", "Luxury Sedan", "Sports", "Convertible", "Limousine"];
const SELFDRIVE_TYPES = ["All", "SUV", "Sedan", "Sports", "Convertible", "Luxury Sedan", "Hatchback", "MPV"];

const SORT_OPTIONS = [
  { value: "default",    label: "Default" },
  { value: "price-asc",  label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
];

export default function FilterBar({ filters, onChange }) {
  const typeOptions =
    filters.category === "wedding"
      ? WEDDING_TYPES
      : filters.category === "self-drive"
      ? SELFDRIVE_TYPES
      : ["All"]; // "All" category — hide type chips

  const showTypeChips = filters.category !== "All";

  return (
    <div className="space-y-4 py-4">
      {/* Category toggle */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map(({ value, label }) => {
          const isActive = filters.category === value;
          return (
            <button
              key={value}
              onClick={() => onChange({ ...filters, category: value, type: "All" })}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-[#C9A84C] text-white shadow-md"
                  : "bg-white text-[#0A0A0A] border border-gray-200 hover:border-[#C9A84C] hover:text-[#C9A84C]"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Type chips + sort — shown only when a category is selected */}
      {showTypeChips && (
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex flex-wrap gap-2">
            {typeOptions.map((type) => {
              const isActive = filters.type === type;
              return (
                <button
                  key={type}
                  onClick={() => onChange({ ...filters, type })}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-[#0A0A0A] text-white"
                      : "bg-gray-100 text-[#6B7280] hover:bg-[#0A0A0A] hover:text-white"
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
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
