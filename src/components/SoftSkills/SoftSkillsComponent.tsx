import { SoftSkill } from '@/ui/components/softSkill';
import { Title } from '@/ui/components/title';
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

const SoftSkillsComponent = () => (
  <section className="container mx-auto grid grid-cols-12 gap-4">
    <div className="pt-6 flex flex-col gap-8 items-center col-start-2 col-end-12">
      <Title>main soft skills</Title>

      <div className="px-3 flex flex-wrap gap-6 justify-center overflow-hidden">
        <Slide direction="up">
          <SoftSkill icon={<MegaphoneIcon size={42} />} title="Communication" />
          <SoftSkill icon={<Clock3Icon size={42} />} title="time management" />
          <SoftSkill
            icon={<CheckCircle2Icon size={42} />}
            title="problem solving"
          />
          <SoftSkill
            icon={<HandMetalIcon size={42} />}
            title="flexibility & adaptability"
          />
          <SoftSkill
            icon={<ArrowLeftRightIcon size={42} />}
            title="deal with pressure"
          />
          <SoftSkill icon={<UsersIcon size={42} />} title="teamwork" />
          <SoftSkill icon={<SproutIcon size={42} />} title="self confidence" />
          <SoftSkill
            icon={<ScaleIcon size={42} />}
            title="withstand criticism"
          />
          <SoftSkill icon={<CloverIcon size={42} />} title="positivity" />
        </Slide>
      </div>
    </div>
  </section>
);

export default SoftSkillsComponent;
