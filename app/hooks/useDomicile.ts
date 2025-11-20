"use client";

import { useEffect, useState } from "react";

export interface DomicileOption {
  value: string;
  label: string;
}

export const useDomicile = () => {
  const [options, setOptions] = useState<DomicileOption[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const provinces = await fetch(
          "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
        ).then((r) => r.json());

        const all: DomicileOption[] = [];

        for (const prov of provinces) {
          const cities = await fetch(
            `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${prov.id}.json`
          ).then((r) => r.json());

          cities.forEach((city: any) =>
            all.push({
              value: `${city.name} - ${prov.name}`,
              label: `${city.name} - ${prov.name}`,
            })
          );
        }

        setOptions(all);
      } catch (e) {
        console.error("Failed to load domicile data:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { options, loading };
};
