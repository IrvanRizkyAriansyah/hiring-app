import React from "react";

interface Option {
  value: string | number;
  label: string;
}

interface SelectBoxProps {
  label?: string;
  options: Option[];
  placeholder?: string;
  required?: boolean;
  value?: string | number;
  onChange?: (value: string) => void;
}

export default function SelectBox({
  label,
  options,
  placeholder = "Select an option",
  required = false,
  value,
  onChange,
}: SelectBoxProps) {
  return (
    <fieldset className="fieldset">
      {label && (
        <label>
          {label}
          {required && <span className="text-rk-danger-main">*</span>}
        </label>
      )}
      <select
        className="select border-2 rounded-lg w-full"
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </fieldset>
  );
}
