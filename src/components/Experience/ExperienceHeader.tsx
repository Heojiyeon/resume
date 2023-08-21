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
      <h2 style={{ marginBottom: 0 }}>{title}</h2>
      <div>{period}</div>
      <br />
    </div>
  );
}
