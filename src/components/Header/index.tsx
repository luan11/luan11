import headerContactList from './../../data/header/contactList';

import List from './../../ui/components/List';

import {
  Wrapper,
  Container,
  DataWrapper,
  Picture,
  Data,
  Name,
  Role,
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
      </Container>
    </Wrapper>
  );
}

export default Header;
