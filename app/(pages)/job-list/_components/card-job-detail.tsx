import Image from "next/image";
import employeeLogo from "@/app/assets/employee.png";
import React from "react";
import Chip from "@/app/_components/chip";

interface CardJobDetailProps {
  logo?: string | React.ReactNode;
  title: string;
  employee: string;
  loc: string;
  salaryFrom?: string;
  salaryTo?: string;
  active?: boolean;
  desc?: string;
  type?: string;
  onApply: ()=>void
}

export default function CardJobDetail({
  logo,
  title,
  employee,
  loc,
  desc,
  type,
  onApply
}: CardJobDetailProps) {
  return (
    <div className="border rounded-lg border-rk-neutral-40 p-6 flex flex-col gap-6">
      <div className="flex justify-between">
        <div className="flex gap-6">
          <Image
            src={employeeLogo}
            alt="employee logo"
            className="h-12 w-12 border-2 border-rk-neutral-40 rounded-lg"
          />
          <div className="flex flex-col gap-1">
            <Chip
              className="border-0 bg-rk-primary-main text-white font-bold rounded-lg"
              label={type}
            />
            <h1 className="text-[18px] leading-[28px] font-bold">{title}</h1>
            <h1 className="text-rk-text-m font-rk-text-m-regular text-rk-neutral-70">
              {employee}
            </h1>
          </div>
        </div>
        <div>
          <button onClick={onApply} className="btn bg-rk-secondary-main border-0 rounded-lg text-rk-neutral-90 font-bold cursor-pointer">
            Apply
          </button>
        </div>
      </div>
      <hr className="border-t-2 border-rk-neutral-40" />
      <p className="text-rk-text-m font-rk-text-m-regular text-rk-neutral-90">{desc}</p>
    </div>
  );
}
