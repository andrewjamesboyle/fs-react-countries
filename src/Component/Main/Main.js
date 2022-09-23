import React from 'react';
import { useCountries } from '../../hooks/useCountries';
import CountryCard from '../CountryCard/CountryCard';
import Select from '../Select/Select';
import '../Main/Main.css';

export default function Main() {
  const { filterCountries, type, setType } = useCountries();
  return (
    <div>
      <Select options={type} changeHandler={setType} />
      <div className='countries'>
        {filterCountries().map((name) => (
          <CountryCard key={name.id} {...name} />
        ))}
      </div>
    </div>
  );
}
