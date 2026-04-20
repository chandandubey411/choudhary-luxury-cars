import { Link } from 'react-router-dom';

const variantClasses = {
  primary:
    'bg-[#0A0A0A] text-white border border-[#0A0A0A] hover:border-[#C9A84C] hover:text-[#C9A84C]',
  outline:
    'bg-transparent text-[#C9A84C] border border-[#C9A84C] hover:bg-[#C9A84C] hover:text-white',
  ghost:
    'bg-transparent text-[#0A0A0A] border border-transparent hover:text-[#C9A84C] hover:underline decoration-[#C9A84C]',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  children,
  disabled = false,
  to,
}) {
  const base =
    'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';
  const classes = `${base} ${variantClasses[variant] ?? variantClasses.primary} ${sizeClasses[size] ?? sizeClasses.md} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
