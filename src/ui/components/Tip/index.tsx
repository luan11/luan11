import { TIP_TYPES } from '../../../constants';

import { Container, Title, Text } from './styles';

type TipType = `INFO` | `SUCCESS` | `ERROR` | `WARNING`;

interface TipProps {
  title: string;
  text?: string;
  type?: TipType;
  onlyMobile?: boolean;
  width?: [string, string, string];
}

function Tip({ title, text, type, onlyMobile, width }: TipProps) {
  const defaultType = TIP_TYPES.INFO;

  return (
    <Container
      $type={type ?? defaultType}
      $onlyMobile={!!onlyMobile}
      $width={width ?? [`w-full`, `w-full`, `w-full`]}
    >
      <Title>{title}</Title>
      {text && <Text>{text}</Text>}
    </Container>
  );
}

export default Tip;
