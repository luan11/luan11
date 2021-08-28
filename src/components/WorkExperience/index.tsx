import Title from '../../ui/components/Title';
import { Wrapper, Container } from './styles';

function WorkExperience() {
  return (
    <Wrapper>
      <Container>
        <Title centered size="text-2xl" className="mb-6" color="text-white">
          Work Experience
        </Title>
      </Container>
    </Wrapper>
  );
}

export default WorkExperience;
