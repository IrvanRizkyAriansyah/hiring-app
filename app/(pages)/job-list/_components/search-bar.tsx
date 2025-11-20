import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import React from 'react';

export default function SearchBar() {
  return (
    <div className="relative w-full">
      <input
        type="search"
        placeholder="Search by job details"
        className="w-full rounded-lg border-2 border-[#EDEDED] py-2 pl-3 pr-10 focus:border-rk-primary-main focus:outline-none"
      />
      <MagnifyingGlassIcon className="h-6 w-6 text-rk-primary-main absolute right-3 top-1/2 -translate-y-1/2" />
    </div>
  );
}
