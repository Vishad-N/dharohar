import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  to,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans tracking-[0.15em] uppercase text-xs transition-all duration-300 ease-out focus:outline-none';
  
  const variants = {
    primary: 'bg-brand-gold text-white border border-brand-gold hover:bg-brand-gold/90 hover:border-brand-gold/90',
    secondary: 'bg-brand-dark text-white border border-brand-dark hover:bg-brand-dark/90 hover:border-brand-dark/90',
    outline: 'border border-brand-gold text-brand-gold hover:bg-brand-gold/10',
    ghost: 'text-brand-gold hover:text-brand-dark bg-transparent'
  };
  
  const sizes = {
    sm: 'px-6 py-3',
    md: 'px-10 py-4',
    lg: 'px-12 py-5'
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
