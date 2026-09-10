import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'danger' | 'success';
type Size = 'sm' | 'md' | 'lg';
type Rounded = 'md' | 'lg' | 'full';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: Variant;
    size?: Size;
    rounded?: Rounded;
}

const baseStyle =
    'inline-flex justify-center items-center font-semibold cursor-pointer duration-300 disabled:bg-opacity-30 disabled:cursor-not-allowed';

const variantStyles: Record<Variant, string> = {
    primary: 'bg-pink-600 text-white hover:bg-pink-700',
    secondary: 'bg-slate-900 text-white hover:bg-slate-950',
    success: 'text-pink-600 bg-pink-100 hover:bg-pink-200',
    danger: 'border border-red-600 text-red-600 hover:bg-red-200',
    // danger: 'bg-red-600 text-white hover:bg-red-700',
};

const sizeStyles: Record<Size, string> = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-md px-4 py-2',
    lg: 'text-lg px-6 py-3',
};

const roundedStyles: Record<Rounded, string> = {
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
};

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    rounded = 'md',
    className,
    ...rest
}: ButtonProps) => {
    return (
        <button
            className={`${baseStyle} ${variantStyles[variant]} ${roundedStyles[rounded]} ${sizeStyles[size]} ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
