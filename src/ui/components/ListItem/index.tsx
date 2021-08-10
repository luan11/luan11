import { FunctionComponent, SVGProps } from 'react';
import Parser from 'html-react-parser';

import { Container } from './styles';

interface ListItemProps {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  iconSize?: [number, number];
  iconViewBox?: [number, number];
  content: string;
  url?: string;
  target?: string;
  highlightedText?: string;
}

function ListItem({
  Icon,
  iconSize,
  iconViewBox,
  content,
  url,
  target,
  highlightedText,
}: ListItemProps) {
  const [iconWidth, iconHeight] = iconSize || [16, 16];
  const [iconViewBoxWidth, iconViewBoxHeight] = iconViewBox || [16, 16];

  const highlightedTextRegExp =
    highlightedText && new RegExp(`(${highlightedText})`);
  const contentWithHighlightedText =
    highlightedTextRegExp &&
    `<span>${content.replace(
      highlightedTextRegExp,
      url ? ` <a href="${url}" target="${target || ''}">$1</a>` : ` <b>$1</b>`
    )}</span>`;
  const contentWithoutHighlightedText = url
    ? `<a href="${url}" target="${target || ''}">${content}</a>`
    : content;

  const renderContent = Parser(
    contentWithHighlightedText || contentWithoutHighlightedText
  );

  return (
    <Container>
      <Icon
        viewBox={`0 0 ${iconViewBoxWidth} ${iconViewBoxHeight}`}
        width={iconWidth}
        height={iconHeight}
      />
      {renderContent}
    </Container>
  );
}

export default ListItem;
