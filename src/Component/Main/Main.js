import React from 'react';
import { useCountries } from '../../hooks/useCountries';
import CountryCard from '../CountryCard/CountryCard';
import Filter from '../Filter/Filter';

export default function Main() {
  const { filterCountries } = useCountries();
  return (
    <div>
      <Filter />
      {filterCountries().map((name) => (
        <CountryCard key={name.id} {...name} />
      ))}
    </div>
  );
}
