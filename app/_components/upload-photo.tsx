"use client"
import { ArrowUpTrayIcon, ChevronRightIcon } from '@heroicons/react/16/solid'
import React, { useState } from 'react'
import Modal from './modal'
import step1 from '@/app/assets/OpenCamera1.svg'
import step2 from '@/app/assets/OpenCamera2.svg'
import step3 from '@/app/assets/OpenCamera3.svg'
import Image from 'next/image'

export default function UploadPhoto() {
    const [takePhoto, setTakePhoto] = useState(false)

  return (
    <>
    <div className='flex flex-col gap-2'>
        <label className='text-rk-text-s font-rk-text-s-bold'>Photo Profile</label>
        <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" className='h-32 w-32 rounded-full'/>
        <button className='btn rounded-lg w-fit py-1' onClick={()=>setTakePhoto(true)}>
            <ArrowUpTrayIcon className='h-4'/> Take a Picture
        </button>
    </div>

    <Modal title='Raise Your Hand to Capture' subtitle='We’ll take the photo once your hand pose is detected.' isOpen={takePhoto} onClose={()=>setTakePhoto(false)} classNames={{container: '!w-1/2'}}>
        <p className='text-rk-text-s font-rk-text-s-regular mb-6'>
            To take a picture, follow the hand poses in the order shown below. The system will automatically capture the image once the final pose is detected.
        </p>
        <div className='flex gap-2 items-center justify-center'>
            <Image src={step1} alt='step 1' />
            <ChevronRightIcon className='h-6'/>
            <Image src={step2} alt='step 2' />
            <ChevronRightIcon className='h-6'/>
            <Image src={step3} alt='step 3' />
        </div>
    </Modal>
    </>
  )
}
