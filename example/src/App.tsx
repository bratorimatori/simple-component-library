import React, { VFC } from 'react';
import styled from 'styled-components';

import { Test, Button } from './reactComponentLib';

const StyledDiv = styled.div`
  padding: 10px;
  background-color: blue;
  color: white;
`;

export const App: VFC = () => (
  <div>
    <Test text="Styled Component from React library" />
    <Button>Click me!</Button>
    <StyledDiv>Example App styled component</StyledDiv>
  </div>
);
