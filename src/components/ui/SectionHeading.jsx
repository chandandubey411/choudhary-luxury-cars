export default function SectionHeading({ title, subtitle, align = 'center' }) {
  const isCenter = align === 'center';
  const alignClass = isCenter ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex flex-col ${alignClass}`}>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A]">
        {title}
      </h2>
      <div
        className={`h-1 w-16 bg-[#C9A84C] mt-3 ${isCenter ? 'mx-auto' : ''}`}
      />
      {subtitle && (
        <p className="text-[#6B7280] text-base md:text-lg mt-4">{subtitle}</p>
      )}
    </div>
  );
}
