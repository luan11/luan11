import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export const Title = ({
  className,
  children,
  ...props
}: ComponentProps<`h2`>) => (
  <h2
    {...props}
    className={twMerge(`text-[32px] text-green-500 lowercase`, className)}
  >
    {children}
  </h2>
);
