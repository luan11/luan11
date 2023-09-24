import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export const Button = ({
  className,
  children,
  ...props
}: ComponentProps<`button`>) => (
  <button
    {...props}
    className={twMerge(
      `flex items-center justify-center gap-1 py-2 px-4 rounded text-lg uppercase transition-colors ease-linear`,
      className
    )}
  >
    {children}
  </button>
);
