import headerContactList from './../../data/header/contactList';

import List from './../../ui/components/List';
import Title from './../../ui/components/Title';

import {
  Wrapper,
  Container,
  DataWrapper,
  Picture,
  Data,
  Name,
  Role,
  AboutWrapper,
} from './styles';

function Header() {
  return (
    <Wrapper>
      <Container>
        <DataWrapper>
          <Picture src="assets/images/me.png" alt="Luan Novais" />
          <Data>
            <Name>Luan Novais</Name>
            <Role>ReactJS Developer</Role>
            <List items={headerContactList} />
          </Data>
        </DataWrapper>
        <AboutWrapper>
          <Title>About me</Title>
          <p>
            I have a degree in Software Analysis and Development and I have
            experience in Web Development. I am always looking for new things
            about the development world and its ecosystem. Evolution never ends.
            🚀
          </p>
        </AboutWrapper>
      </Container>
    </Wrapper>
  );
}

export default Header;
