import React from 'react'
import employeeLogo from '@/app/assets/employee.png'
import Image from 'next/image'
import { BanknotesIcon, MapPinIcon } from '@heroicons/react/24/outline'

interface CardJobAplicantProps {
    logo?:string | React.ReactNode
    title:string
    employee:string
    loc:string
    salary?: string;
    active?:boolean
}

export default function CardJobAplicant({logo, title, employee, loc, salary, active}:CardJobAplicantProps) {
  return (
    <div className={`bg-rk-neutral-10 border rounded-lg border-rk-neutral-40 py-3 px-4 flex flex-col gap-2 w-[384px] ${active&&'border-2 border-rk-primary-main bg-rk-primary-surface'}`}>
        <div className='flex items-center gap-4'>
            <Image src={employeeLogo} alt='employee logo' className='h-12 w-12 border-2 border-rk-neutral-40 rounded-lg' />
            <div>
                <h1 className='text-rk-text-l font-rk-text-l-bold'>{title}</h1>
                <h1 className='text-rk-text-m font-rk-text-m-regular text-rk-neutral-70'>{employee}</h1>
            </div>
        </div>
        <hr className='border border-rk-neutral-40 border-dashed'/>
        <div className='flex gap-2'>
            <MapPinIcon className='h-4 text-rk-neutral-80'/>
            <p className='text-rk-text-s text-rk-neutral-80'>{loc}</p>
        </div>
        <div className='flex gap-2'>
            <BanknotesIcon className='h-4 text-rk-neutral-80'/>
            <p className='text-rk-text-s text-rk-neutral-80'>{salary}</p>
        </div>
    </div>
  )
}
