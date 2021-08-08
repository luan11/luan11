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
          <Picture
            src="https://via.placeholder.com/1000x500"
            alt="Luan Novais"
          />
          <Data>
            <Name>Luan Novais</Name>
            <Role>ReactJS Developer</Role>
            <List items={headerContactList} />
          </Data>
        </DataWrapper>
        <AboutWrapper>
          <Title>About me</Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AboutWrapper>
      </Container>
    </Wrapper>
  );
}

export default Header;
