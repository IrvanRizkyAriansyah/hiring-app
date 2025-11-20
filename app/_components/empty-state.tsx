import React from "react";
import empty from "@/app/assets/EmptyState.svg";
import Image from "next/image";

interface EmptyProps {
  title?: string;
  desc?: string;
  action?: React.ReactNode;
  image?: string
}

export default function EmptyState({ action, desc, title, image = empty }: EmptyProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 py-10 px-[104px]">

      {image && <Image src={image} alt="empty" />}
      <div className="flex flex-col gap-1 items-center justify-center">
      <h1 className="text-rk-heading-s font-rk-heading-s-bold">{title}</h1>
      <p className="text-rk-text-l font-rk-text-l-regular text-rk-neutral-90">{desc}</p>
      </div>
      {action && action}
    </div>
  );
}
