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
          <Work>
            <WorkTitle
              size="text-xl"
              className="mb-6"
              color="text-white"
              detailHeight={2}
            >
              Role
            </WorkTitle>
            <WorkInfoList>
              <WorkInfoItem>
                <IconSuitcase />
                Company
              </WorkInfoItem>

              <WorkInfoItem>
                <IconCalendar />
                2021 - Present
              </WorkInfoItem>
            </WorkInfoList>
            <WorkAbout>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              error voluptate maxime similique, reiciendis officia inventore
              iusto neque quo excepturi non in aspernatur nobis iure laborum
              harum ut quidem magni?
            </WorkAbout>
          </Work>
        </Worked>
      </Container>
    </Wrapper>
  );
}

export default WorkExperience;
