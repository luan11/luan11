import { ReactNode } from 'react';

type SoftSkillProps = {
  icon: ReactNode;
  title: string;
};

export const SoftSkill = ({ icon, title }: SoftSkillProps) => (
  <div className="flex flex-col items-center w-[320px] gap-2">
    <span className="text-green-500 p-3 bg-neutral-800 rounded shadow flex justify-center items-center">
      {icon}
    </span>
    <h3 className="text-stone-100 text-xl lowercase">{title}</h3>
  </div>
);
