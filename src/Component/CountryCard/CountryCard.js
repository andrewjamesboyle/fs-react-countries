import React from 'react';

export default function CountryCard({ name, iso2 }) {
  return (
    <div>
      <div>{name}</div>
      <img
        src={`"https://flagcdn.com/16x12/${iso2.toLowerCase()}.png"`}
        srcSet={`"https://flagcdn.com/32x24/${iso2.toLowerCase()}.png 2x,
        https://flagcdn.com/48x36/${iso2.toLowerCase()}.png 3x"`}
        width="16"
        height="12"
        alt={`${name}`}></img>
    </div>
  );
}
