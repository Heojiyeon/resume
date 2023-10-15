import styled from '@emotion/styled';
import React from 'react';

interface Roles {
  role: string[],
  result: string[]
}

type ProjectContentProp = {
  content: {
    description: string;
     roles: Roles[]; 
     cooperations: string[]; 
     stacks: string[]; 
     links: { 
      github: string; 
      review?: string | undefined; 
    };
  };
};

export default function ProjectContent({ content }: ProjectContentProp) {
  const { description, roles, stacks, links } =
    content;

  return (
    <div>
      <div>
        {description}
      </div>
      <StyledUl>
        {roles.map((currentRole, idx) => (
          <StyledUl key={roles.length + idx} style={{ fontWeight:'bold', marginBottom: '1rem'}}>{currentRole.role}
            {currentRole.result && currentRole.result.map(currentResult => (
              <li style={{fontWeight: 'normal', listStyle:"none",  marginTop: '0.2rem'}}>{currentResult}</li>
            ))}
          </StyledUl>
        ))}
      </StyledUl>
      <StyledUl>
        <StyledTitle>[사용 기술]</StyledTitle>
        {stacks.map((stack, idx) => (
          <StyledLi key={stacks.length + idx}> {stack}</StyledLi>
        ))}
      </StyledUl>
      <StyledUl>
        <StyledTitle>[관련 링크]</StyledTitle>
        <StyledLi>
          <a href={links.github}>Github</a>
        </StyledLi>
        {links.review && (
          <StyledLi>
            <a href={links.review}>회고</a>
          </StyledLi>
        )}
      </StyledUl>
    </div>
  );
}

const StyledTitle = styled('div')`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.4rem;
`

const StyledUl = styled('ul')`
  padding: 0;
  margin-top: 2rem;
`;

const StyledLi = styled('li')`
  list-style: none;
`;
