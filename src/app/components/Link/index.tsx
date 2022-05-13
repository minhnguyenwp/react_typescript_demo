import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Link = styled<typeof RouterLink>(props => (
  <RouterLink {...props} />
))`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }
`;
