import React from "react";

interface TextAreaProps {
    label?:string
  placeholder?: string
    required?:boolean
    onChange?: (e: any) => void;
    value?:string
}

export default function TextArea({label, placeholder, required=false, value, onChange}:TextAreaProps) {
  return (
    <div>
      <fieldset className="fieldset">
        <legend className="">{label}{required&&<span className="text-rk-danger-main">*</span>}</legend>
        <textarea className="textarea w-full border-2 rounded-lg" placeholder={placeholder} value={value} onChange={onChange}></textarea>
      </fieldset>
    </div>
  );
}
