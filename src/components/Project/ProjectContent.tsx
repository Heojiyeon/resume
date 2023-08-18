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
        [설명] <br />
        {description}
      </div>
      <div>
        [목표] <br /> {goal}
      </div>
      <ul>
        [담당 역할]
        {roles.map((role, idx) => (
          <li key={roles.length + idx}>{role}</li>
        ))}
      </ul>
      <ul>
        [성과 및 배운점]
        {results.map((result, idx) => (
          <li key={results.length + idx}>{result}</li>
        ))}
      </ul>
      <ul>
        [협업]
        {cooperations.map((cooperation, idx) => (
          <li key={cooperations.length + idx}>{cooperation}</li>
        ))}
      </ul>
      <ul>
        [사용 기술]
        {stacks.map((stack, idx) => (
          <li key={stacks.length + idx}> {stack}</li>
        ))}
      </ul>
      <ul>
        [관련 링크]
        <li>
          <a href={links.github}>Github</a>
        </li>
        {links.review && (
          <li>
            <a href={links.review}>회고</a>
          </li>
        )}
      </ul>
    </div>
  );
}
