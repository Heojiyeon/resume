import React from 'react';

type ExperienceContentProp = {
  content: {
    description: string;
    links?: {
      title: string;
      link: string;
    };
  };
};

export default function ExperienceContent({ content }: ExperienceContentProp) {
  const { description, links } = content;

  return (
    <div>
      {description}
      <br />
      <br />
      <a href={links?.link}>{links?.title}</a>
    </div>
  );
}
