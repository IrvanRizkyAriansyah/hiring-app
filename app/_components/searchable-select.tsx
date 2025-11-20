import React, { useEffect, useRef, useState } from "react";

interface Option {
  value: string | number;
  label: string;
}

interface SearchableSelectProps {
  label?: string;
  options: Option[];
  placeholder?: string;
  required?: boolean;
  value?: string | number;
  onChange?: (value: string | number) => void;
}

export default function SearchableSelect({
  label,
  options,
  placeholder = "Select an option",
  required = false,
  value,
  onChange,
}: SearchableSelectProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const selectedLabel = options.find((o) => o.value === value)?.label;

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(search.toLowerCase())
  );

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fieldset" ref={ref}>
      {label && (
        <label>
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* Input wrapper */}
      <div
        className="border-2 rounded-lg w-full px-3 py-2 cursor-pointer flex items-center justify-between"
        onClick={() => setOpen(!open)}
      >
        <span className={value ? "text-black" : "text-gray-400"}>
          {selectedLabel || placeholder}
        </span>

        <svg
          className={`w-5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="border-2 mt-1 rounded-lg w-full bg-white shadow-md absolute z-50">
          {/* Search input */}
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 border-b outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />

          {/* Options */}
          <div className="max-h-48 overflow-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt) => (
                <div
                  key={opt.value}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    onChange?.(opt.value);
                    setOpen(false);
                    setSearch("");
                  }}
                >
                  {opt.label}
                </div>
              ))
            ) : (
              <div className="px-3 py-2 text-gray-400">No results</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
