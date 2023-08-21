import React from 'react';

type ExperienceHeaderProp = {
  header: {
    title: string;
    period: string;
  };
};

export default function ExperienceHeader({ header }: ExperienceHeaderProp) {
  const { title, period } = header;
  return (
    <div>
      <h2>{title}</h2>
      <div>{period}</div>
    </div>
  );
}
