import { ComponentType } from 'react';
import Parser from 'html-react-parser';

import { Container } from './styles';

interface ListItemProps {
  Icon: ComponentType;
  content: string;
  url?: string;
  target?: string;
  highlightedText?: string;
}

function ListItem({
  Icon,
  content,
  url,
  target,
  highlightedText,
}: ListItemProps) {
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
      <Icon />
      {renderContent}
    </Container>
  );
}

export default ListItem;
