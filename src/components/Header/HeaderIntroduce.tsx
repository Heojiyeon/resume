import React from 'react';
import { HeaderIntroduces, HeaderTitle } from '../../utils/headerData';

export default function HeaderIntroduce() {
  return (
    <div>
      <h2>{HeaderTitle}</h2>
      <div>
        {HeaderIntroduces.map(introduce => (
          <div key={introduce._id}>
            <strong>{introduce.subheading}</strong>
            <div>{introduce.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
