import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export const Link = ({
  className,
  children,
  ...props
}: ComponentProps<`a`>) => (
  <a
    {...props}
    className={twMerge(
      `flex items-center gap-1 text-lg text-stone-100 transition-colors ease-linear hover:text-green-500`,
      className
    )}
  >
    {children}
  </a>
);
