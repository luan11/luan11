import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export const Main = ({
  children,
  className,
  ...props
}: ComponentProps<`main`>) => (
  <main
    {...props}
    className={twMerge(`flex flex-col gap-8 flex-grow`, className)}
  >
    {children}
  </main>
);
