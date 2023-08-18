import React from 'react';
import HeaderIntroduce from './HeaderIntroduce';
import styled from '@emotion/styled';

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderIntroduce />
    </HeaderContainer>
  );
}

const HeaderContainer = styled('div')`
  margin: 1rem;
`;
