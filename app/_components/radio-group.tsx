import React from "react";

interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value: string; // controlled must have value
  onChange: (value: string) => void;
  className?: string;
  label?:string
  required?:boolean
}

export default function RadioGroup({
  name,
  options,
  value,
  onChange,
  className = "",
  label,
  required
}: RadioGroupProps) {
  return (
    <div className="flex flex-col gap-2">
   <label className="text-rk-text-s">{label}{required && <span className="text-rk-danger-main">*</span>}</label> 
    <div className={`flex gap-4 ${className}`}>
      {options.map(({ label, value: val, disabled }) => (
        <label key={val} className="flex items-center cursor-pointer">
          <input
            type="radio"
            name={name}
            value={val}
            checked={value === val}
            disabled={disabled}
            onChange={() => onChange(val)}
            className="radio radio-sm"
          />
          <span className="ml-2 text-rk-text-m text-rk-neutral-90">{label}</span>
        </label>
      ))}
    </div>
    </div>
  );
}
