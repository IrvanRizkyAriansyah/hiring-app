import React from "react";
import image from "@/app/assets/img.jpg";

interface props {
  onClick?: ()=>void
}

export default function CardMenu({onClick}:props) {
  return (
    <div className="relative w-[325px] h-[168px] rounded-xl overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image.src})` }}
      ></div>

      <div className="absolute inset-0 bg-black/72"></div>

      <div className="relative z-10 p-6 flex flex-col gap-6 text-white">
        <div>
          <h2 className="text-[18px] leading-[28px] font-bold">
            Recruit the best candidates
          </h2>
          <h3 className="text-[14px] leading-[24px] font-rk-text-m-bold">
            Create jobs, invite, and hire with ease
          </h3>
        </div>
        <button className="btn bg-rk-primary-main text-white border-0 shadow-0" onClick={()=>onClick?.()}>
          Create a new job
        </button>
      </div>
    </div>
  );
}
