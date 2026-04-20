const sizeClasses = {
  sm: 'w-5 h-5',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
};

export default function Spinner({ size = 'md', color = '#C9A84C' }) {
  const sizeClass = sizeClasses[size] ?? sizeClasses.md;

  return (
    <div
      className={`${sizeClass} rounded-full border-2 border-t-transparent animate-spin`}
      style={{ borderColor: color, borderTopColor: 'transparent' }}
    />
  );
}
