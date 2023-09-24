import { Fade } from 'react-awesome-reveal';

import { DevSkill } from '@/ui/components/devSkill';
import { Title } from '@/ui/components/title';

const devSkills = [
  { border: `border-yellow-400`, name: `javascript`, yearsExp: 6 },
  { border: `border-blue-500`, name: `typescript`, yearsExp: 4 },
  { border: `border-green-500`, name: `nodejs`, yearsExp: 5 },
  { border: `border-orange-500`, name: `html`, yearsExp: 6 },
  { border: `border-blue-500`, name: `css`, yearsExp: 6 },
  { border: `border-rose-300`, name: `sass`, yearsExp: 5 },
  { border: `border-sky-500`, name: `reactjs`, yearsExp: 4 },
  { border: `border-red-600`, name: `testing library`, yearsExp: 3 },
  { border: `border-indigo-600`, name: `php`, yearsExp: 5 },
  { border: `border-orange-500`, name: `git`, yearsExp: 6 },
  { border: `border-blue-500`, name: `wordpress`, yearsExp: 5 },
];

const DevSkillsComponent = () => (
  <section className="container mx-auto grid grid-cols-12 gap-4 overflow-hidden">
    <div className="pt-6 flex flex-col gap-8 items-center col-start-2 col-end-12">
      <Title>main development skills</Title>

      <Fade>
        <div className="px-3 flex flex-wrap gap-6 justify-center overflow-hidden">
          {devSkills.map(({ border, name, yearsExp }) => (
            <DevSkill
              key={name}
              className={border}
              name={name}
              yearsExp={yearsExp}
            />
          ))}
        </div>
      </Fade>
    </div>
  </section>
);

export default DevSkillsComponent;
