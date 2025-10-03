import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit';
}

const Button = ({
  children,
  to,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button'
}: ButtonProps) => {
  const baseStyles = 'px-6 py-2.5 text-sm rounded-lg font-medium transition-all duration-200 inline-block text-center';
  const variantStyles = variant === 'primary'
    ? 'bg-accent text-white hover:bg-accent-hover shadow-md hover:shadow-lg'
    : 'bg-white text-text-primary hover:bg-opacity-80 border border-text-secondary';

  const combinedStyles = `${baseStyles} ${variantStyles} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};

export default Button;
