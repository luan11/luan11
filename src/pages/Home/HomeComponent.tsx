import { About } from '@/components/About';
import { DevSkills } from '@/components/DevSkills';
import { FollowMe } from '@/components/FollowMe';
import { LanguagesAndEducation } from '@/components/LanguagesAndEducation';
import { SoftSkills } from '@/components/SoftSkills';
import { WorkExperience } from '@/components/WorkExperience';

const HomeComponent = () => (
  <>
    <About />
    <DevSkills />
    <SoftSkills />
    <FollowMe />
    <LanguagesAndEducation />
    <WorkExperience />
  </>
);

export default HomeComponent;
