import React from "react";
import { logout } from "../actions/auth";

interface HeaderProps {
  component?: React.ReactNode;
}

export default function Header({ component }: HeaderProps) {
  return (
    <div className="w-full h-16 flex justify-between items-center p-6 border-b border-rk-neutral-40 fixed top-0 bg-rk-neutral-10 z-50">
      <div className="flex items-center gap-3 text-[18px] font-bold">
        {component}
      </div>

      {/* Dropdown Avatar */}
      <div className="dropdown dropdown-end cursor-pointer">
        <div tabIndex={0} role="button" className="avatar">
          <div className="w-10 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-lg border border-rk-neutral-30 mt-2"
        >
          <li>
            <button className="font-bold" onClick={logout}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
