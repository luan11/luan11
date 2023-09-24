import {
  BriefcaseIcon,
  FlagIcon,
  FlameIcon,
  TrendingUpIcon,
} from 'lucide-react';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type Experience = {
  jobDescription: string;
  from: number;
  to: number | string;
};

type WorkExperienceBoxProps = {
  companyName: string;
  experiences: Experience[];
} & ComponentProps<`div`>;

const EXPERIENCE_TO_PRESENT = `present`;

export const WorkExperienceBox = ({
  className,
  companyName,
  experiences,
  ...props
}: WorkExperienceBoxProps) => (
  <div
    {...props}
    className={twMerge(
      `p-6 gap-4 flex flex-col rounded border-4 border-neutral-800 lowercase text-stone-100`,
      className
    )}
  >
    <div className="flex items-center gap-2">
      <span className="text-indigo-500">
        <BriefcaseIcon size={28} />
      </span>
      <h3 className="text-xl">{companyName}</h3>
    </div>

    <div className="flex gap-3 flex-wrap">
      {experiences.map(({ jobDescription, from, to }, idx) => (
        <div
          key={jobDescription}
          className="flex gap-2 bg-indigo-500 rounded p-1"
        >
          <span className="text-lime-300">
            {idx === 0 && to !== EXPERIENCE_TO_PRESENT && (
              <FlagIcon size={20} />
            )}
            {idx !== 0 && to !== EXPERIENCE_TO_PRESENT && (
              <TrendingUpIcon size={20} />
            )}
            {to === EXPERIENCE_TO_PRESENT && <FlameIcon size={20} />}
          </span>

          <div>
            <h4>{jobDescription}</h4>
            <small className="text-lime-300 text-sm">{`${from} - ${to}`}</small>
          </div>
        </div>
      ))}
    </div>
  </div>
);
