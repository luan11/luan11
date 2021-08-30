import workExperience from '../../data/sections/workExperience';

import Title from '../../ui/components/Title';
import { ReactComponent as IconSuitcase } from './assets/icons/suitcase.svg';
import { ReactComponent as IconCalendar } from './assets/icons/calendar.svg';

import {
  Wrapper,
  Container,
  Worked,
  Work,
  WorkTitle,
  WorkInfoList,
  WorkInfoItem,
  WorkAbout,
} from './styles';

function WorkExperience() {
  return (
    <Wrapper>
      <Container>
        <Title centered size="text-2xl" className="mb-6" color="text-white">
          Work Experience
        </Title>

        <Worked>
          {workExperience.map(
            ({ role, company, time: [from, to], about }, index) => (
              <Work key={index}>
                <WorkTitle
                  size="text-xl"
                  className="mb-6"
                  color="text-white"
                  detailHeight={2}
                >
                  {role}
                </WorkTitle>
                <WorkInfoList>
                  <WorkInfoItem>
                    <IconSuitcase />
                    {company}
                  </WorkInfoItem>

                  <WorkInfoItem>
                    <IconCalendar />
                    {from} - {to}
                  </WorkInfoItem>
                </WorkInfoList>
                <WorkAbout>{about}</WorkAbout>
              </Work>
            )
          )}
        </Worked>
      </Container>
    </Wrapper>
  );
}

export default WorkExperience;
