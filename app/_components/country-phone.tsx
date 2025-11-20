"use client";

import { useEffect, useRef, useState } from "react";
import { useCountries, Country } from "@/app/hooks/useCountries";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useClickAway } from "react-use";

interface Props {
  value: string;
  onChange: (phone: string) => void;
  label?: string;
  required?: boolean;
}

export default function CountryPhoneInput({
  value,
  onChange,
  label,
  required,
}: Props) {
  const [selected, setSelected] = useState<Country | null>(null);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { countries, loading } = useCountries(search);

  // 🔹 Ref untuk dropdown agar bisa ditutup saat click outside
  const dropdownRef = useRef(null);

  useClickAway(dropdownRef, () => {
    if (open) setOpen(false);
  });

  const handleSelect = (c: Country) => {
    setSelected(c);
    onChange("");
    setOpen(false);
  };

  useEffect(() => {
    if (!selected && countries.length > 0) {
      const indo = countries.find((c) => c.code === "ID");
      if (indo) {
        setSelected(indo);
        onChange("");
      }
    }
  }, [countries, selected]);

  return (
    <div className="w-full relative" ref={dropdownRef}>
      <label className="text-rk-text-s">
        {label}
        {required && <span className="text-rk-danger-main">*</span>}
      </label>

      <div className="input outline-0 border-2 w-full rounded-lg flex items-center gap-3 cursor-pointer bg-white">
        <div
          onClick={() => setOpen(!open)}
          className="border-r-2 border-rk-neutral-40 pr-3"
        >
          <div className="flex gap-2">
            {selected ? (
              <img src={selected.flag} alt="" className="w-6 h-4 rounded" />
            ) : (
              <div className="w-6 h-4 bg-gray-200 rounded" />
            )}
            <ChevronDownIcon className="w-4" />
          </div>
        </div>

        <span className="font-medium">
          {selected ? selected.dialCode : "+??"}
        </span>

        <input
          disabled={!selected}
          type="number"
          placeholder="81XXXXXXXXX"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 outline-none bg-transparent"
        />
      </div>

      {open && (
        <div className="absolute z-50 mt-2 p-4 w-full shadow-xl bg-white rounded-xl">
          <div className="input border-2 outline-0 w-full mb-3 rounded-lg flex items-center gap-2 px-2">
            <MagnifyingGlassIcon className="h-4" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 outline-none bg-transparent"
            />
          </div>

          <div className="max-h-80 overflow-auto">
            {loading ? (
              <p className="text-center py-3">Loading...</p>
            ) : (
              countries.map((c) => (
                <div
                  key={c.code}
                  className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelect(c)}
                >
                  <div className="flex items-center gap-3">
                    <img src={c.flag} alt="" className="w-6 h-4 rounded" />
                    <span>{c.name}</span>
                  </div>

                  <span className="text-gray-600">{c.dialCode}</span>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
