import React from 'react'

interface ChipProps {
  label?: string;
  variant?: "primary" | "disabled" | "light";
  className?:string
  onClick?: () => void
}

export default function Chip({ label, variant = "light", className, onClick }: ChipProps) {
  
  const baseClass = "rounded-full border py-1 px-3 w-fit";

  const variantClass = {
    primary: "border-2 border-rk-primary-main text-rk-primary-main",
    disabled: "border-rk-neutral-40 text-rk-neutral-60 bg-rk-neutral-30",
    light: "border-rk-neutral-40 text-rk-neutral-90 bg-rk-neutral-10",
  };

  return (
    <div className={`${baseClass} ${variantClass[variant]} ${className}`} onClick={onClick}>
      {label}
    </div>
  );
}
