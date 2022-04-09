import Title from '../../ui/components/Title';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import { ReactComponent as IconLinkedIn } from './assets/icons/linkedin.svg';
import { ReactComponent as IconEnvelope } from './assets/icons/envelope-alt.svg';
import { ReactComponent as IconInstagram } from './assets/icons/instagram.svg';

import { Wrapper, Container, List, ListItem } from './styles';

function Contact() {
  return (
    <Wrapper>
      <Container>
        <Title centered className="mb-6">
          Contact Me
        </Title>

        <List>
          <ListItem>
            <a
              href="https://github.com/luan11"
              target="_blank"
              rel="noreferrer"
              title="Github"
            >
              <IconGithub />
            </a>
          </ListItem>
          <ListItem>
            <a
              href="https://instagram.com/luancode"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
            >
              <IconInstagram />
            </a>
          </ListItem>
          <ListItem>
            <a
              href="https://www.linkedin.com/in/luan-novais11/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <IconLinkedIn />
            </a>
          </ListItem>
          <ListItem>
            <a href="mailto:hello@luancode.dev.br" title="Email">
              <IconEnvelope />
            </a>
          </ListItem>
        </List>
      </Container>
    </Wrapper>
  );
}

export default Contact;
