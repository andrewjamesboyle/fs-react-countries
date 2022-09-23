import React from 'react';
import './CountryCard.css';

export default function CountryCard({ name, iso2 }) {
  return (
    <div className='country-card'>
      <div>{name}</div>
      <img id='flags'
        src={`https://flagcdn.com/16x12/${iso2.toLowerCase()}.png`}
        srcSet={`https://flagcdn.com/32x24/${iso2.toLowerCase()}.png 2x,
        https://flagcdn.com/48x36/${iso2.toLowerCase()}.png 3x`}
        width="16"
        height="12"
        alt={`${name}`} />
    </div>
  );
}
