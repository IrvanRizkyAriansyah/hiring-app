import React from "react";

interface TextInputProps {
    label?: string
    required?: boolean
    type?:string
    placeholder?:string
    value?:string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({label, required = false, type='text', placeholder='Type here', value, onChange}:TextInputProps) {
  return (
    <div>
      <fieldset className="fieldset">
        <label className="text-rk-neutral-90">{label}{required && <span className="text-rk-danger-main">*</span>}</label>
        <input value={value} type={type} className="input focus:outline-0 rounded-lg border-2 w-full h-10" placeholder={placeholder} onChange={onChange} />
      </fieldset>
    </div>
  );
}
