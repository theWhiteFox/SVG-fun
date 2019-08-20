import styled from 'styled-components';
import { Clickable } from '../../../../../styles';

export const FileStyle = props => `
  display: flex;
  align-items: center;
  height: ${props.theme.editorEntryHeight}px;
  padding-left: ${props.theme.editorEntryHorizontalPadding +
    props.theme.editorEntryIndentation}px;
  border-left: ${props.theme.editorEntryLeftBorderSize}px solid
    ${props.isActive ? props.theme.editorFileActiveColor : 'transparent'};
`;

export const FileEntry = styled(Clickable)`
  ${FileStyle}
  text-decoration: ${props => (props.isActive ? 'underline' : 'none')};
`;