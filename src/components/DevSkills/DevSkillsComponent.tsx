import { Zoom } from 'react-awesome-reveal';

import { DevSkill } from '@/ui/components/devSkill';
import { Title } from '@/ui/components/title';

const DevSkillsComponent = () => (
  <section className="container mx-auto grid grid-cols-12 gap-4">
    <div className="pt-6 flex flex-col gap-8 items-center col-start-2 col-end-12">
      <Title>main development skills</Title>

      <div className="px-12 flex flex-wrap gap-6 justify-center">
        <Zoom cascade damping={0.5} duration={500}>
          <DevSkill
            className="border-yellow-400"
            name="javascript"
            yearsExp={6}
          />
          <DevSkill
            className="border-blue-500"
            name="typescript"
            yearsExp={4}
          />
          <DevSkill className="border-green-500" name="nodejs" yearsExp={5} />
          <DevSkill className="border-orange-500" name="html" yearsExp={6} />
          <DevSkill className="border-blue-500" name="css" yearsExp={6} />
          <DevSkill className="border-rose-300" name="sass" yearsExp={5} />
          <DevSkill className="border-sky-500" name="reactjs" yearsExp={4} />
          <DevSkill
            className="border-red-600"
            name="testing library"
            yearsExp={3}
          />
          <DevSkill className="border-indigo-600" name="php" yearsExp={5} />
          <DevSkill className="border-orange-500" name="git" yearsExp={6} />
          <DevSkill className="border-blue-500" name="wordpress" yearsExp={5} />
        </Zoom>
      </div>
    </div>
  </section>
);

export default DevSkillsComponent;
