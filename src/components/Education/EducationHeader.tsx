import React from 'react';

type EducationHeaderProp = {
  header: {
    title: string;
    period: string;
  };
};

export default function EducationHeader({ header }: EducationHeaderProp) {
  const { title, period } = header;
  return (
    <div>
      <h2 style={{ marginBottom: 0 }}>{title}</h2>
      <div>{period}</div>
      <br />
    </div>
  );
}
