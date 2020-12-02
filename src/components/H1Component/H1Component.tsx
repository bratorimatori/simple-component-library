import React from 'react';
import styled from 'styled-components';

export interface OwnProps {
  text: string;
}

export const H1Component = styled.h1<OwnProps>`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
