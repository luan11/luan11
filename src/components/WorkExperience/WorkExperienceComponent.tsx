import { Slide } from 'react-awesome-reveal';

import { Title } from '@/ui/components/title';
import { WorkExperienceBox } from '@/ui/components/workExperienceBox';

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
  <section className="container mx-auto grid grid-cols-12 gap-4">
    <div className="pt-6 flex flex-col gap-8 items-center col-start-2 col-end-12">
      <Title>WORK EXPERIENCE</Title>

      <div className="flex justify-center gap-6 px-3 overflow-hidden">
        <Slide direction="left">
          {workExperiences.map((workExperience) => (
            <WorkExperienceBox
              key={workExperience.companyName}
              className="max-w-md"
              {...workExperience}
            />
          ))}
        </Slide>
      </div>
    </div>
  </section>
);

export default WorkExperienceComponent;
