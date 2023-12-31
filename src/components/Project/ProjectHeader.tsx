import React from 'react';

type ProjectHeaderProp = {
  header: {
    title: string;
    period: string;
  };
};

export default function ProjectHeader({ header }: ProjectHeaderProp) {
  const { title } = header;

  return (
    <div>
      <h2 style={{ marginBottom: 0 }}>{title}</h2>
    </div>
  );
}
