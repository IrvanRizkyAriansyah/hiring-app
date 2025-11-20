"use client"
import Layout from '@/app/_components/layout'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  const pageTitle =
    pathname === "/job-list/manage-job"
      ? (<div className='flex gap-1 items-center'>
        <button className='btn bg-rk-neutral-10 border border-rk-neutral-40 rounded-lg' onClick={()=>router.back()}>Job List</button>
        <ChevronRightIcon className='h-8'/>
        <button className='btn rounded-lg text-rk-neutral-100' disabled>Manage Candidate</button>
      </div>)
      : "Job List"

  return (
    <Layout component={pageTitle}>
        {children}
    </Layout>
  )
}
