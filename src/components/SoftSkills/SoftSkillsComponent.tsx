import {
  ArrowLeftRightIcon,
  CheckCircle2Icon,
  Clock3Icon,
  CloverIcon,
  HandMetalIcon,
  MegaphoneIcon,
  ScaleIcon,
  SproutIcon,
  UsersIcon,
} from 'lucide-react';
import { Slide } from 'react-awesome-reveal';

import { SoftSkill } from '@/ui/components/softSkill';
import { Title } from '@/ui/components/title';

const softSkills = [
  { icon: <MegaphoneIcon size={42} />, title: `Communication` },
  { icon: <Clock3Icon size={42} />, title: `time management` },
  { icon: <CheckCircle2Icon size={42} />, title: `problem solving` },
  { icon: <HandMetalIcon size={42} />, title: `flexibility & adaptability` },
  { icon: <ArrowLeftRightIcon size={42} />, title: `deal with pressure` },
  { icon: <UsersIcon size={42} />, title: `teamwork` },
  { icon: <SproutIcon size={42} />, title: `self confidence` },
  { icon: <ScaleIcon size={42} />, title: `withstand criticism` },
  { icon: <CloverIcon size={42} />, title: `positivity` },
];

const SoftSkillsComponent = () => (
  <section className="container mx-auto lg:grid lg:grid-cols-12 gap-4 overflow-hidden">
    <div className="pt-6 flex flex-col gap-8 items-center col-start-2 col-end-12">
      <Title>main soft skills</Title>

      <Slide direction="up" className="max-sm:!animate-none">
        <div className="px-3 flex flex-wrap gap-6 justify-center">
          {softSkills.map(({ icon, title }) => (
            <SoftSkill key={title} icon={icon} title={title} />
          ))}
        </div>
      </Slide>
    </div>
  </section>
);

export default SoftSkillsComponent;
