"use client";

import { useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";
import { useDomicile, DomicileOption } from "@/app/hooks/useDomicile";

interface Props {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
}

export default function DomicileSelect({
  label,
  placeholder = "Choose your domicile",
  value,
  onChange,
  required,
}: Props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { options, loading } = useDomicile();

  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));

  /** Sync value dari parent */
  useEffect(() => {
    if (value) setSearch(value);
  }, [value]);

  const filtered = options.filter((o) =>
    o.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full relative" ref={ref}>
      {label && (
        <label className="block text-rk-text-s mb-1">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* INPUT */}
      <div
        className="input w-full border-2 outline-0 rounded-lg flex items-center cursor-pointer bg-white"
        onClick={() => setOpen(true)}
      >
        <input
          type="text"
          placeholder={placeholder}
          className="flex-1 outline-none bg-transparent p-2"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
        />

        <svg
          className={`w-5 h-5 transition-transform mr-2 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute w-full mt-2 bg-white shadow-lg border border-rk-neutral-40 rounded-xl max-h-80 overflow-auto z-50">
          {loading ? (
            <p className="p-3 text-gray-500">Loading...</p>
          ) : filtered.length === 0 ? (
            <p className="p-3 text-gray-400">No results found.</p>
          ) : (
            filtered.map((item: DomicileOption) => (
              <div
                key={item.value}
                className="p-3 cursor-pointer hover:bg-gray-100 text-rk-text-m font-rk-text-m-bold"
                onClick={() => {
                  onChange?.(item.value);
                  setSearch(item.label);
                  setOpen(false);
                }}
              >
                {item.label}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
