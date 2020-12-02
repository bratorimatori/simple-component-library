import styled from 'styled-components';
import { applyDefaultTheme } from '../../styles/theme';

export const Button = styled.button.attrs(applyDefaultTheme)`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;
