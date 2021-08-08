import sectionLanguages from './../../data/sections/languages';
import sectionEducation from './../../data/sections/education';

import Title from '../../ui/components/Title';

import { Wrapper, Container } from './styles';
import Boxes from '../../ui/components/Boxes';

function Studied() {
  const parsedLanguages = sectionLanguages.map((language) => ({
    ...language,
    title: language.name,
    subtitle: language.experience,
  }));
  const parsedEducation = sectionEducation.map((education) => ({
    ...education,
    title: education.course,
    subtitle: education.about,
  }));

  return (
    <>
      <Wrapper>
        <Container>
          <Title centered size="text-2xl" className="mb-6">
            Languages
          </Title>
          <Boxes items={parsedLanguages} gridColumns={2} />
        </Container>
      </Wrapper>

      <Wrapper className="pt-0">
        <Container>
          <Title
            detailColor="#19A6A5"
            centered
            size="text-2xl"
            className="mb-6"
          >
            Education
          </Title>
          <Boxes items={parsedEducation} gridColumns={1} />
        </Container>
      </Wrapper>
    </>
  );
}

export default Studied;
