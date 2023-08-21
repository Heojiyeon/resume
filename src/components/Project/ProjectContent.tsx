import styled from '@emotion/styled';
import React from 'react';

type ProjectContentProp = {
  content: {
    description: string;
    goal: string;
    roles: string[];
    results: string[];
    cooperations: string[];
    stacks: string[];
    links: {
      github: string;
      review?: string;
    };
  };
};

export default function ProjectContent({ content }: ProjectContentProp) {
  const { description, goal, roles, results, cooperations, stacks, links } =
    content;

  return (
    <div>
      <div>
        <strong>[설명]</strong>
        <br />
        {description}
      </div>
      <br />
      <div>
        <strong>[목표]</strong>
        <br /> {goal}
      </div>
      <StyledUl>
        <strong>[담당 역할]</strong>
        {roles.map((role, idx) => (
          <StyledLi key={roles.length + idx}>{role}</StyledLi>
        ))}
      </StyledUl>
      <StyledUl>
        <strong>[성과 및 배운점]</strong>
        {results.map((result, idx) => (
          <StyledLi key={results.length + idx}>{result}</StyledLi>
        ))}
      </StyledUl>
      <StyledUl>
        <strong>[협업]</strong>
        {cooperations.map((cooperation, idx) => (
          <StyledLi key={cooperations.length + idx}>{cooperation}</StyledLi>
        ))}
      </StyledUl>
      <StyledUl>
        <strong>[사용 기술]</strong>
        {stacks.map((stack, idx) => (
          <StyledLi key={stacks.length + idx}> {stack}</StyledLi>
        ))}
      </StyledUl>
      <StyledUl>
        <strong>[관련 링크]</strong>
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

const StyledUl = styled('ul')`
  padding: 0;
`;

const StyledLi = styled('li')`
  list-style: none;
`;
