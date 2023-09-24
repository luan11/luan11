import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type LanguageOrEducationBoxProps = {
  leftIcon: ReactNode;
} & ComponentProps<`div`>;

export const LanguageOrEducationBox = ({
  className,
  leftIcon,
  title,
  children,
  ...props
}: LanguageOrEducationBoxProps) => (
  <div
    {...props}
    className={twMerge(
      `lowercase text-stone-100 border-t-4 border-stone-100 rounded shadow p-4 flex items-center gap-2 bg-zinc-700`,
      className
    )}
  >
    <span>{leftIcon}</span>

    <div className="flex flex-col gap-2">
      <h3 className="text-xl">{title}</h3>

      {children}
    </div>
  </div>
);
