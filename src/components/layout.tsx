import styled from '@emotion/styled';
import '@fontsource/gothic-a1';
import React from 'react';

const Wrapper = styled('div')`
  border: 2px solid green;
  padding: 10px;
  font-family: 'Gothic A1, sans-serif';
`;

type LayoutProps = {
  children: React.ReactElement;
};

export default function Layout({ children }: LayoutProps) {
  return <Wrapper>{children}</Wrapper>;
}
