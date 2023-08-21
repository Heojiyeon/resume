import styled from '@emotion/styled';
import React from 'react';

type SkllContentProp = {
  contents: (string | string[])[];
};

export default function SkillContent({ contents }: SkllContentProp) {
  return (
    <StyledUl>
      {contents.map((content, idx) => (
        <StyledLi key={idx}>{content} </StyledLi>
      ))}
    </StyledUl>
  );
}

const StyledUl = styled('ul')`
  padding: 0;
`;

const StyledLi = styled('li')`
  list-style: none;
`;
