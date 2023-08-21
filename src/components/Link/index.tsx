import React from 'react';
import { links } from '../../utils/LinkData';

export default function Link() {
  return (
    <div>
      <h1>Links</h1>
      {links.map(link => (
        <div key={link._id}>
          <a href={link.link}>{link.title}</a>
        </div>
      ))}
    </div>
  );
}
