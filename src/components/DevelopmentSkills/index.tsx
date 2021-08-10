import sectionDevelopmentSkills from './../../data/sections/developmentSkills';

import Title from '../../ui/components/Title';

import { Wrapper, Container, Skills, Skill } from './styles';

function DevelopmentSkills() {
  return (
    <Wrapper>
      <Container>
        <Title detailColor="#19A6A5" centered size="text-2xl" className="mb-6">
          Main Development Skills
        </Title>
        <Skills>
          {sectionDevelopmentSkills.map(
            (
              { empty, Icon, iconSize, iconViewBox, name, experience },
              index
            ) => {
              const [iconWidth, iconHeight] = iconSize || [80, 80];
              const [iconViewBoxWidth, iconViewBoxHeight] = iconViewBox || [
                80, 80,
              ];

              return !empty ? (
                <Skill key={index}>
                  <Icon
                    viewBox={`0 0 ${iconViewBoxWidth} ${iconViewBoxHeight}`}
                    width={iconWidth}
                    height={iconHeight}
                  />
                  <div className="popover">
                    <h6>{name}</h6>
                    <p>experience about {experience}</p>
                  </div>
                </Skill>
              ) : (
                <li key={index} />
              );
            }
          )}
        </Skills>
      </Container>
    </Wrapper>
  );
}

export default DevelopmentSkills;
