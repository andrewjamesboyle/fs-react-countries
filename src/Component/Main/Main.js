import React from 'react';
import { useCountries } from '../../hooks/useCountries';
import CountryCard from '../CountryCard/CountryCard';

export default function Main() {
  const countries = useCountries();
  return (
    <div>
      {countries.map((country) => {
        return <CountryCard key={country.name} {...country} />;
      })}
    </div>
  );
}
