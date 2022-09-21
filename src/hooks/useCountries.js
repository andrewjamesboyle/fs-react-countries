import { fetchCountries } from '../services/client';
import { useEffect, useState } from 'react';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [type, setType] = useState('all');
  useEffect(() => {
    async function fetchData() {
      const data = await fetchCountries();
      setCountries(data);
    }
    fetchData();
  }, []);

  const filterCountries = () => {
    if (type === 'all') return countries;
    return countries.filter((country) => country.continent === type);
  };

  return { filterCountries, type, setType };
}