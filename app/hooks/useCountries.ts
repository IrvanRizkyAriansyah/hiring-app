"use client";

import { useEffect, useState } from "react";

export interface Country {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
}

export const useCountries = (search: string) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca2,idd,flags"
        );

        const data = await res.json();

        const mapped: Country[] = data.map((c: any) => ({
          name: c.name.common,
          code: c.cca2,
          dialCode:
            c.idd?.root
              ? `${c.idd.root}${c.idd.suffixes?.[0] ?? ""}`
              : "",
          flag: c.flags.png,
        }));

        const filtered =
          search.trim().length === 0
            ? mapped
            : mapped.filter((c) =>
                c.name.toLowerCase().includes(search.toLowerCase())
              );

        filtered.sort((a, b) => a.name.localeCompare(b.name));

        setCountries(filtered);
      } catch (err) {
        console.error("Fetch error:", err);
        setCountries([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, [search]);

  return { countries, loading };
};
