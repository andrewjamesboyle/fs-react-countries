import { fetchCountries } from '../services/client';
import { useEffect, useState } from 'react';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchCountries();
      setCountries(data);
    }
    fetchData();
  }, []);
  return countries;
}