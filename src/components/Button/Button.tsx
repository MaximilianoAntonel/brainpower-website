import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
}) => {
  const baseClasses = 'font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50';
  
  const variantClasses = {
    primary: 'bg-blue-900 text-white hover:bg-blue-800',
    secondary: 'bg-white text-blue-900 border border-blue-900 hover:bg-blue-50',
    gradient: 'bg-gradient-to-r from-blue-900 to-blue-500 text-white hover:shadow-lg',
  };
  
  const sizeClasses = {
    sm: 'py-1 px-4 text-sm',
    md: 'py-2 px-6 text-base',
    lg: 'py-3 px-8 text-lg',
  };
  
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;