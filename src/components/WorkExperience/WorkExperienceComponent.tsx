import { Fade } from 'react-awesome-reveal';

import { Button } from '@/ui/components/button';
import { Title } from '@/ui/components/title';
import { WorkExperienceBox } from '@/ui/components/workExperienceBox';
import { LinkedinIcon } from 'lucide-react';

const workExperiences = [
  {
    companyName: `segware`,
    experiences: [
      {
        jobDescription: `REACTJS DEVELOPER II`,
        from: 2023,
        to: `present`,
      },
      {
        jobDescription: `REACTJS DEVELOPER I`,
        from: 2022,
        to: 2023,
      },
      {
        jobDescription: `JUNIOR III REACTJS DEVELOPER`,
        from: 2021,
        to: 2022,
      },
    ],
  },
  {
    companyName: `pandora ws`,
    experiences: [
      {
        jobDescription: `junior web developer`,
        from: 2020,
        to: 2021,
      },
      {
        jobDescription: `trainee web developer`,
        from: 2018,
        to: 2019,
      },
    ],
  },
];

const WorkExperienceComponent = () => (
  <section className="container mx-auto lg:grid lg:grid-cols-12 gap-4">
    <div className="pt-6 flex flex-col gap-8 items-center col-start-2 col-end-12">
      <Title>WORK EXPERIENCE</Title>

      <div className="flex justify-center flex-col sm:flex-row gap-6 px-3 overflow-hidden">
        <Fade>
          {workExperiences.map((workExperience) => (
            <WorkExperienceBox
              key={workExperience.companyName}
              className="lg:max-w-lg"
              {...workExperience}
            />
          ))}
        </Fade>
      </div>

      <Button
        className="bg-green-500 text-stone-100 border-0 hover:bg-green-600"
        onClick={() =>
          window.open(`https://www.linkedin.com/in/luan-novais11/`, `_blank`)
        }
      >
        <LinkedinIcon size={16} />
        <span>VIEW DETAILED</span>
      </Button>
    </div>
  </section>
);

export default WorkExperienceComponent;
