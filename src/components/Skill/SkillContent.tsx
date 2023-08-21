import React from 'react';

type SkllContentProp = {
  contents: string[];
};

export default function SkillContent({ contents }: SkllContentProp) {
  return (
    <ul>
      {contents.map((content, idx) => (
        <li key={idx}>{content}</li>
      ))}
    </ul>
  );
}
