import { StarHalfIcon, StarIcon } from 'lucide-react';
import { ComponentProps } from 'react';
import { Fade } from 'react-awesome-reveal';
import { twMerge } from 'tailwind-merge';

import { calcSkillExp } from '@/utils/calcSkillExp';

type DevSkillProps = {
  name: string;
  yearsExp: number;
} & ComponentProps<`div`>;

export const DevSkill = ({
  className,
  name,
  yearsExp,
  ...props
}: DevSkillProps) => (
  <div
    {...props}
    className={twMerge(
      `w-[224px] p-3 rounded flex flex-col gap-2 border-l-4 border-stone-100 text-stone-100 bg-zinc-700 shadow lowercase`,
      className
    )}
  >
    <h3 className="text-xl">{name}</h3>
    <div className="text-green-500 flex items-center gap-1">
      <StarHalfIcon size={20} />
      <div className="w-full h-2 rounded-full bg-gray-800 relative overflow-hidden">
        <Fade triggerOnce>
          <span
            className="absolute left-0 top-0 h-full w-full bg-green-500 transition-transform ease-linear -translate-x-full"
            style={{
              transform: `translateX(-${100 - calcSkillExp(yearsExp)}%)`,
            }}
          />
        </Fade>
      </div>
      <StarIcon size={20} />
    </div>
    <p className="text-base">experience about {yearsExp} years</p>
  </div>
);
