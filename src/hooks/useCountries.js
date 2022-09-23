import { fetchCountries } from '../services/client';
import { useEffect, useState } from 'react';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [type, setType] = useState('all');

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchCountries(setType);
        setCountries(data);
      } catch (e) {
      // eslint-disable-next-line no-console
        console.error(e);
      }}
    fetchData();
  }, [setType]);

  const filterCountries = () => {
    if (type === 'all') return countries;
    return countries.filter((country) => country.continent === type);
  };

  return { filterCountries, type, setType };
}